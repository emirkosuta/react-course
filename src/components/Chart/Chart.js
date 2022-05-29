import React from 'react';

import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
  const maxValue = props.dataPoints.reduce((prev, current) => {
    if (prev > current.value) return prev;
    return current.value;
  }, 0);

  console.log(maxValue);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
        />
      ))}
    </div>
  );
};

export default Chart;
