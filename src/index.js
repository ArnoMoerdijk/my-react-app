import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    {/* <div className="App">
      <NavBar />
      <div className="App-Header">
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="counter" element={<CounterButtonPage />} />
          <Route path="people-list" element={<PeopleListPage />} />
          <Route path="forms" element={<FormsNavBar />} >
            <Route path="controlled" element={<ControlledFormPage />} />
            <Route path="uncontrolled" element={<UncontrolledFormPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="protected" element={<ProtectedPage />} />  
        </Route>
      </Routes>
      </div>
      </div> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
