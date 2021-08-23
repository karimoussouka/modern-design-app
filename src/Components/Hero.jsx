import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components/macro";
import { Button } from "./Button";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";

const HeroSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;
const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;
const HeroSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;
const HeroSLider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
`;
const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;
const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% -100%);
  color: #fff;
  margin-left: 50px;

  h1 {
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 0.8rem;
  }
  p {
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  }
`;
const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 0%.5re;
`;
const SliderButtons = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;
`;
const ArrowButtons = css`
  width: 50px;
  height: 50px;
  color: #fff;
  border-radius: 50%;
  background: #000d1a;
  cursor: pointer;
  padding: 10px;
  margin-right: 1rem;
  user-select: non;
  transition: 0.3s;
  &:hover {
    background: #cd853f;
    transform: scale(1.05);
  }
`;
const PrevArrow = styled(IoArrowBack)`
  ${ArrowButtons}
`;
const NextArrow = styled(IoArrowForward)`
  ${ArrowButtons}
`;

const Hero = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  let long = 4;
  const timeout = useRef(null);

  useEffect(() => {
    timeout.current = setTimeout(nextSilde, 3000);
    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, long]);

  const prevSilde = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    setCurrent(current === 0 ? long - 1 : current - 1);
  };

  const nextSilde = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    setCurrent(current === long - 1 ? 0 : current + 1);
  };

  if (!Array.isArray(slides) || slides.lenght <= 0) {
    return null;
  }

  return (
    <HeroSection>
      <HeroWrapper>
        {slides.map((slide, index) => {
          return (
            <HeroSlide key={index}>
              {index === current && (
                <HeroSLider>
                  <HeroImage src={slide.Image} alt={slide.alt} />
                  <HeroContent>
                    <h1>{slide.title}</h1>
                    <p>{slide.price}</p>
                    <Button
                      to={slide.path}
                      primary="true"
                      css={`
                        max-width: 160px;
                        margin-top: 20px;
                        border-radius: 10px;
                      `}
                    >
                      {slide.label}
                      <Arrow />
                    </Button>
                  </HeroContent>
                </HeroSLider>
              )}
              ;
            </HeroSlide>
          );
        })}
        <SliderButtons>
          <PrevArrow onClick={prevSilde} />
          <NextArrow onClick={nextSilde} />
        </SliderButtons>
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;
