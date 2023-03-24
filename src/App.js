import './App.css';

import Header from './componets/header/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './componets/home/Home';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
      </Routes>
    </Router>
  );
}

export default App;
