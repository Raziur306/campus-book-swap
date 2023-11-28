import React from "react";
import Image from "next/image";
import { SliderBookCardContainer } from "@/styled";
import { SliderPropsType } from "@/types";
import { useRouter } from "next/router";
const SliderBookCard = ({ id, coverImg }: SliderPropsType) => {
  const router = useRouter();

  return (
    <>
      <SliderBookCardContainer
        onClick={() => router.push(`/book-details/${id}`)}
      >
        <Image
          priority
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="Book Image"
          src={coverImg}
          className="bg-white p-4 rounded-md drop-shadow-md"
        />
      </SliderBookCardContainer>
    </>
  );
};

export default SliderBookCard;
