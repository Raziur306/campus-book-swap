"use client";
import React from "react";
import {
  DashboardCardContainer,
  DashboardCardStatusWrapper,
} from "@/styled";
import ArrowTop from "@/public/admin/arrowTop";

const StatisticsCards = () => {
  return (
    <div className="grid gird-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
      <DashboardCardContainer>
        <div className="flex flex-col">
          <h2>Total Sales</h2>
          <h4>30 Days</h4>
        </div>
        <div className="flex flex-row justify-between">
          <h3>70,000</h3>
          <DashboardCardStatusWrapper>
            <h5>23.06%</h5>
            <ArrowTop />
          </DashboardCardStatusWrapper>
        </div>
      </DashboardCardContainer>
      <DashboardCardContainer>
        <div className="flex flex-col">
          <h2>Total orders</h2>
          <h4>30 Days</h4>
        </div>
        <div className="flex flex-row justify-between">
          <h3>10,000</h3>
          <DashboardCardStatusWrapper className="down">
            <h5>23.06%</h5>
            <ArrowTop />
          </DashboardCardStatusWrapper>
        </div>
      </DashboardCardContainer>
      <DashboardCardContainer>
        <div className="flex flex-col">
          <h2>Total customers</h2>
          <h4>30 Days</h4>
        </div>
        <div className="flex flex-row justify-between">
          <h3>10,000</h3>
          <DashboardCardStatusWrapper>
            <h5>23.06%</h5>
            <ArrowTop />
          </DashboardCardStatusWrapper>
        </div>
      </DashboardCardContainer>
      <DashboardCardContainer>
        <div className="flex flex-col">
          <h2>Total products</h2>
          <h4>30 Days</h4>
        </div>
        <div className="flex flex-row justify-between">
          <h3>10,000</h3>
          <DashboardCardStatusWrapper>
            <h5>23.06%</h5>
            <ArrowTop />
          </DashboardCardStatusWrapper>
        </div>
      </DashboardCardContainer>
    </div>
  );
};

export default StatisticsCards;
