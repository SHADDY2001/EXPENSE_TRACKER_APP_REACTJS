import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Food", "Transport", "Entertainment"],
  datasets: [
    {
      label: "Expenses",
      data: [300, 200, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};

function Chart() {
  return <Pie data={data} />;
}

export default Chart;
