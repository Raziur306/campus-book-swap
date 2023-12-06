import {
  AllBooksSection,
  ApprovedBooks,
  PendingBooksSection,
  SideBar,
} from "@/components/admin.page";
import {
  PendingAndRequestPageContainer,
  PendingPageMenuWrapper,
} from "@/styled/myContributionPageStyles";
import { useState } from "react";

const ProductList = () => {
  const [selectedMenu, setSelectedMenu] = useState<any>(0);

  const handleMenuClick = (index: number) => {
    setSelectedMenu(index);
  };

  return (
    <SideBar topBarTitle={"Book List"}>
      <PendingAndRequestPageContainer>
        <PendingPageMenuWrapper>
          <li
            onClick={() => handleMenuClick(0)}
            className={`${selectedMenu == 0 ? "active" : ""}`}
          >
            All Books
          </li>
          <li
            onClick={() => handleMenuClick(1)}
            className={`${selectedMenu == 1 ? "active" : ""}`}
          >
            Pending Books
          </li>
          <li
            onClick={() => handleMenuClick(2)}
            className={`${selectedMenu == 2 ? "active" : ""}`}
          >
            Approved Books
          </li>
        </PendingPageMenuWrapper>
        {selectedMenu == 0 && <AllBooksSection />}
        {selectedMenu == 1 && <PendingBooksSection />}
        {selectedMenu == 2 && <ApprovedBooks />}
      </PendingAndRequestPageContainer>
    </SideBar>
  );
};

export default ProductList;
