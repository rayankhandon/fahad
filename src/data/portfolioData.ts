export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  deliverables: string[];
  turnaround: string;
  colorTheme: 'blue' | 'purple' | 'cyan' | 'orange' | 'teal' | 'violet';
}

export interface PortfolioProject {
  id: string;
  title: string;
  role: string;
  industry: string;
  category: 'Executive' | 'Corporate' | 'Technology' | 'Marketing' | 'Finance' | 'Entry Level';
  shortDesc: string;
  previewImage: string;
  clientChallenge: string;
  strategy: string;
  beforeSnippet: string;
  afterSnippet: string;
  keyImprovements: string[];
  finalResult: string;
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  industry: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  featured: boolean;
  features: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'resume-writing',
    title: 'Resume Writing',
    shortDesc: 'ATS-friendly, professionally written resumes tailored to your target role and industry.',
    fullDesc: 'A complete overhaul of your professional resume. We transform your work history into a compelling, quantified marketing document optimized for both applicant tracking software (ATS) and human recruiters.',
    iconName: 'FileText',
    deliverables: ['Custom ATS-Engineered Resume (PDF + Editable Word)', 'Targeted Keyword Optimization', 'Quantified Achievement Bullet Points', '2 Rounds of Revisions'],
    turnaround: '3 - 5 Business Days',
    colorTheme: 'blue'
  },
  {
    id: 'executive-resume',
    title: 'Executive Resume Writing',
    shortDesc: 'Strategic executive resumes designed to communicate leadership, impact, and business value.',
    fullDesc: 'Tailored specifically for C-suite, VP, and Director-level candidates. Focuses on P&L responsibility, strategic vision, team leadership, revenue growth, and organizational transformation.',
    iconName: 'Award',
    deliverables: ['Executive Board-Ready Resume', 'Executive Value Proposition Brief', 'ATS + Modern Visual Design', 'Priority 1-on-1 Strategy Session'],
    turnaround: '4 - 6 Business Days',
    colorTheme: 'purple'
  },
  {
    id: 'linkedin-optimization',
    title: 'LinkedIn Profile Optimization',
    shortDesc: 'Transform your LinkedIn profile into a strong professional brand that attracts recruiters and opportunities.',
    fullDesc: 'Reposition your digital presence. We rewrite your headline, summary, work experience, and skills matrix to maximize recruiter search appearance and build instant authority.',
    iconName: 'Linkedin',
    deliverables: ['Search-Optimized Headline & About Section', 'Complete Experience Section Rewrite', 'Skills Tagging & Recommendations Strategy', 'Custom Banner Image Concept'],
    turnaround: '2 - 3 Business Days',
    colorTheme: 'cyan'
  },
  {
    id: 'cover-letter',
    title: 'Cover Letter Writing',
    shortDesc: 'Persuasive, customized cover letters that connect your experience directly to the role.',
    fullDesc: 'Stop sending generic cover letters. We craft a modular, high-impact cover letter template that grabs hiring managers’ attention in the first paragraph and highlights key achievements.',
    iconName: 'Mail',
    deliverables: ['Tailored Master Cover Letter', 'Fillable Job-Specific Customization Tokens', 'Matching Visual Styling', 'Editable Word Format'],
    turnaround: '2 Business Days',
    colorTheme: 'orange'
  },
  {
    id: 'career-change',
    title: 'Career Change Resume',
    shortDesc: 'Reposition your transferable skills and experience for a successful career transition.',
    fullDesc: 'Switching industries or roles? We reframe your background around universal, high-value transferable skills (project management, leadership, analytical problem solving) to bridge the gap.',
    iconName: 'RefreshCw',
    deliverables: ['Transferable Skills Alignment Audit', 'Reframed Functional/Hybrid Layout', 'Transition Story Alignment Brief', '2 Rounds of Edits'],
    turnaround: '4 - 5 Business Days',
    colorTheme: 'teal'
  },
  {
    id: 'cv-writing',
    title: 'CV Writing',
    shortDesc: 'Professional CVs designed to present your qualifications clearly and effectively.',
    fullDesc: 'Designed for academic, research, medical, and international roles requiring comprehensive multi-page CVs highlighting publications, grants, certifications, and teaching credentials.',
    iconName: 'GraduationCap',
    deliverables: ['Multi-Page Academic/International CV', 'Publications & Grants Formatting', 'Credential & Honor Roll Matrix', 'PDF + Word Files'],
    turnaround: '4 - 6 Business Days',
    colorTheme: 'violet'
  }
];

export const PORTFOLIO_DATA: PortfolioProject[] = [
  {
    id: 'proj-1',
    title: 'Executive VP of Operations Transformation',
    role: 'Vice President of Global Operations',
    industry: 'Supply Chain & Manufacturing',
    category: 'Executive',
    shortDesc: 'Reframing 15+ years of operational turnaround experience into a high-impact $40M cost-reduction narrative.',
    previewImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    clientChallenge: 'The candidate had a dense 4-page resume filled with task-focused descriptions, failing to highlight executive-level P&L growth and global vendor negotiation victories.',
    strategy: 'Restructured into an executive 2-page format featuring a Strategic Leadership Core Competency grid and quantifiable operational metrics in every bullet point.',
    beforeSnippet: 'Responsible for managing warehouse operations, overseeing staff of 120, handling budgets, and ordering inventory.',
    afterSnippet: 'Directed global operations across 8 distribution centers ($120M budget, 120+ FTEs), cutting logistics overhead by 28% and boosting on-time fulfillment from 89% to 99.4%.',
    keyImprovements: [
      'Eliminated passive job duty language in favor of high-impact action verbs',
      'Created an executive summary focused on turnaround leadership',
      'Boosted ATS parsing match rate from 54% to 96%'
    ],
    finalResult: 'Landed 4 VP interviews within 14 days and secured a Chief Operating Officer role with a 38% salary increase.'
  },
  {
    id: 'proj-2',
    title: 'Senior Software Engineering Lead',
    role: 'Engineering Director / Lead Architect',
    industry: 'Enterprise Software (SaaS)',
    category: 'Technology',
    shortDesc: 'Translating complex technical architecture projects into recruiter-friendly business impact.',
    previewImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    clientChallenge: 'Technical resume was overly bogged down in specific code libraries without articulating team scaling, microservices migration, or customer retention improvements.',
    strategy: 'Balanced technical keyword stack with engineering leadership achievements, highlighting cloud cost reduction and team velocity growth.',
    beforeSnippet: 'Worked on backend APIs using Node.js, AWS, and MongoDB. Fixed bugs and attended daily agile standup meetings.',
    afterSnippet: 'Architected microservices infrastructure servicing 2.4M active daily users; reduced AWS cloud spend by $180K annually while maintaining 99.99% system uptime.',
    keyImprovements: [
      'Built a targeted Tech Stack & Architecture matrix at the top of the resume',
      'Highlighted mentorship of 18 engineers and agile sprint velocity improvements',
      'Optimized for tech recruiter keywords (K8s, System Architecture, CI/CD)'
    ],
    finalResult: 'Secured Staff Engineer position at a Series-C Fintech firm with $260K total compensation.'
  },
  {
    id: 'proj-3',
    title: 'Director of Growth & Brand Marketing',
    role: 'VP of Marketing / Head of Growth',
    industry: 'Consumer Tech & Retail',
    category: 'Marketing',
    shortDesc: 'Showcasing ROI-driven digital marketing campaigns and 240% customer acquisition growth.',
    previewImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    clientChallenge: 'Marketing resume felt generic and lacked concrete CAC, ROAS, and revenue contribution metrics required for senior growth positions.',
    strategy: 'Shifted focus to omnichannel strategy, performance marketing budgets ($5M+), and brand partnership revenue expansion.',
    beforeSnippet: 'Managed digital ad accounts, created social media strategies, wrote email newsletters, and analyzed weekly traffic reports.',
    afterSnippet: 'Scaled omnichannel paid acquisition budget from $1M to $5.5M while decreasing CAC by 34%; generated $18.5M in net new ARR via performance marketing campaigns.',
    keyImprovements: [
      'Structured metrics around ROAS, LTV:CAC, and attribution modeling',
      'Added a visual metric highlights callout section',
      'Repositioned candidate as a growth strategist rather than a tactical marketer'
    ],
    finalResult: 'Invited to interview at 5 top tech firms within 10 days of launching updated resume.'
  },
  {
    id: 'proj-4',
    title: 'Investment Banking & Corporate Finance Lead',
    role: 'Senior Financial Analyst / Associate',
    industry: 'Banking & Financial Services',
    category: 'Finance',
    shortDesc: 'Structuring M&A deal execution metrics and capital allocation experience for top Wall Street firms.',
    previewImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
    clientChallenge: 'The candidate’s resume was cluttered with routine financial modeling duties without showcasing deal sizes or strategic advisory outcomes.',
    strategy: 'Reformatted to highlight M&A deal transactions ($250M+ total volume), financial modeling precision, and C-suite reporting.',
    beforeSnippet: 'Prepared financial statements, updated excel models, performed valuation analyses, and drafted pitch books.',
    afterSnippet: 'Executed 6 M&A buy-side transactions valued at $310M+; built 3-statement LBO and DCF models achieving sub-1% forecast variance for executive committee review.',
    keyImprovements: [
      'Listed selected deal transactions with transaction sizing',
      'Clean Wall Street single-page formatting aligned with finance standards',
      'Emphasized Bloomberg Terminal, FactSet, and LBO modeling expertise'
    ],
    finalResult: 'Landed Senior Finance Associate role at a top Private Equity firm.'
  },
  {
    id: 'proj-5',
    title: 'Management Consultant to Corporate Strategy',
    role: 'Senior Corporate Strategy Manager',
    industry: 'Corporate Strategy & Advisory',
    category: 'Corporate',
    shortDesc: 'Transitioning Big-4 consulting experience into an internal corporate strategy role.',
    previewImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    clientChallenge: 'Consultant relied heavily on internal jargon and client project codes that outside recruiters could not evaluate.',
    strategy: 'Translated client project work into clear business transformation themes: digital roadmap, cost optimization, and post-merger integration.',
    beforeSnippet: 'Served on Project Alpha & Bravo, assisted client stakeholders, drafted PowerPoint slides, and attended client workshops.',
    afterSnippet: 'Spearheaded post-merger integration for a Fortune 500 healthcare client, identifying $14M in synergy cost savings and streamlining 40+ legacy IT systems.',
    keyImprovements: [
      'Replaced internal consulting codes with industry-standard business outcomes',
      'Emphasized cross-functional leadership and C-level client presentations',
      'Tailored resume specifically for corporate strategy targets'
    ],
    finalResult: 'Successfully pivoted from consulting to Director of Strategy at a Fortune 200 corporation.'
  },
  {
    id: 'proj-6',
    title: 'Computer Science Graduate Entry-Level Transition',
    role: 'Junior Full Stack Developer',
    industry: 'Technology',
    category: 'Entry Level',
    shortDesc: 'Highlighting capstone projects, open-source contributions, and technical internships for new graduates.',
    previewImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    clientChallenge: 'Recent graduate had minimal corporate experience and felt embarrassed by a sparse resume.',
    strategy: 'Front-loaded technical projects, hackathon achievements, and relevant coursework to demonstrate real-world coding proficiency.',
    beforeSnippet: 'Student at State University. Took courses in Data Structures, Java, Web Dev. Worked as a barista during weekends.',
    afterSnippet: 'Built full-stack React/Node E-commerce app with 1,200+ active users; awarded 1st place in University Hackathon out of 45 competing engineering teams.',
    keyImprovements: [
      'Engineered a robust "Featured Technical Projects" section with GitHub links',
      'Framed academic capstone project like a commercial product build',
      'Highlighted fast learning capacity and modern tech stack skills'
    ],
    finalResult: 'Landed 3 entry-level developer offers within 3 weeks of graduation.'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't-1',
    name: 'Marcus Sterling',
    title: 'VP of Technology',
    company: 'Fintech Solutions Inc.',
    industry: 'Financial Technology',
    quote: 'Before working with Salar S, my resume wasn’t getting much attention despite 12 years in tech leadership. His total overhaul highlighted my strategic impact. I landed 4 senior interviews within 2 weeks!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't-2',
    name: 'Alexander Ross',
    title: 'Director of Global Marketing',
    company: 'Nexus Global Brands',
    industry: 'Marketing & Retail',
    quote: 'Salar S turned my messy 3-page draft into a sharp, executive-ready document. His strategic wording and LinkedIn optimization led directly to recruiters reaching out to me first. Worth every single penny.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't-3',
    name: 'David Chen',
    title: 'Senior Operations Manager',
    company: 'Logistics Global',
    industry: 'Supply Chain',
    quote: 'I was transitioning from military leadership to corporate operations and struggled to translate my experience. Salar S bridged the gap brilliantly. My ATS score jumped from 48% to 96%!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't-4',
    name: 'Robert Jenkins',
    title: 'Healthcare Executive',
    company: 'Regional Health Network',
    industry: 'Healthcare Administration',
    quote: 'The executive package with Salar S was a game-changer. The cover letter and personal branding strategy gave me the confidence to apply for C-suite roles I used to hesitate on.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80'
  }
];

export const PRICING_DATA: PricingPackage[] = [
  {
    id: 'essential',
    name: 'Essential',
    price: '$149',
    period: 'one-time',
    description: 'Perfect for mid-level professionals seeking a clean, ATS-optimized resume upgrade.',
    featured: false,
    features: [
      'Professional Resume',
      'ATS Optimization',
      '1 Revision',
      'PDF + Editable File'
    ]
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '$249',
    period: 'most popular',
    description: 'Our complete career kit designed to maximize callbacks and recruiter outreach.',
    featured: true,
    features: [
      'Resume',
      'Cover Letter',
      'ATS Optimization',
      'LinkedIn Guidance',
      '2 Revisions'
    ]
  },
  {
    id: 'executive',
    name: 'Executive',
    price: '$399',
    period: 'c-suite & director',
    description: 'Bespoke personal branding strategy for senior leaders, VPs, and C-level candidates.',
    featured: false,
    features: [
      'Executive Resume',
      'Cover Letter',
      'LinkedIn Optimization',
      'Personal Branding Strategy',
      'Priority Support',
      'Multiple Revisions'
    ]
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'What information do you need from me?',
    answer: 'Once you get started, you will fill out a short intake questionnaire or upload your current resume. We will review your career goals, target job titles, key achievements, and any specific target job descriptions you want to align with.'
  },
  {
    question: 'How long does the process take?',
    answer: 'Standard turnaround time is 3 to 5 business days from receiving your intake information. We also offer priority rush options (24-48 hours) for candidates with urgent job application deadlines.'
  },
  {
    question: 'Are the resumes ATS-friendly?',
    answer: 'Yes! 100% of our resumes are engineered to pass Applicant Tracking Systems (ATS) like Workday, Taleo, Greenhouse, and Lever. We use clean standard formatting, optimized headings, and targeted skill keywords while maintaining an elegant visual layout for human eyes.'
  },
  {
    question: 'Do you work with career changers?',
    answer: 'Absolutely. Career transition resumes are one of our specialties. We reframe your work history around universal transferable skills, strategic positioning, and achievement narratives that prove your value in your target new field.'
  },
  {
    question: 'Can you rewrite an existing resume?',
    answer: 'Yes. Whether you have an outdated 5-page draft or starting completely from scratch, we extract your highest-value accomplishments and modernize the structure, tone, and strategic positioning.'
  },
  {
    question: 'Do you provide LinkedIn optimization?',
    answer: 'Yes! In addition to resume writing, we offer complete LinkedIn profile optimization. We craft search-optimized headlines, compelling About summaries, and experience descriptions designed to increase recruiter view counts.'
  },
  {
    question: 'How many revisions are included?',
    answer: 'Our Essential package includes 1 revision round, Professional includes 2 revision rounds, and Executive includes multiple revision rounds following document delivery to ensure you are 100% satisfied.'
  }
];

export const WHY_CHOOSE_ME = [
  {
    title: 'ATS Optimization',
    desc: 'Formatted and keyword-engineered to easily pass Workday, Taleo, and modern ATS parsers.',
    iconName: 'Cpu'
  },
  {
    title: 'Personalized Writing',
    desc: 'No generic cookie-cutter templates. Every sentence is custom-tailored to your unique experience.',
    iconName: 'UserCheck'
  },
  {
    title: 'Industry-Aware Strategy',
    desc: 'Deep positioning knowledge across Tech, Finance, Marketing, Healthcare, and Operations.',
    iconName: 'Compass'
  },
  {
    title: 'Achievement-Focused Content',
    desc: 'Replacing boring duty lists with metrics, ROI, revenue gains, and leadership outcomes.',
    iconName: 'TrendingUp'
  },
  {
    title: 'Recruiter-Friendly Formatting',
    desc: 'Scannable hierarchy engineered for the 6-second initial recruiter review.',
    iconName: 'Eye'
  },
  {
    title: 'Fast Communication',
    desc: 'Direct, responsive collaboration throughout the entire writing and revision workflow.',
    iconName: 'MessageSquare'
  },
  {
    title: 'Confidential Process',
    desc: 'Strict non-disclosure privacy. Your career details and current job status remain 100% private.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Professional Quality',
    desc: 'Executive polish, impeccable grammar, and modern visual typography standards.',
    iconName: 'CheckCircle'
  }
];
