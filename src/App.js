import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addTodo,deleteTodo,removeAllTodo} from "./components/Actions";



function App(){
const [inputData,setInputData] = useState("");
const todoListArr = useSelector((state)=>state.todoReducer.todoListArr) 
const dispatch = useDispatch()

console.log(todoListArr)
  return(
    <>
        <h1>todo List</h1>

        <input 
        type="text"
        value={inputData}
        placeholder ="add todos"
        onChange={(e)=>setInputData(e.target.value)}
        />
        <button onClick={()=>dispatch(addTodo(inputData),setInputData(""))}>add todo</button>

        {todoListArr.map((ele)=>{
          return(
            <>
            <div key={ele.id}>
                   <li>
                   {ele.data}
                   <button onClick={()=>dispatch(deleteTodo(ele.id))}>delete todo</button>
                   </li>
            </div>
            </>
          )
        })}

        <button onClick={()=>dispatch(removeAllTodo())}>remove all todos</button>
    </>
  )
}

export default App
