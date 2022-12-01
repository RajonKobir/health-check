import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

class DiagramComponent extends React.Component {

  render() {
    const demo = this.props.data.data;
    // console.log(demo.basic_trust_or_foundation);

const data = {
  labels: [
    'Feelings of happiness',
    'Ability to regenerate',
    'Resilience',
    'Emotional stability',
    'Basic trust/foundation',
    'Inner strength',
  ],

  
  datasets: [
    {
      label: 'Health Result',
      data: [
        demo.feelings_of_happiness,
        demo.ability_to_regenerate,
        demo.resilience,
        demo.emotional_stability,
        demo.basic_trust_or_foundation,
        demo.inner_strength,
      ],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
      r: {
          suggestedMin: 0,
          suggestedMax: 10
      }
  },
  maintainAspectRatio: false,
  fill: false,
};


  return (
    <div  style={{ textAlign:'center' }}>
      
      <Radar 
      data={data} 
      // width={300}
      height={500}
      options={options} 
      />

    </div>
  )
  
}
}

export default DiagramComponent;