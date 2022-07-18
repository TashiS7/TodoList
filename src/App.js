import React, { useState, useEffect } from 'react';
import './App.css';

//Components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  //Data/State
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filtTodos, setFiltTodos] = useState([]);

  //EFFECT
  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filtHandler();
    saveLocalTodos();
  }, [todos, status]);

  //Functions/Switch Statement
  const filtHandler = () => {
    switch (status) {
      case 'completed':
        setFiltTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'incompleted':
        setFiltTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFiltTodos(todos);
        break;
    }
  };
  //Save to local
  const saveLocalTodos = () => {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  };

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let localTodo = JSON.parse(localStorage.getItem('todos'));
      setTodos(localTodo);
    }
  };

  //JSX
  return (
    <div className="App">
      <header>
        <h1>My Todo List ☑</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList filtTodos={filtTodos} todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
