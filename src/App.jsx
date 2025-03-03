import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import { useState } from 'react'; // Import useState from 'react', not 'react-router-dom'
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Work from './components/Work.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Testimonials from './components/Testimonials.jsx';
import Blogs from './components/Blogs.jsx';
import logoText from './assets/logo.png'; // Example import for a stylized text-based logo

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-black text-white">
        {/* Small, Fixed Information Header (Non-Scrollable, Reduced Height) */}
        <header className="w-full bg-gradient-to-r from-teal-900 to-purple-900 text-white text-sm py-1 shadow-md z-50">
          <div className="container mx-auto flex items-center justify-between px-4">
            <span className="font-bold sm:text-base">WebSmart</span>
            <div className="flex gap-2 sm:gap-4">
              <span className="sm:text-sm">Email: Birukchali86@gmail.com</span>
              <span className="sm:text-sm">Phone: +251-940675703</span>
            </div>
          </div>
        </header>

        {/* Scrollable Navigation Bar with Hamburger Menu for Mobile */}
        <nav className="w-full bg-gradient-to-r from-darkBlue to-teal p-4 border-b-2 border-dashed border-yellow-500 z-40">
          <div className="container mx-auto flex items-center justify-between">
            {/* Logo (Responsive) */}
            <img src={logoText} alt="WebSmart Logo" className="w-40 h-auto filter drop-shadow-lg md:w-32" />

            {/* Hamburger Menu Button for Mobile */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                className="w-6 h-0.5 bg-white my-1"
              />
              <motion.div
                animate={{ rotate: isMenuOpen ? -90 : 0 }}
                className="w-6 h-0.5 bg-white my-1"
              />
              <motion.div
                animate={{ opacity: isMenuOpen ? 0 : 1 }}
                className="w-6 h-0.5 bg-white my-1"
              />
            </button>

            {/* Desktop Navigation Links */}
            <ul className="hidden md:flex gap-8">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-md transition-colors ${
                      isActive ? 'bg-yellow-500 text-black' : 'text-white hover:bg-yellow-500 hover:text-black'
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-md transition-colors ${
                      isActive ? 'bg-yellow-500 text-black' : 'text-white hover:bg-yellow-500 hover:text-black'
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-md transition-colors ${
                      isActive ? 'bg-yellow-500 text-black' : 'text-white hover:bg-yellow-500 hover:text-black'
                    }`
                  }
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/work"
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-md transition-colors ${
                      isActive ? 'bg-yellow-500 text-black' : 'text-white hover:bg-yellow-500 hover:text-black'
                    }`
                  }
                >
                  Our Work
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/testimonials"
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-md transition-colors ${
                      isActive ? 'bg-yellow-500 text-black' : 'text-white hover:bg-yellow-500 hover:text-black'
                    }`
                  }
                >
                  Testimonials
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-md transition-colors ${
                      isActive ? 'bg-yellow-500 text-black' : 'text-white hover:bg-yellow-500 hover:text-black'
                    }`
                  }
                >
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-md transition-colors ${
                      isActive ? 'bg-yellow-500 text-black' : 'text-white hover:bg-yellow-500 hover:text-black'
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>

            {/* Mobile Menu (Slide-Out) */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: isMenuOpen ? 0 : '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-64 bg-gradient-to-r from-darkBlue to-teal p-6 shadow-lg md:hidden z-50"
            >
              <button
                onClick={toggleMenu}
                className="absolute top-4 right-4 p-2 text-white focus:outline-none"
                aria-label="Close Menu"
              >
                <span className="text-2xl">×</span>
              </button>
              <ul className="flex flex-col gap-4 mt-12">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-md transition-colors ${
                        isActive ? 'bg-yellow-500 text-black' : 'text-white hover:bg-yellow-500 hover:text-black'
                      }`
                    }
                    onClick={toggleMenu}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-md transition-colors ${
                        isActive ? 'bg-yellow-500 text-black' : 'text-white hover:bg-yellow-500 hover:text-black'
                      }`
                    }
                    onClick={toggleMenu}
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services"
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-md transition-colors ${
                        isActive ? 'bg-yellow-500 text-black' : 'text-white hover:bg-yellow-500 hover:text-black'
                      }`
                    }
                    onClick={toggleMenu}
                  >
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/work"
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-md transition-colors ${
                        isActive ? 'bg-yellow-500 text-black' : 'text-white hover:bg-yellow-500 hover:text-black'
                      }`
                    }
                    onClick={toggleMenu}
                  >
                    Our Work
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/testimonials"
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-md transition-colors ${
                        isActive ? 'bg-yellow-500 text-black' : 'text-white hover:bg-yellow-500 hover:text-black'
                      }`
                    }
                    onClick={toggleMenu}
                  >
                    Testimonials
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blogs"
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-md transition-colors ${
                        isActive ? 'bg-yellow-500 text-black' : 'text-white hover:bg-yellow-500 hover:text-black'
                      }`
                    }
                    onClick={toggleMenu}
                  >
                    Blogs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-md transition-colors ${
                        isActive ? 'bg-yellow-500 text-black' : 'text-white hover:bg-yellow-500 hover:text-black'
                      }`
                    }
                    onClick={toggleMenu}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </motion.div>
          </div>
        </nav>

        <main className="flex-1">
          <Routes>
            {/* Home Route: Display all sections vertically */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Services />
                  <Work />
                  <Testimonials />
                  <Blogs />
                  <Contact />
                </>
              }
            />
            {/* Individual Routes: Display only the selected section */}
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Work />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
