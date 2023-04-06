import './App.css';

import Header from './componets/header/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './componets/home/Home';
import About from './componets/About section/About';
import Pgcites from './componets/Pgcites/Pgcites';
import Details from './componets/Deatils/Details';
import Login from './componets/Login/Login';
import SignUp from './componets/SignUp/Signup';
import Fun from './componets/GetNotes';




function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path='/search/:city' element={<Pgcites />} />
        <Route exact path='/pgdetails/:id' element={<Details />} />
        <Route exact path='/getdata' element={<Fun />} />
      </Routes>
    </Router>
  );
}

export default App;
