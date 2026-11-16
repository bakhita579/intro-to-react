import { useEffect, useState } from 'react';
import './App.css'
import TodoForm from './components/Todoform';
import Todos from './components/Todos';

const defaultTodos = [
    {id: 1, name:"Go for lunch"},
    {id: 2, name: "Go for work"},
    {id:3, name: "Prepare dinner"}
];
function App (){

    const [todos,setTodos]= useState(()=>{
        try{
            const saved = localStorage.getItem("todos")
            return saved !== null ? JSON.parse(saved) : defaultTodos
            
        }catch(error){
            return defaultTodos
        }
    })
    useEffect(() =>{
        try{
            localStorage.setItem("todos", JSON.stringify(todos))

        }catch (error) {
            console.error("could not save Todo", error)
        }
    }, [todos])

    const addTodo = (text) =>{
        const newTodo = { id: Date.now(), name: text };
        setTodos([...todos, newTodo]);
    }
    const onDelete= (id) => {
        let newTodos = todos.filter(todo => id !== todo.id)
        setTodos(newTodos)
    }

    return (
        <> 
        <h1 className="font-extrabold uppercase ">Todo App</h1>
        <TodoForm addTodo={addTodo} className= "font-semibold"/>
        <hr />
        <Todos todos={todos} onDelete={onDelete}/>
        </>
    )
}

export default App;