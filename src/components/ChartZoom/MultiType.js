import "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";
import options from "./useOptions";
import FetchData from "./FetchData";
import { useState } from "react";
Chart.register(zoomPlugin);

function MultiType({ setFirst }) {
  const [values, setValues] = useState("relevance");
  const handleFilter = async (e) => {
    setValues(e.target.value);
    setFirst(e.target.value);
  };
  const allParseLabels = [];
  let allParseData = {};
  const allData = FetchData();
  allData.forEach((obj) => {
    if (
      values === "country" ||
      values === "topic" ||
      values === "region" ||
      values === "source"
    ) {
      if (allParseData[obj[values]]) {
        allParseData[obj[values]]++;
      } else {
        if (obj[values]) {
          allParseData[obj[values]] = 1;
        }
      }
    } else {
      allParseLabels.push(obj[values] === "" ? 0 : obj[values]);
    }
  });
  const dynamicColors = [];
  for (let index = 1; index <= allData.length; index++) {
    dynamicColors.push(`#${Math.random().toString(16).substr(-6)}`);
  }
  const data = {
    parsing: false,
    labels:
      allParseLabels.length === 0 ? Object.keys(allParseData) : allParseLabels,
    datasets: [
      {
        label: values,
        data:
          allParseLabels.length === 0
            ? Object.values(allParseData)
            : allParseLabels,
        backgroundColor: dynamicColors,
        borderColor: dynamicColors,
      },
    ],
  };

  const handleReset = () => {
    window.location.reload();
  };
  return (
    <>
      <div className="flex justify-between">
        <select name="filter" id="" onChange={handleFilter} value={values}>
          <option value="end_year">End Year</option>
          <option value="start_year">Start Year</option>
          <option value="intensity">Intensity</option>
          <option value="likelihood">Likelihood</option>
          <option value="relevance">Relevance</option>
          <option value="country">Country</option>
          <option value="topic">Topic</option>
          <option value="region">Region</option>
          <option value="source">Source</option>
        </select>
        <button
          className="px-3 py-1 rounded-md bg-gray-500"
          onClick={handleReset}>
          Reset
        </button>
      </div>
      <div className="w-10/12 mx-auto">
        <h2 className={'absolute left-[40%] top-[30%] text-gray-300'}>
          Rotate your mouse wheel for zoom & pen
        </h2>
        <Line data={data} options={options} />
      </div>
    </>
  );
}
export default MultiType;
