import React from 'react';
import { Route, Search, Compass, Edit3, CheckCircle } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Process: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Discovery',
      desc: 'We learn about your experience, goals, target roles, and career direction through a quick intake form or 1-on-1 discussion.',
      icon: <Search size={22} color="#2563EB" />
    },
    {
      num: '02',
      title: 'Strategy',
      desc: 'We identify your strongest selling points and position your experience strategically to match top recruiter criteria.',
      icon: <Compass size={22} color="#2563EB" />
    },
    {
      num: '03',
      title: 'Writing',
      desc: 'Your resume is professionally written, optimized for ATS parsers, and tailored to your target opportunities with quantified ROI bullet points.',
      icon: <Edit3 size={22} color="#2563EB" />
    },
    {
      num: '04',
      title: 'Delivery',
      desc: 'You receive a polished, professional document ready to use in PDF and editable Word formats, complete with revision support.',
      icon: <CheckCircle size={22} color="#2563EB" />
    }
  ];

  return (
    <section id="process" className="section" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up">
          <div className="section-header">
            <div className="section-eyebrow">
              <Route size={14} />
              <span>HOW WE WORK</span>
            </div>
            <h2 className="section-title">My Process</h2>
            <p className="section-subtitle">
              A seamless, transparent 4-step workflow designed to transform your career history into a interview-winning personal brand.
            </p>
          </div>
        </ScrollReveal>

        {/* 4-Step Process Cards */}
        <div className="process-grid">
          {steps.map((step, index) => (
            <ScrollReveal key={step.num} variant="fade-up" delay={index * 0.1}>
              <div className="process-card" style={{ height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div className="process-step-num">{step.num}</div>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {step.icon}
                  </div>
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.65rem' }}>{step.title}</h3>
                <p style={{ fontSize: '0.95rem', color: '#64748B', lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
