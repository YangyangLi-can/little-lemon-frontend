import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  function handleClick(){
    setCount(count+1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
        <MyButton count={count} onClick={handleClick}/>
        <MyButton count={count} onClick={handleClick}/>
      </body>
     
    </div>
  );
}

// function MyButton(){
//   const [count, setCount] = useState(0);

//   function handleClick(){
//     setCount(count+1);
//   }
//   return (<button onClick={handleClick}>Clicked {count} times</button>)
// }

function MyButton({ count, onClick}){
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

export default App;
