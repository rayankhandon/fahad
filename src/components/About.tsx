import React, { useState } from 'react';
import { CheckCircle2, User, Award, BookOpen, X, Target, Sparkles, HeartHandshake } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface AboutProps {
  name: string;
}

export const About: React.FC<AboutProps> = ({ name }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const displayName = name || 'Fahad';

  const specialties = [
    'Executive Resumes',
    'Professional Resumes',
    'Career Change Resumes',
    'LinkedIn Optimization',
    'Cover Letter Writing',
    'CV / Curriculum Vitae'
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-grid">
          
          {/* Left Column: Male Portrait Card of Fahad */}
          <ScrollReveal variant="fade-left">
            <div className="about-image-wrapper">
              <div className="about-image-card">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                  alt="Fahad - Professional Male Resume Specialist"
                  loading="lazy"
                />
              </div>
              
              {/* Experience Floating Badge */}
              <div className="about-experience-badge">
                <div className="badge-years">5+</div>
                <div className="badge-text">
                  Years of Career<br />Branding Expertise
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Story & Specializations */}
          <ScrollReveal variant="fade-right" delay={0.15}>
            <div className="about-content">
              <div className="section-eyebrow">
                <User size={14} />
                <span>ABOUT ME</span>
              </div>

              <h2 className="section-title" style={{ textAlign: 'left', fontSize: '2.4rem' }}>
                Your Experience Deserves a Resume That Tells the Right Story.
              </h2>

              <p className="about-lead">
                I'm <strong>{displayName}</strong>, a professional resume writer passionate about helping professionals stand out in competitive job markets.
              </p>

              <p className="about-p">
                I combine strategic storytelling, industry insights, and ATS-friendly writing to create career documents that open doors.
              </p>

              {/* Specialization Tags Grid */}
              <div className="specialties-grid">
                {specialties.map((item, idx) => (
                  <div key={idx} className="specialty-tag">
                    <span className="specialty-icon"><CheckCircle2 size={16} /></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* About Footer: Button & Personal Signature */}
              <div className="about-footer">
                <button
                  onClick={() => setModalOpen(true)}
                  className="btn btn-secondary"
                >
                  <BookOpen size={16} />
                  <span>More About Me</span>
                </button>

                <div className="writer-signature">
                  {displayName}
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>

      {/* "More About Me" Detailed Modal */}
      {modalOpen && (
        <div className="modal-backdrop" onClick={() => setModalOpen(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setModalOpen(false)}>
              <X size={20} />
            </button>

            <div className="modal-header">
              <div className="section-eyebrow">
                <Sparkles size={14} />
                <span>BACKGROUND & PHILOSOPHY</span>
              </div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800 }}>About {displayName}</h3>
              <p style={{ color: '#64748B', marginTop: '0.25rem' }}>Resume Specialist & Career Branding Consultant</p>
            </div>

            <div className="modal-body">
              <div>
                <h4 className="modal-section-title">
                  <Target size={18} color="#2563EB" />
                  My Resume Writing Philosophy
                </h4>
                <p style={{ color: '#475569', lineHeight: 1.65 }}>
                  A resume is not just a chronological list of job duties—it is a strategic marketing document designed to sell your future potential based on past achievements. Every sentence must answer one question for the employer: <em>"How did this candidate make things better, faster, or more profitable?"</em>
                </p>
              </div>

              <div>
                <h4 className="modal-section-title">
                  <Award size={18} color="#2563EB" />
                  Proven Track Record
                </h4>
                <p style={{ color: '#475569', lineHeight: 1.65 }}>
                  Over the past 5+ years, I have crafted 500+ resumes across 10+ industries—including Executive Leadership, Software Engineering, Finance, Supply Chain, and Marketing. My clients routinely secure interviews at top enterprises and high-growth firms.
                </p>
              </div>

              <div>
                <h4 className="modal-section-title">
                  <HeartHandshake size={18} color="#2563EB" />
                  100% Confidential & Collaborative
                </h4>
                <p style={{ color: '#475569', lineHeight: 1.65 }}>
                  I work directly with you 1-on-1 to unearth your strongest accomplishments. Your current job search status remains completely confidential, and every document is backed by our satisfaction guarantee.
                </p>
              </div>

              <div style={{ textAlign: 'right', paddingTop: '1rem', borderTop: '1px solid #E2E8F0' }}>
                <button className="btn btn-primary" onClick={() => setModalOpen(false)}>
                  Close Overview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
