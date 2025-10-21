import { Button, Container, ListGroup } from "react-bootstrap";
import { useTodos } from "../context/TodoContext";
import { CheckCircle } from "lucide-react";


export function TodoList() {

    const { todos, toggleTodo, deleteTodo } = useTodos();


    return (
        <Container className="d-flex justify-content-center my-4">
            <ListGroup className="w-100" style={{ maxWidth: "600px" }}>
                {todos.map(item => (
                    <ListGroup.Item
                        as="li"
                        key={item.id}
                        className="d-flex justify-content-between align-items-center py-1 px-3 my-1 rounded shadow-sm"
                    >
                        <div style={{
                            textDecoration: item.completed ? 'line-through' : 'none'
                        }}>
                            <CheckCircle
                                onClick={() => toggleTodo(item.id)}
                                color={item.completed ? 'green' : 'gray'}
                            />
                            <div className="ms-2 me-auto">
                                {item.title}
                            </div>
                            <small className="text-muted me-auto ms-2"> {
                                item.desc ? item.desc.length <= 10 ? item.desc : item.desc.substring(0, 10).concat('...') : ""
                            }</small>
                        </div>
                        <div>
                            <Button
                                size="sm"
                                variant="danger"
                                onClick={() => deleteTodo(item.id)}
                            >
                                🗑
                            </Button>
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
}