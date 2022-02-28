import React from "react";
import { useRecoilState } from "recoil";
import { mood } from "../../atoms";

export const VectorForm = () => {
  const [moodState, setMoodState] = useRecoilState(mood);

  function handleChange(event) {
    setMoodState(event.target.value);
  }

  return (
    <div>
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="grid-state"
      >
        Select Mood
      </label>
      <select
        class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="grid-state"
        onChange={handleChange}
      >
        <option value="happy">happy</option>
        <option value="sad">sad</option>
        <option value="surprised">surprised</option>
      </select>
    </div>
  );
};
