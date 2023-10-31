import Image from "next/image";
import React from "react";

const MyContributionCard = () => {
  return (
    <div className="flex flex-row gap-8 w-full bg-white p-5 rounded-lg items-center cursor-pointer">
      <div className="relative w-28 aspect-[1/1] rounded-lg">
        <Image alt="Book" fill src={"/images/bookImg.jpg"} />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-[1.25rem]">Don’t Make Me Think</h2>
        <h3 className="text-[0.9375rem]">Steve Krug, 2000</h3>
        <p className="text-[0.725rem]">Second Edition</p>
      </div>
      <button>Delete</button>
    </div>
  );
};

export default MyContributionCard;
