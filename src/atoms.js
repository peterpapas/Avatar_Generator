import { atom } from "recoil";

export const mood = atom({
  key: "mood", // unique ID (with respect to other atoms/selectors)
  default: "happy", // default value (aka initial value)
});

export const botttsColors = atom({
  key: "botttsColors", // unique ID (with respect to other atoms/selectors)
  default: "amber", // default value (aka initial value)
});
