import React from 'react';
import { Mail, ShieldCheck, ArrowUp } from 'lucide-react';

interface FooterProps {
  name: string;
}

export const Footer: React.FC<FooterProps> = ({ name }) => {
  const displayName = name || 'SALAR S';

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
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
    <footer className="footer" style={{ backgroundColor: '#0F172A', color: '#FFFFFF', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="container">
        
        <div className="footer-grid">
          
          {/* Brand Info */}
          <div className="footer-brand">
            <div className="logo-brand">
              <div className="logo-monogram" style={{ background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)', color: '#FFFFFF', fontWeight: 900 }}>
                SS
              </div>
              <div className="logo-text">
                <span className="logo-name" style={{ color: '#FFFFFF' }}>{displayName}</span>
                <span className="logo-tagline" style={{ color: '#60A5FA', fontWeight: 800 }}>RESUME SPECIALIST</span>
              </div>
            </div>

            <p style={{ color: '#94A3B8', marginTop: '1rem', lineHeight: 1.6 }}>
              Helping professionals transform their experience into compelling resumes, LinkedIn profiles, and career documents that communicate their value and make a stronger first impression.
            </p>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <a href="https://linkedin.com/in/salar-resumespecialist" target="_blank" rel="noopener noreferrer" style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#1E293B', color: '#60A5FA', display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="mailto:salar.resumespecialist@gmail.com" style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#1E293B', color: '#60A5FA', display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="footer-title" style={{ color: '#FFFFFF', fontWeight: 800 }}>Navigation</h4>
            <div className="footer-links">
              <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="footer-link">Home</a>
              <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="footer-link">About Me</a>
              <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="footer-link">Services</a>
              <a href="#portfolio" onClick={(e) => handleNavClick(e, '#portfolio')} className="footer-link">Selected Work</a>
              <a href="#process" onClick={(e) => handleNavClick(e, '#process')} className="footer-link">My Process</a>
            </div>
          </div>

          {/* Core Services Links */}
          <div>
            <h4 className="footer-title" style={{ color: '#FFFFFF', fontWeight: 800 }}>Services</h4>
            <div className="footer-links">
              <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="footer-link">Resume Writing</a>
              <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="footer-link">Executive Resume Writing</a>
              <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="footer-link">LinkedIn Profile Optimization</a>
              <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="footer-link">Cover Letter Writing</a>
              <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="footer-link">Career Change Resume</a>
              <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="footer-link">CV Writing</a>
            </div>
          </div>

          {/* Guarantees & Support */}
          <div>
            <h4 className="footer-title" style={{ color: '#FFFFFF', fontWeight: 800 }}>Quality Guarantee</h4>
            <p style={{ fontSize: '0.875rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '1rem' }}>
              Every resume is 100% custom-crafted, ATS-optimized, and backed by direct collaboration with Salar S.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#34D399', fontSize: '0.85rem', fontWeight: 700 }}>
              <ShieldCheck size={16} />
              <span>100% Satisfaction Guaranteed</span>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom" style={{ borderTop: '1px solid #1E293B', paddingTop: '1.5rem', marginTop: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: '#64748B', fontSize: '0.875rem' }}>
            &copy; {new Date().getFullYear()} {displayName}. All Rights Reserved. • Professional Resume Specialist
          </p>

          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: '#1E293B', color: '#FFFFFF', border: '1px solid #334155', borderRadius: '8px', padding: '0.4rem 0.85rem', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 700 }}
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
};
