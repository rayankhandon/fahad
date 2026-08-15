import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/portfolioData';
import { Star, ChevronLeft, ChevronRight, MessageSquareQuote } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface TestimonialsProps {
  name: string;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ name }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = TESTIMONIALS_DATA[currentIndex];

  // Helper to replace [YOUR NAME] in quote dynamically if present
  const getFormattedQuote = (quote: string) => {
    return quote.replace('[YOUR NAME]', name && name !== '[YOUR NAME]' ? name : 'Fahad');
  };

  return (
    <section id="testimonials" className="section" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up">
          <div className="section-header">
            <div className="section-eyebrow">
              <MessageSquareQuote size={14} />
              <span>CLIENT REVIEWS</span>
            </div>
            <h2 className="section-title">What Clients Say</h2>
            <p className="section-subtitle">
              Read success stories from executives, directors, and managers who landed interviews with their new career documents.
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonials Carousel Wrapper */}
        <ScrollReveal variant="zoom-in" delay={0.15}>
          <div className="testimonial-carousel">
            
            <button className="carousel-nav-btn prev" onClick={prevSlide} aria-label="Previous Testimonial">
              <ChevronLeft size={24} />
            </button>

            <div className="testimonial-card">
              {/* Star Rating */}
              <div className="testimonial-stars">
                {[...Array(activeTestimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>

              {/* Testimonial Quote */}
              <p className="testimonial-quote">
                "{getFormattedQuote(activeTestimonial.quote)}"
              </p>

              {/* Client Profile Info */}
              <div className="testimonial-author">
                <img
                  src={activeTestimonial.avatar}
                  alt={activeTestimonial.name}
                  className="author-avatar"
                  loading="lazy"
                />
                <div className="author-details">
                  <h4 className="author-name">{activeTestimonial.name}</h4>
                  <p className="author-role">{activeTestimonial.title} • {activeTestimonial.company}</p>
                  <span className="author-industry">{activeTestimonial.industry}</span>
                </div>
              </div>
            </div>

            <button className="carousel-nav-btn next" onClick={nextSlide} aria-label="Next Testimonial">
              <ChevronRight size={24} />
            </button>

          </div>
        </ScrollReveal>

        {/* Pagination Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem' }}>
          {TESTIMONIALS_DATA.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              style={{
                width: idx === currentIndex ? '28px' : '10px',
                height: '10px',
                borderRadius: '5px',
                backgroundColor: idx === currentIndex ? '#2563EB' : '#CBD5E1',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
