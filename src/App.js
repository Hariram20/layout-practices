import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes} from "react-router-dom"
import Home from './home';
import About from './about';
import { Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route/>
    </Routes>
    </BrowserRouter>

  
  );
}

export default App;
