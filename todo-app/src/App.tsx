import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TodoProvider } from "./context/TodoContext";
import { HomePage } from "./pages/HomePage";

function App() {
    return (
        <TodoProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </TodoProvider>
    );
}

export default App;