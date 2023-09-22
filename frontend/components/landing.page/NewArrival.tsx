"use client";
import {
  NewArrivalContainer,
  NewArrivalWrapper,
} from "@/styled";
import React from "react";
import Slider from "react-slick";
import { BookCard, SliderBookCard } from "..";

const NewArrival = () => {
  var settings = {
    arrows: false,
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <NewArrivalContainer>
      <NewArrivalWrapper>
        <p>New Arrival</p>
      </NewArrivalWrapper>
      <Slider {...settings} className="w-full py-2">
        <SliderBookCard />
        <SliderBookCard />
        <SliderBookCard />
        <SliderBookCard />
        <SliderBookCard />
        <SliderBookCard />
      </Slider>
    </NewArrivalContainer>
  );
};

export default NewArrival;
