import React from "react";
import LineChart from "./LineChart";
import PieChart from "react-minimal-pie-chart";
import DonutChart from "react-donut-chart";

const App = () => {
  return (
    <React.Fragment>
      <LineChart />
      <PieChart 
        data={[
          { value: 10, color: "#E38627"},
          { value: 15, color: "#C13C27"},
          { value: 20, color: "#6A2135"},
        ]}
      />
      <DonutChart
        data={[{
          label: "Give you up",
          value: 25
        },
        {
          label: "",
          value: 75,
          isEmpty: true
        }]} 
      />
    </React.Fragment>
  )
}

export default App;