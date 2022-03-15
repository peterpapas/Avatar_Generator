import React from "react";

export const MainButtons = (props) => {
  return (
    <div className="flex flex-col space-x-2 space-y-4 w-auto  ">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={props.onClick}
      >
        {props.name}
      </button>
    </div>
  );
};
