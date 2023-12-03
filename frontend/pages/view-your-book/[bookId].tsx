import { Leftbar, Topbar } from "@/components/shared";
import { CommonApiContext } from "@/context/CommonApiContext";
import SharedLayout from "@/layout/SharedLayout";
import {
  ViewYourBookContainer,
  ViewYourBookInfoTable,
  ViewYourBookTitleText,
} from "@/styled/viewYourBook.pageStyles";
import { convertEdition } from "@/utils/editionConverter";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";

const ViewYourBook = () => {
  const { yourContributionList, getYourContributionCall } =
    useContext(CommonApiContext);
  const router = useRouter();
  const { bookId } = router.query;
  useEffect(() => {
    if (yourContributionList.length == 0) {
      getYourContributionCall();
    }
  }, []);

  const bookInfo = yourContributionList.find((item: any) => item.id == bookId);

  console.log(bookInfo);

  return (
    <SharedLayout SideBar={<Leftbar />} title={"Book Name"} TopBar={<Topbar />}>
      <ViewYourBookContainer>
        <div className="bg-white w-full rounded-md p-5 flex flex-col gap-5">
          <ViewYourBookTitleText>Book Details</ViewYourBookTitleText>
          <div className="flex flex-row gap-10">
            <Image
              priority={true}
              width={250}
              height={200}
              alt={`${bookInfo?.title}`}
              src={bookInfo?.coverImg || "/"}
            />
            <ViewYourBookInfoTable>
              <tbody>
                <tr>
                  <td className="font-semibold">Book name</td>
                  <td>{bookInfo?.title}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Edition</td>
                  <td>{convertEdition(bookInfo?.bookEdition)}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Author</td>
                  <td>{bookInfo?.authorName}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Price</td>
                  <td>{bookInfo?.price}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Publisher</td>
                  <td>{bookInfo?.publisher}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Published Year</td>
                  <td>{bookInfo?.publishedYear}</td>
                </tr>
              </tbody>
            </ViewYourBookInfoTable>
          </div>
        </div>
        <div className="bg-white w-full rounded-md p-5">
          <ViewYourBookTitleText>Request Info</ViewYourBookTitleText>
        </div>
      </ViewYourBookContainer>
    </SharedLayout>
  );
};
export default ViewYourBook;
