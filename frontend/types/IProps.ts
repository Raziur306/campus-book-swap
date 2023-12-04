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
  requestInfo: any;
}

export interface ContextChildrenPropsType {
  children: React.ReactNode;
}

export interface CommonApiContextPropsType {
  bookList: any[];
  getAllBooks: () => void;
  getProfileInfoCall: () => void;
  profileInfo: any;
  getYourContributionCall: () => void;
  yourContributionList: any[];
}

export interface BookCardPropsType {
  title?: string;
  id?: string;
  authorName?: string;
  bookEdition?: string;
  coverImg?: string;
  price?: number;
}

export interface SliderPropsType {
  coverImg: string;
  id: string;
}

export interface RequestOwnerModalPropsType {
  handleCloseModal: () => void;
  bookId: string;
}

export interface ChatModalPropsType {
  handleChatModalClose: () => void;
}

export interface ChatCardPropsType {
  name: string;
  image: string;
  text: string;
  isSelected: boolean;
  handleSelect: (receiverId: string) => void;
  receiverId: string;
}

export interface ChatSectionPropsType {
  getReceiverId: (receiverId: string) => void;
}

export interface ConversationSectionPropsType {
  receiverId?: string;
}
