"use client";
import { AdminTopBar, SideBar } from "@/components/admin.page";
import {
  ItemActionBtn,
  PaginationWrapper,
  ProductAddBtnStyle,
  ProductDeleteBtnStyle,
  ProductImageWrapper,
  SearchFieldStyle,
  StyledCheckBox,
  StyledSelectMenu,
  TableStyle,
} from "@/styled/admin.pageStyles";
import Image from "next/image";
import React, { useState } from "react";
import Add from "@/public/admin/add";
import Trash from "@/public/admin/trash";
import Pen from "@/public/admin/pen";
import ArrowRight from "@/public/admin/arrowRight";
import ArrowLeft from "@/public/admin/arrowLeft";
import Link from "next/link";
import { useRouter } from "next/navigation";

const itemList = [
  {
    id: 1,
    img: "/store/flowers1.png",
    title: "Flowers",
    price: "2,000 Ksh",
    checked: "true",
    permission: ["Pending"],
  },
  {
    id: 2,
    img: "/store/flowers3.png",
    title: "Flowers",
    price: "2,000 Ksh",
    permission: ["Create", "Delete"],
  },
  {
    id: 3,
    img: "/store/flowers4.png",
    title: "Flowers",
    price: "2,000 Ksh",
    checked: "true",
    permission: ["Create", "Delete"],
  },
  {
    id: 4,
    img: "/store/flowers5.png",
    title: "Flowers",
    price: "2,000 Ksh",
    checked: "true",
    permission: ["Create", "Delete"],
  },
  {
    id: 5,
    img: "/store/flowers6.png",
    title: "Flowers",
    price: "2,000 Ksh",
    checked: "true",
    permission: ["Create", "Delete"],
  },
  {
    id: 6,
    img: "/store/flowers7.png",
    title: "Flowers",
    price: "2,000 Ksh",
    checked: "true",
    permission: ["Create", "Delete"],
  },
  {
    id: 7,
    img: "/store/flowers8.png",
    title: "Flowers",
    price: "2,000 Ksh",
    checked: "true",
    permission: ["Create", "Delete"],
  },
  {
    id: 8,
    img: "/store/flowers9.png",
    title: "Flowers",
    price: "2,000 Ksh",
    checked: "true",
    permission: ["Create", "Delete"],
  },
  {
    id: 9,
    img: "/store/casket1.png",
    title: "Caskets",
    price: "55,000 Ksh",
    checked: "true",
    permission: ["Create", "Delete"],
  },
  {
    id: 10,
    img: "/store/casket2.png",
    title: "Caskets",
    price: "50,000 Ksh",
    checked: "true",
    permission: ["Create", "Delete"],
  },
  {
    id: 11,
    img: "/store/casket6.png",
    title: "Caskets",
    price: "70,000 Ksh",
    checked: "true",
    permission: ["Create", "Delete"],
  },
  {
    id: 12,
    img: "/store/casket5.png",
    title: "Caskets",
    price: "65,000 Ksh",
    checked: "true",
    permission: ["Create", "Delete"],
  },
];

const ProductList = ({ params }: { params: string }) => {
  const router = useRouter();
  const [dataPerPage, setDataPerPage] = useState(5);
  const [selectedProducts, setSelectedProducts] = useState<number | any>([]);
  const currentPage = Number(params.page) || 1;
  const offset = (currentPage - 1) * dataPerPage;

  const totalPages = Math.ceil(itemList.length / dataPerPage);

  const createPageLink = (page: number) => (
    <Link
      className={currentPage === page ? "active disabled" : ""}
      href={`${page}`}
      key={page}
    >
      {page}
    </Link>
  );

  const pageLinks: any[] = [];
  for (let i = 1; i <= totalPages; i++) {
    if (
      i <= 4 ||
      i > totalPages - 2 ||
      (i >= currentPage - 1 && i <= currentPage + 1)
    ) {
      pageLinks.push(createPageLink(i));
    } else if (
      (i === currentPage - 2 || i === currentPage + 2) &&
      i > 5 &&
      i < totalPages - 2
    ) {
      pageLinks.push(<span key={`dots-${i}`}>...</span>);
    }
  }

  const visibleProducts = itemList.slice(offset, offset + dataPerPage);

  const handleNumberOfItem = (e: any) => {
    setDataPerPage(e.target.value);
    router.push("1");
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      router.push(`${currentPage - 1}`);
    }
  };
  const handleNextClick = () => {
    if (currentPage < totalPages) {
      router.push(`${currentPage + 1}`);
    }
  };

  const toggleProductSelection = (productId: number) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(
        selectedProducts.filter((id: number) => id !== productId)
      );
    } else {
      setSelectedProducts([...selectedProducts, productId]);
    }
  };

  const toggleSelectAll = () => {
    if (selectedProducts.length === visibleProducts.length) {
      setSelectedProducts([]);
    } else {
      const allProductIds = visibleProducts.map((product: any) => product.id);
      setSelectedProducts(allProductIds);
    }
  };

  return (
    <SideBar topBarTitle="Product List">
      <div className="p-4 flex flex-col gap-10 bg-white">
        <div className="flex flex-col md:flex-row gap-5 justify-between">
          <div className="flex gap-4">
            <ProductAddBtnStyle>
              <Add />
              Add
            </ProductAddBtnStyle>
            <ProductDeleteBtnStyle>
              <Trash />
              Delete
            </ProductDeleteBtnStyle>
          </div>
          <div className="flex flex-row gap-4 items-center order-first md:order-last">
            <StyledSelectMenu
              className="order-last md:order-first"
              onChange={handleNumberOfItem}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </StyledSelectMenu>
            <SearchFieldStyle type="search" placeholder="Search" />
          </div>
        </div>
        <TableStyle>
          <thead>
            <tr>
              <th>
                <div className="flex flex-row gap-3 items-center w-fit">
                  <StyledCheckBox
                    checked={selectedProducts.length === visibleProducts.length}
                    onChange={() => toggleSelectAll()}
                    type="checkbox"
                  />
                  <span>Image</span>
                </div>
              </th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {visibleProducts.map(({ id, img, title, price }, index) => {
              return (
                <tr
                  key={id}
                  className={`${
                    selectedProducts.includes(id) ? "checked" : ""
                  }`}
                >
                  <td>
                    <div className="flex flex-row items-center gap-2">
                      <StyledCheckBox
                        type="checkbox"
                        checked={selectedProducts.includes(id)}
                        onChange={() => toggleProductSelection(id)}
                      />
                      <ProductImageWrapper>
                        <Image
                          fill
                          src={img}
                          alt={title}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </ProductImageWrapper>
                    </div>
                  </td>
                  <td>{title}</td>
                  <td>{price}</td>
                  <td>
                    <div className="flex flex-row gap-2 xl:gap-4 items-center">
                      <ItemActionBtn>
                        <Pen />
                      </ItemActionBtn>
                      <ItemActionBtn>
                        <Trash />
                      </ItemActionBtn>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </TableStyle>
        <PaginationWrapper>
          <h5 className="order-last md:order-first">
            Showing {visibleProducts.length} out of {itemList.length} entries
          </h5>
          <div className="flex flex-row gap-1 xl:gap-5">
            <button onClick={handlePrevClick}>
              <ArrowLeft />
            </button>
            {pageLinks}
            <button onClick={handleNextClick}>
              <ArrowRight />
            </button>
          </div>
        </PaginationWrapper>
      </div>
    </SideBar>
  );
};

export default ProductList;
