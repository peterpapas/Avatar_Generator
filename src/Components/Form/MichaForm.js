import React from "react";
import { useRecoilState } from "recoil";
import { michaHair, michaMouth, michaBaseColor } from "../../atoms";

export const MichaForm = () => {
  const [michaHairstate, setMichaHair] = useRecoilState(michaHair);
  const [michaMouthstate, setMichaMouth] = useRecoilState(michaMouth);
  const [michaBaseColorstate, setMichaBaseColor] =
    useRecoilState(michaBaseColor);

  function handleMichaHair(event) {
    setMichaHair(event.target.value);
  }
  function handleMichaMouth(event) {
    setMichaMouth(event.target.value);
  }
  function handleMichaBaseColor(event) {
    setMichaBaseColor(event.target.value);
  }

  return (
    <div>
      <div class="w-auto md:w-1/3 px-3 mb-6 md:mb-0">
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
            onChange={handleMichaHair}
          >
            <option value="dougFunny">dougFunny</option>
            <option value="fonze">fonze</option>
            <option value="mrT">mrT</option>
            <option value="dougFunny">dougFunny</option>
            <option value="mrClean">mrClean</option>
            <option value="dannyPhantom">dannyPhantom</option>
            <option value="full">full</option>
            <option value="turban">turban</option>
            <option value="pixie">pixie</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
        </div>
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-state"
        >
          Choose Mouth
        </label>
        <div class="relative">
          <select
            class="block appearance-none w-full md:w-auto bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
            onChange={handleMichaMouth}
          >
            <option value="laughing">laughing</option>
            <option value="surprised">surprised</option>
            <option value="nervous">nervous</option>
            <option value="smile">smile</option>
            <option value="sad">sad</option>
            <option value="pucker">pucker</option>
            <option value="frown">frown</option>
            <option value="smirk">smirk</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
        </div>
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-state"
        >
          Choose Color
        </label>
        <div class="relative">
          <select
            class="block appearance-none w-full md:w-auto bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
            onChange={handleMichaBaseColor}
          >
            <option value="coast">coast</option>
            <option value="apricot">apricot</option>
            <option value="topaz">topaz</option>
            <option value="lavender">lavender</option>
            <option value="sky">sky</option>
            <option value="salmon">salmon</option>
            <option value="canary">canary</option>
            <option value="calm">calm</option>
            <option value="azure">azure</option>
            <option value="seashell">seashell</option>
            <option value="mellow">mellow</option>
          </select>

          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
        </div>
      </div>
    </div>
  );
};
