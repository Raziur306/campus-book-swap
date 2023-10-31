import React from "react";
import Success from "@/public/success";
const SubmissionSuccess = () => {
  return (
    <div className="flex flex-row gap-7 bg-white rounded-lg w-4/6  p-10">
      <div className="flex flex-col justify-center items-center gap-20 m-auto">
        <h2 className="text-3xl">Thank you For your Submission</h2>
        <Success />
        <p>Your Contribution will be live when it approved by admin.</p>
      </div>
    </div>
  );
};

export default SubmissionSuccess;
