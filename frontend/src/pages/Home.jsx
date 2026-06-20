import { useEffect, useState } from 'react';
import { getMainPortfolio } from '../api/portfolioApi';
import './Home.css';

function Home() {
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMainPortfolio()
      .then(res => setPortfolio(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (!portfolio) return <div className="loading">Portfolio not found.</div>;

  return (
    <div className="home">
      {portfolio.heroImageUrl && (
        <img
          src={portfolio.heroImageUrl}
          alt={portfolio.artistName}
          className="hero-image"
        />
      )}
      {portfolio.biography && (
        <div className="home-biography">
          <p>{portfolio.biography}</p>
          <span className="bio-credit">
            Biography courtesy of{' '}
            <a href="https://artsy.net/partner/biafarin" target="_blank" rel="noopener noreferrer">
              Biafarin
            </a>
          </span>
        </div>
        )}
        <div className="social-links">
          <a href={`mailto:${portfolio.contactEmail}`} aria-label="Email">
            <i className="ti ti-mail"></i>
          </a>
          <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="ti ti-brand-instagram"></i>
          </a>
          <a href="https://pinterest.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
            <i className="ti ti-brand-pinterest"></i>
          </a>
        </div>
    </div>
  );
}

export default Home;