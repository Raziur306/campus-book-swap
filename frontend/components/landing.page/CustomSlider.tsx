import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const Slider = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

const Slide = styled.div<{ $slidesToShow: number }>`
  min-width: ${(props: any) => 100 / props.$slidesToShow}%;
  flex: 0 0 auto;
`;

interface PropsType {
  slides: any[];
  slidesToShow: number;
}

const CustomSlider = ({ slides, slidesToShow }: PropsType) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);
  
    const totalSlides = slides.length;
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === totalSlides - slidesToShow ? 0 : prevIndex + 1
      );
    };
  
    useEffect(() => {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <SliderContainer>
        <Slider
          ref={sliderRef}
          style={{
            transform: `translateX(${-currentIndex * (100 / slidesToShow)}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <Slide key={index} $slidesToShow={slidesToShow}>
              {slide}
            </Slide>
          ))}
        </Slider>
      </SliderContainer>
    );
  };
  
  export default CustomSlider;