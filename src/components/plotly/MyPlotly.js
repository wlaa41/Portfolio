
// import React from 'react';
import React, { useState, useEffect } from 'react';
// import Plot from 'react-plotly.js';
import createPlotlyComponent from 'react-plotly.js/factory';
const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);

// import {NetDraws} from './matrixSpaceManipulation/net_draws'


// function randomValues(num, mul) {
//   const arr = [];
//   const index = [];
//   for (let i = 0; i < num; i++) {
//     arr.push(Math.random() * mul)
//     index.push(i);
//   }
//   return {index, arr};
// }

/**
 * Main application component
 *
 * @returns
 */
function MyPlotly() {
//  NetDraws();
  // const traces = Array(3).fill(0).map((_, i) => {
  //   const {index, arr} = randomValues(20, 3);
  //   return {
  //     x: Array(20).fill(i),
  //     y: index,
  //     z: arr,
  //     type: 'scatter3d',
  //     mode: 'lines'
  //   }
  // });

  const Ttraces = () => {
    
    return [{
      x:[4, -4, null, 0, 0, null, 0,     0],
      y: [0,    0, null, 4, -4, null, 0,     0],
      z: [0,    0, null, 0, 0, null, 4, -4],
      type: 'scatter3d',
      mode: 'lines',
     

      showlegend:true,
      name:'xyz',
      line:{
          color:['#8ee600', '#8ee600',
                 'white', '#b3005c', '#b3005c', 'white', '#0079ad', '#0079ad'],
           width:5
      }
    }]
  }

  // console.log(traces)
  // console.log(Ttraces)

  return (
    // <div>Hello hello hello hello hello hello</div>
     <Plot
      data={Ttraces()}
      layout={
        {
        // width: 900,
        // height: 800,
        // xaxis:{
        //   showgrid: true,

        //   backgroundcolor :"black",
        //   gridcolor: '#000000',
        //   linecolor: '#000000',
        //   tickcolor: '#7f7f7f'

        // },
        font: {
          family: 'Lato, monospace',
          size: 14,
          color: '#7f7f7f'
        },
        plot_bgcolor:"black",
      paper_bgcolor:"#000000",
        title: `Matrix Space Manipulation`,
        autosize: true
      }}
      useResizeHandler= {true}
      style={ {width: "100%", height: "100%"}}

    /> 
  );
}

export default MyPlotly;

  // {/* <Plot
  //     data={Ttraces()}
  //     layout={
  //       {
  //       // width: 900,
  //       // height: 800,
  //       xaxis:{
  //         backgroundcolor :"black"
  //       },
  //       plot_bgcolor:"black",
  //     paper_bgcolor:"#ffffff",
  //       title: `Simple 3D Scatter`,
  //       autosize: true
  //     }}
  //     useResizeHandler= {true}
  //     style={ {width: "100%", height: "100%"}}

  //   /> */}