import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { useState, useEffect } from 'react';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const TestimonialsSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(180deg, #fff 0%, #f5f7fa 100%);
  position: relative;
  overflow: hidden;
  margin-top: -2rem;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
    margin-top: -1rem;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: clamp(2rem, 5vw, 3rem);
  color: #2c3e50;
  margin-bottom: 4rem;
  font-weight: 800;
  position: relative;
  z-index: 2;
  animation: ${fadeIn} 0.4s ease-out;

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

const TestimonialsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  padding: 0 60px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const TestimonialCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: clamp(1.5rem, 5vw, 3rem);
  margin: 0 auto;
  max-width: 800px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  animation: ${slideIn} 0.3s ease-out;
  text-align: center;
  position: relative;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  touch-action: pan-y pinch-zoom;

  &::before {
    content: '"';
    position: absolute;
    top: -30px;
    left: 30px;
    font-size: clamp(6rem, 10vw, 10rem);
    color: #e74c3c;
    opacity: 0.1;
    font-family: Georgia, serif;
    line-height: 1;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    
    &::before {
      top: -20px;
      left: 20px;
    }
  }
`;

const ProfileImage = styled.div`
  width: clamp(80px, 20vw, 120px);
  height: clamp(80px, 20vw, 120px);
  border-radius: 50%;
  margin: 0 auto 2rem;
  overflow: hidden;
  border: 4px solid #fff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  position: relative;
  animation: ${fadeIn} 0.3s ease-out;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  @media (max-width: 768px) {
    margin: 0 auto 1.5rem;
  }
`;

const TestimonialText = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: #34495e;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-style: italic;
  position: relative;
  z-index: 1;
  animation: ${fadeIn} 0.3s ease-out 0.1s both;

  @media (max-width: 768px) {
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;

const StudentName = styled.h4`
  font-size: clamp(1.2rem, 3vw, 1.4rem);
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-weight: 700;
  animation: ${fadeIn} 0.3s ease-out 0.2s both;
`;

const StudentInfo = styled.p`
  color: #e74c3c;
  font-weight: 600;
  margin-bottom: 2rem;
  font-size: clamp(0.9rem, 2.5vw, 1.1rem);
  animation: ${fadeIn} 0.3s ease-out 0.3s both;
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  animation: ${fadeIn} 0.3s ease-out 0.4s both;
`;

const NavButton = styled.button`
  background: ${props => props.active ? '#e74c3c' : 'transparent'};
  border: 2px solid #e74c3c;
  width: clamp(8px, 2vw, 12px);
  height: clamp(8px, 2vw, 12px);
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: #e74c3c;
    transform: scale(1.2);
  }

  @media (hover: none) {
    &:hover {
      transform: none;
    }
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  
  ${props => props.direction === 'prev' ? 'left: 0;' : 'right: 0;'}

  &:hover {
    background: #f8f9fa;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-50%) scale(1.1);
  }

  &::before {
    content: ${props => props.direction === 'prev' ? '"←"' : '"→"'};
    font-size: 1.5rem;
    color: #2c3e50;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const testimonials = [
  {
    name: "Елена Петрова",
    image: "https://placehold.co/200x200",
    info: "Мама ученицы 7 класса",
    text: "Я безмерно благодарна за то, как изменилось отношение моей дочери к русскому языку. Раньше это был самый нелюбимый предмет, а теперь она с удовольствием выполняет домашние задания и даже начала читать классическую литературу! Особенно ценно то, как учитель умеет поддержать и вдохновить ребёнка, найти подход и раскрыть его способности."
  },
  {
    name: "Михаил Иванов",
    image: "https://placehold.co/200x200",
    info: "Отец ученика с особенностями развития",
    text: "Мы долго искали преподавателя, который смог бы найти подход к нашему сыну. И мы так рады, что нашли! Благодаря чуткости, терпению и профессионализму учителя, наш ребёнок не только улучшил свои знания, но и стал более уверенным в себе. Каждый урок проходит в тёплой, доброжелательной атмосфере."
  },
  {
    name: "Анна Сидорова",
    image: "https://placehold.co/200x200",
    info: "Мама выпускницы, ЕГЭ на 98 баллов",
    text: "Подготовка к ЕГЭ - это всегда стресс, но благодаря нашему преподавателю этот период прошёл спокойно и продуктивно. Дочь не только блестяще сдала экзамен, но и сохранила любовь к предмету. Особенно ценно то, что учитель всегда была на связи, поддерживала и подбадривала в моменты неуверенности."
  },
  {
    name: "Дмитрий Николаев",
    image: "https://placehold.co/200x200",
    info: "Папа двух учеников",
    text: "Оба моих ребёнка занимаются у этого преподавателя, и я вижу, как по-разному она подходит к каждому из них, учитывая их характеры и способности. Старший сын уже победитель олимпиад, а младшая дочь, которая раньше стеснялась отвечать у доски, теперь с удовольствием участвует в школьных конкурсах чтецов."
  }
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextTestimonial();
    }
    if (isRightSwipe) {
      prevTestimonial();
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentTestimonial]);

  return (
    <TestimonialsSection id="testimonials">
      <SectionTitle>Отзывы родителей</SectionTitle>
      <TestimonialsContainer>
        <ArrowButton direction="prev" onClick={prevTestimonial} />
        <TestimonialCard
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <ProfileImage>
            <img 
              src={testimonials[currentTestimonial].image} 
              alt={testimonials[currentTestimonial].name} 
            />
          </ProfileImage>
          <TestimonialText>
            {testimonials[currentTestimonial].text}
          </TestimonialText>
          <StudentName>{testimonials[currentTestimonial].name}</StudentName>
          <StudentInfo>{testimonials[currentTestimonial].info}</StudentInfo>
          <NavigationButtons>
            {testimonials.map((_, index) => (
              <NavButton
                key={index}
                active={currentTestimonial === index}
                onClick={() => goToTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </NavigationButtons>
        </TestimonialCard>
        <ArrowButton direction="next" onClick={nextTestimonial} />
      </TestimonialsContainer>
    </TestimonialsSection>
  );
};

export default Testimonials;
