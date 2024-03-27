"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { techTimelineSeries } from "@/constants";

const TechTimeline = () => {
  const options = {
    chart: {
      height: 450,
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
