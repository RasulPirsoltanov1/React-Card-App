import logo from './logo.svg';
import './App.css';
import Crad from './components/cards';
import Test from './test/test';
import { useState } from 'react';


let arr = [
  {
    title: "Test 1",
    par: "Par 1"
  },
  {
    title: "Test 2",
    par: "Par 2"
  },
  {
    title: "Test 3",
    par: "Par 3"
  }
];

function App() {
  const [val, setVal] = useState(0);
  return (
    <div>
      <h3>{val}</h3>
      <button onClick={() => {
        setVal(val + 1);
      }}>Change Value</button>
      Salam dunya bu <Test />
      <div className="cards">
        {arr.map(function (arr, id) {
          return <Crad key={id} title={arr.title} par={arr.par} id={id} val={val} />
        })}
      </div>
    </div>
  );
}

export default App;
