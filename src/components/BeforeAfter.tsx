import React, { useState, useRef } from 'react';
import { SlidersHorizontal, AlertTriangle, CheckCircle2, MoveHorizontal, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const BeforeAfter: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 - 100
  const isDragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 5) percentage = 5;
    if (percentage > 95) percentage = 95;
    setSliderPos(percentage);
  };

  const handleMouseDown = () => { isDragging.current = true; };
  const handleMouseUp = () => { isDragging.current = false; };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <section className="section" style={{ backgroundColor: '#0F172A', color: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
      {/* Background Colorful Gradient Blobs */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '20%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.25) 0%, rgba(124, 58, 237, 0.15) 50%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '15%',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, rgba(249, 115, 22, 0.15) 50%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up">
          <div className="section-header" style={{ color: '#FFFFFF' }}>
            <div className="section-eyebrow" style={{ backgroundColor: 'rgba(124, 58, 237, 0.25)', borderColor: 'rgba(124, 58, 237, 0.4)', color: '#C084FC' }}>
              <SlidersHorizontal size={14} />
              <span>THE TRANSFORMATION</span>
            </div>
            <h2 className="section-title" style={{ color: '#FFFFFF' }}>From Ordinary to Opportunity-Ready</h2>
            <p className="section-subtitle" style={{ color: '#94A3B8' }}>
              Drag the slider below to compare a typical weak resume draft against an ATS-optimized, high-impact career document crafted by Salar S.
            </p>
          </div>
        </ScrollReveal>

        {/* Interactive Comparison Container */}
        <ScrollReveal variant="zoom-in" delay={0.15}>
          <div className="before-after-container">
            
            <div
              ref={containerRef}
              className="ba-slider-wrapper"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
            >
              {/* AFTER Layer (Right/Background) */}
              <div className="ba-pane after">
                <div className="ba-pane-header">
                  <span className="ba-tag after-tag" style={{ background: 'linear-gradient(135deg, #059669 0%, #10B981 100%)', color: '#FFFFFF' }}>
                    <CheckCircle2 size={14} /> AFTER — OPPORTUNITY-READY
                  </span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#166534' }}>
                    ATS Grade: 98% (High Impact)
                  </span>
                </div>

                <div className="ba-content-mockup">
                  <h3 className="ba-resume-title" style={{ color: '#064E3B' }}>
                    ALEX MORGAN | VP of Operations & Supply Chain
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#15803D', fontWeight: 700 }}>
                    Strategic Leader | $120M P&L | 120+ FTEs | Logistics Transformation
                  </p>

                  <div className="ba-bullet-list" style={{ marginTop: '1rem' }}>
                    <div className="ba-bullet-item">
                      <CheckCircle2 size={18} color="#16A34A" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>
                        <strong>Spearheaded global operations turnaround</strong> across 8 distribution hubs, negotiating new freight carrier terms that slashed annual logistics overhead by $3.4M (28%).
                      </span>
                    </div>

                    <div className="ba-bullet-item">
                      <CheckCircle2 size={18} color="#16A34A" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>
                        <strong>Elevated on-time delivery from 89% to 99.4%</strong> by deploying automated warehouse management system (WMS) and Lean Six Sigma process workflows.
                      </span>
                    </div>

                    <div className="ba-bullet-item">
                      <CheckCircle2 size={18} color="#16A34A" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>
                        <strong>Mentored & expanded a 120+ member cross-functional team</strong>, reducing voluntary employee turnover by 42% through targeted leadership development initiatives.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* BEFORE Layer (Left/Clipped) */}
              <div
                className="ba-pane before"
                style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
              >
                <div className="ba-pane-header">
                  <span className="ba-tag before-tag">
                    <AlertTriangle size={14} /> BEFORE — UNOPTIMIZED
                  </span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#991B1B' }}>
                    ATS Grade: 42% (Rejected)
                  </span>
                </div>

                <div className="ba-content-mockup">
                  <h3 className="ba-resume-title" style={{ color: '#7F1D1D' }}>
                    Alex Morgan
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#B91C1C' }}>
                    Operations Manager looking for a new role in a growing firm
                  </p>

                  <div className="ba-bullet-list" style={{ marginTop: '1rem' }}>
                    <div className="ba-bullet-item">
                      <AlertTriangle size={18} color="#DC2626" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>
                        Responsible for managing daily warehouse operations, supervising staff, handling budgets, and ordering inventory when needed.
                      </span>
                    </div>

                    <div className="ba-bullet-item">
                      <AlertTriangle size={18} color="#DC2626" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>
                        Worked with vendors to improve delivery times and handled customer complaint tickets.
                      </span>
                    </div>

                    <div className="ba-bullet-item">
                      <AlertTriangle size={18} color="#DC2626" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>
                        Attended weekly leadership meetings and helped train new employees during onboarding.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Handle Bar with Colorful Accent */}
              <div
                className="ba-handle"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="ba-handle-button" style={{ background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)', color: '#FFFFFF', border: '2px solid #FFFFFF' }}>
                  <MoveHorizontal size={20} />
                </div>
              </div>

            </div>

            {/* Key Feature Summary Pills with Vibrant Colors */}
            <div className="ba-features-grid" style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div className="ba-feature-card before-card" style={{ background: 'rgba(254, 242, 242, 0.95)', border: '1px solid #FECDD3', borderRadius: '14px', padding: '1.25rem' }}>
                <h4 style={{ color: '#991B1B', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <AlertTriangle size={18} /> Common Weaknesses in Drafts
                </h4>
                <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9rem', color: '#7F1D1D', display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.5rem' }}>
                  <li>Poor scannability & layout formatting</li>
                  <li>Generic, task-focused bullet points</li>
                  <li>Lack of quantified revenue/ROI metrics</li>
                  <li>Fails ATS keyword parsing criteria</li>
                </ul>
              </div>

              <div className="ba-feature-card after-card" style={{ background: 'rgba(240, 253, 244, 0.95)', border: '1px solid #A7F3D0', borderRadius: '14px', padding: '1.25rem' }}>
                <h4 style={{ color: '#166534', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Sparkles size={18} color="#16A34A" /> Salar S Professional Transformation
                </h4>
                <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9rem', color: '#14532D', display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.5rem' }}>
                  <li>Clean executive layout & scannable hierarchy</li>
                  <li>Strong action-oriented achievement statements</li>
                  <li>100% ATS parser & keyword optimization</li>
                  <li>Targeted strategic leadership positioning</li>
                </ul>
              </div>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
