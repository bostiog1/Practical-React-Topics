import "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Sales for 2020 (M)",
        data: [3, 2, 2, 1, 5],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
      {
        label: "Sales for 2019 (M)",
        data: [1, 3, 2, 2, 3],
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "Line Chart",
    },
    ticks: {
      min: 0,
      max: 6,
      stepSize: 1,
    },
  };

  return <Bar type="line" data={data} options={options} />;
};

export default BarChart;
