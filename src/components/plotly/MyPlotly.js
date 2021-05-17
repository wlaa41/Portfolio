import React, { useState, useEffect } from 'react';
import {NetDraws} from './matrixSpaceManipulation/net_draws'
import createPlotlyComponent from 'react-plotly.js/factory';
const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);


function MyPlotly({mulMatrix,bgcolor="#eeeeee"}) {
  const [spaceGrid, setSpaceGrid] = useState([])

  useEffect(() => {
      NetDraws(mulMatrix).then(res=>setSpaceGrid(res))
      return () => {
      }
    },[mulMatrix])

  const xyzAxis = () => {
    
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
           width:2.5
      }
    },
    {
      x:spaceGrid[0],
      y: spaceGrid[1],
      z: spaceGrid[2],
      type: 'scatter3d',
      mode: 'lines',
      showlegend:true,
      name:'space',
      font: {
        family: 'Lato, monospace',
        size: 14,
        color: '#7f00aa'},
      line:{
          color: '#aaaaaa' ,
          width:3
      }
    }]
  }

  return (
     <Plot className=''
      data={xyzAxis()}
      layout={
        {
        font: {
          family: 'Lato, monospace',
          size: 14,
          color: '#7f7f7f'
        },
        // plot_bgcolor:"white",
        paper_bgcolor: bgcolor,
        title: `Matrix Space Manipulation`,
        autosize: true
      }}
      useResizeHandler= {true}
      style={ {width: "100%", height: "100%"}}

    /> 
  );
}

export default MyPlotly;

