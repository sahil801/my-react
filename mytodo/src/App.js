import './App.css';
import { useState } from "react";
import Photo from './img1.jpg'
function App(){
  const [name, setName] = useState("");
  const [imgurl, setImgurl] = useState("");
  const [tasks, setTasks] = useState([]);
  const handelChange =(event) =>{
    setName(event.target.value);
  }
  const handelImgChange =(event) =>{
    setImgurl(event.target.value);
  }
  const handelClick =()=>{
    const task = {
      text : name,
      imurl : imgurl
    }
    setTasks([...tasks,task]);
  }
  const handelReset =() =>{
    setTasks([]);
  }
  return (
    <div className="App">
      <input onChange = {handelChange} placeholder="enter task"/>
      <input onChange = {handelImgChange} placeholder="enter image url"/>
      <button onClick ={handelClick}>Add Task</button>
      <button onClick = {handelReset}>Reset Todo</button>
      <hr/>
      <div>
        <ol>
        {tasks.map( Task => {return (
          <div>
            <li>{Task.text}</li>
            <img src={Task.imurl} alt="Image not found" width="auto" height="60"/>
          </div>
        ) }) }
        </ol>
      </div>
    </div>
  );
}

export default App;
