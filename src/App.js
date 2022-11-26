// import logo from './logo.svg';
// import { useEffect, useState } from 'react';
import './App.css';
import AnimeQuotes from './components/AnimeQuotes';
import Weather from './components/Weather';
import {Route,Routes,Link} from 'react-router-dom';


function App() {

  return(
    <div>
      <h1>Home Page</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/quotes">Anime Quotes</Link></li>
          <li><Link to="/weather">Weather</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/weather" element ={<Weather/>}/>
        <Route path= "/quotes" element ={<AnimeQuotes/>}/>
      </Routes>
    </div>
  )
}

export default App;
