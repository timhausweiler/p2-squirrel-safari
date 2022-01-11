import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom"

import Contribute from './Components/Contribute';
import TakeWalkButton from './Components/TakeWalkButton';
import Story from './Components/Story';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <div>
            <img
              src= {"https://i.imgur.com/RK3UbZi.jpeg"}
              alt="Logo of Squirrel Safari"
              className="logo"
            />
            <h1>Welcome to Squirrel Safari</h1>
            <h4>Squirrel Safari allows you to take a (virtual) walk through Central Park to learn about the local squirrel population!</h4>
            <TakeWalkButton />
            <br/>
            <Link to ="/contribute" >Or contribute your own observation to our collection</Link>
          </div>
        } />
        <Route path="/contribute" element={<Contribute />} />
        <Route path = "/story/:id" element = {<Story />}/>
      </Routes>
    </div>
  );
}

export default App;
