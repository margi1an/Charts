import React, { useState } from 'react';
import ReactApexChart from "react-apexcharts";

function ApexChart(){
  const [chartData , setChatData] = useState(
   { series: [{
      data: [10,8,3,1]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          borderRadiusApplication: 'end',
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['Html', 'Css', 'Javascript','null'         ],
      }
    }}
  )
  return (
    <div className='mt-9'>
      <div id="chart">
        <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}


  export default ApexChart