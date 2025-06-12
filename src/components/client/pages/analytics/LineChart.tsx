"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
  ChartOptions,
  ChartData,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
);

const data: ChartData<"line"> = {
  labels: [
    "Фев 20",
    "Фев 21",
    "Фев 22",
    "Фев 23",
    "Фев 24",
    "Фев 25",
    "Фев 26",
  ],
  datasets: [
    {
      label: "Blue Line",
      data: [
        1700, 2700, 2680, 2650, 2100, 3800, 4200, 3700, 3200, 4000, 4500, 3500,
      ],
      borderColor: "#6366F1",
      backgroundColor: "rgba(99, 102, 241, 0.1)",
      fill: false,
      tension: 0.4,
      borderWidth: 3,
      pointRadius: 0,
      pointHoverRadius: 6,
    },
    {
      label: "Orange Line",
      data: [3600, 3800, 1200, 1400, 2300, 2100, 2000],
      borderColor: "#F59E0B",
      backgroundColor: "rgba(245, 158, 11, 0.1)",
      fill: false,
      tension: 0.4,
      borderWidth: 3,
      pointRadius: 0,
      pointHoverRadius: 6,
    },
  ],
};

const options: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    intersect: false,
    mode: "index",
  },
  plugins: {
    tooltip: {
      enabled: true,
      backgroundColor: "#3B82F6",
      titleColor: "#FFFFFF",
      bodyColor: "#FFFFFF",
      borderColor: "#3B82F6",
      borderWidth: 1,
      cornerRadius: 8,
      displayColors: false,
      callbacks: {
        title: function () {
          return "";
        },
        label: function (context) {
          return context.parsed.y.toString();
        },
      },
    },
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      display: true,
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
      ticks: {
        color: "#6B7280",
        font: {
          size: 12,
        },
        padding: 10,
      },
    },
    y: {
      display: true,
      beginAtZero: true,
      max: 5000,
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
      ticks: {
        color: "#6B7280",
        font: {
          size: 12,
        },
        padding: 15,
        stepSize: 1000,
        callback: function (value) {
          if (typeof value === "number") {
            if (value === 0) return "0K";
            return value / 1000 + "K";
          }
          return value;
        },
      },
    },
  },
  elements: {
    point: {
      radius: 0,
      hoverRadius: 6,
    },
  },
};

export default function LineChart() {
  return (
    <div className="relative w-full h-[300px]">
      <Line data={data} options={options} />
      <div
        className="absolute bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium"
        style={{
          top: "15%",
          right: "25%",
          transform: "translate(50%, -50%)",
        }}
      >
        220
      </div>
    </div>
  );
}
