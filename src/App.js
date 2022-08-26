import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import GmapPol from './components/GmapPol';

function App() {

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
