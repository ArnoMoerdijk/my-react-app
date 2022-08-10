import React from 'react';
import logo from './logo.svg';
import { Greeting } from './Greeting';
import { PeopleList } from './PeopleList';
import './App.css';

const people = [{
  name: "John",
  age: 40,
  hairColor: "brown",
}, {
  name: "Helgo",
  age: 25,
  hairColor: "red",
}, {
  name: "Dwayne",
  age: 55,
  hairColor: "blonde",
}];

function App() {
  let adjective = 'cool';
  let url = 'https://reactjs.org';

  return (
    <div className="App">
      <header className="App-header">
        <Greeting name= "Shaun" numberOfMessages={10} />
        <PeopleList people={people} />
        <button onClick={() => alert('Hello!')}>Click Me!</button>
        <p>
          This is so {adjective}!
        </p>
        <a
          className="App-link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
