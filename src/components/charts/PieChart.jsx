import React, { useEffect, useState, useRef } from "react";
import * as d3 from "d3";
import styles from "./PieChart.module.css"
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { dataSlice } from "../../store/reducers/DataSlice";
import { COLORS } from "../../store/constants";

const PieChart = () => {
  const {data: csv, categories, parameter, dateRange} = useAppSelector(state => state.dataReducer)
  const [pieData, setPieData] = useState([])
  const [isShown, setIsShown] = useState(false);
  const [category, setCategory] = useState({title: "", value: 0})
  const dispatch = useAppDispatch();
  const svgRef = useRef();

  useEffect(() => {
    if (csv.length === 0) return

    const initialPieData = categories.all.map(category => {
      return {property: category, value: 0}
    })

    setPieData(csv.reduce((result, row) => {
      return result.map((resultObj) => {
        const {property, value} = resultObj
        
        const week = row.week_ref
        const isInDateRange = week > dateRange.filter.at(0) && week < dateRange.filter.at(-1)

        if (property === row.category_desc && isInDateRange) {
          resultObj.value = value + Number(row[parameter])
        }

        return resultObj
      })
    }, initialPieData))

  }, [csv, parameter, categories.all, dateRange.filter])

  useEffect(() => {
    const w = 500;
    const h = 500;
    const radius = w / 2;
    const svg = d3
      .select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
      .style("overflow", "visible")
      .style("margin", "250px 0 0 250px")


    const formattedData = d3.pie().value((d) => d.value)(pieData);
    const arcGenerator = d3.arc().innerRadius(0).outerRadius(radius)
    const color = d3.scaleOrdinal().range(COLORS)
    
  
    svg.selectAll()
      .data(formattedData)
      .join('path')
        .attr("d", arcGenerator)
        .attr("fill", d => color(d.value))
        .attr("data-text", d => d.data.property)
        .attr("data-value", d => d.data.value)

  }, [pieData]);

  
  useEffect(() => {
    if (!svgRef.current.children) return
    for (const child of svgRef.current.children) {
      const isChecked = categories.filter.includes(child.dataset.text)
      child.style.filter = `grayscale(${isChecked ? "0" : "100%"})`;
    }
  }, [pieData, categories])

  const handleToggle = (event) => {
    const value = event.target.dataset.text
    dispatch(dataSlice.actions.setCategories(value));
  };

  const hoverHendler = (event) => {
    setCategory({
      title: event.target.dataset.text,
      value: Number(event.target.dataset.value).toFixed(4)
    })
    setIsShown(true)
  }

  return (
    <div className = {styles.container}>
      <div className = {styles.block}>
        <span className = {styles.text}>Parameter: {parameter}</span>
        {isShown && 
          <span className = {styles.text}>
            {category.title}: {category.value}
          </span>
      }
      </div>
      <svg 
        ref={svgRef} 
        className = {styles.svg} 
        onClick = {handleToggle} 
        key = {parameter} 
        onMouseOver={hoverHendler}
        onMouseLeave={() => setIsShown(false)}>
      </svg>
      <span className = {styles.dateRange}>Date range from {dateRange.filter.at(0)} to {dateRange.filter.at(-1)} weeks</span>
    </div>
  );
};

export default PieChart;
