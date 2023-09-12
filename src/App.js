import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(1)
  const [advice, setAdvice] = useState([
    "introduction of react js",
    "learn react js",
    "invest your new income",
  ]);

  function nextHandler(){
    if(counter < 3){
      setCounter(counter + 1)
    }
  }

  function previousHandler(){
    if(counter > 1){
      setCounter(counter - 1)
    }
  }

  return (
    <div className="App" style={{textTransform: "capitalize", fontWeight: "500", backgroundColor: "aliceblue", height: "100vh"}}>
     <div className="header" style={{display: "flex", justifyContent: "space-around", padding: "40px"}}>
      {
        Array.from([1,2,3], (x)=>(
          <div style={{width: "50px", height: "50px", borderRadius: "50%", backgroundColor: counter >= x ? "rebeccapurple" : "grey", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontSize: "18px"}}>{x}</div>
        ))
      }      
     </div>

     <div className='advice'>
      <h1 style={{letterSpacing: "1px",}}>{advice[counter - 1]}</h1>
      </div>

      <div className='buttons' style={{display: "flex",justifyContent: "space-around", marginTop: "70px",}}> 
      {
        Array.from(["previous","next"], (x)=>(
          <button onClick={x == "next" ? nextHandler : previousHandler} style={{width: "100px", height: "30px", backgroundColor: "rebeccapurple", color: "white", border: "none", borderRadius:"6px", cursor: "pointer",}}>{x}</button>
        ))
      }
      </div>
    </div>
  );
}

export default App;
