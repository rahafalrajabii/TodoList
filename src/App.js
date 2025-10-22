import { useRef , useState } from 'react'; 

import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const inputRef = useRef ();
  const  handleAddTodo = () => {
 const text = inputRef.current.value; 
 const newItem = {completed : false , text};
 setTodos ( [...todos , newItem ]);
  inputRef.current.value = "";
  };
 const handleItemDone =(index) => {
const newTodos = [...todos]; /*i took a copy from the array to set new data in it */
newTodos[index].completed = !newTodos[index].completed;
setTodos (newTodos);
  }
  const handleDeleteItem = (index) => {
const newTodos = [...todos];  /*ارجعت اخدت نسخه من الاري عشان اقدر افعل و كل مره نسخه */
newTodos.splice (index , 1); /*عشان احذف عنصر من الاري */
setTodos (newTodos); /*بحدث الاري */
  }

return (
    <div className="App">
 <div className="todo-container">
   <h2> To Do List </h2>
      <ul>
        {todos.map(({text, completed}, index) => {
          return (
          <div className='item'>
           <li className ={completed ? "done" : ""} key ={index} onClick={ () => handleItemDone(index)}>
             {text} </li>   
            
             <span className='trash' onClick= {() => handleDeleteItem(index)} > ❌ </span>
 </div>
          );
        }
        )}

         </ul>
      <input ref={inputRef} placeholder= "Enter item ..."/>
        <button onClick ={handleAddTodo}> Add </button>  
    </div>
    </div>
  );
}


export default App ;
