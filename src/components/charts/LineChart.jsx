import React, {useEffect, useRef} from 'react'
import * as d3 from 'd3'
import styles from './Charts.module.css'
import { useAppSelector } from '../../hooks/redux'
import ChangeDateRange from '../dateRange/ChangeDateRange'

const LineChart = ({categoriesInDate}) => {
  const {parameter, dateRange} = useAppSelector(state => state.dataReducer)
  const svgRef = useRef()

  useEffect(() => {
    if (Object.keys(categoriesInDate).length === 0) return
    const data = Object.entries(categoriesInDate).reduce((result, [date, categories]) => {
      result[date] = Number(Object.values(categories).reduce((sum, value) => sum + value, 0).toFixed(2))
      return result
    }, {})

    const maxValue = Math.max(...Object.values(data))
    const maxDate = Math.max(...Object.keys(data))
    const minDate = Math.min(...Object.keys(data))
  
    const w = 500
    const h = 500
    const svg = d3.select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
      .style('background', '#fff')
      .style('overflow', "visible")
      
    const xScale = d3.scaleLinear()
      .domain([minDate, maxDate])
      .range([0, w])
    
    const yScale = d3.scaleLinear()
      .domain([0, maxValue])
      .range([h, 0])

    const generateScaledLine = d3.line()
      .x((d, i) => xScale(Number(Object.keys(data)[i])))
      .y(d => yScale(d))
      .curve(d3.curveCardinal)

    const xAxis = d3.axisBottom(xScale)
      .ticks(Object.values(data).length)
      .tickFormat(i => i)

    const yAxis = d3.axisLeft(yScale)
      .ticks(20)
    
    svg.append('g')
      .call(xAxis)
      .attr('transform', `translate(0, ${h})`)

    svg.append('g')
      .call(yAxis)

    svg.selectAll('.line')
      .data([Object.values(data)])
      .join('path')
        .attr("d", d => generateScaledLine(d))
        .attr('fill', 'none')
        .attr('stroke', 'black')

  }, [categoriesInDate])



  return (
    <div className = {styles.container}>
      <div className = {styles.block}>
        <span className = {styles.text}>Parameter: {parameter}</span>
      </div>
      <svg 
        ref = {svgRef} 
        className = {styles.svg} 
        key = {parameter + dateRange.filter.at(0) + dateRange.filter.at(-1)} >
      </svg>
      <div className = {styles.dateRange}>
        <span>Date range from {dateRange.filter.at(0)} to {dateRange.filter.at(-1)} weeks</span>
        <ChangeDateRange/>
      </div>
    </div>
  )
}

export default LineChart