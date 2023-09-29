import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addTodo,deleteTodo,removeAllTodo} from "./components/Actions";
import "./App.css";




function App(){
const [inputData,setInputData] = useState("");
const todoListArr = useSelector((state)=>state.todoReducer.todoListArr) 
const dispatch = useDispatch()

console.log(todoListArr)
  return(
    <>
       <div className="container">
        <h1> Todo List </h1>
        <div className="container1">
        <input 
        type="text"
        value={inputData}
        placeholder ="add todos"
        onChange={(e)=>setInputData(e.target.value)}
        className="_add"
        />
        <button onClick={()=>dispatch(addTodo(inputData),setInputData(""))}>add todo</button>

        {todoListArr.map((ele)=>{
          return(
            <>
            <div key={ele.id} className="_Add">
                   <li>
                   {ele.data}
                   <button onClick={()=>dispatch(deleteTodo(ele.id))}>delete todo</button>
                   </li>
            </div>
            </>
          )
        })}

        </div>
        
        <div className="container2">
        <button onClick={()=>dispatch(removeAllTodo())} className="_RemoveAll">remove all todos</button>
        </div>


        </div>
    </>
  )
}

export default App
