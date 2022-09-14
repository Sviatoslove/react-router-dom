import React from 'react';
import './App.css';
import News from './components/News/News';
import Contacts from './components/Contacts/Contacts';
import Services from './components/Services/Services';
import {Route, Routes, NavLink} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <ul className="main__nav">
          <li>
            <NavLink 
              to="/"
              exact
              activeClassName="my__active"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/news"
              exact
              activeClassName="my__active"
            >
              News
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contacts"
              exact
              activeClassName="my__active"
            >
              Contacts
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/services"
              exact
              activeClassName="my__active"
            >
              Services
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<h1>Main</h1>}
        />
        <Route
          path='/news'
          element={<News/>}
        />
        <Route
          path='/contacts'
          element={<Contacts/>}
        />
        <Route
          path='/services'
          element={<Services/>}
        />
      </Routes>
    </div>
  );
}

export default App;