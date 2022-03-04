import React from "react";
import { useRecoilState } from "recoil";
import { michaMouth } from "../../atoms";

//TODO: ADD HAIR OPTION

export const BigSmilesForm = () => {
  const [bigSmilesMouthstate, SetbigMouthsMouth] = useRecoilState(michaMouth);

  function handleBigSmilesMouth(event) {
    SetbigMouthsMouth(event.target.value);
  }
  return (
    <div>
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="grid-state"
      >
        Select Smile
      </label>
      <select
        class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="grid-state"
        onChange={handleBigSmilesMouth}
      >
        <option value="openedSmile">openedSmile</option>
        <option value="unimpressed">unimpressed</option>
        <option value="gapSmile">gapSmile</option>
        <option value="openSad">openSad</option>
        <option value="teethSmile">teethSmile</option>
        <option value="awkwardSmile">awkwardSmile</option>
        <option value="braces">braces</option>
        <option value="kawaii">kawaii</option>
      </select>
    </div>
  );
};
