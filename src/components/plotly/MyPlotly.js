
// import React from 'react';
import React, { useState, useEffect } from 'react';
// import * as tf from "@tensorflow/tfjs";
// import Plot from 'react-plotly.js';
import {NetDraws} from './matrixSpaceManipulation/net_draws'
import createPlotlyComponent from 'react-plotly.js/factory';
const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);



/**
 * Main application component
 *
 * @returns
 */
function MyPlotly() {
  const [array, setArray] = useState([])
    
  // const x_parallel = 
  // console.log(x_parallel)
  // console.log(Promise.resolve(x_parallel.then(res=>{
  //   console.log('res')
  //   console.log(res)
  // })))
  // function update()
  // {
  //   let a =matrix( [[1, 2], [3, 4]])
  //   let e =matrix( [[1, 4], [3, 4]])
  //   let t = multiply(a,e)
  //   setArray(t)

  // }

  useEffect(() => {
      NetDraws().then(res=>setArray(res))
      console.log('start')


      return () => {
        console.log('terminate')
      }
    }, [])
  //       useEffect(() => {
  //         if(Array.isArray(array)){}
  //         else{
  //           console.log(array._data)
  //           if(Array.isArray(array._data)){ console.log('%c It isssssssss ','color: plum')}
  //         }


  //         // debugger;
  //         console.log('rerender')
  //       }, )


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
    },
    {
      x:array[0],
      y: array[1],
      z: array[2],
      type: 'scatter3d',
      mode: 'lines',
     

      showlegend:true,
      name:'space',
      line:{
          color:[ '#8e16a0'],
          width:5
      }
    }]
  }

  return (
    
     <Plot className=''
      data={Ttraces()}
      layout={
        {
 
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

