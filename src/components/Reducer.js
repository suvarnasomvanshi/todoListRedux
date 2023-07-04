import { useState } from "react";
import {addTodo,deleteTodo,removeAllTodo} from "./Actions"


const initialState = {
    todoListArr : []
}


const todoReducer =(state=initialState,action)=>{
    switch(action.type){
        case "ADDTODO" :
            const {id,data} = action.payload
            return{
                ...state,
                todoListArr:[...state.todoListArr,{id:id,data:data}]
                 }


        case "DELETETODO" :
          const newListArr = state.todoListArr.filter((ele)=>ele.id !== action.id)
          return{...state,todoListArr:newListArr}
        

        case "REMOVEALL" :
            return{...state,todoListArr:[]}


        default : return state;
    }
}

export default todoReducer;





