import React, { useReducer, createContext } from "react";

// useReducerで生成する「参照用のstate」の型
type TaskData = {
    id: number;
    title: string;
    content?: string;
    limit?: Date;
};
// dispatch関数の第2引数に渡す「action」の型
type ReducerAction = {
    type: string;
    payload: any;
};

// createContext()のデフォルト値オブジェクトにasで割り当てる。
type TaskDataContext = {
    tasks: TaskData[];
    // dispatchの引数オブジェクトの型を、React.Dispatch<XXXXX> に定義する。
    dispatch: React.Dispatch<ReducerAction>;
};

// reducer関数：更新用dispatchトリガーで、stateを更新する処理。
// 引数:   1.state 2.action(dispatch関数の引数)
// 戻り値: 更新後の新しいstate
const reducerFunc = (tasks: TaskData[], action: ReducerAction) => {
    // action.typeの値で更新内容を切り替える。
    switch (action.type) {
        case "GET_TASK":
            return [...action.payload];
        case "CREATE_TASK":
            return [...tasks, action.payload];
        case "DELETE_TASK":
            console.log(action);
            const newtask = tasks.filter((task) => task.id !== action.payload.id);
            console.log(newtask);
            return newtask;
        case "EDIT_TASK":
            return tasks.map((task) => (task.id === action.payload.id ? action.payload : task));
        // 更新前のstateをそのまま返す。
        default:
            return tasks;
    }
};

const initialState: TaskData[] = [];

// createContextはReactフックではないため、コンポーネント外で使用可能
// as でオブジェクトの型チェックをクリアする。
export const TaskDataContext = createContext({} as TaskDataContext);

export const TaskDataContextProvider = (props): JSX.Element => {
    // useReducerで生成した「参照用state」と「更新用dispatch」を、contextに渡す。
    const [tasks, dispatch] = useReducer(reducerFunc, initialState);
    return (
        <TaskDataContext.Provider
            value={{
                tasks,
                dispatch,
            }}
        >
            {props.children}
        </TaskDataContext.Provider>
    );
};
