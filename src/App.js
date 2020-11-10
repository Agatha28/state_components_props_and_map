import React, {useState} from "react";
import Friend from './Friend';
import logo from './logo.svg';
import './App.css';

function App() {
const [text, setText] = useState('react is great');
const [friendList, setFriends] = useState(["Joe", "Rob", "Josh"]);

function changeText() {
  setText("react is super awesome")
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to {text}.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {friendList.map(friend => {
          return <Friend name={friend}/>
        })}
        <button onClick={changeText}>Change Text</button>
      </header>
    </div>
  );
}

export default App;
