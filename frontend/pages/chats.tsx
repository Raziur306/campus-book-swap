import { SideBar } from "@/components/admin.page";
import { ChatSection, ConversationSection } from "@/components/chats.page";
import { Topbar, Leftbar } from "@/components/shared";
import SharedLayout from "@/layout/SharedLayout";
import React, { useState } from "react";

const Chats = () => {
  const [conversationId, setConversationId] = useState<any>("");
  const getConversationId = (id: string) => {
    setConversationId(id);
  };
  return (
    <SharedLayout title="Chats" TopBar={<Topbar />} SideBar={<Leftbar />}>
      <div className="flex flex-row gap-10 m-10">
        <ConversationSection getConversationId={getConversationId} />
        <ChatSection conversationId={conversationId} />
      </div>
    </SharedLayout>
  );
};

export default Chats;
