import axios from "axios";

const BASE_URL = `https://api.coinpaprika.com/v1`;

export const fetchCoins = async () => {
  // 데이터 얻는법
  // axios.get(url).then(res => console.log(res.data))
  return await axios.get(`${BASE_URL}/coins`).then((res) => res.data);
};

export const getInfo = async (coinId: string) => {
  return await axios.get(`${BASE_URL}/coins/${coinId}`).then((res) => res.data);
};

export const getPrice = async (coinId: string) => {
  return await axios
    .get(`${BASE_URL}/tickers/${coinId}`)
    .then((res) => res.data);
};

export const getCoinHistory = async (coinId: string) => {
  //   const endDate = Math.floor(Date.now() / 1000);
  //   const startDate = endDate - 60 * 60 * 24 * 7;

  return await axios
    .get(`https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinId}`)
    .then((res) => res.data);
};
