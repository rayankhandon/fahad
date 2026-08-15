import React from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, Eye, Sparkles, Target } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface HeroProps {
  name: string;
}

export const Hero: React.FC<HeroProps> = ({ name }) => {
  const displayName = name || 'FAHAD';

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
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          
          {/* Hero Left Content */}
          <ScrollReveal variant="fade-right" delay={0.1}>
            <div className="hero-content">
              <div className="hero-eyebrow">
                <Sparkles size={14} />
                <span>PROFESSIONAL RESUME WRITER</span>
              </div>

              <h1 className="hero-title">
                I Craft Resumes That <span className="text-highlight">Get You Noticed.</span>
              </h1>

              <p className="hero-subtitle">
                I help professionals transform their experience into compelling resumes, LinkedIn profiles, and career documents that communicate their value and make a stronger first impression.
              </p>

              <div className="hero-ctas">
                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, 'contact')}
                  className="btn btn-primary btn-lg"
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
                <span>ATS-Friendly</span>
                <span className="trust-badge-dot"></span>
                <span>Professionally Written</span>
                <span className="trust-badge-dot"></span>
                <span>Tailored to Your Career Goals</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Hero Right Visual Composition */}
          <ScrollReveal variant="zoom-in" delay={0.2}>
            <div className="hero-visual">
              
              {/* Top Floating Widget - ATS Score */}
              <div className="floating-widget floating-widget-1">
                <div className="widget-icon green">
                  <ShieldCheck size={20} />
                </div>
                <div className="widget-text">
                  <p>ATS Match Score</p>
                  <h5>98 / 100 Grade A</h5>
                </div>
              </div>

              {/* Bottom Floating Widget - Interview Chances */}
              <div className="floating-widget floating-widget-2">
                <div className="widget-icon blue">
                  <TrendingUp size={20} />
                </div>
                <div className="widget-text">
                  <p>Interview Chances</p>
                  <h5>+140% Increase</h5>
                </div>
              </div>

              {/* Third Floating Badge - Target Match */}
              <div className="floating-widget floating-widget-3" style={{ position: 'absolute', bottom: '10px', left: '-15px', zIndex: 4, background: '#FFFFFF', padding: '0.6rem 1rem', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: '0.6rem', border: '1px solid #E2E8F0' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#EFF6FF', color: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Target size={16} />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <p style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase' }}>Target Match</p>
                  <h5 style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>100% Role Alignment</h5>
                </div>
              </div>

              {/* Main Visual Box: Male Portrait + Resume Card Composition */}
              <div className="hero-card-stack" style={{ padding: '1rem', background: '#FFFFFF', borderRadius: '20px', boxShadow: '0 20px 40px rgba(15, 23, 42, 0.08)', border: '1px solid #E2E8F0' }}>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', alignItems: 'center' }}>
                  {/* Male Professional Image of Fahad */}
                  <div style={{ borderRadius: '14px', overflow: 'hidden', height: '280px', position: 'relative', boxShadow: '0 8px 16px rgba(0,0,0,0.06)' }}>
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                      alt="Fahad - Professional Male Resume Specialist"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(15, 23, 42, 0.85), transparent)', padding: '1rem 0.75rem 0.75rem', color: '#FFFFFF', textAlign: 'left' }}>
                      <div style={{ fontSize: '0.9rem', fontWeight: 800 }}>{displayName}</div>
                      <div style={{ fontSize: '0.725rem', color: '#93C5FD', fontWeight: 600 }}>RESUME SPECIALIST</div>
                    </div>
                  </div>

                  {/* Resume Preview Document Column */}
                  <div className="resume-preview-body" style={{ padding: '0.75rem', background: '#F8FAFC', borderRadius: '12px', border: '1px solid #E2E8F0', height: '280px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    
                    <div className="applicant-info" style={{ borderBottom: '1px solid #E2E8F0', paddingBottom: '0.5rem', marginBottom: '0.4rem' }}>
                      <div className="applicant-details">
                        <h4 style={{ fontSize: '0.9rem', fontWeight: 800 }}>{displayName}</h4>
                        <p style={{ fontSize: '0.725rem', color: '#2563EB', fontWeight: 700 }}>RESUME SPECIALIST</p>
                      </div>
                      <div className="ats-badge-pill" style={{ fontSize: '0.65rem', padding: '0.15rem 0.4rem' }}>
                        <CheckCircle2 size={12} />
                        <span>ATS Passed</span>
                      </div>
                    </div>

                    <div className="resume-section-block">
                      <div className="resume-block-title" style={{ fontSize: '0.65rem' }}>EXECUTIVE PROFILE</div>
                      <div className="resume-line w-100 highlight" style={{ height: '5px' }}></div>
                      <div className="resume-line w-85" style={{ height: '5px' }}></div>
                    </div>

                    <div className="resume-section-block">
                      <div className="resume-block-title" style={{ fontSize: '0.65rem' }}>STRATEGIC IMPACT</div>
                      <div className="resume-line w-100" style={{ height: '5px', background: '#DBEAFE' }}></div>
                      <div className="resume-line w-100" style={{ height: '5px', background: '#DBEAFE' }}></div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.5rem', borderTop: '1px dashed #E2E8F0', fontSize: '0.7rem', color: '#64748B' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}><Eye size={12} color="#2563EB" /> Scannable (6s)</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}><CheckCircle2 size={12} color="#10B981" /> 100% Valid</span>
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
