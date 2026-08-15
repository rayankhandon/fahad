import React from 'react';
import { X, Download, CheckCircle2, Printer, Sparkles } from 'lucide-react';

interface ResumeDownloadModalProps {
  name: string;
  onClose: () => void;
}

export const ResumeDownloadModal: React.FC<ResumeDownloadModalProps> = ({ name, onClose }) => {
  const actualName = name && name !== '[YOUR NAME]' ? name : 'FAHAD';

  const handleDownload = () => {
    const content = `================================================================================
${actualName.toUpperCase()} | RESUME SPECIALIST
New York, NY • fahad.resumespecialist@gmail.com • linkedin.com/in/fahad-resumespecialist
================================================================================

EXECUTIVE SUMMARY
--------------------------------------------------------------------------------
Results-driven Career Strategist and Professional Resume Writer with 5+ years of
experience transforming complex work histories into compelling, ATS-optimized
marketing documents. Specialized in C-suite, VP, and mid-career positioning
across Technology, Finance, Operations, Healthcare, and Marketing.

CORE COMPETENCIES
--------------------------------------------------------------------------------
• Executive Resume Development      • ATS Keyword Engineering & Optimization
• LinkedIn Profile Positioning       • Quantified Achievement Storytelling
• Cover Letter Strategy             • Career Transition Re-branding
• Executive Value Propositions      • 6-Second Recruiter Scannability

SELECTED CAREER OUTCOMES & METRICS
--------------------------------------------------------------------------------
• Authored 500+ high-impact resumes with a 95% client satisfaction rating.
• Increased client interview callback rates by an average of 87% within 14 days.
• Elevated ATS match scores from baseline 42% to 98% Grade-A passing status.
• Helped clients land roles at Fortune 500 enterprises with average 25%+ salary increases.

REPRESENTATIVE PROFESSIONAL EXPERIENCE
--------------------------------------------------------------------------------
Senior Resume Writer & Principal Consultant | Executive Career Services
2021 – Present
• Spearheaded 1-on-1 strategy sessions with senior executives, unearthing P&L
  achievements and multi-million dollar revenue growth metrics.
• Engineered proprietary ATS keyword alignment framework ensuring 100% compliance
  with Workday, Taleo, Greenhouse, and Lever application portals.
• Optimized LinkedIn profiles for high-level candidates, increasing inbound recruiter
  views by 300%.

TECHNICAL & INDUSTRY STACK
--------------------------------------------------------------------------------
ATS Software: Workday, Taleo, Lever, Greenhouse, iCIMS, Jobvite
Tools: LinkedIn Recruiter, MS Word, Adobe Acrobat, Canva Pro
Industries: Tech (SaaS), Investment Banking, Global Logistics, Healthcare, Retail
================================================================================`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${actualName.replace(/\s+/g, '_')}_Sample_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" style={{ maxWidth: '850px' }} onClick={(e) => e.stopPropagation()}>
        
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        <div className="modal-header" style={{ background: '#F8FAFC' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="section-eyebrow" style={{ marginBottom: '0.4rem' }}>
                <Sparkles size={14} />
                <span>SAMPLE ATS RESUME PREVIEW</span>
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800 }}>{actualName}'s Sample Work</h3>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button className="btn btn-secondary btn-sm" onClick={handlePrint}>
                <Printer size={16} />
                <span>Print</span>
              </button>

              <button className="btn btn-primary btn-sm" onClick={handleDownload}>
                <Download size={16} />
                <span>Download Document</span>
              </button>
            </div>
          </div>
        </div>

        <div className="modal-body" style={{ background: '#FFFFFF', padding: '2rem' }}>
          
          {/* Document Visual Render */}
          <div style={{ border: '1px solid #E2E8F0', borderRadius: '8px', padding: '2.5rem', fontFamily: 'Georgia, serif', backgroundColor: '#FFFFFF', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', color: '#0F172A', lineHeight: 1.6 }}>
            
            <div style={{ textAlign: 'center', borderBottom: '2px solid #0F172A', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#0F172A', fontFamily: 'Manrope, sans-serif' }}>
                {actualName}
              </h2>
              <p style={{ fontSize: '0.9rem', color: '#2563EB', fontWeight: 700, fontFamily: 'Inter, sans-serif', marginTop: '0.25rem' }}>
                RESUME SPECIALIST
              </p>
              <p style={{ fontSize: '0.825rem', color: '#64748B', fontFamily: 'Inter, sans-serif', marginTop: '0.2rem' }}>
                New York, NY • fahad.resumespecialist@gmail.com • linkedin.com/in/fahad-resumespecialist
              </p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', color: '#0F172A', borderBottom: '1px solid #CBD5E1', paddingBottom: '0.25rem', marginBottom: '0.5rem', fontFamily: 'Manrope, sans-serif' }}>
                Executive Profile Summary
              </h4>
              <p style={{ fontSize: '0.9rem', color: '#334155', fontFamily: 'Inter, sans-serif' }}>
                Results-driven Career Strategist with 5+ years of experience transforming complex work histories into compelling, ATS-optimized marketing documents. Specialized in C-suite, VP, and mid-career positioning across Technology, Finance, Operations, Healthcare, and Marketing.
              </p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', color: '#0F172A', borderBottom: '1px solid #CBD5E1', paddingBottom: '0.25rem', marginBottom: '0.5rem', fontFamily: 'Manrope, sans-serif' }}>
                Core Competencies
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem', fontSize: '0.85rem', color: '#334155', fontFamily: 'Inter, sans-serif' }}>
                <div>• Executive Resume Writing</div>
                <div>• ATS Keyword Optimization (98% Pass)</div>
                <div>• LinkedIn Profile Strategy</div>
                <div>• Quantified Achievement Bullet Points</div>
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', color: '#0F172A', borderBottom: '1px solid #CBD5E1', paddingBottom: '0.25rem', marginBottom: '0.5rem', fontFamily: 'Manrope, sans-serif' }}>
                Proven Career Metrics
              </h4>
              <ul style={{ paddingLeft: '1.2rem', fontSize: '0.85rem', color: '#334155', fontFamily: 'Inter, sans-serif', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <li><strong>500+ Resumes Written:</strong> 95% client satisfaction rate across 10+ industries.</li>
                <li><strong>+87% Callback Boost:</strong> Measured increase in interview invitations within 14 days.</li>
                <li><strong>100% ATS Compliance:</strong> Engineered to pass Workday, Taleo, Lever, and Greenhouse.</li>
              </ul>
            </div>

          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid #E2E8F0' }}>
            <span style={{ fontSize: '0.85rem', color: '#64748B', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={16} color="#10B981" /> 100% Verified ATS-Friendly Template
            </span>

            <button className="btn btn-primary" onClick={handleDownload}>
              <Download size={16} />
              <span>Download Full Sample (.TXT / PDF)</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
