import {
  ContributionFormContainer,
  StyledBookSubmitBtn,
  StyledContributeInputLabel,
  StyledContributionTextArea,
  StyledContributionTextField,
} from "@/styled/contributionStyles";
import React, { useState } from "react";
import { SubmissionSuccess } from ".";
import { useFormik } from "formik";
import { number, object, string } from "yup";
import Cookies from "universal-cookie";
import toast from "react-hot-toast";

const ContributionForm = () => {
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const cookies = new Cookies(null, { path: "/" });
  const token = cookies.get("user_token");
  const [isFreeContribution, setIsFreeContribution] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [coverPge, setCoverPage] = useState<File>();
  const [fileError, setFileError] = useState<boolean>(false);
  const [priceError, setPriceError] = useState<boolean>(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setCoverPage(e.target.files[0]);
    }
  };

  const handleRadioBtnChange = () => {
    setIsFreeContribution(!isFreeContribution);
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      bookEdition: null,
      authorName: "",
      publisher: "",
      publishedYear: null,
      price: "",
      purpose: "",
    },
    validationSchema: object({
      title: string().required(),
      bookEdition: number().required(),
      authorName: string().required(),
      publisher: string().required(),
      publishedYear: number().required(),
      price: number(),
      purpose: string().required(),
    }),
    onSubmit: () => {
      handleOnSubmit();
    },
  });

  console.log(formik.errors);
  const handleOnSubmit = async () => {
    if (!coverPge) {
      return setFileError(true);
    }

    if (!isFreeContribution && formik.values.price == null) {
      return setPriceError(true);
    }
    setPriceError(false);
    setFileError(false);

    const formData = new FormData();
    formData.append("title", formik.values.title);
    formData.append("authorName", formik.values.authorName);
    formData.append("bookEdition", String(formik.values.bookEdition));
    formData.append("publishedYear", String(formik.values.publishedYear));
    formData.append("price", formik.values.price);
    formData.append("publisher", formik.values.publisher);
    formData.append("purpose", formik.values.purpose);
    formData.append("book-cover", coverPge);

    toast.success("Hello world");
    const submit = () =>
      fetch(`${BASE_URL}/donate-book`, {
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
        },
        body: formData,
      });

    await toast.promise(submit(), {
      loading: <b>Submitting data...</b>,
      success: (res: any) => {
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        setIsSuccess(true);
        return <b>Submission successful!</b>;
      },
      error: (err) => <b>{err}</b>,
    });
  };

  return (
    <>
      {!isSuccess && (
        <ContributionFormContainer>
          <div className=" flex flex-col gap-7 w-full">
            <h3>Fill up for Donation</h3>
            <div className="flex flex-col gap-2 w-full">
              <StyledContributeInputLabel htmlFor="Book Name">
                Book Title
              </StyledContributeInputLabel>
              <StyledContributionTextField
                placeholder="Book Title"
                name="title"
                onChange={formik.handleChange}
              />
              {formik.errors.title != undefined &&
                formik.touched.title == true && (
                  <div className="text-red-600">
                    {(formik.errors.title || "") as React.ReactNode}
                  </div>
                )}
            </div>
            <div className="flex flex-col gap-2 w-full">
              <StyledContributeInputLabel htmlFor="Book Edition">
                Book Edition
              </StyledContributeInputLabel>
              <StyledContributionTextField
                placeholder="Enter book edition"
                name="bookEdition"
                type="number"
                min={1}
                onChange={formik.handleChange}
              />
              {formik.errors.bookEdition != undefined &&
                formik.touched.bookEdition == true && (
                  <div className="text-red-600">
                    {(formik.errors.bookEdition || "") as React.ReactNode}
                  </div>
                )}
            </div>
            <div className="flex flex-col gap-2 w-full">
              <StyledContributeInputLabel htmlFor="Author Name">
                Author Name
              </StyledContributeInputLabel>
              <StyledContributionTextField
                placeholder="Author Name"
                name="authorName"
                onChange={formik.handleChange}
              />
              {formik.errors.authorName != undefined &&
                formik.touched.authorName == true && (
                  <div className="text-red-600">
                    {(formik.errors.authorName || "") as React.ReactNode}
                  </div>
                )}
            </div>
            <div className="flex flex-col gap-2 w-full">
              <StyledContributeInputLabel htmlFor="Book Name">
                Publisher
              </StyledContributeInputLabel>
              <StyledContributionTextField
                placeholder="Enter publisher name"
                name="publisher"
                onChange={formik.handleChange}
              />
              {formik.errors.publisher != undefined &&
                formik.touched.publisher == true && (
                  <div className="text-red-600">
                    {(formik.errors.publisher || "") as React.ReactNode}
                  </div>
                )}
            </div>
            <div className="flex flex-col gap-2 w-full">
              <StyledContributeInputLabel htmlFor="Publication Year">
                Published Year
              </StyledContributeInputLabel>
              <StyledContributionTextField
                type="number"
                placeholder="Enter published year"
                name="publishedYear"
                onChange={formik.handleChange}
                pattern="\d{4}"
                min={1971}
              />
              {formik.errors.publishedYear != undefined &&
                formik.touched.publishedYear == true && (
                  <div className="text-red-600">
                    {(formik.errors.publishedYear || "") as React.ReactNode}
                  </div>
                )}
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
                  name="price"
                  min={1}
                  onChange={formik.handleChange}
                />
                {priceError == true && (
                  <div className="text-red-600">
                    price field can&quot;t be empty
                  </div>
                )}
              </div>
            )}

            <div className="flex flex-col gap-2 w-full">
              <StyledContributeInputLabel htmlFor="Reason of contribution">
                Purpose of contribution
              </StyledContributeInputLabel>
              <StyledContributionTextArea
                placeholder="Why you want to contribute..."
                name="purpose"
                onChange={formik.handleChange}
              />
              {formik.errors.purpose != undefined &&
                formik.touched.purpose == true && (
                  <div className="text-red-600">
                    {(formik.errors.purpose || "") as React.ReactNode}
                  </div>
                )}
            </div>

            <div className="flex flex-col gap-3 w-full">
              <StyledContributeInputLabel htmlFor="Cover Page">
                Upload Cover Page
              </StyledContributeInputLabel>
              <input type="File" onChange={handleFileChange} />
              {fileError && (
                <div className="text-red-600">
                  you must need to upload a cover photo
                </div>
              )}
            </div>
            <StyledBookSubmitBtn
              type="button"
              onClick={() => formik.handleSubmit()}
            >
              Submit
            </StyledBookSubmitBtn>
          </div>
        </ContributionFormContainer>
      )}

      {isSuccess && <SubmissionSuccess />}
    </>
  );
};

export default ContributionForm;
