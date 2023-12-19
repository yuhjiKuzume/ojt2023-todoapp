import React from "react";
import { FaSearch } from "react-icons/fa";
import { InputDate } from "./parts/InputDate";

export const SearchTask = () => {
    return (
        <div className="flex justify-start w-2/3">
            <div className="flex flex-wrap w-9/12">
                <label className="w-full text-left">タスク名</label>
                <input
                    type="text"
                    className="block w-full rounded-md border py-1.5 px-2 my-2 text-gray-900 border-neutral-400 focus:outline-none focus:border-indigo-500 focus:ring-indigo-600"
                />
            </div>
            <div className="flex flex-wrap ml-5">
                <label for="limit" className="w-full text-left">
                    期限
                </label>
                <div className="flex items-center justify-between">
                    <InputDate />
                    <p className="w-1/8 mx-3">～</p>
                    <InputDate />
                </div>
            </div>
            <button className="text-2xl ml-4">
                <FaSearch />
            </button>
        </div>
    );
};
