import React from "react";
import { useQuery } from "react-query";
import { getCoinHistory } from "../api";

interface ChartProps {
  coinId: string;
}

const Chart = ({ coinId }: ChartProps) => {
  const { isLoading, data } = useQuery(["ohlcv", coinId], () =>
    getCoinHistory(coinId)
  );
  console.log(data);
  return <h1>Chart</h1>;
};

export default Chart;
