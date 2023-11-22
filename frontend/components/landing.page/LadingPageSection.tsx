"use client";
import React from "react";
import { NewArrival, QuoteSlider } from "@/components/landing.page";
import { BookCard } from "@/components/shared";

const LadingPageSection = () => {
  return (
    <div className="p-5 ">
      <div className="flex flex-row gap-10 ">
        <QuoteSlider />
        <NewArrival />
      </div>

      <div className="mt-10 gap-10 grid sm:grid-cols-2 md:grid-cols-4 2xl:grid-cols-5  ">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </div>
  );
};

export default LadingPageSection;
