import React from 'react';
import { PRICING_DATA } from '../data/portfolioData';
import { Check, Star, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface PricingProps {
  onSelectPackage: (packageName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPackage }) => {
  return (
    <section id="pricing" className="section" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="container">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up">
          <div className="section-header">
            <div className="section-eyebrow" style={{ background: '#CCFBF1', color: '#0D9488', borderColor: '#99F6E4' }}>
              <Tag size={14} />
              <span>TRANSPARENT PRICING</span>
            </div>
            <h2 className="section-title">Investment Packages</h2>
            <p className="section-subtitle">
              Select the right level of career branding service for your experience level and job search goals.
            </p>
          </div>
        </ScrollReveal>

        {/* Pricing Cards Grid */}
        <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '2rem', alignItems: 'stretch' }}>
          {PRICING_DATA.map((pkg, index) => (
            <ScrollReveal key={pkg.id} variant="fade-up" delay={index * 0.1}>
              <div
                className={`pricing-card ${pkg.featured ? 'featured' : ''}`}
                style={{
                  height: '100%',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '24px',
                  padding: '2.25rem 2rem',
                  border: pkg.featured ? '2px solid #7C3AED' : '1px solid #E2E8F0',
                  boxShadow: pkg.featured ? '0 20px 40px rgba(124, 58, 237, 0.15)' : '0 4px 12px rgba(15, 23, 42, 0.03)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transform: pkg.featured ? 'scale(1.02)' : 'none'
                }}
              >
                {pkg.featured && (
                  <div
                    className="featured-badge"
                    style={{
                      position: 'absolute',
                      top: '-14px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
                      color: '#FFFFFF',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      padding: '0.35rem 1rem',
                      borderRadius: '999px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      boxShadow: '0 4px 10px rgba(124, 58, 237, 0.3)'
                    }}
                  >
                    <Star size={12} fill="#FFFFFF" />
                    <span>MOST POPULAR</span>
                  </div>
                )}

                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.4rem' }}>{pkg.name}</h3>
                  <p style={{ color: '#64748B', fontSize: '0.875rem', minHeight: '40px', marginBottom: '1.25rem' }}>{pkg.description}</p>

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', marginBottom: '1.5rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '1.25rem' }}>
                    <span style={{ fontSize: '2.75rem', fontWeight: 900, color: pkg.featured ? '#7C3AED' : '#0F172A', lineHeight: 1 }}>{pkg.price}</span>
                    <span style={{ color: '#64748B', fontSize: '0.85rem', fontWeight: 600, textTransform: 'capitalize' }}>/ {pkg.period}</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.925rem', color: '#0F172A' }}>
                        <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: pkg.featured ? '#F3E8FF' : '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <Check size={14} color={pkg.featured ? '#7C3AED' : '#2563EB'} />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onSelectPackage(pkg.name)}
                  className={`btn ${pkg.featured ? 'btn-primary' : 'btn-secondary'}`}
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    borderRadius: '12px',
                    padding: '0.85rem',
                    background: pkg.featured ? 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)' : '#FFFFFF',
                    borderColor: pkg.featured ? 'none' : '#CBD5E1',
                    boxShadow: pkg.featured ? '0 10px 20px rgba(124, 58, 237, 0.25)' : 'none'
                  }}
                >
                  <span>Choose {pkg.name}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', marginTop: '3rem', color: '#64748B', fontSize: '0.9rem', fontWeight: 600 }}>
          <ShieldCheck size={18} color="#10B981" />
          <span>100% Satisfaction Guarantee • Direct 1-on-1 Collaboration with Salar S</span>
        </div>

      </div>
    </section>
  );
};
