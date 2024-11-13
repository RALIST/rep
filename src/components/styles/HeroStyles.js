import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const decorativeLine = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100px;
  }
`;

export const HeroSection = styled.section`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #e74c3c, #c0392b);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 6rem 1.5rem 3rem;
    min-height: auto;
  }
`;

export const HeroContent = styled.div`
  flex: 1;
  padding: 2rem;
  animation: ${fadeIn} 0.4s ease-out;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 1rem;
    order: 2;
  }
`;

export const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-weight: 800;
  line-height: 1.2;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    height: 4px;
    background: #e74c3c;
    margin-top: 1rem;
    animation: ${decorativeLine} 0.6s ease-out forwards;
    width: 100px;
  }

  @media (max-width: 768px) {
    font-size: clamp(2rem, 7vw, 2.5rem);
    
    &::after {
      margin: 1rem auto 0;
      width: 60px;
    }
  }
`;

export const Subtitle = styled.p`
  font-size: clamp(1.1rem, 3vw, 1.5rem);
  color: #34495e;
  margin-bottom: 2.5rem;
  line-height: 1.8;
  max-width: 600px;
  animation: ${fadeIn} 0.4s ease-out 0.2s both;

  @media (max-width: 768px) {
    margin: 0 auto 2rem;
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

export const CTAButton = styled.button`
  padding: clamp(0.8rem, 3vw, 1.2rem) clamp(1.5rem, 5vw, 2.5rem);
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(231, 76, 60, 0.3);
  animation: ${fadeIn} 0.4s ease-out 0.3s both;
  position: relative;
  overflow: hidden;
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
    box-shadow: 0 6px 20px rgba(231, 76, 60, 0.4);

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

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
    
    &:hover {
      transform: none;
    }
  }
`;

export const HeroImage = styled.div`
  flex: 1;
  padding: 2rem;
  animation: ${fadeIn} 0.4s ease-out 0.2s both;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 120%;
    height: 120%;
    background: radial-gradient(circle, rgba(231, 76, 60, 0.1) 0%, rgba(231, 76, 60, 0) 70%);
    transform: translate(-50%, -50%);
    z-index: 0;
  }

  img {
    max-width: 60%;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    transform: perspective(1000px) rotateY(-5deg);
    transition: transform 0.3s ease;
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    order: 1;
    margin-bottom: 2rem;
    
    img {
      transform: none;
      max-width: 90%;
      margin: 0 auto;
      display: block;
      
      &:hover {
        transform: none;
      }
    }
  }
`;
