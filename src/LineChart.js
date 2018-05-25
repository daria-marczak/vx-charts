import React from "react";
import { Bar } from "@vx/shape";
import { AxisLeft, AxisBottom } from "@vx/axis";
import { GradientOrangeRed } from "@vx/gradient";
import { Group } from "@vx/group";
import { browserUsage, genDateValue, appleStock } from '@vx/mock-data';
import { scaleTime, scaleLinear } from "@vx/scale";
import { extent, max } from "d3-array";
import AreaClosed from "@vx/shape/build/shapes/AreaClosed";
import LinearGradient from "@vx/gradient/build/gradients/LinearGradient";

const data = appleStock;
console.log(data);
const width = 750;
const height = 400;
const margin = {
  top: 60,
  bottom: 60,
  left: 80,
  right: 80,
};
const xMax = width - margin.left - margin.right;
const yMax = height - margin.top - margin.bottom;

const x = d => new Date(d.date);
const y = d => d.close;

data.map(y);

const xScale = scaleTime({
  range: [0, xMax],
  domain: extent(data, x)
});

const yScale = scaleLinear({
  range: [yMax, 0],
  domain: [0, max(data, y)],
});

const LineChart = () => { 
    return (
      <svg width={width} height={height}>
       <LinearGradient
          from="#a18cd1"
          to="#fad0c4"
          id="gradient"
        />
        <Group top={margin.top} left={margin.left}>
        
          <AxisBottom 
            scale={xScale}
            top={yMax}
            label={"Years"}
            stroke={"#1b1a1e"}
          />
         
          <AxisLeft
            scale={yScale}
            top={0}
            left={0}
            label={"Close Price (USD dollars)"}
            stroke={"#1b1a1e"}
          />
          <AreaClosed
            data={data}
            xScale={xScale}
            yScale={yScale}
            x={x}
            y={y}
            fill={"url(#gradient)"}
            stroke={""}
          />
        </Group>
      </svg>

    )
}

export default LineChart;