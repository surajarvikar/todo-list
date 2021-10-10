import React, { useState } from 'react';
import ToDoList from './ToDoList';

const App = () => {

  const [inputList , setInputList] = useState("");
  const [items , setItems] = useState([]);

  const itemEvent = (event) =>{
    setInputList(event.target.value);
  }

  const btnClick = () =>{
    setItems((ourItems)=>{
      return [...ourItems , inputList ];
    })
    setInputList("");
  }

  const deleteItems = (id) =>{
    setItems((ourItems)=>{
      return ourItems.filter((elem , index)=>{
        return index !== id ;
      })
    })
    console.log("delete")
  }

  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <br />
          <h1>ToDo List</h1>
          <br />

          <input 
          type="text" 
          placeholder="Add an Items" 
          className="input-field" 
          onChange={itemEvent} 
          value={inputList} />

          <button className="btn" onClick={btnClick} > + </button>
           
          <ol>
            {/* <li> {inputList} </li> */}
            {items.map((currVal , index)=>{
              return <ToDoList 
                key={index}
                text={currVal} 
                id={index} 
                onSelect = {deleteItems} />
                
            })}
          </ol>
          
        </div>
      </div>
    </>
  )
}

export default App
