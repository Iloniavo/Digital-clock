/*
import React, { useState } from 'react';

function Example1() {
  // Déclare une nouvelle variable d'état, que l'on va appeler « count »
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>
        Cliquez ici
      </button>
    </div>
  );
}

class Example2 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    render() {
      return (
        <div>
          <p>Vous avez cliqué {this.state.count} fois</p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            Cliquez ici
          </button>
        </div>
      );
    }
  }

    let date = new Date();
  useEffect(() => {
    const interval = setInterval(() => {
      console.log(date.toLocaleTimeString);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  */