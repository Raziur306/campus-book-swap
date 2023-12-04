import React, { useEffect, useState } from "react";
import { DashboardCardContainer, DashboardCardStatusWrapper } from "@/styled";
import ArrowTop from "@/public/admin/arrowTop";
import { cookies } from "@/config/Cookies";

const StatisticsCards = () => {
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const token = cookies.get("user_token");
  const [statisticInfo, setStatisticInfo] = useState<any>({});

  const fetchCall = async () => {
    try {
      const res = await fetch(`${BASE_URL}/admin/statistic-info`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        setStatisticInfo(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCall();
  }, []);
  return (
    <div className="grid gird-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
      <DashboardCardContainer>
        <div className="flex flex-col">
          <h2>Total Books</h2>
          <h4>Last 30 Days</h4>
        </div>
        <h3>{statisticInfo?.totalBook}</h3>
      </DashboardCardContainer>
      <DashboardCardContainer>
        <div className="flex flex-col">
          <h2>Pending Books</h2>
          <h4>Last 30 Days</h4>
        </div>
        <h3>{statisticInfo?.pendingBooks}</h3>
      </DashboardCardContainer>
      <DashboardCardContainer>
        <div className="flex flex-col">
          <h2>Total Users</h2>
          <h4>Last 30 Days</h4>
        </div>
        <h3>{statisticInfo?.totalUser}</h3>
      </DashboardCardContainer>
      <DashboardCardContainer>
        <div className="flex flex-col">
          <h2>Total Chats</h2>
          <h4>Last 30 Days</h4>
        </div>
        <h3>{statisticInfo?.totalChats}</h3>
      </DashboardCardContainer>
    </div>
  );
};

export default StatisticsCards;
