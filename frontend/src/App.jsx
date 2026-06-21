import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMainPortfolio } from './api/portfolioApi';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import HappyBirthday from './pages/HappyBirthday';
import './App.css';

function App() {
  const [artistName, setArtistName] = useState('');
  const [tagline, setTagline] = useState('');
  const [contactEmail, setContactEmail] = useState('');

  useEffect(() => {
    getMainPortfolio()
      .then(res => {
        setArtistName(res.data.artistName);
        setTagline(res.data.bio);
        setContactEmail(res.data.contactEmail);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <BrowserRouter>
      <Navbar artistName={artistName} tagline={tagline} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/happy-birthday' element={<HappyBirthday />} />
      </Routes>
      <Footer contactEmail={contactEmail} />
    </BrowserRouter>
  );
}

export default App;