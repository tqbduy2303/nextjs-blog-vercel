"use client";

import { ProgressBar } from "react-loader-spinner";

export default function Spinner() {
  return (
    <ProgressBar
      height={"526"}
      width={"1080"}
      ariaLabel="Common Loader"
      borderColor="#000"
      barColor={"#CFFD60"}
      wrapperStyle={{ display: "block", margin: "auto"}}
    />
  );
}