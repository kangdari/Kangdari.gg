import React from 'react';
import { Bar } from 'react-chartjs-2';
import Theme from '../../../styles/Theme';

const options = {
    legend: {
        display: false, // label 숨기기
    },
    scales: {
        yAxes: [{
            ticks: { 
                min: 0, 
                stepSize: 1,
            }
        }]
    },
    maintainAspectRatio: false // 사이즈 사용자 정의를 위해서 false로 설정
}


const Graph = ({ rankArr }) => {

    let calculatedArr = [0,0,0,0,0,0,0,0]
    rankArr.forEach(item => calculatedArr[item-1]++) // 1~8 등 횟수 배열화

    const data = {
        labels: ['#1', '#2', '#3', '#4', '#5', '#6', '#7' , '#8'],
        datasets: [
          {
            backgroundColor: Theme["rankColor2"],
            borderColor: Theme["rankColor2"],
            borderWidth: 1,
            hoverBackgroundColor: Theme["rankColor2"],
            hoverBorderColor: Theme["rankColor2"],
            data: calculatedArr,
          }
        ]
      }; 

    return (
            <Bar 
                data={data}
                width={300}
                height={200}
                options={options}
            />
    );
};

export default Graph;