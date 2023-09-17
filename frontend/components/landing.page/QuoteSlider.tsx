"use client";
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { StyledSliderContainer } from "@/styled/home.pageStyles";

export const qouteList = [
  {
    title: "Qoute 1",
    desc: "“There is more treasure in books than in all the pirate’s loot on Treasure Island.1”",
  },
  {
    title: "Qoute 2",
    desc: "“There is more treasure in books than in all the pirate’s loot on Treasure Island.2”",
  },
  {
    title: "Qoute 3",
    desc: "“There is more treasure in books than in all the pirate’s loot on Treasure Island3.”",
  },
  {
    title: "Qoute 4",
    desc: "“There is more treasure in books than in all the pirate’s loot on Treasure Island4.”",
  },
  {
    title: "Qoute 5",
    desc: "“There is more treasure in books than in all the pirate’s loot on Treasure Island5.”",
  },
];

const QuoteSlider = () => {
  var settings = {
    arrows:false,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <StyledSliderContainer className="w-full">
      <Slider {...settings}>
        {qouteList.map((qoute, index) => {
          return (
            <div key={index}>
              <h3>{qoute.title}</h3>
              <p>{qoute.desc}</p>
            </div>
          );
        })}
      </Slider>
    </StyledSliderContainer>
  );
};

export default QuoteSlider;
