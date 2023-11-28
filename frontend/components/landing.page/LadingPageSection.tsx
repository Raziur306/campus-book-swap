import React, { useContext, useEffect } from "react";
import { NewArrival, QuoteSlider } from "@/components/landing.page";
import { BookCard } from "@/components/shared";
import { CommonApiContext } from "@/context/CommonApiContext";

const LadingPageSection = () => {
  const { bookList, getAllBookCall } = useContext(CommonApiContext);

  useEffect(() => {
    getAllBookCall();
  }, []);

  return (
    <div className="p-5">
      <div className="flex flex-row gap-10 ">
        <QuoteSlider />
        <NewArrival />
      </div>

      <div className="mt-10 gap-10 grid sm:grid-cols-2 md:grid-cols-4 2xl:grid-cols-5  ">
        {bookList?.map((item: any, index: number) => {
          return <BookCard key={index} />;
        })}
      </div>
    </div>
  );
};

export default LadingPageSection;
