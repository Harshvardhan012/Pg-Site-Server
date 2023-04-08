import './App.css';

import Header from './componets/header/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './componets/home/Home';
import About from './componets/About section/About';
import Pgcites from './componets/Pgcites/Pgcites';
import Details from './componets/Deatils/Details';
import Login from './componets/Login/Login';
import SignUp from './componets/SignUp/Signup';
import { useContext, useEffect} from 'react';
import datacontext from './Context/Data/datacontext';


function App() {
  const Context = useContext(datacontext);
  const { dbdata, getNote } = Context;

  useEffect(() => {
    getNote();
    // eslint-disable-next-line
  }, []);


  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path='/search/:city' element={<Pgcites data={dbdata}/>} />
        <Route exact path='/pgdetails/:id' element={<Details data={dbdata}/>} />
      </Routes>
    </Router>
  );
}

export default App;
