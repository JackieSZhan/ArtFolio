import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMainPortfolio } from './api/portfolioApi';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const [artistName, setArtistName] = useState('');

  useEffect(() => {
    // Fetch artist name for Navbar
    getMainPortfolio()
      .then(res => setArtistName(res.data.artistName))
      .catch(err => console.error(err));
  }, []);

  return (
    <BrowserRouter>
      <Navbar artistName={artistName} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;