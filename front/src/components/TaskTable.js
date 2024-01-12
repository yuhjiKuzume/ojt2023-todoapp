import React, { useContext, useEffect } from "react";
import axios from "axios";
import { TaskDataContext } from "../contexts/TaskDataContext.tsx";
import { BsFillTrash3Fill } from "react-icons/bs";
import { FaPenToSquare } from "react-icons/fa6";

export const TaskTable = ({ handleClick, setEdittask }) => {
    const { tasks, dispatch } = useContext(TaskDataContext);

    useEffect(() => {
        // axios
        //     .get("http://localhost:8000/api/tasks/")
        axios.get("https://todoapp-ojt2023.net/api/tasks/").then((res) => {
            dispatch({ type: "GET_TASK", payload: res.data });
        });
    }, []);

    const deleteTask = async () => {
        let checkedTasks = document.querySelectorAll("input[name=delete-select]:checked");

        if (checkedTasks.length === 0) {
            alert("削除するタスクを選択してください。");
        } else {
            for (let delete_data of checkedTasks) {
                const deleteres = await axios.delete(
                    `https://todoapp-ojt2023.net/api/tasks/${delete_data.value}`
                );
                // axios.getを呼び出す
                if (deleteres) {
                    const getres = await axios.get("https://todoapp-ojt2023.net/api/tasks/");
                    dispatch({ type: "GET_TASK", payload: getres.data });
                }
            }
        }
    };

    return (
        <div className="flex justify-center w-2/3">
            <div class="relative overflow-y-auto shadow-md sm:rounded-lg h-full w-full">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead
                        class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400"
                        style={{ position: "sticky", top: 0, left: 0 }}
                    >
                        <tr>
                            <th scope="col" class="p-4">
                                <div class="flex items-center">
                                    <input
                                        id="checkbox-all-search"
                                        type="checkbox"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label for="checkbox-all-search" class="sr-only">
                                        checkbox
                                    </label>
                                </div>
                            </th>
                            <th scope="col" class="px-3 py-3 w-1/6">
                                タスク名
                            </th>
                            <th scope="col" class="px-3 py-3">
                                詳細
                            </th>
                            <th scope="col" class="px-3 py-3 w-1/6">
                                期限
                            </th>
                            <th scope="col" class="px-3 py-3 w-1/12">
                                編集
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task) => (
                            <tr key={task.id} className="bg-white border-b">
                                <td class="w-4 p-4">
                                    <div class="flex items-center">
                                        <input
                                            id="checkbox-table-search"
                                            name="delete-select"
                                            type="checkbox"
                                            value={task.id}
                                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label for="checkbox-table-search" class="sr-only">
                                            checkbox
                                        </label>
                                    </div>
                                </td>
                                <td className="px-3 py-4">{task.title}</td>
                                <td className="px-3 py-4">{task.content}</td>
                                <td className="px-3 py-4">
                                    {task.limit != null &&
                                        new Date(task.limit).toLocaleDateString("ja-JP")}
                                </td>
                                <td className="px-3 py-1">
                                    <button
                                        onClick={() => {
                                            setEdittask({
                                                ...task,
                                                limit:
                                                    task.limit === null
                                                        ? null
                                                        : new Date(task.limit),
                                            });
                                            handleClick();
                                        }}
                                        className="flex items-center justify-center text-lg rounded-xl w-7 h-7 hover:text-blue-400"
                                    >
                                        <FaPenToSquare />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex space-y-3">
                <button
                    onClick={deleteTask}
                    className="flex items-center bg-orange-300 ml-4 px-3 rounded-xl text-lg h-[40px] w-[84px]"
                >
                    <BsFillTrash3Fill />
                    <p className="pl-1">削除</p>
                </button>
            </div>
        </div>
    );
};
