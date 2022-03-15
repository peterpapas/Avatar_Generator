//TODO: ADD 'NextImage' Insted of img tag
//TODO: ADD slider from material UI
//TODO: ADD REDUX & RECOIL/ ATOMS
//TODO: ADD React icons
//TODO:Choose avatar squar tiles with preview small imge of avatar basic form and avatar name under it 8 OPTIONS 2/4

//FIXME: Center DICE
import "./App.css";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import Slider from "@mui/material/Slider";
import { GiRollingDices } from "react-icons/gi";
import Switch from "@mui/material/Switch";
import { useRecoilValue } from "recoil";
import {
  mood,
  botttsColors,
  michaHair,
  michaMouth,
  michaBaseColor,
  avatarsTop,
  openPeepsHead,
  openPeepsFace,
  openPeepsHairColor,
} from "./atoms";
//Conditional Rendering Forms
import { VectorForm } from "./Components/Form/VectorForm";
import { BotsForm } from "./Components/Form/BotsForm";
import { MichaForm } from "./Components/Form/MichaForm";
import { AvatarsForm } from "./Components/Form/AvatarsForm";
import { BigSmilesForm } from "./Components/Form/BigSmilesForm";
import { OpenPeepsForm } from "./Components/Form/OpenPeepsForm";
import { ReactComponent as ErrorPlaceholder } from "../src/Assets/Error-Placeholder.svg";
import { MainButtons } from "./Components/Buttons/MainButtons";

const axios = require("axios");

export const App = (imagesrc) => {
  // Setting up the initial states using react hook 'useState'

  const [sprite, setSprite] = useState("micah");
  const [seed, setSeed] = useState(1000);
  const [baground, setBackground] = useState("blue");
  const [rotate, setRotate] = useState("0");
  const [scale, setScale] = useState("100");
  const [flip, setFlip] = useState(false);
  const [switchstate, setSwitchState] = useState();

  //Recoil state

  //Pixel
  const moodState = useRecoilValue(mood);
  //Botts
  const botttsColorsState = useRecoilValue(botttsColors);
  //micha
  const michaHairState = useRecoilValue(michaHair);
  const michaMouthState = useRecoilValue(michaMouth);
  const michaBaseColorState = useRecoilValue(michaBaseColor);
  const avatarstopState = useRecoilValue(avatarsTop);
  //openPeeps
  const openPeepsHeadState = useRecoilValue(openPeepsHead);
  const openPeepsFaceState = useRecoilValue(openPeepsFace);

  //Conditionally rendered form swithch
  const conditionalForm = () => {
    switch (switchstate) {
      case "micha":
        return <MichaForm />;
      case "vector":
        return <VectorForm />;
      case "bots":
        return <BotsForm />;
      case "avataaars":
        return <AvatarsForm />;
      case "open-peeps":
        return <OpenPeepsForm />;
      case "identicon":
        return <BotsForm />;
      case "gridy":
        return;
      default:
        return <MichaForm />;
    }
  };
  const myLoader = () => {
    return `https://avatars.dicebear.com/api/${sprite}/${seed}.svg?background=${baground}&scale=${scale}&rotate=${rotate}&flip=${flip}&hair=${michaHairState}&mouth=${michaMouthState}&baseColor=${michaBaseColorState}&mood=${moodState}&colors=${botttsColorsState}&top=${avatarstopState}&head=${openPeepsHeadState}&face=${openPeepsFaceState}`;
  };
  //Handle Error Placeholder Next image
  const [src, setSrc] = useState("../src/Assets/Error-Placeholder.svg");

  //Function to handle the state of the switch
  const handleSwitchstate = (SwitchState) => {
    setSwitchState(SwitchState);
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
      url: `https://avatars.dicebear.com/api/${sprite}/${seed}.svg?background=${baground}&scale=${scale}&rotate=${rotate}&flip=${flip}&hair=${michaHairState}&mouth=${michaMouthState}&baseColor=${michaBaseColorState}&mood=${moodState}&colors=${botttsColorsState}`,
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
    <div
      className="flex flex-col  md:flex-row  space-x-8 items-center space-y-4"
      id="app"
    >
      <div className=" flex justify-center items-center w-auto h-3/4 bg-white drop-shadow-xl rounded-lg p-4 ml-10  bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 ">
        <div className="flex flex-col   space-x-2 space-y-4 w-auto md:w-1/2 ">
          <h1 className=" font-mono text-center capitalize text-2xl ">
            Choose Your Avatar
          </h1>

          <MainButtons
            onClick={() => {
              handleSprite("micah");
              handleSwitchstate("micha");
            }}
            name="Micah"
          />
          <MainButtons
            onClick={() => {
              handleSprite("human");
              handleSwitchstate("vector");
            }}
            name="Pixel"
          />

          <MainButtons
            onClick={() => {
              handleSprite("bottts");
              handleSwitchstate("bots");
            }}
            name="Bots"
          />
          <MainButtons
            onClick={() => {
              handleSprite("open-peeps");
              handleSwitchstate("open-peeps");
            }}
            name="Peeps"
          />
          <MainButtons
            onClick={() => {
              handleSprite("identicon");
              handleSwitchstate("identicon");
            }}
            name=" Identicon"
          />
          <MainButtons
            onClick={() => {
              handleSprite("gridy");
              handleSwitchstate("gridy");
            }}
            name="Alien"
          />
          <MainButtons
            onClick={() => {
              handleSprite("avataaars");
              handleSwitchstate("avataaars");
            }}
            name="Avatars"
          />
        </div>
      </div>

      <div class="flex flex-col justify-center space-y-4  h-3/4 w-auto md:w-1/3   bg-white drop-shadow-xl rounded-lg p-4 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 ">
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
          {conditionalForm()}
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

      <div className=" flex flex-col items-center justify-center w-auto h-3/4 md:w-1/3   ">
        <Image
          className="bg-white drop-shadow-xl rounded-t-lg bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200"
          loader={myLoader}
          src={src}
          alt="Style Your Avatar"
          width={500}
          height={500}
          onError={src} // <-- This is just to show how to handle errors
        />

        <button
          className=" felx flex-col items-center justify-center bg-white hover:bg-blue-400 text-white text-3xl font-bold py-2 px-4 w-5/6 h-1/6 rounded-b-lg focus:outline-none focus:shadow-outline bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200"
          id="gen"
          onClick={() => {
            handleGenerate();
          }}
        >
          Lucky Dip
          <GiRollingDices className="ml-10 mt-4" size={60} />
        </button>
      </div>
    </div>
  );
};
