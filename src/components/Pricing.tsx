import React from 'react';
import { PRICING_DATA } from '../data/portfolioData';
import { Check, Zap, Sparkles, ArrowRight } from 'lucide-react';
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
            <div className="section-eyebrow">
              <Zap size={14} />
              <span>TRANSPARENT PRICING</span>
            </div>
            <h2 className="section-title">Choose the Support You Need</h2>
            <p className="section-subtitle">
              Invest in your professional brand with clear, transparent pricing packages designed for every stage of your career.
            </p>
          </div>
        </ScrollReveal>

        {/* Pricing Cards Grid */}
        <div className="pricing-grid">
          {PRICING_DATA.map((pkg, index) => (
            <ScrollReveal key={pkg.id} variant="fade-up" delay={index * 0.1}>
              <div
                className={`pricing-card ${pkg.featured ? 'featured' : ''}`}
                style={{ height: '100%' }}
              >
                {pkg.featured && (
                  <div className="pricing-badge">
                    <Sparkles size={12} inline-style /> MOST POPULAR
                  </div>
                )}

                <h3 className="package-name">{pkg.name}</h3>
                <p style={{ fontSize: '0.9rem', color: '#64748B', marginBottom: '1.25rem' }}>{pkg.description}</p>

                <div className="package-price">
                  {pkg.price} <span>/ {pkg.period}</span>
                </div>

                <div className="package-features">
                  {pkg.features.map((feat, idx) => (
                    <div key={idx} className="feature-item">
                      <span className="feature-icon"><Check size={16} /></span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => onSelectPackage(pkg.name)}
                  className={`btn ${pkg.featured ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ marginTop: 'auto', width: '100%', justifyContent: 'center' }}
                >
                  <span>Get Started</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
