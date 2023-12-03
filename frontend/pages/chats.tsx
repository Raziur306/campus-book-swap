import { SideBar } from "@/components/admin.page";
import { ChatSection, ConversationSection } from "@/components/chats.page";
import { Topbar, Leftbar } from "@/components/shared";
import SharedLayout from "@/layout/SharedLayout";
import React from "react";

const Chats = () => {
  return (
    <SharedLayout title="Chats" TopBar={<Topbar />} SideBar={<Leftbar />}>
      <div className="flex flex-row gap-10 m-10">
        <ChatSection />
        <ConversationSection />
      </div>
    </SharedLayout>
  );
};

export default Chats;
