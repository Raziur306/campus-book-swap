"use client";
import { BookCardContainer, BookImageWarapper, StyeledBookWriterText, StyledBookRatingText, StyledBookTitleText } from "@/styled";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const BookCard = () => {
  const router = useRouter();

  const handleClick =()=>{
    router.push('/book-details/100')
  }

  return (
    <BookCardContainer onClick={handleClick}>
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
