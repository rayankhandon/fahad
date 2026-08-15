import React from 'react';
import { WHY_CHOOSE_ME } from '../data/portfolioData';
import { Cpu, UserCheck, Compass, TrendingUp, Eye, MessageSquare, ShieldCheck, CheckCircle, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const WhyChooseMe: React.FC = () => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu size={22} />;
      case 'UserCheck': return <UserCheck size={22} />;
      case 'Compass': return <Compass size={22} />;
      case 'TrendingUp': return <TrendingUp size={22} />;
      case 'Eye': return <Eye size={22} />;
      case 'MessageSquare': return <MessageSquare size={22} />;
      case 'ShieldCheck': return <ShieldCheck size={22} />;
      case 'CheckCircle': return <CheckCircle size={22} />;
      default: return <Sparkles size={22} />;
    }
  };

  return (
    <section className="section" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="container">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up">
          <div className="section-header">
            <div className="section-eyebrow">
              <Sparkles size={14} />
              <span>THE ADVANTAGE</span>
            </div>
            <h2 className="section-title">Why Professionals Choose Me</h2>
            <p className="section-subtitle">
              Crafting a standout resume requires a blend of ATS technical optimization, recruiter psychology, and modern corporate storytelling.
            </p>
          </div>
        </ScrollReveal>

        {/* 8 Pillars Grid */}
        <div className="why-grid">
          {WHY_CHOOSE_ME.map((item, idx) => (
            <ScrollReveal key={idx} variant="fade-up" delay={idx * 0.06}>
              <div className="why-card" style={{ height: '100%' }}>
                <div className="why-icon">
                  {renderIcon(item.iconName)}
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.55 }}>{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
