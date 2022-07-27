import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {

    const [todos, dispatchTodo] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
    
    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add todo',
            payload: todo
        };

        dispatchTodo(action);
    }
    
    const handleRemoveTodo = (id) => {
        const action = {
            type: '[TODO] Remove todo',
            payload: id
        };

        dispatchTodo(action);
    }

    const handleToggleTodo = (id) => {
        const action = {
            type: '[TODO] Toggle todo',
            payload: id
        };

        dispatchTodo(action);
    }

    const todosCount = todos.length;
    const pendingTodosCount = todos.filter(todo => !todo.done).length;

    return {
        todos,
        todosCount,
        pendingTodosCount,
        handleRemoveTodo,
        handleToggleTodo,
        handleNewTodo
    };
}
