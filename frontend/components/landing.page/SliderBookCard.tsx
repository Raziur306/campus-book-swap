"use client";
import React from "react";
import Image from "next/image";
import { SliderBookCardContainer } from "@/styled";
const SliderBookCard = () => {
  return (
    <>
      <SliderBookCardContainer>
        <Image
          fill
          alt="Book Image"
          src={"/images/bookImg.jpg"}
          className="bg-white p-4 rounded-md drop-shadow-md"
        />
      </SliderBookCardContainer>
    </>
  );
};

export default SliderBookCard;
