import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss'
import Homepage from './pages/Homepage'
// import { div } from 'prelude-ls';

ReactDOM.render(
  
    <div>
     <Homepage visitor='fullstack' />
     
    </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals