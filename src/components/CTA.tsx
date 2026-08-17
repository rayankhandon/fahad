import React from 'react';
import { ArrowRight, Mail, Sparkles, CheckCircle2 } from 'lucide-react';
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
    <section className="section" style={{ backgroundColor: '#F8FAFC', padding: '4rem 0' }}>
      <div className="container">
        
        <ScrollReveal variant="zoom-in">
          <div
            className="cta-banner-card"
            style={{
              background: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 50%, #1E293B 100%)',
              borderRadius: '28px',
              padding: '4rem 2.5rem',
              color: '#FFFFFF',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.25)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            {/* Colorful Soft Gradient Blobs in CTA Card */}
            <div
              style={{
                position: 'absolute',
                top: '-30%',
                left: '10%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(37, 99, 235, 0.3) 0%, rgba(124, 58, 237, 0.2) 50%, transparent 70%)',
                filter: 'blur(60px)',
                pointerEvents: 'none'
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '-30%',
                right: '10%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, rgba(249, 115, 22, 0.2) 50%, transparent 70%)',
                filter: 'blur(60px)',
                pointerEvents: 'none'
              }}
            />

            <div style={{ position: 'relative', zIndex: 1, maxWidth: '720px', margin: '0 auto' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.4rem 1rem',
                  borderRadius: '999px',
                  background: 'rgba(255, 255, 255, 0.12)',
                  backdropFilter: 'blur(10px)',
                  color: '#93C5FD',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '1.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.15)'
                }}
              >
                <Sparkles size={14} color="#C084FC" />
                <span>ELEVATE YOUR CAREER BRAND</span>
              </div>

              <h2 style={{ fontSize: '2.75rem', fontWeight: 900, lineHeight: 1.2, color: '#FFFFFF', marginBottom: '1rem' }}>
                Ready to Make Your Next Career Move?
              </h2>

              <p style={{ fontSize: '1.15rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '2.5rem' }}>
                Let's turn your experience into a professional story that gets attention.
              </p>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, 'contact')}
                  className="btn btn-primary btn-lg"
                  style={{
                    background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
                    border: 'none',
                    padding: '0.95rem 2rem',
                    fontSize: '1.05rem',
                    boxShadow: '0 10px 25px -5px rgba(124, 58, 237, 0.5)'
                  }}
                >
                  <span>Start My Resume</span>
                  <ArrowRight size={18} />
                </a>

                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, 'contact')}
                  className="btn btn-secondary btn-lg"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    color: '#FFFFFF',
                    backdropFilter: 'blur(10px)',
                    padding: '0.95rem 2rem',
                    fontSize: '1.05rem'
                  }}
                >
                  <Mail size={18} color="#93C5FD" />
                  <span>Contact Me</span>
                </a>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '2.5rem', fontSize: '0.85rem', color: '#CBD5E1' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <CheckCircle2 size={14} color="#34D399" /> Fast 3-5 Day Delivery
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <CheckCircle2 size={14} color="#38BDF8" /> 100% ATS Verified
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <CheckCircle2 size={14} color="#C084FC" /> Revisions Included
                </span>
              </div>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
