import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/portfolioData';
import { Star, ChevronLeft, ChevronRight, MessageSquareQuote } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface TestimonialsProps {
  name: string;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ name }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const displayName = name || 'Salar S';

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = TESTIMONIALS_DATA[currentIndex];

  const getFormattedQuote = (quote: string) => {
    return quote.replace('Fahad', displayName).replace('Julian Vance', displayName).replace('Julian', displayName);
  };

  return (
    <section id="testimonials" className="section" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up">
          <div className="section-header">
            <div className="section-eyebrow" style={{ background: '#FFEDD5', color: '#EA580C', borderColor: '#FED7AA' }}>
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

            <div className="testimonial-card" style={{ border: '1px solid #E2E8F0', borderTop: '4px solid #7C3AED', borderRadius: '20px', padding: '2.5rem' }}>
              {/* Star Rating */}
              <div className="testimonial-stars" style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.25rem' }}>
                {[...Array(activeTestimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="#FACC15" color="#FACC15" />
                ))}
              </div>

              {/* Testimonial Quote */}
              <p className="testimonial-quote" style={{ fontSize: '1.15rem', color: '#1E293B', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '2rem' }}>
                "{getFormattedQuote(activeTestimonial.quote)}"
              </p>

              {/* Client Profile Info */}
              <div className="testimonial-author" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img
                  src={activeTestimonial.avatar}
                  alt={activeTestimonial.name}
                  className="author-avatar"
                  loading="lazy"
                  style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #7C3AED' }}
                />
                <div className="author-details">
                  <h4 className="author-name" style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A' }}>{activeTestimonial.name}</h4>
                  <p className="author-role" style={{ fontSize: '0.875rem', color: '#64748B', margin: '0.1rem 0' }}>{activeTestimonial.title} • {activeTestimonial.company}</p>
                  <span className="author-industry" style={{ fontSize: '0.75rem', fontWeight: 700, color: '#7C3AED', textTransform: 'uppercase' }}>{activeTestimonial.industry}</span>
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
                backgroundColor: idx === currentIndex ? '#7C3AED' : '#CBD5E1',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
