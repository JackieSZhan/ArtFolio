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
    </div>
  );
}

export default Home;