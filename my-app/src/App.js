import React,{useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1 style={{"margin-left":"3rem"}}>Count :{count}</h1>
      <button onClick={() => setCount(count + 1)} style={{"margin-left":"3rem"}}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{"margin-left":"0.5rem"}}>Decrement</button>
      <button onClick={() => setCount(0)} style={{"margin-left":"0.5rem"}}>Reset</button>
    </>
  );
}

export default App;
