import React , {useState} from 'react'
import './App.css';
import Text from './text'

function App() {
  let [count, setCount] = useState(0);
  let [isMorning, setMorning] = useState(false);

  return (
    <div className={`box ${isMorning ? 'daylight': '' }`}> 
      <h1>Good {isMorning ? 'Morning': 'Night'}</h1>
     <Text counter={count}/>
     <button onClick={()=> setCount(++count)}>Update Counter</button>
     <button onClick={()=>setMorning(!isMorning)} >update Day </button>
    </div>
  );
}

export default App;
