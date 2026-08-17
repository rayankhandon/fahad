import React, { useState } from 'react';
import { CheckCircle2, User, Award, BookOpen, X, Target, Sparkles, HeartHandshake } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface AboutProps {
  name: string;
}

export const About: React.FC<AboutProps> = ({ name }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const displayName = name || 'Salar S';

  const specialties = [
    'Executive Resumes',
    'Professional Resumes',
    'Career Change Resumes',
    'LinkedIn Optimization',
    'Cover Letter Writing',
    'CV / Curriculum Vitae'
  ];

  return (
    <section id="about" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Decorative Gradient Background Glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '-5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.1) 0%, rgba(37, 99, 235, 0.08) 50%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="about-grid">
          
          {/* Left Column: Male Portrait Card of Salar S with Colorful Background Elements */}
          <ScrollReveal variant="fade-left">
            <div className="about-image-wrapper" style={{ position: 'relative' }}>
              
              {/* Colorful Backdrop Blob Shape */}
              <div
                style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '-15px',
                  right: '15px',
                  bottom: '15px',
                  borderRadius: '24px',
                  background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 50%, #06B6D4 100%)',
                  opacity: 0.15,
                  zIndex: 0
                }}
              />

              <div className="about-image-card" style={{ position: 'relative', zIndex: 1, border: '2px solid #FFFFFF', boxShadow: '0 20px 40px rgba(15, 23, 42, 0.1)' }}>
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                  alt="Salar S - Professional Male Resume Specialist"
                  loading="lazy"
                />
              </div>
              
              {/* Experience Floating Badge */}
              <div
                className="about-experience-badge"
                style={{
                  background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
                  borderLeft: '4px solid #7C3AED',
                  boxShadow: '0 15px 30px rgba(124, 58, 237, 0.25)',
                  position: 'absolute',
                  bottom: '-20px',
                  right: '-10px',
                  zIndex: 2
                }}
              >
                <div className="badge-years" style={{ color: '#FACC15', fontWeight: 900 }}>5+</div>
                <div className="badge-text" style={{ color: '#FFFFFF' }}>
                  Years of Career<br />Branding Expertise
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Story & Specializations */}
          <ScrollReveal variant="fade-right" delay={0.15}>
            <div className="about-content">
              <div className="section-eyebrow" style={{ background: '#F3E8FF', borderColor: '#DDD6FE', color: '#7C3AED' }}>
                <User size={14} color="#7C3AED" />
                <span>ABOUT ME</span>
              </div>

              <h2 className="section-title" style={{ textAlign: 'left', fontSize: '2.4rem', color: '#0F172A' }}>
                Your Experience Deserves a Resume That Tells the Right Story.
              </h2>

              <p className="about-lead" style={{ fontSize: '1.15rem', color: '#334155' }}>
                I'm <strong>{displayName}</strong>, a professional resume writer passionate about helping professionals stand out in competitive job markets.
              </p>

              <p className="about-p" style={{ color: '#64748B' }}>
                I combine strategic storytelling, industry insights, and ATS-friendly writing to create career documents that open doors.
              </p>

              {/* Specialization Tags Grid */}
              <div className="specialties-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.85rem', margin: '1.5rem 0' }}>
                {specialties.map((item, idx) => (
                  <div
                    key={idx}
                    className="specialty-tag"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      padding: '0.6rem 0.85rem',
                      borderRadius: '10px',
                      backgroundColor: '#F8FAFC',
                      border: '1px solid #E2E8F0',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: '#0F172A'
                    }}
                  >
                    <span className="specialty-icon" style={{ color: '#2563EB', display: 'flex', alignItems: 'center' }}>
                      <CheckCircle2 size={16} />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* About Footer: Button & Personal Signature */}
              <div className="about-footer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', paddingTop: '1rem', borderTop: '1px solid #E2E8F0' }}>
                <button
                  onClick={() => setModalOpen(true)}
                  className="btn btn-secondary"
                  style={{ borderRadius: '12px' }}
                >
                  <BookOpen size={16} color="#2563EB" />
                  <span>More About Me</span>
                </button>

                <div className="writer-signature" style={{ fontFamily: 'Georgia, serif', fontSize: '1.8rem', fontStyle: 'italic', fontWeight: 'bold', color: '#2563EB' }}>
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
              <div className="section-eyebrow" style={{ background: '#EFF6FF', color: '#2563EB' }}>
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
                  <Award size={18} color="#7C3AED" />
                  Proven Track Record
                </h4>
                <p style={{ color: '#475569', lineHeight: 1.65 }}>
                  Over the past 5+ years, I have crafted 500+ resumes across 10+ industries—including Executive Leadership, Software Engineering, Finance, Supply Chain, and Marketing. My clients routinely secure interviews at top enterprises and high-growth firms.
                </p>
              </div>

              <div>
                <h4 className="modal-section-title">
                  <HeartHandshake size={18} color="#06B6D4" />
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
