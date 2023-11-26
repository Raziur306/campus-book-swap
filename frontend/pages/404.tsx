"use client";
import NextButton from "@/components/shared/next-button";
import {
  ErrorPageContainer,
  ErrorPageSubContainer,
} from "@/styled/error.page.styles";
import Error from "../public/errorPage/error";
import { useRouter } from "next/navigation";
import SharedLayout from "@/layout/SharedLayout";
const NotFound = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };

  return (
    <SharedLayout title="404! Page not found">
      <ErrorPageContainer>
        <ErrorPageSubContainer>
          <Error />
          <h3>Uh-oh!</h3>
          <h5>The page you want is missing.</h5>
          <p>We will have it back soon,promise!</p>
          <NextButton onClick={handleClick}>Go Back Home</NextButton>
        </ErrorPageSubContainer>
      </ErrorPageContainer>
    </SharedLayout>
  );
};
export default NotFound;
