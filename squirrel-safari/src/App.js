import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom"
import { useState, useEffect } from 'react';

import Contribute from './Components/Contribute';
import TakeWalkButton from './Components/TakeWalkButton';
import StoryContainer from './Components/StoryContainer';
import Navbar from './Components/Navbar';
import api from './Services/apiConfig';

function App() {
  const [nextId, setNextId] = useState([]);
  const [click, setClick] = useState(true);
  
  useEffect(() => {
    const fetchIds = async () => {
      const res = await api.get();
      const len = res.data.records.length;
      const random = Math.floor(Math.random() * len)
      // console.log(random);
      setNextId(res.data.records[random].id);
    }
     fetchIds();
   }, [click])

  return (
    <div className="App">
      <Navbar nextId={nextId} setNextId={setNextId}/>
      <Routes>
        <Route path="/" element={
          <div className ="body">
            <img
              src= {"https://i.imgur.com/RK3UbZi.jpeg"}
              alt="Logo of Squirrel Safari"
              className="logo"
            />
            <h1>Welcome to Squirrel Safari</h1>
            <p>Squirrel Safari allows you to take a (virtual) walk through Central Park to learn about the local squirrel population!</p>
            <TakeWalkButton buttonText="Take a walk" nextId={nextId} setNextId={setNextId} setClick={setClick}/>
            <br />
            <br/>
            <Link to="/contribute" className = "link">Or contribute your own observation to our collection</Link>
          </div>
        } />
        <Route path="/contribute" element={<Contribute />} />
        <Route path="/story/:id" element={<StoryContainer nextId={nextId} setClick={setClick}/>}/>
      </Routes>
    </div>
  );
}

export default App;
