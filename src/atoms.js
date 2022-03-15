import { atom } from "recoil";

//const mouth = ["smile", "openedSmile", "eating"];
//[1].map((x) => mouth[x])

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
  default: "fonze", // default value (aka initial value)
});

export const michaMouth = atom({
  key: "michaMouth", // unique ID (with respect to other atoms/selectors)
  default: "smile", // default value (aka initial value)
});

export const michaBaseColor = atom({
  key: "michaBaseColor", // unique ID (with respect to other atoms/selectors)
  default: "coast", // default value (aka initial value)
});

export const avatarsTop = atom({
  key: "avatarstop", // unique ID (with respect to other atoms/selectors)
  default: "shortHair", // default value (aka initial value)
});

export const openPeepsHead = atom({
  key: "openPeepsHead", // unique ID (with respect to other atoms/selectors)
  default: "afro", // default value (aka initial value)
});

export const openPeepsFace = atom({
  key: "openPeepsFace", // unique ID (with respect to other atoms/selectors)
  default: "angryWithFang", // default value (aka initial value)
});
