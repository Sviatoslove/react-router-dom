import './App.css';
import { Home } from './components/Home/Home';
import { News } from './components/News/News';
import { Contacts } from './components/Contacts/Contacts';
import { Services } from './components/Services/Services';
import { Layout } from './components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route
            path="/home"
            element={<Home/>}
          />
          <Route
            path="/news"
            element={<News/>}
          />
          <Route
            path="/contacts"
            element={<Contacts/>}
          />
          <Route
            path="/services"
            element={<Services/>}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;