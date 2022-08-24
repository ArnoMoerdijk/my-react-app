import React, {useState} from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import { HomePage, CounterButtonPage, PeopleListPage } from './pages';
import { CongradulationsMessage } from './CongradulationsMessage';
import { CounterButton } from './CounterButton';
import { Greeting } from './Greeting';
import { PeopleList } from './PeopleList';
import './App.css';

function App() {
  const [numberOfClicks, setNumberOfKlicks] = useState(0);
  const [hideMessage, setHideMessage] = useState(false);

  const increment = () => setNumberOfKlicks(numberOfClicks + 1);

  return (
    <div className="App">
        <Link to="/counter">Go to Counter Page</Link>
        <Link to="/people-list">Go to People List Page</Link>
        <Routes>
          <Route path="/" element={<HomePage />} />
            <Route path="counter" element={<CounterButtonPage />} />
            <Route path="people-list" element={<PeopleListPage />} />
        </Routes>
    </div>
  );
}  

export default App;
