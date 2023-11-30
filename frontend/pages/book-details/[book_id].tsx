import { BookDetailsSection } from "@/components/book.details.page";
import { Leftbar, Topbar } from "@/components/shared";
import SharedLayout from "@/layout/SharedLayout";
import React from "react";

const BookDetails = () => {
  return (
    <SharedLayout title="View Book" SideBar={<Leftbar />} TopBar={<Topbar />}>
      <BookDetailsSection />
    </SharedLayout>
  );
};

export default BookDetails;
