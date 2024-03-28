"use client";

import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { techTimelineSeries } from "@/constants";
import { ApexOptions } from "apexcharts";

const TechTimeline = () => {
  const options: ApexOptions = {
    chart: {
      height: 450,
      zoom: {
        enabled: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "100%",
      },
    },
    stroke: {
      width: 1,
    },
    fill: {
      type: "solid",
      opacity: 0.6,
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      labels: {
        rotate: -90,
        style: {
          fontSize: "14px",
          fontWeight: 800,
        },

        offsetX: 50,
      },
    },
    theme: {
      mode: "dark",
      palette: "palette1",
    },
  };

  return (
    <ApexChart
      className="overflow-x-scroll py-4"
      options={options}
      series={techTimelineSeries}
      type="rangeBar"
      height={1000}
      width={1336}
    />
  );
};

export default TechTimeline;
