import { useEffect, useState } from 'react';
import { getMainPortfolio } from '../api/portfolioApi';
import './Home.css';

function Home() {
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch portfolio with id 1 on page load
    getMainPortfolio()
      .then(res => setPortfolio(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (!portfolio) return <div className="loading">Portfolio not found.</div>;

  return (
    <div className="home">
      <div className="home-hero">
        {portfolio.heroImageUrl && (
          <img
            src={portfolio.heroImageUrl}
            alt={portfolio.artistName}
            className="hero-image"
          />
        )}
      </div>
      <div className="home-bio">
        <h1>{portfolio.artistName}</h1>
        <p>{portfolio.bio}</p>
      </div>
    </div>
  );
}

export default Home;