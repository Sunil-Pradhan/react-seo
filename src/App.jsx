// Import Lib
import './App.css';
import { Route, Routes, NavLink } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Import component
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';

function App() {
  return (
    <>
      <HelmetProvider>
        <h1>Welcome to our website</h1>

        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/product">Product</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </HelmetProvider>
    </>
  );
}

export default App;
