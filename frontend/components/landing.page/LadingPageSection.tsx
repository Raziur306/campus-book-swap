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

      <div className="mt-10 gap-10 grid sm:grid-cols-2 md:grid-cols-4 2xl:grid-cols-5">
        {bookList?.map((item: any, index: number) => {
          const { title, id, authorName, bookEdition, coverImg, price } = item;
          return (
            <BookCard
              title={title}
              id={id}
              key={index}
              authorName={authorName}
              bookEdition={bookEdition}
              coverImg={coverImg}
              price={price}
            />
          );
        })}
      </div>
      {bookList.length == 0 && (
        <p className="m-auto text-center font-sans">
          No Book Available in your campus
        </p>
      )}
    </div>
  );
};

export default LadingPageSection;
