import { cookies } from "@/config/Cookies";
import { UsersStyledTable } from "@/styled";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { PaginationComponent } from "../shared";
import { DeleteBookModal, DeleteUserModal } from ".";

const UsersListSection = () => {
  const token = cookies.get("user_token");
  const [userList, setUserList] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 6;
  const offset = (currentPage - 1) * dataPerPage;
  const visibleUser = userList.slice(offset, offset + dataPerPage);
  const [isActionModalOpen, setIsActionModalOPen] = useState(false);
  const [userId, setUserId] = useState<string>("");

  const getUserList = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/users`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.ok) {
        setUserList(await res.json());
      }
    } catch (error) {
      console.error("Error fetching user list", error);
    }
  };

  useEffect(() => {
    getUserList();
  }, []);

  useEffect(() => {
    getUserList();
  }, [isActionModalOpen]);

  const handleCurrentPage = (index: number) => {
    setCurrentPage(index);
  };

  const handleUserDeleteClick = (id: string) => {
    setUserId(id);
    setIsActionModalOPen(true);
  };

  const handleModalClose = () => {
    setIsActionModalOPen(false);
  };

  return (
    <>
      <div className="w-full h-full flex flex-col gap-10 bg-white p-3 rounded-md">
        <UsersStyledTable>
          <thead>
            <tr>
              <th>#</th>
              <th>User ID</th>
              <th>Profile</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Email Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {visibleUser.map((item: any, index: number) => {
              const { id, name, verified, email, image } = item;
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{id}</td>
                  <td>
                    <Image
                      width={50}
                      height={50}
                      className="rounded-full"
                      alt="User Profile"
                      src={image || "/images/default.jpg"}
                    />
                  </td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{verified ? "Verified" : "Not Verified"}</td>
                  <td>
                    <button onClick={() => handleUserDeleteClick(id)}>
                      Delete User
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </UsersStyledTable>
        <PaginationComponent
          visibleItemCount={visibleUser.length}
          length={userList.length}
          dataPerPage={dataPerPage}
          getCurrentPage={handleCurrentPage}
        />
      </div>
      {isActionModalOpen && (
        <DeleteUserModal handleModalClose={handleModalClose} userId={userId} />
      )}
    </>
  );
};

export default UsersListSection;
