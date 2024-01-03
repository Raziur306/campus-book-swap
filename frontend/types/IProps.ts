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

export interface DeleteBookModalPropsType {
  handleModalClose: () => void;
  bookId: string;
}

export interface ViewBookDetailsModalProps {
  handleBookInfoModalClose: () => void;
  bookInfo: any;
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
  receiverId: string;
}

export interface ChatCardPropsType {
  name: string;
  image: string;
  text: string;
  isSelected: boolean;
  handleSelect: (receiverId: string) => void;
  lastMessageAt: string;
  conversationId: string;
}

export interface ConversationSectionPropsType {
  conversationId?: string;
}

export interface ConversationReportModalPropsType {
  handleModalClose: () => void;
  conversationId?: string;
}
