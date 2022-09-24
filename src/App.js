import React, {useState} from 'react';
import { Routes, Route, Link, Switch} from 'react-router-dom';
import { 
  HomePage, 
  CounterButtonPage, 
  PeopleListPage, 
  NotFoundPage, 
  ProtectedPage,
  ControlledFormPage,
  UncontrolledFormPage
} from './pages';
import { NavBar } from './Navbar';
import { FormsNavBar} from './FormsNavBar';
import './App.css';

function App() {
  const [numberOfClicks, setNumberOfKlicks] = useState(0);
  const [hideMessage, setHideMessage] = useState(false);

  const increment = () => setNumberOfKlicks(numberOfClicks + 1);

  return (
    <div className="App">
      <NavBar />
      <div className="App-Header">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="counter" element={<CounterButtonPage />} />
          <Route path="people-list" element={<PeopleListPage />} />
          <Route path="forms" element={<FormsNavBar />} >
            <Route path="controlled" element={<ControlledFormPage />} />
            <Route path="uncontrolled" element={<UncontrolledFormPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="protected" element={<ProtectedPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
