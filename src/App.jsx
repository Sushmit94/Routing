import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // 1. Link is no longer needed here if only Header uses it.
import { Link } from 'react-router-dom';
// Import your Header component
import Header from './Header'; // Adjust path if Header.jsx is in a subfolder, e.g., './components/Header'

// Import your page components (assuming they are still in src/)
import Home from './Home';
import About from './About';
import Contact from './Contact';


const App = () => {
  return (
    // BrowserRouter wraps your entire application to enable routing
    <BrowserRouter>
      {/* 2. Render your Header component here. It will appear on ALL pages. */}
      <Header />

      {/* 3. Routes defines the different paths and the components to render below the Header. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
     

        {/* Optional: A "No Match" route for 404 errors */}
        <Route path="*" element={
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-lg">Oops! The page you are looking for does not exist.</p>
            <p className="text-md mt-2">Please check the URL or go back to the <Link to="/" className="text-blue-600 hover:underline">Home Page</Link>.</p>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;