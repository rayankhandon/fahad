import React from 'react';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const CTA: React.FC = () => {
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
    <section className="section" style={{ padding: '4rem 0', backgroundColor: '#F8FAFC' }}>
      <div className="container">
        <ScrollReveal variant="zoom-in">
          <div className="cta-banner">
            
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(37, 99, 235, 0.2)', padding: '0.35rem 0.85rem', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 700, color: '#60A5FA', border: '1px solid rgba(96, 165, 250, 0.3)', marginBottom: '1.5rem' }}>
              <Sparkles size={14} />
              <span>TAKE THE NEXT STEP IN YOUR CAREER</span>
            </div>

            <h2 className="cta-title">Ready to Make Your Next Career Move?</h2>
            
            <p className="cta-text">
              Let's turn your experience into a professional story that gets attention.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="btn btn-primary btn-lg"
              >
                <span>Start My Resume</span>
                <ArrowRight size={18} />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="btn btn-secondary btn-lg"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#FFFFFF', borderColor: 'rgba(255, 255, 255, 0.25)' }}
              >
                <Mail size={18} />
                <span>Contact Me</span>
              </a>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
