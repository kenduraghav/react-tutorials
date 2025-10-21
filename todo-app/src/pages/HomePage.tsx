import { Plus } from "lucide-react";
import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useTodos } from "../context/TodoContext";
import { TodoList } from "../components/TodoList";
import { TodoForm } from "../components/TodoForm";


export function HomePage() {
    const { todos } = useTodos();
    const [showModal, setShowModal] = useState(false);

    return (
        <Container className="py-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1>My Todo App</h1>
                <Button onClick={() => setShowModal(true)}>
                    <Plus size={20} className="me-2 text-center" />
                    Add Todo
                </Button>
            </div>

            <div className="mb-4">
                <h5>Total Tasks: {todos.length}</h5>
                <h6>Completed: {todos.filter(t => t.completed).length}</h6>
            </div>

            <TodoList />

            <TodoForm show={showModal} onHide={() => setShowModal(false)} />
        </Container>
    );
}