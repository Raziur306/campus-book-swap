"use client";
import {
  AdminTopBar,
  RecentBooksCard,
  RecentUserCard,
  SideBar,
  StatisticsCards,
  VisitorsChart,
} from "@/components/admin.page";
import { LargeCardContainer, LargeCardSubContainer } from "@/styled";

import React from "react";
import ArrowTop from "@/public/admin/arrowTop";



const Dashboard = () => {
  return (
    <SideBar topBarTitle="Dashboard">
      <StatisticsCards />
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        <RecentBooksCard />
        {/* <LargeCardContainer>
          <h2>Weekly Visitors</h2>
          <VisitorsChart />
        </LargeCardContainer> */}
        <RecentUserCard />
      </div>
    </SideBar>
  );
};

export default Dashboard;
