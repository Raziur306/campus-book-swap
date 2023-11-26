import React from "react";
import Image from "next/image";
import {
  AboutAuthorTextStyle,
  BookDetailsImageWrapper,
  BookMenuItemP,
  OverViewItemBox,
  RequestOwnerBtn,
} from "@/styled/bookDetailsStyles";
import CheckedBox from "@/public/admin/checkedBox";
import ArrowLeft from "@/public/admin/arrowLeft";
import { useRouter } from "next/router";

const BookDetails = () => {
  const router = useRouter();
  const bookId = router.query.book_id;

  const handleGoBackClick = () => {
    router.back();
  };

  return (
    <div className="w-full p-5">
      <div
        className="flex flex-row gap-2 items-center cursor-pointer mb-10"
        onClick={handleGoBackClick}
      >
        <ArrowLeft />
        <p>Back to results</p>
      </div>
      <div className="flex flex-row gap-16">
        <BookDetailsImageWrapper>
          <Image fill priority alt="Book" src={"/images/bookImg.jpg"} />
        </BookDetailsImageWrapper>

        <div className=" flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-4xl">Don&apos;t Make Me Think </p>
            <p className="tex-xl">
              By <span className="underline">Steve Krug,</span> 2000
            </p>
            <p className="text-gray-500">Second Edition</p>
          </div>
          <div className="flex flex-row gap-10">
            <div className="flex flex-col gap-3">
              <p className="font-bold">Availability</p>
              <div className="flex flex-row gap-2 items-center">
                <CheckedBox />
                <p>Hard Copy</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <p className="font-bold">Status</p>
              <p className="bg-[#42BB4E] text-white p-3 rounded-md">In Stock</p>
            </div>
          </div>
          <RequestOwnerBtn>Request Owner</RequestOwnerBtn>
        </div>

        <div className="w-4/12 bg-white rounded-md py-10 px-14">
          <AboutAuthorTextStyle>
            About<span> Author</span>
          </AboutAuthorTextStyle>
          <div className="flex flex-row gap-40">
            <p className="mt-5 text-lg">Steve Krug</p>
            <Image
              width={88}
              height={101}
              alt="Author"
              src={"/images/author.jpg"}
            />
          </div>
          <p className="text-justify">
            Steve Krug is a usability consultant who has more than 30 years of
            experience as a user advocate for companies like Apple, Netscape,
            AOL, Lexus, and others. Based in part on the success of his first
            book, Don&apos;t Make Me Think, he has become a highly sought-after
            speaker on usability design.
          </p>

          <div className="flex flex-row gap-5 mt-10">
            <Image
              className="cursor-pointer"
              width={100}
              height={0}
              alt="Book"
              src={"/images/bookImg.jpg"}
            />
            <Image
              className="cursor-pointer"
              width={100}
              height={0}
              alt="Book"
              src={"/images/bookImg.jpg"}
            />
            <Image
              className="cursor-pointer"
              width={100}
              height={0}
              alt="Book"
              src={"/images/bookImg.jpg"}
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-white flex items-center mt-10">
        <BookMenuItemP>OverView</BookMenuItemP>
      </div>

      <div className="grid grid-cols-4 gap-5 mt-5">
        <OverViewItemBox>
          <p className="font-semibold text-gray-600">Publish Date</p>
          <p className="font-semibold">2000</p>
        </OverViewItemBox>
        <OverViewItemBox>
          <p className="font-semibold text-gray-600">Publisher</p>
          <p className="font-semibold text-[#F27851]">New Riders Press</p>
        </OverViewItemBox>
        <OverViewItemBox>
          <p className="font-semibold text-[#F27851]">Language</p>
          <p className="font-semibold">English</p>
        </OverViewItemBox>
        <OverViewItemBox>
          <p className="font-semibold text-gray-600">Pages</p>
          <p className="font-semibold">216</p>
        </OverViewItemBox>
      </div>
    </div>
  );
};

export default BookDetails;
