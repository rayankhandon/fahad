import React, { useState, useEffect } from 'react';
import { Download, Send, Menu, X } from 'lucide-react';

interface NavbarProps {
  name: string;
  onOpenDownloadModal: () => void;
  onSelectService?: (serviceId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ name, onOpenDownloadModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // ScrollSpy active link detection
      const sections = ['home', 'about', 'services', 'portfolio', 'process', 'testimonials', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getMonogram = (fullName: string) => {
    if (!fullName || fullName === '[YOUR NAME]') return 'F';
    const parts = fullName.trim().split(' ');
    if (parts.length >= 2 && parts[0] !== 'FAHAD') {
      return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
    }
    return 'F';
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo & Name */}
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="logo-brand">
          <div className="logo-monogram">{getMonogram(name)}</div>
          <div className="logo-text">
            <span className="logo-name">{name}</span>
            <span className="logo-tagline">Resume Specialist</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="nav-links">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="nav-actions">
          <button
            onClick={onOpenDownloadModal}
            className="btn btn-secondary btn-sm"
            title="Preview & Download Sample Resume"
          >
            <Download size={16} />
            <span>Download Resume</span>
          </button>
          
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="btn btn-primary btn-sm"
          >
            <Send size={16} />
            <span>Hire Me</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-list">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="mobile-nav-link"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="mobile-actions">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenDownloadModal();
            }}
            className="btn btn-secondary"
            style={{ width: '100%' }}
          >
            <Download size={18} />
            <span>Download Sample Resume</span>
          </button>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="btn btn-primary"
            style={{ width: '100%' }}
          >
            <Send size={18} />
            <span>Hire Me Now</span>
          </a>
        </div>
      </div>
    </header>
  );
};
