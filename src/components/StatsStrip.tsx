import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const StatsStrip: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Resumes Written' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '10+', label: 'Industries Served' },
    { number: '5+', label: 'Years Experience' }
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} variant="zoom-in" delay={index * 0.1} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
