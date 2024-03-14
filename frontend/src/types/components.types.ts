import { ReactNode } from "react";

interface SubmitButtonTypes {
  variant?: string;
  loading: boolean;
  dt?: string;
  children: ReactNode;
}

interface propsTypes {
  avatar: string;
  username: string;
}

interface DataBoxOfProfileTypes {
  title: string;
  value: string;
}

interface NavLinkTypes {
  title: string;
  link: string;
}

export type {
  DataBoxOfProfileTypes,
  NavLinkTypes,
  SubmitButtonTypes,
  propsTypes,
};
