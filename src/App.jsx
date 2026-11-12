import './App.css'
import TodoForm from './components/Todoform';
import Todos from './components/Todos';

function App (){

    const todos = [
        {id: 1, name:"Go for lunch"},
        {id: 2, name: "Go for work"},
        {id:3, name: "Prepare dinner"}
    ];
    const deleteTodos = (id) => {
        let newTodos = todos.filter
    }

    return (
        <>
        <h1>Todo App</h1>
        <TodoForm/>
        <hr />
        <Todos todos={todos}/>
       
    
        </>
    )
}

  
export default App;