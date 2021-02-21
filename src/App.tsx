import React from 'react';
import echarts from 'echarts';
import Chart from './Chart';
import line from "./charts/line"
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <div style={{ width: "50%", height: 300 }}>
        <Chart />
      </div>
    </div>
  );
}

export default App;
