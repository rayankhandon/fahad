import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle, MessageSquare } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface ContactProps {
  name: string;
  selectedServicePreFill?: string;
}

export const Contact: React.FC<ContactProps> = ({ name, selectedServicePreFill }) => {
  const displayName = name || 'Salar S';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceNeeded: 'Resume Writing',
    careerLevel: 'Mid-Level',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (selectedServicePreFill) {
      setFormData(prev => ({
        ...prev,
        serviceNeeded: selectedServicePreFill
      }));
    }
  }, [selectedServicePreFill]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.email.trim()) {
      setErrorMsg('Please fill in your full name and email address.');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // fallback
    }

    setSubmitted(true);
    setErrorMsg('');
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      serviceNeeded: 'Resume Writing',
      careerLevel: 'Mid-Level',
      message: ''
    });
  };

  return (
    <section id="contact" className="section" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up">
          <div className="section-header">
            <div className="section-eyebrow" style={{ background: '#EFF6FF', color: '#2563EB', borderColor: '#BFDBFE' }}>
              <MessageSquare size={14} />
              <span>GET IN TOUCH</span>
            </div>
            <h2 className="section-title">Let’s Start Your Career Transformation</h2>
            <p className="section-subtitle">
              Fill out the form below or send a direct email to {displayName}. You will receive a response within 24 business hours.
            </p>
          </div>
        </ScrollReveal>

        <div className="contact-grid">
          
          {/* Left Side: Contact Details & Info */}
          <ScrollReveal variant="fade-left" delay={0.1}>
            <div className="contact-info-card" style={{ height: '100%' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.5rem', color: '#0F172A' }}>
                Direct Contact & Hours
              </h3>

              <div className="contact-detail-item">
                <div className="contact-detail-icon" style={{ backgroundColor: '#EFF6FF', color: '#2563EB' }}>
                  <Mail size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700 }}>Email Directly</h4>
                  <p style={{ fontSize: '0.9rem', color: '#64748B' }}>salar.resumespecialist@gmail.com</p>
                  <span style={{ fontSize: '0.75rem', color: '#10B981', fontWeight: 600 }}>24-hr Response Time</span>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon" style={{ backgroundColor: '#F3E8FF', color: '#7C3AED' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700 }}>LinkedIn Profile</h4>
                  <a href="https://linkedin.com/in/salar-resumespecialist" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.9rem', color: '#2563EB', fontWeight: 600 }}>
                    linkedin.com/in/salar-resumespecialist
                  </a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon" style={{ backgroundColor: '#E0F2FE', color: '#06B6D4' }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700 }}>Location & Services</h4>
                  <p style={{ fontSize: '0.9rem', color: '#64748B' }}>New York, NY (Remote Worldwide)</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon" style={{ backgroundColor: '#FFEDD5', color: '#F97316' }}>
                  <Clock size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700 }}>Working Hours</h4>
                  <p style={{ fontSize: '0.9rem', color: '#64748B' }}>Mon – Fri: 9:00 AM – 6:00 PM EST</p>
                </div>
              </div>

              <div style={{ marginTop: '2rem', padding: '1.25rem', background: '#F8FAFC', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                <h5 style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0F172A', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  100% Confidential Guarantee
                </h5>
                <p style={{ fontSize: '0.825rem', color: '#64748B', lineHeight: 1.5 }}>
                  Your personal contact information and employment details are kept strictly private and secure.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Side: Interactive Inquiry Form */}
          <ScrollReveal variant="fade-right" delay={0.15}>
            <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '2.5rem', boxShadow: '0 10px 30px rgba(15, 23, 42, 0.04)', height: '100%' }}>
              
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#ECFDF5', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                    <CheckCircle2 size={36} />
                  </div>

                  <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.75rem' }}>
                    Inquiry Received!
                  </h3>

                  <p style={{ fontSize: '1rem', color: '#64748B', lineHeight: 1.6, marginBottom: '2rem' }}>
                    Thank you, <strong>{formData.fullName}</strong>. Your message regarding <strong>{formData.serviceNeeded}</strong> has been sent to {displayName}. You will receive a personalized response within 24 hours.
                  </p>

                  <button className="btn btn-secondary" onClick={resetForm}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.25rem' }}>
                    Send an Inquiry
                  </h3>

                  {errorMsg && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#FEF2F2', border: '1px solid #FECDD3', color: '#991B1B', padding: '0.75rem 1rem', borderRadius: '8px', fontSize: '0.875rem' }}>
                      <AlertCircle size={16} />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.4rem' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Marcus Sterling"
                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.95rem' }}
                        required
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.4rem' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.95rem' }}
                        required
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.4rem' }}>
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.95rem' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.4rem' }}>
                        Service Needed
                      </label>
                      <select
                        name="serviceNeeded"
                        value={formData.serviceNeeded}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.95rem', backgroundColor: '#FFFFFF' }}
                      >
                        <option value="Resume Writing">Resume Writing</option>
                        <option value="Executive Resume Writing">Executive Resume Writing</option>
                        <option value="LinkedIn Profile Optimization">LinkedIn Profile Optimization</option>
                        <option value="Cover Letter Writing">Cover Letter Writing</option>
                        <option value="Career Change Resume">Career Change Resume</option>
                        <option value="CV Writing">CV Writing</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.4rem' }}>
                      Experience Level
                    </label>
                    <select
                      name="careerLevel"
                      value={formData.careerLevel}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.95rem', backgroundColor: '#FFFFFF' }}
                    >
                      <option value="Entry-Level (0-2 Yrs)">Entry-Level (0-2 Yrs)</option>
                      <option value="Mid-Level (3-7 Yrs)">Mid-Level (3-7 Yrs)</option>
                      <option value="Senior Level (8-15 Yrs)">Senior Level (8-15 Yrs)</option>
                      <option value="Executive / C-Suite (15+ Yrs)">Executive / C-Suite (15+ Yrs)</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.4rem' }}>
                      Your Career Goals or Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your target roles, industry, or deadlines..."
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.95rem' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center', background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)', border: 'none', padding: '0.85rem' }}
                  >
                    <Send size={18} />
                    <span>Send Message to {displayName}</span>
                  </button>
                </form>
              )}

            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};
