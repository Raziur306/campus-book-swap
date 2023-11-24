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
          src={"https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
          className="bg-white p-4 rounded-md drop-shadow-md"
        />
      </SliderBookCardContainer>
    </>
  );
};

export default SliderBookCard;
