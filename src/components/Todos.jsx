const Todos = ({todos}) => {

    const handleClick = (id) =>{
        console.log("I have been clicked", id);
        ondelete(id)
        
    }
    
    return (
         <ul>
          {todos.map((todo) => <li key={todo.id}>{todo.name} <button
          onClick={() => handleClick(todo.id)}>X </button> </li>)}
         
        </ul>
    )
}

export default Todos;