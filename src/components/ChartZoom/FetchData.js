import { useEffect, useState } from "react";

const FetchData = (value) => {
    const [getVisualData, setGetVisualData] = useState([]);
    useEffect(() => {
      fetch(
        `http://localhost:5000/fakeData?value=${value}`,
      )
        .then((res) => res.json())
        .then((data) => setGetVisualData(data));
    },[value]);
    return getVisualData;
};

export default FetchData;