
// Open 'New Terminal' and enter: npm start

import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';



function App() {


  
  return (
    <div>
      <Router>
        <nav>
          <Link to="/">Home</a>
          <Link to="/about">About</a>
          <Link to="/contact">Contact</a>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>    
    </div>
  );
}
function App() {


  
  return (
    <div>
      <Router>
        <nav>
          <Link to="/">Home</a>
          <Link to="/about">About</a>
          <Link to="/contact">Contact</a>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>    
    </div>
  );
}

export default App;
