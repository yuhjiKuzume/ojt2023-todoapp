import React from "react";
import { SearchTask } from "./SearchTask";
import { CreateTaskButton } from "./CreateTaskButton";
import { TaskTable } from "./TaskTable";
import { useState, useCallback } from "react";
import { CreateTaskScreen } from "./CreateTaskScreen";
import { EditTaskScreen } from "./EditTaskScreen";

export const FunctionScreen = ({ open }) => {
    const [openCreateTaskMenu, setCreateTaskMenu] = useState(false);
    const handleTaskMenuOpen = useCallback(() => {
        setCreateTaskMenu(!openCreateTaskMenu);
    }, [openCreateTaskMenu]);

    const [editTask, setEditTask] = useState();
    const [openEditMenu, setEditMenu] = useState(false);
    const handleEditMenuOpen = useCallback(() => {
        setEditMenu(!openEditMenu);
    }, [openEditMenu]);

    return (
        <div
            className="bg-functionscreen  px-5 pt-3"
            style={{ width: open ? "calc(100vw - 208px)" : "calc(100vw - 64px)" }}
        >
            <div className="flex px-10 py-4 items-center space-x-10">
                <SearchTask />
                <CreateTaskButton handleClick={handleTaskMenuOpen} />
            </div>
            <div className="flex justify-center mx-2 mt-3 h-[73%] w-full">
                <TaskTable handleClick={handleEditMenuOpen} setEdittask={setEditTask} />
            </div>
            {openCreateTaskMenu && <CreateTaskScreen handleClick={handleTaskMenuOpen} />}
            {openEditMenu && (
                <EditTaskScreen editTask={editTask} handleClick={handleEditMenuOpen} />
            )}
        </div>
    );
};
