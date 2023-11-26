import { Leftbar } from "@/components/shared";
import TopBar from "@/components/shared/Topbar";
import SharedLayout from "@/layout/SharedLayout";
import React from "react";

const Search = () => {
  return (
    <SharedLayout title="Search" SideBar={<Leftbar />} TopBar={<TopBar />}>
      <div>Search</div>
    </SharedLayout>
  );
};

export default Search;
