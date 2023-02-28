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
    <div className="flex flex-wrap justify-center gap-4">
      <div className="w-full md:w-1/3">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="hair"
        >
          Choose Hair
        </label>
        <div className="relative">
          <select
            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="hair"
            onChange={handleMichaHair}
            value={michaHairstate}
          >
            <option value="dougFunny">Doug Funny</option>
            <option value="fonze">Fonze</option>
            <option value="mrT">Mr. T</option>
            <option value="mrClean">Mr. Clean</option>
            <option value="dannyPhantom">Danny Phantom</option>
            <option value="full">Full</option>
            <option value="turban">Turban</option>
            <option value="pixie">Pixie</option>
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
      </div>
      <div className="w-full md:w-1/3">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="mouth"
        >
          Choose Mouth
        </label>
        <div className="relative">
          <select
            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="mouth"
            onChange={handleMichaMouth}
            value={michaMouthstate}
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
      </div>
      <div className="w-full md:w-1/3">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="mouth"
        >
          Choose Color
        </label>
        <div class="relative">
          <select
            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
      </div>
    </div>
  );
};
