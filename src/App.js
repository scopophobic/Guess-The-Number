import logo from './logo.svg';
import './App.css';

import React,{useState} from 'react';
let random= Math.floor(Math.random() * 100)+1; 
function App() {
  
  const [userG, setUG] = useState("");
  const [userallval, setuserallval] = useState([]);
  const [userCount, setUC] = useState(0);
  const [rannum, setrannum] = useState(random);
  const [message, setmess] = useState("");
  const handle = (e) => {
      setUG(e.target.value);
      
    };

    const submit= ()=> {
      // alert(userG)  ;
      if(rannum==userG) {
        setmess("Congrats you guess it right");
      }else if(rannum>userG){
        setmess("your guess is too low");
      }
      else {
        setmess("your guess is too high");
      }
      setUC(userCount+1);
      setuserallval([...userallval,userG])

    }
  return (
    <div className="App">
      <h1>Guess The Number</h1>
      <input value={userG} type="text" onChange={handle}/>
      <button onClick={submit}>Submit</button>
      <div>
        <p>message : {message}</p>
        <p>total count : {userCount}</p>
        <p>random number : {rannum}</p>
      <p>
        your guesses : 
        {userallval?.map((item,i) =>{
          return <span key={i}>{item},{ }</span>;
        })}
      </p>
    </div>
    
    </div>
    
  );
}

export default App;
