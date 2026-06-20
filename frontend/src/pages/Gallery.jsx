import { useEffect, useState } from 'react';
import { getMainPortfolio } from '../api/portfolioApi';
import './Gallery.css';

function Gallery() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMainPortfolio()
      .then(res => setProjects(res.data.projects || []))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="loading">Loading...</div>;

  if (projects.length === 0) {
    return (
      <div className="gallery">
        <p className="gallery-empty">No work uploaded yet.</p>
      </div>
    );
  }

  // Group projects by category, preserving the order categories first appear in
  const categoryOrder = [];
  const grouped = {};
  projects.forEach(project => {
    const category = project.category || 'Other';
    if (!grouped[category]) {
      grouped[category] = [];
      categoryOrder.push(category);
    }
    grouped[category].push(project);
  });

  // Within each category, sort by displayOrder
  categoryOrder.forEach(category => {
    grouped[category].sort((a, b) => (a.displayOrder ?? 0) - (b.displayOrder ?? 0));
  });

  return (
    <div className="gallery">
      {categoryOrder.map(category => (
        <section key={category} className="category-section">
          <h2 className="category-title">{category}</h2>
          <div className="category-grid">
            {grouped[category].map(project => {
              const cover = project.assets && project.assets[0];
              return (
                <div key={project.id} className="work-card">
                  {cover && (
                    <img
                      src={cover.imageUrl}
                      alt={project.title}
                      className="work-image"
                    />
                  )}
                  <p className="work-title">{project.title}</p>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}

export default Gallery;