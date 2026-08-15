import React from 'react';
import { Mail, ShieldCheck, ArrowUp } from 'lucide-react';

interface FooterProps {
  name: string;
}

export const Footer: React.FC<FooterProps> = ({ name }) => {
  const displayName = name || 'FAHAD';

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

  const getMonogram = (fullName: string) => {
    if (!fullName || fullName === '[YOUR NAME]') return 'F';
    const parts = fullName.trim().split(' ');
    if (parts.length >= 2 && parts[0] !== 'FAHAD') {
      return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
    }
    return 'F';
  };

  return (
    <footer className="footer">
      <div className="container">
        
        <div className="footer-grid">
          
          {/* Brand Info */}
          <div className="footer-brand">
            <div className="logo-brand">
              <div className="logo-monogram">{getMonogram(displayName)}</div>
              <div className="logo-text">
                <span className="logo-name" style={{ color: '#FFFFFF' }}>{displayName}</span>
                <span className="logo-tagline" style={{ color: '#94A3B8' }}>RESUME SPECIALIST</span>
              </div>
            </div>

            <p>
              Helping professionals transform their experience into compelling resumes, LinkedIn profiles, and career documents that communicate their value and make a stronger first impression.
            </p>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <a href="https://linkedin.com/in/fahad-resumespecialist" target="_blank" rel="noopener noreferrer" style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#1E293B', color: '#60A5FA', display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="mailto:fahad.resumespecialist@gmail.com" style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#1E293B', color: '#60A5FA', display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="footer-title">Navigation</h4>
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
            <h4 className="footer-title">Services</h4>
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
            <h4 className="footer-title">Trust & Support</h4>
            <div className="footer-links" style={{ fontSize: '0.85rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#10B981' }}>
                <ShieldCheck size={16} /> 100% ATS Guaranteed
              </span>
              <span>Turnaround: 3-5 Days</span>
              <span>100% Client Confidentiality</span>
              <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="footer-link" style={{ color: '#2563EB', fontWeight: 600 }}>Contact Me →</a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div>
            © 2026 FAHAD. All Rights Reserved.
          </div>

          <button
            onClick={scrollToTop}
            style={{ background: '#1E293B', border: '1px solid #334155', color: '#FFFFFF', padding: '0.4rem 0.85rem', borderRadius: '6px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer' }}
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
};
