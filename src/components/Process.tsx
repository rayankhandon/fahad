import React from 'react';
import { Compass, FileSearch, PenTool, Send, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Process: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      desc: 'We review your career history, intake questionnaire, target job descriptions, and core achievements to define your positioning strategy.',
      icon: <FileSearch size={24} color="#2563EB" />,
      color: '#2563EB',
      bgColor: '#EFF6FF',
      borderColor: '#BFDBFE'
    },
    {
      number: '02',
      title: 'Strategy',
      desc: 'We map out high-value keywords, ATS structural hierarchy, and quantifiable metrics to ensure your resume stands out to hiring managers.',
      icon: <Compass size={24} color="#7C3AED" />,
      color: '#7C3AED',
      bgColor: '#F3E8FF',
      borderColor: '#DDD6FE'
    },
    {
      number: '03',
      title: 'Writing',
      desc: 'I custom-craft your resume, cover letter, and LinkedIn profile from scratch using active action verbs and executive-level phrasing.',
      icon: <PenTool size={24} color="#06B6D4" />,
      color: '#06B6D4',
      bgColor: '#E0F2FE',
      borderColor: '#BAE6FD'
    },
    {
      number: '04',
      title: 'Delivery',
      desc: 'You receive fully editable Word & ATS-verified PDF files, complete with revisions to ensure 100% satisfaction with your new documents.',
      icon: <Send size={24} color="#F97316" />,
      color: '#F97316',
      bgColor: '#FFEDD5',
      borderColor: '#FED7AA'
    }
  ];

  return (
    <section id="process" className="section" style={{ backgroundColor: '#FFFFFF', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up">
          <div className="section-header">
            <div className="section-eyebrow" style={{ background: '#F3E8FF', color: '#7C3AED', borderColor: '#DDD6FE' }}>
              <CheckCircle2 size={14} />
              <span>THE WORKFLOW</span>
            </div>
            <h2 className="section-title">My 4-Step Process</h2>
            <p className="section-subtitle">
              A structured, collaborative approach engineered to deliver an exceptional resume with zero stress.
            </p>
          </div>
        </ScrollReveal>

        {/* Process Timeline Grid */}
        <div className="process-grid" style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
          
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} variant="fade-up" delay={index * 0.1}>
              <div
                className="process-card"
                style={{
                  backgroundColor: '#F8FAFC',
                  borderRadius: '18px',
                  padding: '2rem 1.5rem',
                  border: `1px solid ${step.borderColor}`,
                  borderTop: `4px solid ${step.color}`,
                  position: 'relative',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 12px rgba(15, 23, 42, 0.03)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                    <div style={{ width: '50px', height: '50px', borderRadius: '14px', backgroundColor: step.bgColor, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {step.icon}
                    </div>
                    <span style={{ fontSize: '1.75rem', fontWeight: 900, color: step.color, opacity: 0.85, fontFamily: 'var(--font-heading)' }}>
                      {step.number}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.75rem' }}>
                    {step.title}
                  </h3>

                  <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    {step.desc}
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '1.5rem', fontSize: '0.8rem', fontWeight: 700, color: step.color }}>
                  <CheckCircle2 size={14} />
                  <span>Step {step.number} Complete</span>
                </div>
              </div>
            </ScrollReveal>
          ))}

        </div>

      </div>
    </section>
  );
};
