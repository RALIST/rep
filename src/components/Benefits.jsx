import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const BenefitsSection = styled.section`
  padding: 6rem 2rem;
  background: #fff;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 200px;
    background: linear-gradient(180deg, rgba(195, 207, 226, 0.2) 0%, rgba(255, 255, 255, 0) 100%);
  }

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: clamp(2rem, 5vw, 3rem);
  color: #2c3e50;
  margin-bottom: 4rem;
  font-weight: 800;
  position: relative;
  animation: ${fadeInUp} 0.4s ease-out;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: #e74c3c;
    margin: 1rem auto 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 0.5rem;
  }
`;

const BenefitCard = styled.div`
  padding: 2.5rem;
  background: #ffffff;
  border-radius: 20px;
  transition: all 0.3s ease;
  position: relative;
  animation: ${fadeInUp} 0.4s ease-out forwards;
  animation-delay: ${props => 0.1 * (props.index + 1)}s;
  opacity: 0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(44, 62, 80, 0.05);
  -webkit-tap-highlight-color: transparent;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);

    ${props => props.iconColor && `
      &::before {
        opacity: 0.1;
      }
    `}
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.iconColor || '#e74c3c'};
    border-radius: 20px;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 0;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    animation-delay: ${props => 0.05 * (props.index + 1)}s;
    
    &:hover {
      transform: none;
    }
  }

  @media (hover: none) {
    &:hover {
      transform: none;
    }
  }
`;

const BenefitIcon = styled.div`
  font-size: clamp(2.5rem, 5vw, 3rem);
  color: ${props => props.color || '#e74c3c'};
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
  
  &::after {
    content: '';
    position: absolute;
    width: 50px;
    height: 50px;
    background: ${props => props.color || '#e74c3c'}20;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    
    &::after {
      width: 40px;
      height: 40px;
    }
  }
`;

const BenefitTitle = styled.h3`
  font-size: clamp(1.2rem, 4vw, 1.5rem);
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 700;
  position: relative;
  z-index: 1;
`;

const BenefitDescription = styled.p`
  color: #34495e;
  line-height: 1.8;
  position: relative;
  z-index: 1;
  font-size: clamp(0.9rem, 2vw, 1rem);

  @media (max-width: 768px) {
    line-height: 1.6;
  }
`;

const Benefits = () => {
  const benefits = [
    {
      icon: "💝",
      title: "Душевное тепло и поддержка",
      description: "Создаю атмосферу, где каждый ребёнок чувствует себя ценным и важным, где ошибки — это часть пути к успеху",
      color: "#e74c3c"
    },
    {
      icon: "🤝",
      title: "Внимание к каждому",
      description: "Чутко отслеживаю прогресс и настроение ученика, адаптируя темп и методы обучения для максимального комфорта",
      color: "#3498db"
    },
    {
      icon: "🌱",
      title: "Бережное развитие",
      description: "Помогаю раскрыть природные способности ребёнка, укрепляя его уверенность в себе с каждым новым достижением",
      color: "#2ecc71"
    },
    {
      icon: "🎯",
      title: "Путь к успеху",
      description: "Вместе ставим цели и достигаем их, превращая сложные задачи в интересные вызовы, которые хочется преодолевать",
      color: "#f1c40f"
    },
    {
      icon: "🎨",
      title: "Творческий подход",
      description: "Использую увлекательные методики, которые делают обучение интересным и запоминающимся приключением",
      color: "#9b59b6"
    },
    {
      icon: "🤗",
      title: "Семейное участие",
      description: "Поддерживаю тесную связь с родителями, делясь успехами и совместно работая над развитием ребёнка",
      color: "#e67e22"
    }
  ];

  return (
    <BenefitsSection id="benefits">
      <SectionTitle>Как я помогаю вашему ребёнку</SectionTitle>
      <BenefitsGrid>
        {benefits.map((benefit, index) => (
          <BenefitCard 
            key={index} 
            index={index}
            iconColor={benefit.color}
          >
            <BenefitIcon color={benefit.color}>{benefit.icon}</BenefitIcon>
            <BenefitTitle>{benefit.title}</BenefitTitle>
            <BenefitDescription>{benefit.description}</BenefitDescription>
          </BenefitCard>
        ))}
      </BenefitsGrid>
    </BenefitsSection>
  );
};

export default Benefits;
