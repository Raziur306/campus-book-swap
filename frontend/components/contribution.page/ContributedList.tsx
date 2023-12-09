import {
  ContributedListTitleText,
  PreviousContributionText,
} from "@/styled/contributionStyles";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BookCard } from "../shared";
import { cookies } from "@/config/Cookies";
import Image from "next/image";

const ContributedList = () => {
  const token = cookies.get("user_token");
  const [bookList, setBookList] = useState<any>([]);
  const myContributionCall = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/contribution`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      setBookList(data.result);
    } catch (error) {
      console.log("Contribute page error", error);
    }
  };

  useEffect(() => {
    myContributionCall();
  }, []);

  const visibleBooks = bookList?.slice(0, 2);

  return (
    <div className="w-2/6 flex flex-col gap-8">
      <ContributedListTitleText>
        Your <span>Contribution</span> Helps Other to Learn
      </ContributedListTitleText>
      <div className="flex flex-col justify-center">
        <PreviousContributionText>
          Your Previous Contributions
        </PreviousContributionText>
      </div>
      <div className="flex flex-row gap-5 items-center">
        {visibleBooks.map((book: any, index: number) => {
          const { title, id, authorName, bookEdition, coverImg, price } = book;
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

        {(visibleBooks.length == 0 || visibleBooks == undefined) && (
          <div className="flex flex-col justify-center items-center text-center">
            <Image
              width={200}
              height={200}
              alt="Donate motivation"
              src={"/contribute.png"}
            />
            <PreviousContributionText>
              Your donation today sparks a brighter tomorrow.
            </PreviousContributionText>
          </div>
        )}
      </div>
      {visibleBooks.length > 0 && (
        <Link className="hover:underline" href={"/my-contribution"}>
          View All
        </Link>
      )}
    </div>
  );
};

export default ContributedList;
