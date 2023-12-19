import React from "react";
import { PiPlusSquareBold } from "react-icons/pi";

export const CreateTaskButton = ({ handleClick }) => {
    return (
        <div className="justify-end w-1/3 pl-8">
            <button
                className="flex justify-items-center items-center px-4 py-2 ml-14 w-2/3 bg-blue-400 font-bold rounded-md hover:bg-blue-500 transition-all duration-300"
                onClick={handleClick}
            >
                <PiPlusSquareBold className="text-3xl pt-1 text-white" />
                <span className="ml-2 text-white">タスク作成</span>
            </button>
        </div>
    );
};
