import React from "react";
import { useRecoilState } from "recoil";
import { botttsColors } from "../../atoms";

export const BotsForm = () => {
  const [botttsColorsState, setBotttsColorsState] =
    useRecoilState(botttsColors);

  function handleChange(event) {
    setBotttsColorsState(event.target.value);
  }

  return (
    <div>
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="grid-state"
      >
        Select Bots Color
      </label>
      <select
        class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="grid-state"
        onChange={handleChange}
      >
        <option value="amber">amber</option>
        <option value="blue">blue</option>
        <option value="blueGrey">blueGrey</option>
        <option value="brown">brown</option>
        <option value="cyan">cyan</option>
        <option value="deepOrange">deepOrange</option>
        <option value="deepPurple">deepPurple</option>
        <option value="green">green</option>
        <option value="grey">grey</option>
        <option value="indigo">indigo</option>
        <option value="lightBlue">lightBlue</option>
        <option value="lightGreen">lightGreen</option>
        <option value="lime">lime</option>
        <option value="orange">orange</option>
        <option value="pink">pink</option>
        <option value="purple">purple</option>
        <option value="red">red</option>
        <option value="teal">teal</option>
        <option value="yellow">yellow</option>
      </select>
    </div>
  );
};
