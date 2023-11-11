"use client";
import {
  BookCardContainer,
  BookImageWrapper,
  StyledBookWriterText,
  StyledBookRatingText,
  StyledBookTitleText,
} from "@/styled";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const BookCard = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/book-details/100");
  };

  return (
    <BookCardContainer onClick={handleClick}>
      <BookImageWrapper>
        <Image
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          alt="Book Image"
          src={"/images/bookImg.jpg"}
        />
      </BookImageWrapper>
      <StyledBookTitleText>Don’t Make Me think</StyledBookTitleText>
      <StyledBookWriterText>Steve Krug, 2000</StyledBookWriterText>
      <StyledBookRatingText>
        4.5<span>/5</span>
      </StyledBookRatingText>
    </BookCardContainer>
  );
};

export default BookCard;
