"use client";
import {
  StyledBookSubmitBtn,
  StyledContributeInputLabel,
  StyledContributionTextArea,
  StyledContributionTextField,
} from "@/styled/contributionStyles";
import React, { useState } from "react";
import { SubmissionSuccess } from ".";

const ContributionForm = () => {
  const [isFreeContribution, setIsFreeContribution] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleRadioBtnChange = () => {
    setIsFreeContribution(!isFreeContribution);
  };

  const handleOnSubmit = () => {
    setIsSuccess(true);
  };

  return (
    <>
      {!isSuccess && (
        <div className="flex flex-row gap-7 bg-white rounded-lg w-4/6  p-10">
          <div className=" flex flex-col gap-7 w-full">
            <h3>Fill up for Donation</h3>
            <div className="flex flex-col gap-2 w-full">
              <StyledContributeInputLabel htmlFor="Book Name">
                Book Title
              </StyledContributeInputLabel>
              <StyledContributionTextField placeholder="Book Title" />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <StyledContributeInputLabel htmlFor="Book Edition">
                Book Edition
              </StyledContributeInputLabel>
              <StyledContributionTextField placeholder="Enter book edition" />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <StyledContributeInputLabel htmlFor="Author Name">
                Author Name
              </StyledContributeInputLabel>
              <StyledContributionTextField placeholder="Author Name" />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <StyledContributeInputLabel htmlFor="Book Name">
                Publisher
              </StyledContributeInputLabel>
              <StyledContributionTextField placeholder="Enter publisher name" />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <StyledContributeInputLabel htmlFor="Publication Year">
                Published Year
              </StyledContributeInputLabel>
              <StyledContributionTextField placeholder="Enter published year" />
            </div>
          </div>
          <div className="flex flex-col gap-7 w-full">
            <div className="flex flex-col gap-5">
              <p>
                How would you like to contribute to our Book Donation cause?
              </p>
              <div className="flex flex-row gap-5">
                <div className="flex flex-row gap-5">
                  <input
                    onChange={handleRadioBtnChange}
                    checked={isFreeContribution}
                    type="radio"
                  />
                  <label>Free Contribution</label>
                </div>
                <div className="flex flex-row gap-5">
                  <input
                    onChange={handleRadioBtnChange}
                    checked={!isFreeContribution}
                    type="radio"
                  />
                  <label>Contribution with a Price</label>
                </div>
              </div>
            </div>
            {!isFreeContribution && (
              <div className="flex flex-col gap-2 w-full">
                <StyledContributeInputLabel htmlFor="Book Amount">
                  Amount
                </StyledContributeInputLabel>
                <StyledContributionTextField
                  placeholder="Enter amount"
                  type="number"
                />
              </div>
            )}

            <div className="flex flex-col gap-2 w-full">
              <StyledContributeInputLabel htmlFor="Reason of contribution">
                Purpose of contribution
              </StyledContributeInputLabel>
              <StyledContributionTextArea placeholder="Why you want to contribute..." />
            </div>

            <div className="flex flex-col gap-3 w-full">
              <StyledContributeInputLabel htmlFor="Cover Page">
                Upload Cover Page
              </StyledContributeInputLabel>
              <input type="File" />
            </div>
            <StyledBookSubmitBtn onClick={handleOnSubmit}>
              Submit
            </StyledBookSubmitBtn>
          </div>
        </div>
      )}

      {
        isSuccess && <SubmissionSuccess/>
      }
    </>
  );
};

export default ContributionForm;
