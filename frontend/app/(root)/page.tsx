"use client";
import { BookCard, QuoteSlider } from "@/components";
import React from "react";

const Home = () => {
  return (
    <div className="p-5">
      <div>
        <QuoteSlider />
      </div>

      <div className="mt-10 gap-10 grid sm:grid-cols-2 md:grid-cols-4 2xl:grid-cols-6 content-center">
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

export default Home;
