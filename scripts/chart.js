import { mockMonthlyData } from "../data/data.js";

const ctx = document.getElementById("myChart").getContext("2d");
new Chart(ctx, {
  type: "bar",
  data: {
    labels: mockMonthlyData.map((time) => time.month),
    datasets: [
      {
        label: "Positive",
        data: mockMonthlyData.map((month) => month.positive),
        backgroundColor: ["rgb(255, 0, 0)"],
        borderRadius: 10,
        barThickness: 10,
      },
      {
        label: "Negative",
        data: mockMonthlyData.map((month) => month.negative),
        backgroundColor: ["rgb(210, 210, 210)"],
        borderRadius: 10,
        barThickness: 10,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: false,
        grid: { display: false },
      },
      x: {
        grid: { display: false },
      },
    },
    layout: {
      padding: 5,
    },
  },
});
