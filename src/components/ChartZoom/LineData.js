import { useState } from "react";
import FetchData from "./FetchData";
export async function LineData(value='end_year') {

// const [first, setFirst] = useState(value) 
  const dynamicColors = [];
  for (let index = 1; index <= 9; index++) {
    dynamicColors.push(`#${Math.random().toString(16).substr(-6)}`);
  }
  const fullSingleData = [];
  const allData =await FetchData();
  allData.forEach((element) =>
    fullSingleData.push(element[value] === "" ? 0 : element[value]),
  );
  // console.log("hello full ",fullEndYear);
  const data = {
    labels: fullSingleData,
    datasets: [
      {
        label: value,
        data: fullSingleData,
        backgroundColor: "Red",
        borderColor: "Red",
      },
    ],
  };
  return data;
}
