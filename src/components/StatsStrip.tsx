import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { FileText, ThumbsUp, Briefcase, Award } from 'lucide-react';

export const StatsStrip: React.FC = () => {
  const stats = [
    {
      number: '500+',
      label: 'Resumes Written',
      color: '#2563EB',
      bgColor: '#EFF6FF',
      icon: <FileText size={22} color="#2563EB" />
    },
    {
      number: '95%',
      label: 'Client Satisfaction',
      color: '#7C3AED',
      bgColor: '#F3E8FF',
      icon: <ThumbsUp size={22} color="#7C3AED" />
    },
    {
      number: '10+',
      label: 'Industries Served',
      color: '#06B6D4',
      bgColor: '#E0F2FE',
      icon: <Briefcase size={22} color="#06B6D4" />
    },
    {
      number: '5+',
      label: 'Years Experience',
      color: '#F97316',
      bgColor: '#FFEDD5',
      icon: <Award size={22} color="#F97316" />
    }
  ];

  return (
    <section className="stats-section" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', padding: '2.5rem 0' }}>
      <div className="container">
        <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
          {stats.map((stat, index) => (
            <ScrollReveal key={index} variant="zoom-in" delay={index * 0.1}>
              <div
                className="stat-item"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  padding: '1.25rem 1.5rem',
                  borderRadius: '16px',
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.03)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    backgroundColor: stat.bgColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  {stat.icon}
                </div>

                <div>
                  <div className="stat-number" style={{ color: stat.color, fontSize: '2rem', fontWeight: 900, lineHeight: 1 }}>
                    {stat.number}
                  </div>
                  <div className="stat-label" style={{ color: '#64748B', fontSize: '0.875rem', fontWeight: 600, marginTop: '0.25rem' }}>
                    {stat.label}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
