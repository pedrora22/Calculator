import './App.css';
import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import Buttons from './components/buttons';
import Button from './components/Button';
import ContextC from './context/Context';


const btns = [
  ["C", "D", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {
  return (
    <ContextC>
      <Wrapper>
        <Screen></Screen>
        <Buttons>{btns.flat().map((btn, i) => (<Button value={btn} key={i}></Button>))}</Buttons>
      </Wrapper>
    </ContextC>
  );
}

export default App;
