import styled from "styled-components";

// style 영역

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Text = styled.span`
  color: white;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

// 구현 영역

function App() {
  return (
    <Father>
      <Box bgColor="teal" />
      <Box bgColor="tomato" />
      <Circle bgColor="black" />
    </Father>
  );
}

export default App;
