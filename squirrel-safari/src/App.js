import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div>Hello, welcome to our GOT website!</div>} />
      </Routes>
    </div>
  );
}

export default App;
