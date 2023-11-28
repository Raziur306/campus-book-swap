import { NewArrivalContainer, NewArrivalWrapper } from "@/styled";
import React from "react";
import SliderBookCard from "./SliderBookCard";
import { CustomSlider } from ".";


const NewArrival = () => {
  return (
    <NewArrivalContainer>
      <NewArrivalWrapper>
        <p>New Arrival</p>
      </NewArrivalWrapper>
      <CustomSlider  slidesToShow={5} />
    </NewArrivalContainer>
  );
};

export default NewArrival;
