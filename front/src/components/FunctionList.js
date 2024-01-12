import React from "react";
import { FaTasks } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { IoIosBuild } from "react-icons/io";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

export const FunctionList = React.memo(({ open, handleClick }) => {
    return (
        <>
            {open ? (
                <div className="flex flex-col justify-between w-52 bg-functionlist">
                    <div className="space-y-4">
                        <button className="flex justify-items-center mx-auto items-center px-4 py-3 mt-4 w-3/4 bg-blue-300 font-bold rounded-md hover:bg-blue-500 transition-all duration-300">
                            <FaTasks className="mr-3" />
                            <span>タスク</span>
                        </button>
                        <button className="flex justify-items-center mx-auto items-center px-4 py-3 w-3/4 bg-yellow-300 font-bold rounded-md hover:bg-yellow-500 transition-all duration-300">
                            <SlCalender className="mr-3" />
                            <span>未実装</span>
                        </button>
                        <button className="flex justify-items-center mx-auto items-center px-4 py-3 w-3/4 bg-green-300 font-bold rounded-md hover:bg-green-500 transition-all duration-300">
                            <IoIosBuild className="mr-3" />
                            <span>未実装</span>
                        </button>
                    </div>
                    <div className="flex h-10 border-t border-gray-700 justify-end">
                        <button onClick={handleClick} type="button" className="my-auto mx-4">
                            <FaAnglesLeft />
                        </button>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col justify-between w-16 bg-functionlist">
                    <div className="space-y-4">
                        <button className="flex justify-items-center mx-auto items-center px-4 py-3 mt-4 w-3/4 bg-blue-300 font-bold rounded-md hover:bg-blue-500 transition-all duration-300">
                            <FaTasks className="" />
                        </button>
                        <button className="flex justify-items-center mx-auto items-center px-4 py-3 w-3/4 bg-yellow-300 font-bold rounded-md hover:bg-yellow-500 transition-all duration-300">
                            <SlCalender className="" />
                        </button>
                        <button className="flex justify-items-center mx-auto items-center px-4 py-3 w-3/4 bg-green-300 font-bold rounded-md hover:bg-green-500 transition-all duration-300">
                            <IoIosBuild className="" />
                        </button>
                    </div>
                    <div className="flex h-10 border-t border-gray-700 justify-end">
                        <button onClick={handleClick} type="button" className="my-auto mx-4">
                            <FaAnglesRight />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
});
