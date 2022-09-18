import React, {useState} from 'react';
import { Routes, Route, Link, Switch} from 'react-router-dom';
import { HomePage, CounterButtonPage, PeopleListPage, NotFoundPage, ProtectedPage } from './pages';
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
          <Route path="*" element={<NotFoundPage />} />
          <Route path="protected" element={<ProtectedPage />} />
        </Routes>
    </div>
  );
}

export default App;
