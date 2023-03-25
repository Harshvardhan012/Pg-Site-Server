import './App.css';

import Header from './componets/header/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './componets/home/Home';
import About from './componets/About section/About';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/about" element={<About />}/>
      </Routes>
    </Router>
  );
}

export default App;
