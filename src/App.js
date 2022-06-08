import Clock from './components/clock';
import './App.css';
import {  useState } from 'react';
import Timer from './components/timer';

function App() {
  const [ state , setState ] = useState(true); 
  const toggle = () => {
    setState(!state);
  } 
  let affiche;
  let label;
  if(state){
     affiche = <Clock/>;
     label = "Switch to timer";
  }
  else {
     affiche = <Timer/>;
     label = "Switch to clock";
  }
    return (
          <>
         <div onClick={toggle} id="toggle">
           <span> {label}</span> <i></i>
          </div>
          {affiche}
          </>
     )
}


export default App;
