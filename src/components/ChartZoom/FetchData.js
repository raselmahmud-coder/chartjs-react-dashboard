import { useEffect, useState } from "react";

const FetchData = () => {
    const [getVisualData, setGetVisualData] = useState([]);
    useEffect(() => {
      fetch(
        `https://raw.githubusercontent.com/raselmahmud22/fakeData/main/jsondata.json`,
      )
        .then((res) => res.json())
        .then((data) => setGetVisualData(data));
    },[]);
    return getVisualData;
};

export default FetchData;