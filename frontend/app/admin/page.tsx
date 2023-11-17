"use client";
import {
  AdminTopBar,
  RecentUserCard,
  SideBar,
  StatisticsCards,
  VisitorsChart,
} from "@/components/admin.page";
import {
  LargeCardContainer,
  LargeCardSubContainer,
} from "@/styled";

import React from "react";
import ArrowTop from "@/public/admin/arrowTop";

const recentPaymentList = [
  {
    amount: 100,
    name: "Teddy Sawe",
    time: "14 min",
  },
  {
    amount: 200,
    name: "Teddy Sawe",
    time: "2 hr",
  },
  {
    amount: 300,
    name: "Teddy Sawe",
    time: "1 d",
  },
];

const Dashboard = () => {
  return (
    <SideBar topBarTitle="Dashboard">
      <StatisticsCards />
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
        <LargeCardContainer>
          <h2>Recent Payments</h2>
          {recentPaymentList.map(({ name, amount, time }, index) => {
            return (
              <LargeCardSubContainer key={index}>
                <div className="flex flex-row justify-between">
                  <h3 className={`${index == 0 ? "active" : ""}`}>
                    Payment Received
                  </h3>
                  <h4>{time}</h4>
                </div>
                <p>
                  {name} just completed his payment <span>{amount}Ksh.</span>
                </p>
              </LargeCardSubContainer>
            );
          })}
        </LargeCardContainer>

        <LargeCardContainer>
          <h2>Weekly Visitors</h2>
          <VisitorsChart />
        </LargeCardContainer>
        <RecentUserCard />
      </div>
    </SideBar>
  );
};

export default Dashboard;
