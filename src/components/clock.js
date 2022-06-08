
import { useState , useEffect} from 'react';

function Clock(){
    const [date, setDate] = useState(new Date());
     useEffect(() => {
       const interval = setInterval(() => {
         setDate(new Date());
       }, 1000);
       return () => clearInterval(interval);
     }, []);
     return (
          <div className='lera'>
        {date.toLocaleTimeString()}
          </div>
     )
}

export default Clock;