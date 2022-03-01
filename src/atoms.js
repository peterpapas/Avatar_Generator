import { atom } from "recoil";

export const mood = atom({
  key: "mood", // unique ID (with respect to other atoms/selectors)
  default: "happy", // default value (aka initial value)
});

export const botttsColors = atom({
  key: "botttsColors", // unique ID (with respect to other atoms/selectors)
  default: "amber", // default value (aka initial value)
});

export const michaHair = atom({
  key: "michaHair", // unique ID (with respect to other atoms/selectors)
  default: "dougFunny", // default value (aka initial value)
});

export const michaMouth = atom({
  key: "michaMouth", // unique ID (with respect to other atoms/selectors)
  default: "laughing", // default value (aka initial value)
});

export const michaBaseColor = atom({
  key: "michaBaseColor", // unique ID (with respect to other atoms/selectors)
  default: "coast", // default value (aka initial value)
});
