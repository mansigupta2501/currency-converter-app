import { useEffect, useState } from "react";
import axios from "axios";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  let url = ` https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;

  async function fetchData() {
    try {
      const resp = await axios.get(url);
      console.log(resp.data[currency]);

      setData(resp.data[currency]);
    } catch (err) {
      console.error("Something went wrong:", err);
    }
  }

  useEffect(() => {
    fetchData();
  }, [currency]);

  console.log(data);
  return data;
}

export default useCurrencyInfo;
