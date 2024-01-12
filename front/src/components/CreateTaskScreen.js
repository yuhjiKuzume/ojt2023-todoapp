import React, { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import { InputDate } from "./parts/InputDate.js";
import { useState } from "react";
import axios from "axios";
import { TaskDataContext } from "../contexts/TaskDataContext.tsx";

export const CreateTaskScreen = ({ handleClick }) => {
    const [task, setTask] = useState({ title: "", content: "", limit: null });
    const { dispatch } = useContext(TaskDataContext);

    const createTask = () => {
        const data = {
            title: task.title,
            content: task.content,
            limit: task.limit === null ? null : new Date(task.limit).toLocaleDateString("sv-SE"),
        };
        if (data.title === "") {
            alert("タスク名を入れてください");
        } else {
            axios
                .post("https://todoapp-ojt2023.net/api/tasks/", data)
                // axios
                //     .post("http://localhost:8000/api/tasks/", data)
                .then((res) => {
                    dispatch({ type: "CREATE_TASK", payload: res.data });
                    handleClick();
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    };

    return (
        <div className="fixed left-0 top-0 z-40 flex w-full h-full items-center justify-center">
            <div
                className="absolute h-full w-full"
                style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
            ></div>
            <div className="flex flex-col rounded shadow-lg bg-white text-black w-2/5 h-4/5 z-50">
                <div className="flex justify-between border-b px-3 py-2">
                    <h3 className="font-bold text-blue-700">タスク作成</h3>
                    <button className="bg-white" onClick={handleClick}>
                        <RxCross1 />
                    </button>
                </div>
                <div className="container space-y-5 px-3 py-2 h-full overflow-auto">
                    <div className="text-left">
                        <p>タスク名</p>
                        <input
                            type="text"
                            name="title"
                            value={task.title}
                            onChange={(evt) => setTask({ ...task, title: evt.target.value })}
                            className="block w-4/5 rounded-md border py-1.5 px-2 my-2 text-gray-900 border-neutral-400 focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                            required
                        />
                    </div>
                    <div className="text-left">
                        <p>期限</p>
                        <InputDate
                            value={task.limit}
                            handleChange={(date) => setTask({ ...task, limit: date })}
                        />
                    </div>
                    <div className="text-left">
                        <p>詳細</p>
                        <textarea
                            name="content"
                            value={task.content}
                            onChange={(evt) => setTask({ ...task, content: evt.target.value })}
                            maxLength={256}
                            style={{ minHeight: "100px" }}
                            className="block w-4/5 rounded-md border py-1.5 px-2 my-2 text-gray-900 border-neutral-400 focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                        />
                    </div>
                </div>
                <div className="border-t py-2 w-full">
                    <div className="flex justify-center">
                        <button
                            onClick={createTask}
                            className="mx-auto items-center px-4 py-2 w-1/10 bg-blue-300 font-bold rounded-3xl hover:bg-blue-500 transition-all duration-300"
                        >
                            作成
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
