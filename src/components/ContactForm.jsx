import { useState } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

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

const ContactSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: clamp(1.5rem, 5vw, 3rem);
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  animation: ${fadeIn} 0.4s ease-out;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #e74c3c, #c0392b);
    border-radius: 20px 20px 0 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1.5rem;
    border-radius: 15px;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: clamp(2rem, 5vw, 2.5rem);
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 800;
  position: relative;
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
    margin-bottom: 1rem;
    padding-right: 30px;
  }
`;

const Subtitle = styled.p`
  text-align: center;
  color: #34495e;
  font-size: clamp(1rem, 2vw, 1.1rem);
  margin-bottom: 2rem;
  line-height: 1.6;
  animation: ${fadeIn} 0.4s ease-out 0.1s both;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  animation: ${fadeIn} 0.4s ease-out;
  animation-delay: ${props => 0.05 * props.index}s;
  opacity: 0;
  animation-fill-mode: forwards;
`;

const Label = styled.label`
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  color: #2c3e50;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '*';
    color: #e74c3c;
    font-size: 1.2em;
  }
`;

const inputStyles = `
  padding: clamp(0.8rem, 2.5vw, 1rem);
  border: 2px solid rgba(44, 62, 80, 0.1);
  border-radius: 10px;
  font-size: clamp(0.9rem, 2vw, 1rem);
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.9);
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  
  &:focus {
    outline: none;
    border-color: #e74c3c;
    box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1);
  }

  &::placeholder {
    color: #95a5a6;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Input = styled.input`
  ${inputStyles}
`;

const TextArea = styled.textarea`
  ${inputStyles}
  min-height: 150px;
  resize: vertical;

  @media (max-width: 768px) {
    min-height: 120px;
  }
`;

const SubmitButton = styled.button`
  padding: clamp(1rem, 3vw, 1.2rem) 2rem;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  margin-top: 1rem;
  position: relative;
  overflow: hidden;
  animation: ${fadeIn} 0.4s ease-out;
  animation-delay: 0.2s;
  opacity: 0;
  animation-fill-mode: forwards;
  -webkit-tap-highlight-color: transparent;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #c0392b 0%, #e74c3c 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(231, 76, 60, 0.3);

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(1px);
  }

  span {
    position: relative;
    z-index: 1;
  }

  &:disabled {
    background: #95a5a6;
    cursor: not-allowed;
    transform: none;
    
    &:hover {
      box-shadow: none;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    
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

const SuccessMessage = styled.div`
  text-align: center;
  color: #27ae60;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  padding: 1.5rem;
  background: rgba(39, 174, 96, 0.1);
  border-radius: 10px;
  margin-top: 1.5rem;
  animation: ${fadeIn} 0.3s ease-out;
  border: 2px solid rgba(39, 174, 96, 0.2);

  &::before {
    content: '✓';
    display: block;
    font-size: clamp(1.5rem, 4vw, 2rem);
    margin-bottom: 0.5rem;
  }
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <ContactSection id="contact">
      <FormContainer>
        <Title>Давайте начнём наш путь</Title>
        <Subtitle>
          Запишитесь на пробный урок, и мы вместе создадим индивидуальную программу 
          обучения для вашего ребёнка
        </Subtitle>
        <Form onSubmit={handleSubmit}>
          <InputGroup index={1}>
            <Label htmlFor="name">Как вас зовут?</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Ваше имя"
            />
          </InputGroup>
          
          <InputGroup index={2}>
            <Label htmlFor="email">Электронная почта</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="example@mail.com"
            />
          </InputGroup>
          
          <InputGroup index={3}>
            <Label htmlFor="phone">Номер телефона</Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+7 (___) ___-__-__"
            />
          </InputGroup>
          
          <InputGroup index={4}>
            <Label htmlFor="message">Расскажите о ваших целях</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Поделитесь, чего вы хотите достичь, какие сложности испытываете, или задайте любые вопросы"
            />
          </InputGroup>
          
          <SubmitButton type="submit">
            <span>Записаться на пробный урок</span>
          </SubmitButton>
        </Form>
        
        {isSubmitted && (
          <SuccessMessage>
            Спасибо за ваше сообщение! Я свяжусь с вами в ближайшее время, 
            чтобы обсудить все детали и ответить на ваши вопросы.
          </SuccessMessage>
        )}
      </FormContainer>
    </ContactSection>
  );
};

export default ContactForm;
