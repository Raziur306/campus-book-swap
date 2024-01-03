import { SideBar } from "@/components/admin.page";
import { ChatModal } from "@/components/complains.Page";
import { PaginationComponent } from "@/components/shared";
import { cookies } from "@/config/Cookies";
import { StyledComplainsTable } from "@/styled/complains.pageStyles";
import { dateFormatter } from "@/utils/formartDate";
import React, { useEffect, useState } from "react";

const Complains = () => {
  const token = cookies.get("user_token");
  const [complainList, setComplainList] = useState<any>([]);
  const [selectedIndex, setSelectedIndex] = useState<any>(0);
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const dataPerPage = 6;
  const offset = (currentPage - 1) * dataPerPage;
  const visibleComplain = complainList.slice(offset, offset + dataPerPage);

  const fetchReport = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/complain`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        setComplainList(data);
      }
    } catch (error) {
      console.log("Fetching report error", error);
    }
  };

  useEffect(() => {
    fetchReport();
  }, []);

  const handleReportView = (index: number) => {
    setSelectedIndex(index);
    setIsChatModalOpen(true);
  };

  const handleChatModalClose = () => {
    setIsChatModalOpen(false);
  };

  const handleCurrentPage = (index: number) => {
    setCurrentPage(index);
  };

  return (
    <>
      <SideBar topBarTitle={"Complains"}>
        <div className="w-full h-full flex flex-col gap-10 bg-white p-3 rounded-md">
          <StyledComplainsTable>
            <thead>
              <tr>
                <th>#</th>
                <th>Conversation ID</th>
                <th>Created At</th>
                <th>Victim ID</th>
                <th>Victim Name</th>
                <th>Violator ID</th>
                <th>Violator Name</th>
                <th>View Conversation</th>
              </tr>
            </thead>
            <tbody>
              {complainList?.map((report: any, index: number) => {
                const { id, createdAt, reporterId } = report;
                const { users } = report.conversation;
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{id}</td>
                    <td>{dateFormatter(createdAt)}</td>
                    <td>{reporterId}</td>
                    <td>
                      {users[0].id == reporterId
                        ? users[0].name
                        : users[1].name}
                    </td>
                    <td>
                      {users[0].id != reporterId ? users[0].id : users[1].id}
                    </td>
                    <td>
                      {users[0].id != reporterId
                        ? users[0].name
                        : users[1].name}
                    </td>
                    <td>
                      <button
                        onClick={() => handleReportView(index)}
                        className="m-auto"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </StyledComplainsTable>
          <PaginationComponent
            visibleItemCount={visibleComplain.length}
            length={complainList.length}
            dataPerPage={dataPerPage}
            getCurrentPage={handleCurrentPage}
          />
        </div>
      </SideBar>
      {isChatModalOpen && (
        <ChatModal
          messages={complainList[selectedIndex].conversation.messages}
          handleChatModalClose={handleChatModalClose}
          reporterId={complainList[selectedIndex].reporterId}
        />
      )}
    </>
  );
};

export default Complains;
