import { atom } from "recoil";

export const firstName = atom({
  key: "firstName",
  default: "",
});

export const lastName = atom({
  key: "lastName",
  default: "",
});

export const userEmail = atom({
  key: "email",
  default: "",
});

export const userPassword = atom({
  key: "password",
  default: "",
});
