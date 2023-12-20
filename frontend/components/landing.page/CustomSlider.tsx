import { CommonApiContext } from "@/context/CommonApiContext";
import React, { useState, useRef, useEffect, useContext } from "react";
import styled from "styled-components";
import { SliderBookCard } from ".";

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
  slidesToShow: number;
}

const CustomSlider = ({ slidesToShow }: PropsType) => {
  const { bookList } = useContext(CommonApiContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef(null);
  const visibleBooks = bookList.slice(0, 0 + 10);
  const totalSlides = visibleBooks?.length > 5 ? visibleBooks.length : 6;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (isHovered) {
        return prevIndex;
      } else {
        return prevIndex === totalSlides - slidesToShow ? 0 : prevIndex + 1;
      }
    });
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <SliderContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Slider
        ref={sliderRef}
        style={{
          transform: `translateX(${-currentIndex * (100 / slidesToShow)}%)`,
        }}
      >
        {visibleBooks.map((item: any, index: number) => {
          const { id, coverImg } = item;
          return (
            <Slide key={index} $slidesToShow={slidesToShow}>
              <SliderBookCard id={id} coverImg={coverImg} key={10} />,
            </Slide>
          );
        })}
      </Slider>
    </SliderContainer>
  );
};

export default CustomSlider;
