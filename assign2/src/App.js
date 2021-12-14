import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link,NavLink,Redirect, Prompt} from "react-router-dom";
const User = (params) =>{
  return (<h1>welcome {params.username}</h1>)
}
function App() {
  const [login ,setlogin] = useState(false);
  const handelclick = () =>{
    login? setlogin(false): setlogin(true)
  }
  return (
      <Router>
        <div className="App">
          <ul>
            <li> <NavLink to="/" activeStyle = {{color : "green"}} exact>home</NavLink> </li>
            <li> <NavLink to="/about" activeStyle = {{color : "green"}} exact>about</NavLink></li>
            <li> <NavLink to="/contact" activeStyle = {{color : "green"}} exact>contact</NavLink> </li>
            <li> <NavLink to="/user/sahil" activeStyle = {{color : "green"}} exact>sahil</NavLink> </li>
          </ul>
          <Prompt when = {!login} 
          message = {
            (location)=>{
              return location.pathname.startsWith('/user')?"Please login First" : true}}
            />
          <button onClick = {handelclick}> LogIn </button>
        <Route path="/" exact strict
          render = {
            ()=>{
              return (<h1>My home</h1>)
            }
          }
        />
        <Route path="/contact" exact strict
          render = {
            ()=>{
              return (<h1>contact</h1>)
            }
          }
        />
        <Route path="/about" exact strict
          render = {
            ()=>{
              return (<h1>About</h1>)
            }
          }
        />
         <Route path="/user/:username" exact strict 
          render = {({match})=>{
            return (login ? <User username ={match.params.username}/> : <Redirect to="/"/>)
          }}
         />
         </div>
      </Router>
    
  );
}

export default App;
