import { Renderable, ToastPosition } from "react-hot-toast";

interface AlertFunTypes {
  msg: string;
  status?: string;
  pos?: ToastPosition;
  icon?: Renderable;
  dur?: number;
}

export type { AlertFunTypes };
