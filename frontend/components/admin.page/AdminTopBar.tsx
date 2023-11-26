import {
  AdminTopBarContainer,
  AdminTopBarTextStyle,
} from "@/styled";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const AdminTopBar = ({ title,handleDrawerOpen }: { title: string, handleDrawerOpen:()=>void }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={"After-life Admin Portal"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%23314f8c%22></rect><path fill=%22%23fff%22 d=%22M43.61 62.36L43.61 62.36Q41.75 62.36 40.91 60.71Q40.07 59.06 40.07 56.51Q40.07 53.96 41.15 49.52L41.15 49.52Q39.05 49.34 34.01 48.68L34.01 48.68Q25.67 59 20.15 63.02L20.15 63.02Q15.41 66.56 10.31 66.56L10.31 66.56Q7.07 66.56 4.76 64.94Q2.45 63.32 2.45 60.14L2.45 60.14Q2.45 59.54 2.75 59.03Q3.05 58.52 3.35 58.76Q3.65 59 3.65 60.14L3.65 60.14Q3.65 62.18 5.24 63.20Q6.83 64.22 9.11 64.22L9.11 64.22Q14.03 64.22 18.80 61.01Q23.57 57.80 31.79 48.44L31.79 48.44Q22.97 47.36 20.15 47.36L20.15 47.36Q12.53 47.36 10.73 52.34L10.73 52.34Q10.49 53 10.49 53.57Q10.49 54.14 10.73 54.59Q10.97 55.04 10.82 55.31Q10.67 55.58 10.31 55.55Q9.95 55.52 9.71 55.16L9.71 55.16Q9.05 54.02 9.05 52.94L9.05 52.94Q9.05 49.22 10.40 47.45Q11.75 45.68 13.55 45.20L13.55 45.20Q15.71 44.60 18.59 44.60Q21.47 44.60 33.11 46.88L33.11 46.88Q36.35 43.16 42.95 34.91Q49.55 26.66 49.55 26.54L49.55 26.54L49.61 26.54Q49.67 26.48 49.91 26.36L49.91 26.36Q51.35 25.52 53.03 25.52L53.03 25.52Q53.63 25.52 53.63 26.12L53.63 26.12Q53.63 26.18 53.57 26.27Q53.51 26.36 53.45 26.51Q53.39 26.66 53.33 26.78L53.33 26.78Q47.57 36.32 44.39 48.26L44.39 48.26L44.21 48.68L45.71 48.74Q46.19 48.80 47.42 48.80Q48.65 48.80 50.03 48.23Q51.41 47.66 51.80 47Q52.19 46.34 52.49 46.70Q52.79 47.06 52.55 47.48L52.55 47.48Q51.89 48.68 50.21 49.22L50.21 49.22Q48.77 49.82 47.36 49.82Q45.95 49.82 45.53 49.82L45.53 49.82L43.91 49.76Q42.77 54.98 42.77 58.07Q42.77 61.16 44.45 61.16L44.45 61.16Q46.07 61.16 49.49 58.58Q52.91 56 55.91 51.92L55.91 51.92Q56.09 51.68 56.39 51.80Q56.69 51.92 56.69 52.10Q56.69 52.28 56.60 52.55Q56.51 52.82 55.67 53.90L55.67 53.90Q53.15 57.26 49.49 60.26L49.49 60.26Q46.85 62.36 43.61 62.36ZM46.91 32.18L46.91 32.18Q46.97 32.06 47.06 31.85Q47.15 31.64 47.21 31.52L47.21 31.52Q39.71 41.78 35.15 47.36L35.15 47.36L41.45 48.38Q43.13 41.84 46.91 32.18ZM55.01 57.62L55.01 57.62L59.03 57.98Q60.35 57.98 61.04 57.71Q61.73 57.44 62.06 57.56Q62.39 57.68 61.91 58.01Q61.43 58.34 60.32 58.52Q59.21 58.70 58.97 58.82L58.97 58.82Q59.93 59.18 61.07 59.84L61.07 59.84L64.25 61.82Q65.69 58.46 66.29 56.54L66.29 56.54Q65.93 56.72 65.33 56.81Q64.73 56.90 64.73 56.48L64.73 56.48Q64.73 56.06 65.45 55.82L65.45 55.82L66.77 55.46Q67.73 52.70 68.90 48.77Q70.07 44.84 70.07 44.78L70.07 44.78Q73.67 33.26 76.31 30.26Q78.95 27.26 81.17 26.36Q83.39 25.46 84.53 25.46L84.53 25.46Q87.71 25.46 89.57 27.98L89.57 27.98Q90.83 29.72 90.83 32.36L90.83 32.36Q90.83 37.34 87.44 42.26Q84.05 47.18 79.25 50.57Q74.45 53.96 69.29 55.76L69.29 55.76Q67.49 60.02 65.87 62.78L65.87 62.78Q75.05 68.66 78.89 69.92L78.89 69.92Q83.33 71.42 87.35 71.42L87.35 71.42Q91.73 71.42 94.61 69.02L94.61 69.02Q96.11 67.82 96.11 66.50Q96.11 65.18 95.60 64.16Q95.09 63.14 95.69 63.05Q96.29 62.96 96.65 63.68L96.65 63.68Q97.55 65.66 97.55 67.76L97.55 67.76Q97.55 68.12 97.55 68.48L97.55 68.48Q97.49 70.76 95.45 72.50L95.45 72.50Q93.05 74.54 88.07 74.54L88.07 74.54Q84.71 74.54 82.16 73.64Q79.61 72.74 78.14 72.17Q76.67 71.60 74.48 70.19Q72.29 68.78 71.39 68.18L71.39 68.18Q69.59 66.98 65.27 63.74L65.27 63.74Q62.15 69.14 59.75 69.14L59.75 69.14Q59.15 69.14 59.03 68.93Q58.91 68.72 59.06 68.54Q59.21 68.36 59.39 68.36L59.39 68.36Q61.37 68.18 63.83 62.78L63.83 62.78Q60.47 60.56 58.19 59.78L58.19 59.78Q56.15 60.62 55.37 60.62Q54.59 60.62 54.35 60.56L54.35 60.56Q53.33 60.20 53.33 59.30L53.33 59.30Q53.33 58.04 54.89 57.62L54.89 57.62Q54.89 57.62 55.01 57.62ZM88.37 31.22L88.37 31.22Q88.37 26.66 84.95 26.66L84.95 26.66Q81.89 26.66 79.73 29.78L79.73 29.78Q77.33 33.14 76.25 36.05Q75.17 38.96 74.69 40.34L74.69 40.34Q73.49 43.70 72.83 46.46L72.83 46.46Q70.85 51.98 69.95 54.08L69.95 54.08Q76.85 50.96 81.86 45.62Q86.87 40.28 88.13 33.56L88.13 33.56Q88.37 32.30 88.37 31.22Z%22></path></svg>"
        />
      </Head>
      <AdminTopBarContainer>
        <AdminTopBarTextStyle>{title}</AdminTopBarTextStyle>
      </AdminTopBarContainer>
    </>
  );
};

export default AdminTopBar;