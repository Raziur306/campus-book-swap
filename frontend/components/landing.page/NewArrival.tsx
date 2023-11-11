"use client";
import { NewArrivalContainer, NewArrivalWrapper } from "@/styled";
import React from "react";
import { CustomSlider, SliderBookCard } from ".";

const sliderItem: any[] = [
  <SliderBookCard key={0} />,
  <SliderBookCard key={1} />,
  <SliderBookCard key={2} />,
  <SliderBookCard key={3} />,
  <SliderBookCard key={4} />,
  <SliderBookCard key={5} />,
  <SliderBookCard key={6} />,
  <SliderBookCard key={7} />,
  <SliderBookCard key={8} />,
];

const NewArrival = () => {
  return (
    <NewArrivalContainer>
      <NewArrivalWrapper>
        <p>New Arrival</p>
      </NewArrivalWrapper>
      <CustomSlider slides={sliderItem} slidesToShow={5} />
    </NewArrivalContainer>
  );
};

export default NewArrival;
