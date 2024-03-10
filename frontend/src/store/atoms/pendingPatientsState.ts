import { atom } from "recoil";

export const pendingPatients = atom({
  key: "pendingPatients",
  default: [],
});
