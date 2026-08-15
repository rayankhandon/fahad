import React, { useState } from 'react';
import { FAQ_DATA } from '../data/portfolioData';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up">
          <div className="section-header">
            <div className="section-eyebrow">
              <HelpCircle size={14} />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="section-title">Got Questions? I’ve Got Answers.</h2>
            <p className="section-subtitle">
              Here are the most common questions clients ask about the resume writing and career branding process.
            </p>
          </div>
        </ScrollReveal>

        {/* Accordion List */}
        <div className="faq-accordion">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <ScrollReveal key={index} variant="fade-up" delay={index * 0.05}>
                <div className={`faq-item ${isOpen ? 'open' : ''}`}>
                  <button
                    className="faq-question"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>
                    <span style={{ color: isOpen ? '#2563EB' : '#64748B', transition: 'transform 0.2s ease' }}>
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
