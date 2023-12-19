import "./App.css";
import { InitialScreen } from "./components/InitialScreen";
import { TaskDataContextProvider } from "./contexts/TaskDataContext.tsx";

function App() {
    return (
        <div>
            <TaskDataContextProvider>
                <InitialScreen />
            </TaskDataContextProvider>
        </div>
    );
}

export default App;
