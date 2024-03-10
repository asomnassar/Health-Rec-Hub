import { ReactNode } from "react";

interface SubmitButtonTypes {
  variant?: string;
  loading: boolean;
  dt?: string;
  children: ReactNode;
}

export type { SubmitButtonTypes };
