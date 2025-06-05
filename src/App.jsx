
// Open Terminal>New Terminal and enter: npm start

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './pages/Home.jsx';
import Nav from './components/Nav.jsx';
import Users from './pages/Users.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';



function App() {


  
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:username" element={<Users />} /> {/* a dynamic route */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>    
    </div>
  );
}

export default App;
