import React from "react";
import { useRecoilState } from "recoil";
import { avatarsTop, michaMouth } from "../../atoms";

export const AvatarsForm = () => {
  const [avatarstopState, setAvatarstopState] = useRecoilState(avatarsTop);
  const [avatarsMouthstate, setAvatarsMouth] = useRecoilState(michaMouth);

  function handleChange(event) {
    setAvatarstopState(event.target.value);
  }

  function handleAvatarsMouth(event) {
    setAvatarsMouth(event.target.value);
  }
  return (
    <div>
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="grid-state"
      >
        Select Avatars head
      </label>
      <select
        class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="grid-state"
        onChange={handleChange}
      >
        <option value="shortHair">shortHair</option>
        <option value="longHair">longHair</option>
        <option value="eyepatch">eyepatch</option>
        <option value="hat">hat</option>
        <option value="hijab">hijab</option>
        <option value="turban">turban</option>
        <option value="bigHair">bigHair</option>
        <option value="bob">bob</option>
        <option value="bun">bun</option>
        <option value="curly">curly</option>
        <option value="curvy">curvy</option>
        <option value="dreads">dreads</option>
        <option value="frida">frida</option>
        <option value="fro">fro</option>
        <option value="froAndBand">froAndBand</option>
        <option value="longButNotTooLong">longButNotTooLong</option>
        <option value="shavedSides">shavedSides</option>
        <option value="straight01">straight01</option>
        <option value="straight02">straight02</option>
        <option value="straightAndStrand">straightAndStrand</option>
        <option value="dreads01">dreads01</option>
        <option value="dreads02">dreads02</option>
        <option value="frizzle">frizzle</option>
        <option value="shaggy">shaggy</option>
        <option value="shaggyMullet">shaggyMullet</option>
        <option value="shortFlat">shortFlat</option>
        <option value="shortRound">shortRound</option>
        <option value="shortWaved">shortWaved</option>
        <option value="sides">sides</option>
        <option value="theCaesar">theCaesar</option>
        <option value="theCaesarAndSidePart">theCaesarAndSidePart</option>
        <option value="winterHat01">winterHat01</option>
        <option value="winterHat02">winterHat02</option>
        <option value="shortWaved">shortWaved</option>
        <option value="winterHat03">winterHat03</option>
        <option value="winterHat04">winterHat04</option>
      </select>
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="grid-state"
      >
        Choose Mouth
      </label>

      <select
        class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="grid-state"
        onChange={handleAvatarsMouth}
      >
        <option value="smile">smile</option>
        <option value="tongue">tongue</option>
        <option value="twinkle">twinkle</option>
        <option value="vomit">vomit</option>
        <option value="serious">serious</option>
        <option value="concerned">concerned</option>
        <option value="disbelief">disbelief</option>
        <option value="eating">eating</option>
        <option value="grimace">grimace</option>
        <option value="sad">sad</option>
        <option value="scream">scream</option>
        <option value="screamOpen">screamOpen</option>
      </select>
    </div>
  );
};
