import React from "react";
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar'
import Footer from "./Components/Footer/Index";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
