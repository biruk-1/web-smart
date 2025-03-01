import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Work from './components/Work.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-black text-white">
        {/* Sticky Navigation */}
        <nav className="fixed top-0 w-full bg-black bg-opacity-90 text-white p-4 z-50 shadow-lg">
          <ul className="flex justify-center gap-8">
            <li><NavLink to="/" className="hover:text-yellow-500 transition-colors">Home</NavLink></li>
            <li><NavLink to="/about" className="hover:text-yellow-500 transition-colors">About</NavLink></li>
            <li><NavLink to="/services" className="hover:text-yellow-500 transition-colors">Services</NavLink></li>
            <li><NavLink to="/work" className="hover:text-yellow-500 transition-colors">Our Work</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-yellow-500 transition-colors">Contact</NavLink></li>
          </ul>
        </nav>

        <main className="flex-1 pt-16"> {/* Padding for sticky nav */}
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;