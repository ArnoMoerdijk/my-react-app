import React, {useState} from 'react';
import logo from './logo.svg';
import { CongradulationsMessage } from './CongradulationsMessage';
import { CounterButton } from './CounterButton';
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
  const [numberOfClicks, setNumberOfKlicks] = useState(0);
  const [hideMessage, setHideMessage] = useState(false);

  const increment = () => setNumberOfKlicks(numberOfClicks + 1);

  return (
    <div className="App">
      <header className="App-header">
        {hideMessage
          ? null
          :<CongradulationsMessage numberOfClicks={numberOfClicks} treshold={10} onHide={() => setHideMessage(true)}/>}
        <CounterButton onIncrement={increment} numberOfClicks={numberOfClicks}/>
      </header>
    </div>
  );
}

export default App;
