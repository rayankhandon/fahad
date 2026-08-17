import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/portfolioData';
import type { ServiceItem } from '../data/portfolioData';
import { FileText, Award, Mail, RefreshCw, GraduationCap, ArrowRight, Briefcase, X, Clock, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface ServicesProps {
  onSelectServiceForContact: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForContact }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Map service color themes to specific hex colors and light background tints
  const getColorStyle = (theme?: string) => {
    switch (theme) {
      case 'blue':
        return { primary: '#2563EB', lightBg: '#EFF6FF', border: '#BFDBFE' };
      case 'purple':
        return { primary: '#7C3AED', lightBg: '#F3E8FF', border: '#DDD6FE' };
      case 'cyan':
        return { primary: '#06B6D4', lightBg: '#E0F2FE', border: '#BAE6FD' };
      case 'orange':
        return { primary: '#F97316', lightBg: '#FFEDD5', border: '#FED7AA' };
      case 'teal':
        return { primary: '#14B8A6', lightBg: '#CCFBF1', border: '#99F6E4' };
      case 'violet':
        return { primary: '#8B5CF6', lightBg: '#EDE9FE', border: '#DDD6FE' };
      default:
        return { primary: '#2563EB', lightBg: '#EFF6FF', border: '#BFDBFE' };
    }
  };

  // Helper to map icon string to Lucide React Icon component
  const renderIcon = (iconName: string, color: string) => {
    switch (iconName) {
      case 'FileText': return <FileText size={24} color={color} />;
      case 'Award': return <Award size={24} color={color} />;
      case 'Linkedin': return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      );
      case 'Mail': return <Mail size={24} color={color} />;
      case 'RefreshCw': return <RefreshCw size={24} color={color} />;
      case 'GraduationCap': return <GraduationCap size={24} color={color} />;
      default: return <FileText size={24} color={color} />;
    }
  };

  return (
    <section id="services" className="section" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="container">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up">
          <div className="section-header">
            <div className="section-eyebrow" style={{ background: '#EFF6FF', color: '#2563EB', borderColor: '#BFDBFE' }}>
              <Briefcase size={14} />
              <span>MY SERVICES</span>
            </div>
            <h2 className="section-title">Career Documents That Open Doors</h2>
            <p className="section-subtitle">
              Whether you are aiming for a C-suite promotion, an industry pivot, or entering the job market, every document is strategically tailored for maximum callback impact.
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid with Unique Color Theme Accent for Each Card */}
        <div className="services-grid">
          {SERVICES_DATA.map((service, index) => {
            const colors = getColorStyle(service.colorTheme);
            return (
              <ScrollReveal key={service.id} variant="fade-up" delay={index * 0.08} className="service-card-wrapper">
                <div
                  className="service-card"
                  style={{
                    height: '100%',
                    backgroundColor: '#FFFFFF',
                    border: `1px solid ${colors.border}`,
                    borderTop: `4px solid ${colors.primary}`,
                    borderRadius: '16px',
                    padding: '1.75rem',
                    boxShadow: '0 4px 12px rgba(15, 23, 42, 0.03)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div
                      className="service-icon-box"
                      style={{
                        backgroundColor: colors.lightBg,
                        width: '52px',
                        height: '52px',
                        borderRadius: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1.25rem'
                      }}
                    >
                      {renderIcon(service.iconName, colors.primary)}
                    </div>
                    
                    <h3 className="service-title" style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.6rem' }}>
                      {service.title}
                    </h3>
                    
                    <p className="service-desc" style={{ color: '#64748B', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                      {service.shortDesc}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedService(service)}
                    className="service-link"
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                      color: colors.primary,
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      marginTop: 'auto'
                    }}
                  >
                    <span>Learn More</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="modal-backdrop" onClick={() => setSelectedService(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedService(null)}>
              <X size={20} />
            </button>

            {(() => {
              const colors = getColorStyle(selectedService.colorTheme);
              return (
                <>
                  <div className="modal-header">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                      <div className="service-icon-box" style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: colors.lightBg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 0 }}>
                        {renderIcon(selectedService.iconName, colors.primary)}
                      </div>
                      <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F172A' }}>{selectedService.title}</h3>
                    </div>
                    <p style={{ color: '#64748B' }}>{selectedService.shortDesc}</p>
                  </div>

                  <div className="modal-body">
                    <div>
                      <h4 className="modal-section-title">Service Overview</h4>
                      <p style={{ color: '#475569', lineHeight: 1.65 }}>{selectedService.fullDesc}</p>
                    </div>

                    <div>
                      <h4 className="modal-section-title">What's Included</h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginTop: '0.5rem' }}>
                        {selectedService.deliverables.map((item, idx) => (
                          <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem', color: '#0F172A' }}>
                            <CheckCircle2 size={16} color={colors.primary} />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: colors.lightBg, padding: '0.85rem 1.25rem', borderRadius: '10px', color: colors.primary, fontSize: '0.9rem', fontWeight: 700, border: `1px solid ${colors.border}` }}>
                      <Clock size={18} />
                      <span>Estimated Turnaround: {selectedService.turnaround}</span>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid #E2E8F0' }}>
                      <button className="btn btn-secondary" onClick={() => setSelectedService(null)}>
                        Close
                      </button>

                      <button
                        className="btn btn-primary"
                        style={{ backgroundColor: colors.primary, borderColor: colors.primary }}
                        onClick={() => {
                          const title = selectedService.title;
                          setSelectedService(null);
                          onSelectServiceForContact(title);
                        }}
                      >
                        <span>Select This Service</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </section>
  );
};
