import React, { useEffect } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { useTodos } from './hooks/useTodos';
import './App.css';

function App() {
  const { todos, loadTodos, addTodo, deleteTodo, toggleComplete, editTodo } = useTodos();

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <h1>📝 我的待办事项</h1>
        <p className="subtitle">Keep track of your tasks</p>
      </header>
      <main className="app-main">
        <AddTodo onAdd={addTodo} />
        <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleComplete} onEdit={editTodo} />
      </main>
      <footer className="app-footer">
        <p>总计: {todos.length} | 已完成: {todos.filter(t => t.completed).length}</p>
      </footer>
    </div>
  );
}

export default App;