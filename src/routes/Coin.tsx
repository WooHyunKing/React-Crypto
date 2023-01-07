import { useParams } from "react-router-dom";

interface RouteParams {
  coinId: string;
}

function Coin() {
  const { coinId } = useParams<RouteParams>();
  // Typescript에게 useParams가 문자열 타입인 coinId를 포함하는
  // 객체를 반환할 것이라는 것을 알려주는 것
  return <h1>Coin: {coinId}</h1>;
}

export default Coin;
