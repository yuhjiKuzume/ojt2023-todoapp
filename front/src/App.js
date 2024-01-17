import "./App.css";
import { MainScreen } from "./components/MainScreen";
import { TaskDataContextProvider } from "./contexts/TaskDataContext.tsx";

function App() {
    return (
        <div>
            <TaskDataContextProvider>
                <MainScreen />
            </TaskDataContextProvider>
        </div>
    );
}

export default App;
