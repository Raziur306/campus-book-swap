import { cookies } from "@/config/Cookies";
import { ReportStyledTable, ReportTitleHeroContainer, ReportTitleTextWrapper } from "@/styled/userReport.PageStyles";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const UserReport = () => {
  const token = cookies.get("user_token");
  const router = useRouter();
  const [reportData, setReportData] = useState<any>();

  useEffect(() => {
    const handleAfterPrint = () => {
      router.push("book-list");
    };

    if (reportData) {
      window.addEventListener("afterprint", handleAfterPrint);

      window.print();

      return () => {
        window.removeEventListener("afterprint", handleAfterPrint);
      };
    }
  }, [reportData]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/report-by-user`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${token}`,
            },
          }
        );
        if (res.ok) {
          setReportData(await res.json());
        }
      } catch (error) {
        console.log("Report fetching error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Report | Admin</title>
      </Head>
      <div className="w-ful flex flex-col justify-center  gap-10">
        <ReportTitleHeroContainer>
          <Image
            width={120}
            height={120}
            alt="Logo of System Panel"
            src={"/main-logo.jpg"}
            className="rounded-full"
          />
          <ReportTitleTextWrapper>
            <h1>Campus Book Swap</h1>
            <p>Individual user reports based on their book activity</p>
          </ReportTitleTextWrapper>
        </ReportTitleHeroContainer>

        <ReportStyledTable>
          <thead>
            <tr>
              <th>#</th>
              <th>User ID</th>
              <th>User Name</th>
              <th>Rejected Books</th>
              <th>Accepted Books</th>
              <th>Pending Books</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {reportData?.book_report.map((item: any, index: number) => {
              const { id, name, counts } = item;

              return (
                <tr key={id}>
                  <td className="text-center ">{index + 1}</td>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td className="text-center ">{counts.rejected}</td>
                  <td className="text-center ">{counts.approved}</td>
                  <td className="text-center ">{counts.pending}</td>
                  <td className="text-center ">
                    {counts.rejected + counts.approved + counts.pending}
                  </td>
                </tr>
              );
            })}
            <tr>
              <td className="!border-0" colSpan={3}></td>
              <td colSpan={3} className="text-center font-bold">
                Total Book
              </td>
              <td className="text-center font-bold">{reportData?.total}</td>
            </tr>
          </tbody>
        </ReportStyledTable>
      </div>
    </>
  );
};

export default UserReport;
