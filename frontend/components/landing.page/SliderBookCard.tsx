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
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="Book Image"
          src={"/images/bookImg.jpg"}
          className="bg-white p-4 rounded-md drop-shadow-md"
        />
      </SliderBookCardContainer>
    </>
  );
};

export default SliderBookCard;
