import { useEffect, useState } from 'react';
import { getMainPortfolio } from '../api/portfolioApi';
import './Gallery.css';

function Gallery() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMainPortfolio()
      .then(res => setProjects(res.data.projects))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="gallery">
      <h2 className="gallery-title">Work</h2>
      {projects.length === 0 ? (
        <p className="gallery-empty">No projects yet.</p>
      ) : (
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p className="project-category">{project.category}</p>
              <p className="project-description">{project.description}</p>
              <div className="assets-grid">
                {project.assets.map(asset => (
                  <img
                    key={asset.id}
                    src={asset.imageUrl}
                    alt={asset.caption}
                    className="asset-image"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Gallery;