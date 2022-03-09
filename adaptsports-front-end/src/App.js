import React from "react";
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
