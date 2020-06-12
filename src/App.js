import React, {useState} from 'react';
import {Message} from "./message.js"
import './App.css';

function App() {

  let [count, setCount] = useState(0);
  let [isMorning, setMorning] = useState(true)


  return (
    <div className={`box ${isMorning ? 'dayLight' : ''}`}>
    <h1>Have A Good {isMorning ? "Morning" : "Night"}</h1>
      <Message counter={count}/>
      <br/>
      <button onClick={
        ()=> setCount(count + 1)
        }>
        Update Counter 
        </button>
        <button onClick={()=>setMorning(!isMorning)}>
          Update Day
        </button>
    </div>
  );
}

export default App;
