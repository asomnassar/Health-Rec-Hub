import { selectorFamily } from "recoil";

export const pendingPatientsSelector = selectorFamily({
  key: "pendingPatientsSelector",
  get: () => async () => {
    try {
      console.log(1);
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  },
});
