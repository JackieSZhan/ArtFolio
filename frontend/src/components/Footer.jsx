import './Footer.css'
function Footer({ contactEmail }) {
  return (
    <footer className="site-footer">
      <div className="social-links">
        <a href={`mailto:${contactEmail}`} aria-label="Email">
          <i className="ti ti-mail"></i>
        </a>
        <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <i className="ti ti-brand-instagram"></i>
        </a>
        <a href="https://pinterest.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
          <i className="ti ti-brand-pinterest"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;