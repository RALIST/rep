import {
  HeroSection,
  HeroContent,
  Title,
  Subtitle,
  CTAButton,
  HeroImage
} from './styles/HeroStyles';

import img from '../assets/1.jpg'

const Hero = () => {
  const handleCTAClick = (e) => {
    e.preventDefault();
    const contactForm = document.getElementById('contact');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <HeroSection>
      <HeroContent>
        <Title>30 лет помогаю детям полюбить русский язык</Title>
        <Subtitle>
          Индивидуальный подход к каждому ученику, душевная атмосфера 
          и высокие результаты. Вместе откроем красоту родного языка.
        </Subtitle>
        <CTAButton onClick={handleCTAClick}>
          <span>Записаться на пробный урок</span>
        </CTAButton>
      </HeroContent>
      <HeroImage>
        <img src={img} alt="Преподаватель русского языка" />
      </HeroImage>
    </HeroSection>
  );
};

export default Hero;
