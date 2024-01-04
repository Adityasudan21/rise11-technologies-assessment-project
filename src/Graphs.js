import React from 'react'
import "./Graphs.css";
import { Chart as ChartJS } from "chart.js/auto";
import { Line,Bar } from "react-chartjs-2";
function Graphs() {
  return (
    <div className='graphsline1'>
      <div className='graph1'>
        <p>Revenue</p>
        <Line data={
          {
            labels: ["Jan", "Feb", "Mar","Apr","May","June"],
            datasets: [
              {
                label: "Course Sale",
                data: [0,200,500, 400,200, 800],
              },
              {
                label:"Course Visit",
                data:[30,300,200,500,400,560],
              }
            ],
          }
        } />
      </div>
      <div className="graph2">
      <Bar data={
          {
            labels: ["Mon", "Tue", "Wed","Thr","fri","Sat","Sun"],
            datasets: [
              {
                label: "visistors",
                data: [80,40,50, 35,24,30,30],
              }
            ],
          }
        } />
      </div>
    </div>
  )
}

export default Graphs