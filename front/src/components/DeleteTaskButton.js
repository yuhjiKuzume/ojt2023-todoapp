import React, { useContext } from "react";
import axios from "axios";
import { TaskDataContext } from "../contexts/TaskDataContext.tsx";
import { BsFillTrash3Fill } from "react-icons/bs";

export const DeleteTaskButton = () => {
    const { dispatch } = useContext(TaskDataContext);

    const deleteTask = () => {
        let checkedTasks = document.querySelectorAll("input[name=delete-select]:checked");

        if (checkedTasks.length == 0) {
            alert("削除するタスクを選択してください。");
        } else {
            for (let delete_data of checkedTasks) {
                axios.delete(`http://localhost:8000/api/tasks/${delete_data.value}`).then((res) => {
                    dispatch({ type: "DELETE_TASK", payload: res.data });
                });
            }
        }
    };

    return (
        <div className="flex flex-col space-y-3">
            <button
                onClick={deleteTask}
                className="flex items-center bg-orange-300 ml-4 px-3 rounded-xl text-lg h-[40px] w-[84px]"
            >
                <BsFillTrash3Fill />
                <p className="pl-1">削除</p>
            </button>
        </div>
    );
};
