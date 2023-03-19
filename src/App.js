import './Navbar.css'
import HashLoader from "react-spinners/HashLoader";
import React, { useState } from 'react';

function App() {

  const [post, setPost] = useState([])
  const [loading, setLoading] = useState(false)
  const getNews = () => {
    setLoading(true);
    fetch("https://reqres.in/api/users?page=1")
      .then(response => response.json())
      .then(response => {
        console.log(response)
        setPost(response.data)
      })
  }
  return (
    <div className="App">
      {/* <h1 align="center">React-App</h1>  */}
      <nav className="navbar navbar-expand-lg " style={{ backgroundColor: "#52b2bf" }}>
        <div className="container-fluid ">
          <span className="navbar-brand text-light fw-bolder" href="#">LetsGrowMore</span>

          <div className="d-flex" role="search">
            <button className="btn btn-outline-light" type="btn" onClick={getNews}>GetNews</button>
          </div>
        </div>
      </nav><br />

      {loading ?
        <div className='container'>
          <div className='row'>
            {
              post.map((value) => {
                return (
                  <div className='col-4'>
                    <div className="card" style={{ width: "20rem", height:"30rem" }}>
                      <img src={value.avatar} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{value.first_name + " "+  value.last_name}</h5>
                        <p className="card-text">{value.email}</p>
                        <button className="btn"  >Follow</button>
                      </div>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
        : <center className='loader'> <HashLoader color={"#52b2bf"} size={100} /></center>}

    </div>
  );
}

export default App;