import {
  BookCardContainer,
  BookImageWrapper,
  StyledBookWriterText,
  StyledBookTitleText,
  StyledInfoTextWrapper,
} from "@/styled";
import { BookCardPropsType } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const BookCard = ({
  title,
  id,
  authorName,
  bookEdition,
  coverImg,
  price,
}: BookCardPropsType) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/book-details/${id}`);
  };

  return (
    <BookCardContainer onClick={handleClick}>
      <BookImageWrapper>
        <Image
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          alt="Book Image"
          src={coverImg || "/images/bookImg.jpg"}
        />
      </BookImageWrapper>
      <div className="p-2 flex flex-col gap-1 w-full">
        <StyledBookTitleText>{title}</StyledBookTitleText>
        <StyledBookWriterText>{authorName}</StyledBookWriterText>
        <StyledInfoTextWrapper>
          <span>Edition {bookEdition}</span>
          {price == 0 && <span className="free">Free</span>}
          {price != 0 && <span className="price">{price} Tk</span>}
        </StyledInfoTextWrapper>
      </div>
    </BookCardContainer>
  );
};

export default BookCard;
