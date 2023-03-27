import './App.css';

import Header from './componets/header/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './componets/home/Home';
import About from './componets/About section/About';
import Pgcites from './componets/Pgcites/Pgcites';
import Details from './componets/Deatils/Details';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/about" element={<About />}/>
        <Route exact path='/search/:city' element={<Pgcites/>}/>
        <Route exact path='/pgdetails/:id' element={<Details/>}/>
      </Routes>
    </Router>
  );
}

export default App;
