import { useEffect, useState } from 'react';
import { getMainPortfolio } from '../api/portfolioApi';
import './Contact.css';

function Contact() {
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    getMainPortfolio()
      .then(res => setPortfolio(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="contact">
      <h2>Contact</h2>
      {portfolio && (
        <a href={`mailto:${portfolio.contactEmail}`} className="contact-email">
          {portfolio.contactEmail}
        </a>
      )}
    </div>
  );
}

export default Contact;