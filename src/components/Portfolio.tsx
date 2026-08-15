import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import type { PortfolioProject } from '../data/portfolioData';
import { FolderGit2, Eye, X, CheckCircle2, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const categories = ['All', 'Executive', 'Corporate', 'Technology', 'Marketing', 'Finance', 'Entry Level'];

  const filteredProjects = activeCategory === 'All'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="section" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="container">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up">
          <div className="section-header">
            <div className="section-eyebrow">
              <FolderGit2 size={14} />
              <span>PORTFOLIO / SAMPLES</span>
            </div>
            <h2 className="section-title">Selected Work</h2>
            <p className="section-subtitle">
              Explore real case studies showing how strategic resume repositioning translated into interview callbacks and executive roles.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filter Pills */}
        <ScrollReveal variant="fade-up" delay={0.1}>
          <div className="portfolio-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Portfolio Projects Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} variant="fade-up" delay={index * 0.08} className="portfolio-card-wrapper">
              <div className="portfolio-card" style={{ height: '100%' }}>
                <div className="portfolio-thumb">
                  <img src={project.previewImage} alt={project.title} loading="lazy" />
                  <span className="portfolio-industry-tag">{project.industry}</span>
                </div>

                <div className="portfolio-content">
                  <h3 className="portfolio-role">{project.role}</h3>
                  <p className="portfolio-desc">{project.shortDesc}</p>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn btn-secondary btn-sm"
                    style={{ marginTop: 'auto', width: '100%', justifyContent: 'center' }}
                  >
                    <Eye size={16} />
                    <span>View Case Study</span>
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>
              <X size={20} />
            </button>

            <div className="modal-header">
              <span className="portfolio-industry-tag" style={{ position: 'static', display: 'inline-block', marginBottom: '0.75rem' }}>
                {selectedProject.category} • {selectedProject.industry}
              </span>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800 }}>{selectedProject.title}</h3>
              <p style={{ color: '#64748B', marginTop: '0.25rem' }}>Target Role: <strong>{selectedProject.role}</strong></p>
            </div>

            <div className="modal-body">
              {/* Client Challenge */}
              <div>
                <h4 className="modal-section-title">
                  <Target size={18} color="#DC2626" />
                  Client Challenge
                </h4>
                <p style={{ color: '#475569', lineHeight: 1.65 }}>{selectedProject.clientChallenge}</p>
              </div>

              {/* Strategy */}
              <div>
                <h4 className="modal-section-title">
                  <Lightbulb size={18} color="#2563EB" />
                  Our Resume Strategy
                </h4>
                <p style={{ color: '#475569', lineHeight: 1.65 }}>{selectedProject.strategy}</p>
              </div>

              {/* Before vs After Snippet Transformation */}
              <div style={{ background: '#F8FAFC', padding: '1.25rem', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                <h4 className="modal-section-title" style={{ fontSize: '1rem' }}>Resume Transformation Snippet</h4>
                
                <div style={{ marginBottom: '1rem', padding: '0.85rem', background: '#FEF2F2', borderLeft: '4px solid #EF4444', borderRadius: '6px' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#991B1B', textTransform: 'uppercase' }}>BEFORE</div>
                  <p style={{ fontSize: '0.9rem', color: '#7F1D1D', fontStyle: 'italic', marginTop: '0.25rem' }}>"{selectedProject.beforeSnippet}"</p>
                </div>

                <div style={{ padding: '0.85rem', background: '#F0FDF4', borderLeft: '4px solid #10B981', borderRadius: '6px' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#166534', textTransform: 'uppercase' }}>AFTER</div>
                  <p style={{ fontSize: '0.9rem', color: '#064E3B', fontWeight: 500, marginTop: '0.25rem' }}>"{selectedProject.afterSnippet}"</p>
                </div>
              </div>

              {/* Key Improvements */}
              <div>
                <h4 className="modal-section-title">
                  <CheckCircle2 size={18} color="#2563EB" />
                  Key Optimizations
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {selectedProject.keyImprovements.map((imp, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: '#0F172A' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2563EB' }}></span>
                      <span>{imp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Final Result */}
              <div style={{ background: '#ECFDF5', border: '1px solid #A7F3D0', padding: '1.25rem', borderRadius: '12px', color: '#065F46' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <TrendingUp size={18} color="#059669" />
                  Final Career Outcome
                </h4>
                <p style={{ fontWeight: 600, fontSize: '0.95rem' }}>{selectedProject.finalResult}</p>
              </div>

              <div style={{ textAlign: 'right', paddingTop: '1rem', borderTop: '1px solid #E2E8F0' }}>
                <button className="btn btn-primary" onClick={() => setSelectedProject(null)}>
                  Close Case Study
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
