import { useState, useEffect } from 'react';

const useFetch = url => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const dataArray = await res.json();
      setData(dataArray[0]);
    };

    fetchData();
  }/*, [url]*/); // pass second parameter if you want to only call once (or when URL changes), otherwise it will continue to fire during rendering.

  return data;
};

export default useFetch;
