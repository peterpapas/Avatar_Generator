import React from "react";
import { useRecoilState } from "recoil";
import { michaMouth, michaHair } from "../../atoms";

//TODO: ADD HAIR OPTION

export const BigSmilesForm = () => {
  const [bigSmilesMouthstate, SetbigMouthsMouth] = useRecoilState(michaMouth);
  const [bigSmilesHairstate, SetbigMouthsHair] = useRecoilState(michaHair);

  function handleBigSmilesMouth(event) {
    SetbigMouthsMouth(event.target.value);
  }
  function handleBigSmilesHair(event) {
    SetbigMouthsHair(event.target.value);
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
        className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M5.293 6.293a1 1 0 011.414 0L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="grid-state"
      >
        Select Hair
      </label>
      <select
        className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="grid-state"
        onChange={handleBigSmilesHair}
      >
        <option value="shortHair">shortHair</option>
        <option value="mohawk">mohawk</option>
        <option value="wavyBob">wavyBob</option>
        <option value="bowlCutHair">bowlCutHair</option>
        <option value="curlyBob">curlyBob</option>
        <option value="straightHair">straightHair</option>
        <option value="braids">braids</option>
        <option value="shavedHead">shavedHead</option>
        <option value="bunHair">bunHair</option>
        <option value="froBun">froBun</option>
        <option value="bangs">bangs</option>
        <option value="halfShavedHead">halfShavedHead</option>
        <option value="curlyShortHair">curlyShortHair</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M5.293 6.293a1 1 0 011.414 0L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};
