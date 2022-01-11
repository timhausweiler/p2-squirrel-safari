import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import TakeWalk from './Components/TakeWalk';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/takewalk" element={<TakeWalk />} />
      </Routes>
    </div>
  );
}

export default App;
