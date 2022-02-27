//TODO: ADD 'NextImage' Insted of img tag
//TODO: ADD slider from material UI
//TODO: ADD REDUX & RECOIL/ ATOMS
//TODO: ADD React icons

//FIXME: Fix the code
import Image from "next/image";
import React from "react";
import { useState } from "react";
import Slider from "@mui/material/Slider";
import { GiRollingDices } from "react-icons/gi";
import Switch from "@mui/material/Switch";
import { useRecoilState } from "recoil";
import { mood } from "./atoms";
const axios = require("axios");

export const App = () => {
  // Setting up the initial states using react hook 'useState'
  const [sprite, setSprite] = useState("micah");
  const [seed, setSeed] = useState(1000);
  const [baground, setBackground] = useState("blue");
  const [hair, setHair] = useState("dougFunny");
  const [rotate, setRotate] = useState("0");
  const [scale, setScale] = useState("100");
  const [flip, setFlip] = useState(false);
  //Micha
  const [mouth, setMouth] = useState("laughing");
  const [baseColor, setBaseColor] = useState("coast");

  //Recoil state for the mood
  const [moodState, setMoodState] = useRecoilState(mood);

  const myLoader = () => {
    return `https://avatars.dicebear.com/api/${sprite}/${seed}.svg?background=${baground}&scale=${scale}&rotate=${rotate}&flip=${flip}&hair=${hair}&mouth=${mouth}&baseColor=${baseColor}&mood=${moodState}`;
  };
  // Function to set the current sprite type
  function handleSprite(spritetype) {
    setSprite(spritetype);
  }

  // Function to generate random seeds for the API
  function handleGenerate() {
    let x = Math.floor(Math.random() * 1000);
    setSeed(x);
  }

  // Function to download image and save it in our computer
  function downloadImage() {
    axios({
      method: "get",
      url: `https://avatars.dicebear.com/api/${sprite}/${seed}.svg?background=${baground}&scale=${scale}&hair=${hair}`,
      responseType: "arraybuffer",
    })
      .then((response) => {
        var link = document.createElement("a");
        link.href = window.URL.createObjectURL(
          new Blob([response.data], { type: "application/octet-stream" })
        );
        link.download = `${seed}.svg`;
        document.body.appendChild(link);
        link.click();
        setTimeout(function () {
          window.URL.revokeObjectURL(link);
        }, 200);
      })
      .catch((error) => {});
  }
  return (
    <div className=" flex flex-row space-x-8">
      <div className=" flex justify-center w-1/3 bg-white drop-shadow-lg rounded-lg p-4 ml-10   ">
        <div className="flex flex-col  space-x-2 space-y-4 w-1/2">
          <h1 className=" font-mono text-center capitalize text-2xl ">
            Choose Your Avatar
          </h1>
          <button
            className="bg-neumorphismColor-blue-100 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => {
              handleSprite("micah");
            }}
          >
            Micah
          </button>
          <button
            className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => {
              handleSprite("human");
            }}
          >
            Pixel
          </button>
          <button
            className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => {
              handleSprite("bottts");
            }}
          >
            Bots
          </button>
          <button
            className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => {
              handleSprite("jdenticon");
            }}
          >
            Vector
          </button>
          <button
            className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => {
              handleSprite("identicon");
            }}
          >
            Identicon
          </button>
          <button
            className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => {
              handleSprite("gridy");
            }}
          >
            Alien
          </button>
          <button
            className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => {
              handleSprite("micah");
            }}
          >
            Avatars
          </button>
        </div>
      </div>

      <div class="flex flex-col justify-center space-y-4  w-1/3   bg-white drop-shadow-lg rounded-lg p-4  ">
        <h1 className=" font-mono text-center capitalize text-2xl ">
          Style Your Avatar
        </h1>
        <div class="w-full  md:w-1/3 px-3 mb-6 md:mb-0  space-y-4">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-state"
          >
            Choose Background
          </label>
          <div class="relative">
            <select
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              onChange={(e) => {
                const selectedBackground = e.target.value;
                setBackground(selectedBackground);
              }}
            >
              <option value="blue">Blue</option>
              <option value="pink">Pink</option>
              <option value="orange">Orange</option>
              <option value="red">Red</option>
              <option value="purple">Purple</option>
              <option value="white">white</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
          </div>
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-state"
          >
            Choose Hair
          </label>
          <div class="relative">
            <select
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              onChange={(e) => {
                const selectedHair = e.target.value;
                setHair(selectedHair);
              }}
            >
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
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              onChange={(e) => {
                const selectedMouth = e.target.value;
                setMouth(selectedMouth);
              }}
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
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              onChange={(e) => {
                const selectedColor = e.target.value;
                setBaseColor(selectedColor);
              }}
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
            <h1 className=" font-mono text-center capitalize text-2xl ">
              Select Mood
            </h1>
            <select
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              onChange={(e) => {
                const selectedMood = e.target.value;
                setMoodState(selectedMood);
              }}
            >
              <option value="happy">happy</option>
              <option value="sad">sad</option>
              <option value="surprised">surprised</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
          </div>
        </div>

        <div className="generate space-x-2 space-y-2">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold "
            for="grid-state"
          >
            Flip Avatar
          </label>
          <Switch
            onChange={() => {
              setFlip(!flip);
            }}
            defaultChecked
          />
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-state"
          >
            Rotate Avatar
          </label>
          <Slider
            aria-label="Rotate"
            min={0}
            max={360}
            defaultValue={0}
            onChange={(e) => {
              const rotateValue = e.target.value;
              setRotate(rotateValue);
            }}
          />
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-state"
          >
            Change Scale
          </label>
          <Slider
            aria-label="Scale"
            min={0}
            max={100}
            defaultValue={100}
            onChange={(e) => {
              const scaleValue = e.target.value;
              setScale(scaleValue);
            }}
          />

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            id="down"
            onClick={() => {
              downloadImage();
            }}
          >
            Download
          </button>
        </div>
      </div>

      <div className=" flex flex-col items-center justify-center w-1/3 ">
        <Image
          className="bg-white drop-shadow-lg rounded-t-lg"
          loader={myLoader}
          src="me.png"
          alt="Sprite"
          width={500}
          height={500}
        />
        <button
          className=" felx flex-col items-center justify-center bg-blue-500 hover:bg-blue-700 text-white text-3xl font-bold py-2 px-4 w-5/6 h-1/6 rounded-b-lg focus:outline-none focus:shadow-outline "
          id="gen"
          onClick={() => {
            handleGenerate();
          }}
        >
          Roll
          <GiRollingDices size={55} />
        </button>
      </div>
    </div>
  );
};
