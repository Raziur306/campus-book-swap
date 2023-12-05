// pages/api/download.js
import path from "path";
import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method !== "GET") {
    return response.status(405).end();
  }

  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const token = request.headers.authorization;
  const res = await fetch(`${BASE_URL}/admin/generate-report`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `${token}`,
    },
  });

  if (!res.ok) {
    return response.status(404).end();
  }
  const data = await res.json();

  if (!data.report_link) {
    return response.status(404).end();
  }

  const fileName = path.basename(data.report_link);

  response.setHeader("Content-Disposition", `attachment; filename=${fileName}`);

  const fileStream = fs.createReadStream(data.report_link);
  fileStream.pipe(response);

  response.on("finish", () => {
    fileStream.close();
  });
}
