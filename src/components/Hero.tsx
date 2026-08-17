import React from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, Eye, Sparkles, Target, BarChart2, FileCheck } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface HeroProps {
  name: string;
}

export const Hero: React.FC<HeroProps> = ({ name }) => {
  const displayName = name || 'SALAR S';

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Soft Colorful Gradient Glow Blobs */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '15%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, rgba(124, 58, 237, 0.1) 50%, transparent 70%)',
          filter: 'blur(60px)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          right: '10%',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, rgba(249, 115, 22, 0.08) 50%, transparent 70%)',
          filter: 'blur(60px)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid">
          
          {/* Hero Left Content */}
          <ScrollReveal variant="fade-right" delay={0.1}>
            <div className="hero-content">
              <div className="hero-eyebrow" style={{ background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.12) 0%, rgba(124, 58, 237, 0.12) 100%)', borderColor: '#BFDBFE', color: '#2563EB' }}>
                <Sparkles size={14} color="#7C3AED" />
                <span>PROFESSIONAL RESUME WRITER</span>
              </div>

              <h1 className="hero-title" style={{ fontSize: '3.2rem', lineHeight: 1.15 }}>
                I Craft Resumes That{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 50%, #06B6D4 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block'
                  }}
                >
                  Get You Noticed.
                </span>
              </h1>

              <p className="hero-subtitle">
                I help professionals transform their experience into compelling resumes, LinkedIn profiles, and career documents that communicate their value and make a stronger first impression.
              </p>

              <div className="hero-ctas">
                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, 'contact')}
                  className="btn btn-primary btn-lg"
                  style={{ background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)', border: 'none', boxShadow: '0 10px 25px -5px rgba(37, 99, 235, 0.4)' }}
                >
                  <span>Get My Resume Written</span>
                  <ArrowRight size={18} />
                </a>

                <a
                  href="#portfolio"
                  onClick={(e) => handleScrollTo(e, 'portfolio')}
                  className="btn btn-secondary btn-lg"
                >
                  <span>View My Work</span>
                </a>
              </div>

              <div className="hero-trust-line">
                <span style={{ color: '#2563EB', fontWeight: 600 }}>ATS-Friendly</span>
                <span className="trust-badge-dot" style={{ backgroundColor: '#7C3AED' }}></span>
                <span style={{ color: '#7C3AED', fontWeight: 600 }}>Professionally Written</span>
                <span className="trust-badge-dot" style={{ backgroundColor: '#06B6D4' }}></span>
                <span style={{ color: '#06B6D4', fontWeight: 600 }}>Tailored to Your Career Goals</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Hero Right Visual Composition */}
          <ScrollReveal variant="zoom-in" delay={0.2}>
            <div className="hero-visual" style={{ position: 'relative' }}>
              
              {/* Floating Widget 1 - ATS Match Score (Cyan / Teal Accent) */}
              <div className="floating-widget floating-widget-1" style={{ borderLeft: '4px solid #06B6D4', boxShadow: '0 15px 30px rgba(6, 182, 212, 0.15)' }}>
                <div className="widget-icon" style={{ backgroundColor: '#E0F2FE', color: '#0284C7' }}>
                  <ShieldCheck size={20} />
                </div>
                <div className="widget-text">
                  <p style={{ color: '#0284C7', fontWeight: 700, fontSize: '0.7rem' }}>ATS Match Score</p>
                  <h5 style={{ color: '#0F172A', fontWeight: 800 }}>98 / 100 Grade A</h5>
                </div>
              </div>

              {/* Floating Widget 2 - Interview Chances (Purple Accent) */}
              <div className="floating-widget floating-widget-2" style={{ borderLeft: '4px solid #7C3AED', boxShadow: '0 15px 30px rgba(124, 58, 237, 0.15)' }}>
                <div className="widget-icon" style={{ backgroundColor: '#F3E8FF', color: '#7C3AED' }}>
                  <TrendingUp size={20} />
                </div>
                <div className="widget-text">
                  <p style={{ color: '#7C3AED', fontWeight: 700, fontSize: '0.7rem' }}>Interview Chances</p>
                  <h5 style={{ color: '#0F172A', fontWeight: 800 }}>+140% Increase</h5>
                </div>
              </div>

              {/* Floating Widget 3 - Target Match (Orange Accent) */}
              <div
                className="floating-widget floating-widget-3"
                style={{
                  position: 'absolute',
                  bottom: '-10px',
                  left: '-20px',
                  zIndex: 4,
                  background: '#FFFFFF',
                  padding: '0.65rem 1.1rem',
                  borderRadius: '14px',
                  boxShadow: '0 15px 30px rgba(249, 115, 22, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.7rem',
                  border: '1px solid #E2E8F0',
                  borderLeft: '4px solid #F97316'
                }}
              >
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#FFEDD5', color: '#EA580C', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Target size={18} />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <p style={{ fontSize: '0.7rem', color: '#EA580C', fontWeight: 700, textTransform: 'uppercase', margin: 0 }}>Target Match</p>
                  <h5 style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>100% Role Alignment</h5>
                </div>
              </div>

              {/* Floating Widget 4 - Career Growth Graph Badge (Blue Accent) */}
              <div
                style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '-15px',
                  zIndex: 4,
                  background: '#FFFFFF',
                  padding: '0.5rem 0.9rem',
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px rgba(37, 99, 235, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  border: '1px solid #DBEAFE'
                }}
              >
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#EFF6FF', color: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <BarChart2 size={14} />
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#1E40AF' }}>Career Growth +45%</span>
              </div>

              {/* Main Visual Box: Male Portrait of Salar S + Resume Card Composition */}
              <div
                className="hero-card-stack"
                style={{
                  padding: '1.25rem',
                  background: '#FFFFFF',
                  borderRadius: '24px',
                  boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.12)',
                  border: '1px solid #E2E8F0',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', alignItems: 'center' }}>
                  
                  {/* Male Professional Image of Salar S in Corporate Suit */}
                  <div style={{ borderRadius: '16px', overflow: 'hidden', height: '290px', position: 'relative', boxShadow: '0 10px 20px rgba(0,0,0,0.08)' }}>
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                      alt="Salar S - Professional Male Resume Specialist"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: 'linear-gradient(to top, rgba(15, 23, 42, 0.9), transparent)',
                        padding: '1.25rem 0.85rem 0.85rem',
                        color: '#FFFFFF',
                        textAlign: 'left'
                      }}
                    >
                      <div style={{ fontSize: '1rem', fontWeight: 900, letterSpacing: '0.02em' }}>{displayName}</div>
                      <div style={{ fontSize: '0.725rem', color: '#93C5FD', fontWeight: 700, letterSpacing: '0.05em' }}>
                        RESUME SPECIALIST
                      </div>
                    </div>
                  </div>

                  {/* Resume Document Preview Box */}
                  <div
                    className="resume-preview-body"
                    style={{
                      padding: '0.85rem',
                      background: '#F8FAFC',
                      borderRadius: '14px',
                      border: '1px solid #E2E8F0',
                      height: '290px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)'
                    }}
                  >
                    <div className="applicant-info" style={{ borderBottom: '1px solid #E2E8F0', paddingBottom: '0.5rem', marginBottom: '0.4rem' }}>
                      <div className="applicant-details">
                        <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0F172A' }}>{displayName}</h4>
                        <p style={{ fontSize: '0.725rem', color: '#2563EB', fontWeight: 700 }}>RESUME SPECIALIST</p>
                      </div>
                      <div className="ats-badge-pill" style={{ fontSize: '0.65rem', padding: '0.15rem 0.45rem', backgroundColor: '#ECFDF5', color: '#059669', border: '1px solid #A7F3D0' }}>
                        <FileCheck size={12} />
                        <span>ATS Verified</span>
                      </div>
                    </div>

                    <div className="resume-section-block">
                      <div className="resume-block-title" style={{ fontSize: '0.65rem', color: '#7C3AED', fontWeight: 800 }}>EXECUTIVE SUMMARY</div>
                      <div className="resume-line w-100 highlight" style={{ height: '5px', background: 'linear-gradient(90deg, #2563EB, #7C3AED)' }}></div>
                      <div className="resume-line w-85" style={{ height: '5px' }}></div>
                    </div>

                    <div className="resume-section-block">
                      <div className="resume-block-title" style={{ fontSize: '0.65rem', color: '#06B6D4', fontWeight: 800 }}>STRATEGIC ACHIEVEMENTS</div>
                      <div className="resume-line w-100" style={{ height: '5px', background: '#CFFAFE' }}></div>
                      <div className="resume-line w-100" style={{ height: '5px', background: '#CFFAFE' }}></div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.5rem', borderTop: '1px dashed #E2E8F0', fontSize: '0.7rem', color: '#64748B' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', color: '#2563EB', fontWeight: 600 }}>
                        <Eye size={12} /> 6s Scannable
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', color: '#10B981', fontWeight: 600 }}>
                        <CheckCircle2 size={12} /> 100% Valid
                      </span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};
