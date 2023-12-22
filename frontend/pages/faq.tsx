import FQASVG from "@/public/fqa";
import {
  FQATitleSubTitleText,
  FQATitleText,
  LinkWrapper,
  QACardContainer,
  UsefulLinksText,
} from "@/styled/fqaStyles";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";

const questionAns = [
  {
    question: "What is the Campus Book Swap System?",
    answer:
      "Campus Book Swap system is a intra Campus Book Exchange portal where user can Donate & Request books.",
  },
  {
    question:
      "Can I make or receive payments through the Campus Book Swap System?",
    answer:
      "The system does not support payment transactions. If you wish to discuss financial arrangements, please communicate directly with the book donor or recipient. The platform focuses on fostering a culture of sharing and collaboration without involving monetary transactions.",
  },
  {
    question: "Can I create account with Edu Mail?",
    answer: "You can't create a account without Edu Mail.",
  },
  {
    question: "Can I view books from other campuses?",
    answer:
      "No the Campus Book Swap Portal will filter the book belogs to your Edu mail. Other books are not visible to you.",
  },
  {
    question: " How can I register on the Campus Book Swap System?",
    answer:
      "The Campus Book Swap Portal displays books associated with your educational institution's email domain. You won't see books from other campuses, ensuring a curated selection tailored to your academic community.",
  },
  {
    question: "How do I donate a book on the platform?",
    answer:
      "After logging in, navigate to Contribute menu.Provide the book details, including title, author, and a photo. Once submitted, your book will be available for swapping after getting approval of the Admin.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | any>(null);

  return (
    <>
      <Head>
        <title>FAQ | Campus Book Swap</title>
      </Head>
      <div className="w-4/5 m-auto mt-11">
        <div className="flex flex-row gap-5 items-center">
          <div className="w-full">
            <FQATitleText>FAQs</FQATitleText>
            <FQATitleSubTitleText>
              Have question? Here your&apos;ll find the answer most valuable by
              our partners along with access to step by step instruction and
              support.
            </FQATitleSubTitleText>
          </div>
          <div className="w-full">
            <FQASVG />
          </div>
        </div>
        <div className="flex flex-row gap-2 w-full py-10">
          <div className="w-2/5">
            <UsefulLinksText>Some useful links</UsefulLinksText>
            <LinkWrapper>
              <Link href={"/"}>Home</Link>
              <Link href={"/chats"}>Chats</Link>
              <Link href={"/contribute"}>Contribute</Link>
              <Link href={"/my-contribution"}>My Contribution</Link>
            </LinkWrapper>
          </div>

          <div className="flex flex-col gap-5 w-3/5">
            {questionAns.map((items: any, index: number) => {
              return (
                <QACardContainer
                  onClick={() =>
                    setActiveIndex(index == activeIndex ? null : index)
                  }
                  $isActive={activeIndex == index}
                  key={index}
                >
                  <h1>{items.question}</h1>
                  <p>{items.answer}</p>
                </QACardContainer>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
