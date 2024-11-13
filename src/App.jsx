import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import ContactForm from './components/ContactForm';
import Testimonials from './components/Testimonials';
import AboutMe from './components/AboutMe';

const AppContainer = styled.div`
  min-height: 100vh;
`;

const Header = styled.header`
  background-color: ${props => props.isMenuOpen ? '#fff' : 'rgba(255, 255, 255, 0.95)'};
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Logo = styled.div`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-weight: bold;
  color: ${props => props.isMenuOpen ? '#e74c3c' : '#e74c3c'};
  transition: color 0.3s ease;
  z-index: 1001;

  &:hover {
    color: #c0392b;
  }
`;

const MobileMenu = styled.div`
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    opacity: ${props => props.isOpen ? '1' : '0'};
    visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
    transition: all 0.3s ease;
    z-index: 999;
    padding: 5rem 2rem 2rem;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #e74c3c, #c0392b);
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileNavLink = styled.a`
  color: #2c3e50;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 10px;
  transition: all 0.3s ease;
  background: ${props => props.active ? 'rgba(231, 76, 60, 0.1)' : 'transparent'};
  width: 100%;
  max-width: 300px;
  text-align: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: #e74c3c;
    transform: translateX(-50%);
    transition: width 0.3s ease;
  }

  &:active {
    background: rgba(231, 76, 60, 0.1);
    transform: scale(0.98);
  }
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #2c3e50;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  font-size: clamp(0.9rem, 2vw, 1rem);
  padding: 0.5rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: #e74c3c;
    transform: translateX(-50%);
    transition: width 0.3s ease;
  }

  &:hover {
    color: #e74c3c;

    &::after {
      width: 100%;
    }
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: ${props => props.isOpen ? '#fff' : 'none'};
  border: none;
  cursor: pointer;
  width: 44px;
  height: 44px;
  position: relative;
  z-index: 1001;
  -webkit-tap-highlight-color: transparent;
  border-radius: 50%;
  box-shadow: ${props => props.isOpen ? '0 2px 8px rgba(0, 0, 0, 0.1)' : 'none'};

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6px;
  }

  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: -8px;
    right: -8px;
    bottom: -8px;
    border-radius: 50%;
    background: ${props => props.isOpen ? 'rgba(255, 255, 255, 0.9)' : 'transparent'};
    z-index: -1;
  }

  span {
    display: block;
    width: 24px;
    height: 2px;
    background-color: ${props => props.isOpen ? '#e74c3c' : '#2c3e50'};
    transition: all 0.3s ease;
    transform-origin: center;

    &:first-of-type {
      transform: ${props => props.isOpen ? 'translateY(8px) rotate(45deg)' : 'none'};
    }

    &:nth-of-type(2) {
      opacity: ${props => props.isOpen ? '0' : '1'};
    }

    &:last-of-type {
      transform: ${props => props.isOpen ? 'translateY(-8px) rotate(-45deg)' : 'none'};
    }
  }

  &:active {
    span {
      background-color: #c0392b;
    }
  }
`;

const Main = styled.main`
  padding-top: 4rem;

  @media (max-width: 768px) {
    padding-top: 3.5rem;
  }
`;

const Section = styled.section`
  scroll-margin-top: 5rem;

  @media (max-width: 768px) {
    scroll-margin-top: 4rem;
  }
`;

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
      setActiveSection(id);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'benefits', 'testimonials', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(currentSection || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppContainer>
      <Header isMenuOpen={isMenuOpen}>
        <Nav>
          <Logo isMenuOpen={isMenuOpen}>Русский Язык</Logo>
          <NavLinks>
            <NavLink href="#about" onClick={(e) => scrollToSection(e, 'about')}>
              Обо мне
            </NavLink>
            <NavLink href="#benefits" onClick={(e) => scrollToSection(e, 'benefits')}>
              Преимущества
            </NavLink>
            <NavLink href="#testimonials" onClick={(e) => scrollToSection(e, 'testimonials')}>
              Отзывы
            </NavLink>
            <NavLink href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>
              Записаться
            </NavLink>
          </NavLinks>
          <HamburgerButton 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            isOpen={isMenuOpen}
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            <span />
            <span />
            <span />
          </HamburgerButton>
        </Nav>
      </Header>

      <MobileMenu isOpen={isMenuOpen}>
        <MobileNavLink 
          href="#about" 
          onClick={(e) => scrollToSection(e, 'about')}
          active={activeSection === 'about'}
        >
          Обо мне
        </MobileNavLink>
        <MobileNavLink 
          href="#benefits" 
          onClick={(e) => scrollToSection(e, 'benefits')}
          active={activeSection === 'benefits'}
        >
          Преимущества
        </MobileNavLink>
        <MobileNavLink 
          href="#testimonials" 
          onClick={(e) => scrollToSection(e, 'testimonials')}
          active={activeSection === 'testimonials'}
        >
          Отзывы
        </MobileNavLink>
        <MobileNavLink 
          href="#contact" 
          onClick={(e) => scrollToSection(e, 'contact')}
          active={activeSection === 'contact'}
        >
          Записаться
        </MobileNavLink>
      </MobileMenu>
      
      <Main>
        <Section>
          <Hero />
        </Section>
        <Section id="about">
          <AboutMe />
        </Section>
        <Section id="benefits">
          <Benefits />
        </Section>
        <Section id="testimonials">
          <Testimonials />
        </Section>
        <Section id="contact">
          <ContactForm />
        </Section>
      </Main>
    </AppContainer>
  );
}

export default App;
