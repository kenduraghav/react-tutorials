import React, { createContext, useContext, useState} from 'react';
import type { Todo } from '../types';



interface TodoContextType {
    todos: Todo[];
    addTodo: (title: string, desc: string) => void;
    toggleTodo: (id: string) => void;
    deleteTodo:(idL: string) => void;
}


const TodoContext = createContext<TodoContextType | undefined >(undefined);

export function TodoProvider({children} : {children: React.ReactNode}) {

    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (title: string, desc: string) => {
        const newTodo: Todo = {
            id: Date.now().toString(),
            title,
            desc,
            completed: false,
            createdAt: new Date()
        };
        setTodos([...todos, newTodo]);
    };

    const toggleTodo = (id: string) => {
        setTodos(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    };

    const deleteTodo = (idL: string) => {
        setTodos(prev => prev.filter(t => t.id !== idL));
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo }}>
            {children}
        </TodoContext.Provider>
    );
}

export function useTodos() {
    const context = useContext(TodoContext);
    if (!context) throw new Error('useTodos must be used within TodoProvider');
    return context;
}