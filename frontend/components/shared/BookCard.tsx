"use client";
import { BookCardContainer, BookImageWarapper, StyeledBookWriterText, StyledBookRatingText, StyledBookTitleText } from "@/styled";
import Image from "next/image";
import React from "react";

const BookCard = () => {
  return (
    <BookCardContainer>
      <BookImageWarapper>
        <Image fill alt="Book Image" src={"/images/bookImg.jpg"} />
      </BookImageWarapper>
      <StyledBookTitleText>Don’t Make Me think</StyledBookTitleText>
      <StyeledBookWriterText>Steve Krug, 2000</StyeledBookWriterText>
      <StyledBookRatingText>4.5<span>/5</span></StyledBookRatingText>
    </BookCardContainer>
  );
};

export default BookCard;
