import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

import img from '../assets/2.jpg'

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

const AboutSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #fff 0%, #f5f7fa 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  animation: ${fadeIn} 0.4s ease-out;

  img {
    width: 100%;
    max-width: 500px;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    margin: 0 auto;
  }

  &::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    right: -20px;
    bottom: -20px;
    background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
    border-radius: 20px;
    opacity: 0.1;
    z-index: -1;
  }

  @media (max-width: 768px) {
    order: -1;
  }
`;

const Content = styled.div`
  animation: ${fadeIn} 0.4s ease-out 0.2s both;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  color: #2c3e50;
  margin-bottom: 2rem;
  font-weight: 800;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: #e74c3c;
    margin-top: 1rem;
  }

  @media (max-width: 768px) {
    text-align: center;
    
    &::after {
      margin: 1rem auto 0;
    }
  }
`;

const Description = styled.div`
  color: #34495e;
  font-size: clamp(1rem, 2vw, 1.1rem);
  line-height: 1.8;

  p {
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Highlight = styled.div`
  background: rgba(231, 76, 60, 0.1);
  border-left: 4px solid #e74c3c;
  padding: 1.5rem;
  border-radius: 0 10px 10px 0;
  margin: 2rem 0;
  font-style: italic;
  color: #2c3e50;
  animation: ${fadeIn} 0.4s ease-out 0.4s both;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

const Achievements = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
  animation: ${fadeIn} 0.4s ease-out 0.6s both;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Achievement = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(44, 62, 80, 0.1);

  h3 {
    color: #e74c3c;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    font-weight: 700;
  }

  p {
    color: #34495e;
    font-size: 0.9rem;
    margin: 0;
  }
`;

const AboutMe = () => {
  return (
    <AboutSection id="about">
      <Container>
        <Content>
          <Title>С любовью к языку и ученикам</Title>
          <Description>
            <p>
              Для меня преподавание — это не просто профессия, а истинное призвание, 
              которому я посвятила более 30 лет своей жизни. За эти годы сотни моих 
              учеников не только успешно освоили русский язык, но и открыли для себя 
              его удивительную красоту и богатство.
            </p>
            <p>
              Особую гордость вызывает мой опыт работы с детьми, имеющими особенности 
              здоровья. Именно эта работа научила меня безграничному терпению, чуткости 
              и умению находить подход к каждому ребёнку. Я твёрдо верю, что каждый 
              ученик способен достичь успеха, если создать для него правильную, 
              поддерживающую атмосферу.
            </p>
          </Description>
          
          <Highlight>
            &ldquo;В каждом ребёнке я вижу уникальную личность. Моя задача — не просто 
            научить правилам языка, но и помочь ученику поверить в свои силы, раскрыть 
            свой потенциал в доброжелательной и безопасной обстановке.&rdquo;
          </Highlight>

          <Description>
            <p>
              На моих уроках дети не только учатся, но и чувствуют себя комфортно и 
              уверенно. Я стремлюсь создать атмосферу, где каждый может задать вопрос, 
              не боясь ошибиться, где любопытство и стремление к знаниям всегда 
              поощряются.
            </p>
          </Description>

          <Achievements>
            <Achievement>
              <h3>Признанный опыт</h3>
              <p>
                Заслуженный учитель РФ с высшей квалификационной категорией. 
                Награждена почётными грамотами Министерства образования.
              </p>
            </Achievement>
            <Achievement>
              <h3>Забота о каждом</h3>
              <p>
                Специализируюсь на работе с детьми разного уровня подготовки, 
                включая особенные потребности в обучении.
              </p>
            </Achievement>
            <Achievement>
              <h3>Индивидуальный подход</h3>
              <p>
                Разрабатываю персональные программы обучения, учитывая особенности 
                и интересы каждого ученика.
              </p>
            </Achievement>
            <Achievement>
              <h3>Результаты, которыми горжусь</h3>
              <p>
                Мои ученики регулярно становятся призёрами олимпиад и поступают 
                в лучшие вузы страны.
              </p>
            </Achievement>
          </Achievements>
        </Content>
        
        <ImageContainer>
          <img src={img} alt="Преподаватель русского языка" />
        </ImageContainer>
      </Container>
    </AboutSection>
  );
};

export default AboutMe;
