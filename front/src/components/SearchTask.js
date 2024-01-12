import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
import { TaskDataContext } from "../contexts/TaskDataContext.tsx";
import { InputDate } from "./parts/InputDate";
import { useState } from "react";
import axios from "axios";

export const SearchTask = () => {
    const { tasks, dispatch } = useContext(TaskDataContext);
    const [Taskname, setTaskname] = useState("");
    const [TasklimitS, setTasklimitS] = useState("");
    const [TasklimitE, setTasklimitE] = useState("");

    const filterTasks = () => {
        var filtertask = tasks;
        if (Taskname) {
            // タスク名のフィルター
            filtertask = filtertask.filter((task) => task.title.includes(Taskname));
        }
        if (TasklimitS) {
            // 期限のフィルター（〇日以降）
            let DatelimitS = new Date(TasklimitS).toLocaleDateString("sv-SE");
            filtertask = filtertask.filter((task) => task.limit >= DatelimitS);
        }
        if (TasklimitE) {
            // 期限のフィルター（〇日以前）
            let DatelimitE = new Date(TasklimitE).toLocaleDateString("sv-SE");
            filtertask = filtertask.filter((task) => task.limit <= DatelimitE);
        }
        if (filtertask) {
            dispatch({ type: "FILTER_TASK", payload: filtertask });
        }
    };

    const resetTasks = async () => {
        setTaskname("");
        setTasklimitS("");
        setTasklimitE("");
        const getres = await axios.get("https://todoapp-ojt2023.net/api/tasks/");
        dispatch({ type: "GET_TASK", payload: getres.data });
    };

    return (
        <div className="flex justify-start w-2/3">
            <div className="flex flex-wrap w-9/12">
                <label className="w-full text-left">タスク名</label>
                <input
                    type="text"
                    value={Taskname}
                    onChange={(evt) => setTaskname(evt.target.value)}
                    className="block w-full rounded-md border py-1.5 px-2 my-2 text-gray-900 border-neutral-400 focus:outline-none focus:border-indigo-500 focus:ring-indigo-600"
                />
            </div>
            <div className="flex flex-wrap ml-5">
                <label for="limit" className="w-full text-left">
                    期限
                </label>
                <div className="flex items-center justify-between">
                    <InputDate value={TasklimitS} handleChange={(date) => setTasklimitS(date)} />
                    <p className="w-1/8 mx-3">～</p>
                    <InputDate value={TasklimitE} handleChange={(date) => setTasklimitE(date)} />
                </div>
            </div>
            <button className="text-2xl ml-4" onClick={filterTasks}>
                <FaSearch />
            </button>
            <button className="font-bold text-2xl ml-4" onClick={resetTasks}>
                <GrPowerReset />
            </button>
        </div>
    );
};
