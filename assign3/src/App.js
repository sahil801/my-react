import './App.css';
import React, { useState, useEffect } from 'react';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital@1&display=swap');
</style>
function App() {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    try {
        const response = await fetch('https://api.github.com/users');
        setUsers(await response.json());
    } catch (error) {
        console.log("my error is "+ error);
    }
  }
  useEffect(() => {
      getUsers();
  }, []);

  return (
    <div className ="App">
      <h1>List of GitHub Users</h1>
        <div className="container-fluid mt-5">
          <div className="row text-center"> 
            {
              users.map((curel)=>{
                const { avatar_url, id, login} = curel;
                return (
                  <div className="col-10 col-md-4 mt-5" key={id}>
                  <div className="card p-2">
                    <div className="d-flex align-items-center">
                      <div className="image"> <img src={avatar_url} className="rounded" width="155" /> </div>
                      <div className="ml-3 w-100">
                      <h4 className="mb-0 mt-0 textLeft">{login}</h4>
                      <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                        <div className="d-flex flex-column">
                          <span className="articles">Articles</span> <span className="number1">38</span> </div>
                        <div className="d-flex flex-column">
                          <span className="followers">Followers</span> <span className="number2">980</span> </div>
                        <div className="d-flex flex-column">
                          <span className="rating">Rating</span> <span className="number3">8.9</span> </div>
                      </div>    
                    </div>
                 </div>
              </div>
        </div>
            )
              })
            }       
          </div>
        </div>
    </div>
  );
}

export default App;
