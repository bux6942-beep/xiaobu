import { useState, useEffect } from 'react';

function useTodos() {
    const [todos, setTodos] = useState([]);

    // Load todos from localStorage on component mount
    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(savedTodos);
    }, []);

    // Sync todos with localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text) => {
        const newTodo = { id: Date.now(), text, completed: false };
        setTodos((prevTodos) => [...prevTodos, newTodo]);
    };

    const deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
    };

    const toggleComplete = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map(todo => 
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const editTodo = (id, newText) => {
        setTodos((prevTodos) =>
            prevTodos.map(todo => 
                todo.id === id ? { ...todo, text: newText } : todo
            )
        );
    };

    return { todos, addTodo, deleteTodo, toggleComplete, editTodo };
}

export default useTodos;
