import { atom } from "recoil";

export const userName = atom({
  key: "userName",
  default: "",
});

export const userPassword = atom({
  key: "userPassword",
  default: "",
});
