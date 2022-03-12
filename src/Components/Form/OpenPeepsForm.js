import React from "react";
import { useRecoilState } from "recoil";
import { openPeepsHead } from "../../atoms";

export const OpenPeepsForm = () => {
  const [peepsHead, setPeepsHead] = useRecoilState(openPeepsHead);

  function handlePeepsHead(event) {
    setPeepsHead(event.target.value);
  }
  return (
    <div>
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="grid-state"
      >
        Choose Hair
      </label>
      <div class="relative">
        <select
          class="block appearance-none w-full md:w-auto bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-state"
          onChange={handlePeepsHead}
        >
          <option value="afro">afro</option>
          <option value="bangs">bangs</option>
          <option value="bangs2">bangs2</option>
          <option value="bun">bun</option>
          <option value="bear">bear</option>
          <option value="bun2">bun2</option>
          <option value="cornrows">cornrows</option>
          <option value="dreads1">dreads1</option>
          <option value="flatTop">flatTop</option>
          <option value="grayBun">grayBun</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
      </div>
    </div>
  );
};
