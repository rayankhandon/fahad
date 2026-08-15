import React from 'react';
import { Award, TrendingUp, Users, ThumbsUp, Info } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Results: React.FC = () => {
  const outcomes = [
    {
      val: '87%',
      title: 'Increase in Interview Callbacks',
      desc: 'Clients report significantly higher response rates within 14 days of job submission.',
      icon: <TrendingUp size={24} />
    },
    {
      val: '3x',
      title: 'More Recruiter Visibility',
      desc: 'LinkedIn profile re-engineering leads to direct inbound recruiter messages.',
      icon: <Award size={24} />
    },
    {
      val: '500+',
      title: 'Professionals Supported',
      desc: 'Across Fortune 500 companies, startups, healthcare, tech, and financial institutions.',
      icon: <Users size={24} />
    },
    {
      val: '95%',
      title: 'Client Satisfaction Rate',
      desc: 'Based on post-delivery review surveys and client career success feedback.',
      icon: <ThumbsUp size={24} />
    }
  ];

  return (
    <section className="section results-section">
      <div className="container">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up">
          <div className="section-header" style={{ color: '#FFFFFF' }}>
            <div className="section-eyebrow" style={{ backgroundColor: 'rgba(37, 99, 235, 0.2)', borderColor: 'rgba(37, 99, 235, 0.4)' }}>
              <Award size={14} />
              <span>MEASURABLE IMPACT</span>
            </div>
            <h2 className="section-title" style={{ color: '#FFFFFF' }}>Results That Speak for Themselves</h2>
            <p className="section-subtitle" style={{ color: '#94A3B8' }}>
              We measure our success by the tangible career milestones and salary increases achieved by our clients.
            </p>
          </div>
        </ScrollReveal>

        {/* Results Cards Grid */}
        <div className="results-grid">
          {outcomes.map((item, idx) => (
            <ScrollReveal key={idx} variant="zoom-in" delay={idx * 0.1}>
              <div className="result-card" style={{ height: '100%' }}>
                <div className="result-val">{item.val}</div>
                <h3 className="result-title">{item.title}</h3>
                <p className="result-desc">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Metric Disclaimer */}
        <ScrollReveal variant="fade" delay={0.4}>
          <div style={{ textAlign: 'center', marginTop: '2.5rem', color: '#64748B', fontSize: '0.825rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
            <Info size={14} />
            <span>Metrics reflect aggregated client post-service feedback surveys and interview callback reporting. Individual job market results may vary based on role experience.</span>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
