import styled, { keyframes } from "styled-components";

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

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

const Input = styled.input.attrs({ required: true })`
  background-color: tomato;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Animation = keyframes`
  0%{
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50%{
    border-radius: 100px;
  }
  100%{
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;

const Box2 = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${Animation} 1s linear infinite;
  span {
    font-size: 50px;
    &:hover {
      font-size: 100px;
    }
    /* span:hover{
      font-size: 100px;
    } */
    &:active {
      opacity: 0;
    }
    /* span:active{
      opacity: 0;
    } */
  }
`;

// 구현 영역

function App() {
  return (
    <Wrapper>
      <Box2>
        <span>🤩</span>
      </Box2>
    </Wrapper>
  );
}

export default App;
