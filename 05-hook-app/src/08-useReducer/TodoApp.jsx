import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { useTodos } from "../hooks";

export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount,handleRemoveTodo, handleToggleTodo, handleNewTodo } = useTodos();

    return (
        <>
            <h1>Todos ({ todosCount }) - <small>{ pendingTodosCount } pendientes</small></h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={ todos } 
                        onRemoveTodo={ handleRemoveTodo } 
                        onToggleTodo={ handleToggleTodo }
                    />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr/>

                    <TodoAdd 
                        onNewTodo={ handleNewTodo }
                    />
                </div>
            </div>
        </>
    )
}
