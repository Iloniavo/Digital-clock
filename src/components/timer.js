import {useEffect,useState} from 'react';


function Timer(){
    
    function padStartDigit(digit) {
        return digit.toString().padStart(2, "0");
      }

    const [ hour , setHour] = useState(0);
    const [ minute , setMinute] = useState(0);
    const [ second , setSecond] = useState(0);
    const [ time , setTime] = useState (0);
    const [ startTimer , setStartTimer] = useState(false);
    const [ count , setCount ] = useState(0);
    let ora = (e) =>{
       setHour(parseInt(e.target.value)*3600)
    }
    let minitra = (e) => {
        setMinute(parseInt(e.target.value)*60)
    }
    let segondra = (e) => {
        setSecond(parseInt(e.target.value))
    }
    let labelForStop ;
    if(startTimer) {
        labelForStop = "Stop";
    } 
    else {
     labelForStop = "Continue";
    }

    useEffect(()=>{
        let interval = null;
        if(startTimer){
            interval = setInterval(()=>{
                setTime(time => time - 1)
            },1000)
            if(time === 0 && count === 0){
                clearInterval(interval);
                alert ('Time out');
               } 
        } 
        else {clearInterval(interval)}
        
        if(time === 0){
            setCount(0)
            }
        return () => clearInterval(interval);
    },[startTimer, time, count] )
    
return (
    <div className="corps">
        <div className='input'> 
        <input type="number"  onChange={ora} placeholder="Hours" ></input>
        <input type="number"  onChange={minitra} placeholder="Minutes"></input>
        <input type="number"  onChange={segondra} placeholder="Seconds"></input>
        </div>
        
         
        <div className="output">{`${padStartDigit(Math.floor(time/3600))} : ${padStartDigit(Math.floor((time%3600)/60))} : ${padStartDigit(time%60)}`}</div>
        <div className='bouton'>
        <button id='start' onClick={() => {
              if(0<=hour && hour<=86400 && 0<=minute && minute<=3540 && 0<=second && second<=59 && (hour+minute+second)<=86400) {
                setStartTimer(true) ;
                setCount(1);
                setTime(hour+minute+second);
              }
              else{ alert ('Please check your input !')}
             }}>Start</button>
        <button id='stop' onClick={() => {
                setStartTimer(!startTimer);
       }}>{labelForStop}</button>
        <button id='reset'onClick={()=>{ setTime(0) }}> Reset </button>
        </div>
        
    </div>
)
}

export default Timer;