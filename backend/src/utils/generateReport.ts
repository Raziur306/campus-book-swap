import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";

const row = (doc: any, height: any) => {
  doc.lineJoin("miter").rect(30, height, 500, 20).stroke();
  return doc;
};

const textInRowFirst = (doc: any, text: any, height: any) => {
  doc.y = height;
  doc.x = 30;
  doc.fillColor("black");
  doc.text(text, {
    paragraphGap: 5,
    indent: 5,
    align: "justify",
    columns: 1,
  });
  return doc;
};

const textInRowSecond = (doc: any, text: any, height: any) => {
  doc.y = height;
  doc.x = 280;
  doc.fillColor("black");
  doc.text(text, {
    paragraphGap: 5,
    indent: 5,
    align: "center",
    columns: 1,
  });
  return doc;
};

const generateReport = (
  totalBooks: number,
  approvedBooks: number,
  pendingBooks: number,
  totalUser: number
) => {
  const doc = new PDFDocument({ size: "A4" });

  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}/${
    currentDate.getMonth() + 1
  }/${currentDate.getFullYear()}`;

  doc
    .font("src/utils/fonts/poppins-italic.ttf")
    .fontSize(10)
    .fillColor("#363434")
    .text(formattedDate, 10, 10, { align: "right" });

  doc
    .font("src/utils/fonts/poppins-italic.ttf")
    .fontSize(10)
    .fillColor("#363434")
    .text("Automatically generated electronic report", 20, 754, {
      align: "left",
    });

  doc
    .font("src/utils/fonts/poppins.ttf")
    .fontSize(10)
    .fillColor("#363434")
    .text("1/1", 20, 754, { align: "center" });

  doc
    .font("src/utils/fonts/poppins-bold.ttf")
    .fontSize(30)
    .fillColor("#fa7c54")
    .text("Campus Book Swap", 20, 20, { align: "center" });

  doc.image("src/utils/main-logo.jpg", 10, 10, { fit: [100, 100] });

  doc.font("src/utils/fonts/poppins.ttf").fontSize(12).fillColor("black");

  doc
    .font("src/utils/fonts/poppins-italic.ttf")
    .text("Generated Report", 60, 60, { align: "center" });

  doc.font("src/utils/fonts/poppins.ttf").fontSize(12).fillColor("black");
  doc.lineCap("butt").moveTo(270, 130).lineTo(270, 230).stroke();

  row(doc, 130);
  row(doc, 150);
  row(doc, 170);
  row(doc, 190);
  row(doc, 210);
  doc.font("src/utils/fonts/poppins-bold.ttf");
  textInRowFirst(doc, "Items", 132);
  doc.font("src/utils/fonts/poppins.ttf");
  textInRowFirst(doc, "Total Books", 152);
  textInRowFirst(doc, "Approved Books", 172);
  textInRowFirst(doc, "Pending for approval", 192);
  textInRowFirst(doc, "Total Users", 212);

  //dynamic data
  doc.font("src/utils/fonts/poppins-bold.ttf");
  textInRowSecond(doc, "Quantity", 132);
  doc.font("src/utils/fonts/poppins.ttf");
  textInRowSecond(doc, `${totalBooks}`, 152);
  textInRowSecond(doc, `${approvedBooks}`, 172);
  textInRowSecond(doc, `${pendingBooks}`, 192);
  textInRowSecond(doc, `${totalUser}`, 212);

  const outputPath = path.join(__dirname, "output.pdf");
  doc.pipe(fs.createWriteStream(outputPath));
  doc.end();
  return outputPath;
};

export { generateReport };
