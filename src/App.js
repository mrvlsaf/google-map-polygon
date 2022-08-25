import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import GmapPol from './components/GmapPol';
// import { useState } from 'react'

function App() {
  // const [firstName, setFirstName] = useState("first")

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="main" element={<GmapPol  />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
