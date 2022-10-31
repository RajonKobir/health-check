import React from 'react';

import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'

class DiagramComponent extends React.Component {
  render() {

    const demo = this.props.data;
    // const propData = JSON.parse(demo);

    const data = [
        {
          data: {
            feelings_of_happiness: demo.feelings_of_happiness/10,
            ability_to_regenerate: demo.ability_to_regenerate/10,
            resilience: demo.resilience/10,
            emotional_stability: demo.emotional_stability/10,
            basic_trust_or_foundation: demo.basic_trust_or_foundation/10,
            inner_strength: demo.inner_strength/10,
          },
          // meta: { color: 'blue' }
          meta: { "color": "#edc951" }
          
        },
        // {
        //   data: {
        //     feelings_of_happiness: 0.6,
        //     ability_to_regenerate: .85,
        //     resilience: 0.5,
        //     emotional_stability: 0.6,
        //     basic_trust_or_foundation: 0.7,
        //     inner_strength: 0.7,
        //   },
        //   meta: { color: 'red' }
        // }
      ];
  
  const captions = {
        // columns
        feelings_of_happiness: 'Feelings of happiness',
        ability_to_regenerate: 'Ability to regenerate',
        resilience: 'Resilience',
        emotional_stability: 'Emotional stability',
        basic_trust_or_foundation: 'Basic trust/foundation',
        inner_strength: 'Inner strength',
      };

      const options = {
        size: 200,
        axes: true, // show axes?
        scales: 7, // show scale circles?
        captions: true, // show captions?
        captionMargin: 10,
        dots: true, // show dots?
        zoomDistance: 1.2, // where on the axes are the captions?
        setViewBox: (options) => `-${options.captionMargin} 0 ${options.size + options.captionMargin * 2} ${options.size}`, // custom viewBox ?
        // smoothing: noSmoothing, // shape smoothing function
        axisProps: () => ({ className: 'axis' }),
        scaleProps: () => ({ className: 'scale', fill: 'none' }),
        shapeProps: () => ({ className: 'shape' }),
        captionProps: () => ({
          className: 'caption',
          textAnchor: 'middle',
          fontSize: 10,
          fontFamily: 'sans-serif'
        }),
        dotProps: () => ({
          className: 'dot',
          mouseEnter: (dot) => { console.log(dot) },
          mouseLeave: (dot) => { console.log(dot) }
        }),
        rotation: 0,
        wrapCaptionAt: 25,
        captionLineHeight: 20,
      };

    return (
      <div>
            <RadarChart
                captions={captions}
                data={data}
                size={500}
                options= {options}
            />
            <br></br>
            <br></br>
            {/* <a href="/">Refersh</a> */}
            {/* <h1>Hello, {demo.feelings_of_happiness}</h1> */}
        </div>
    );
  }
}

export default DiagramComponent;