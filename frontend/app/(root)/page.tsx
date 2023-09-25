import { BookCard, NewArrival, QuoteSlider } from "@/components";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Home | Campus Book Swap",
};

const Home = () => {
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

export default Home;
