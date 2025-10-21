import { useState } from "react";
import { useTodos } from "../context/TodoContext";
import { Button, Form, Modal, ModalBody } from "react-bootstrap";

interface TodoFormProps {
    show: boolean;
    onHide: () => void;
}

export function TodoForm({show, onHide}: TodoFormProps) {
    const[title, setTitle] = useState('');
    const[desc, setDesc] = useState('');

    const { addTodo } = useTodos();


    const handleSubmit  = (e: React.FormEvent) => {
        
        e.preventDefault();

        if(title.trim()){
            addTodo(title, desc? desc.trim():'');
            setTitle('');
            setDesc('');
            onHide();
        }
    };
    
    return (

        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Add New Todo</Modal.Title>
            </Modal.Header>
            <ModalBody>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Task</Form.Label>
                        <Form.Control
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="What needs to be done?"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                         <Form.Control
                            type="textarea"
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                            placeholder="Task Description"
                            autoFocus
                        />
                    </Form.Group>
                </Form>
            </ModalBody>

              <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Add Todo
                </Button>
            </Modal.Footer>
        </Modal>
    )
}