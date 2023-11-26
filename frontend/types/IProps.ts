import React from "react";

export interface SharedLayoutProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  TopBar?: React.ReactNode;
  SideBar?: React.ReactNode;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface PaginationProps {
  dataPerPage: number;
  length: number;
  visibleItemCount: number;
  getCurrentPage: (index: number) => void;
}

export interface ViewDetailDialogProps {
  handleDialogClose: () => void;
}

export interface ActionDialogProps {
  handleDialogClose: () => void;
}

export interface ViewBookDetailsDialogProps {
  handleDialogClose: () => void;
}

export interface ContextChildrenPropsType {
  children: React.ReactNode;
}

export interface CommonApiContextPropsType {
  bookList: any[];
  getAllBooks: () => void;
}
