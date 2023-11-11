"use client";
import ArrowLeft from "@/public/about/arrowLeft";
import Books from "@/public/about/books";
import ReadToKnowledge from "@/public/about/readToKnowledge";

import {
  AboutMainTitleText,
  AboutMotiveText,
  AboutParagraph,
  MainTitleTextStyle,
  StyledPrevBtn,
} from "@/styled/aboutpageStyles";
import Link from "next/link";
import React from "react";

const AboutComponent = () => {
  return (
    <div className="w-full h-screen bg-[#006B75] px-40 py-32 flex flex-col gap-16">
      <div className="flex flex-col gap-10">
        <Link href={"/"}>
          <StyledPrevBtn>
            <ArrowLeft />
          </StyledPrevBtn>
        </Link>
        <MainTitleTextStyle>~ WHO WE ARE</MainTitleTextStyle>
        <div>
          <AboutMainTitleText>We Help To Spread Knowledge.</AboutMainTitleText>
          <div className="flex flex-row justify-between items-center gap-10">
            <AboutParagraph>
              The Campus Book Swap System streamlines textbook exchange,
              fostering a cost-effective and sustainable approach to education.
              Students can save money by swapping required course materials,
              promoting community collaboration and reducing the environmental
              impact of traditional book consumption.
            </AboutParagraph>
            <div className="w-full h-full">
              <Books />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-10 items-center">
        <div>
          <ReadToKnowledge />
        </div>
        <AboutMotiveText>
          Empower minds, ignite connections! Join us in spreading the joy of
          learning through book donations.Together, let&apos;s build bridges of
          knowledge and create a community where the love for education knows no
          bounds.
        </AboutMotiveText>
      </div>
    </div>
  );
};

export default AboutComponent;
