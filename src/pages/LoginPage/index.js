import React, { useState } from 'react';
import axios from 'axios';
import "./style.css";
import Endpoints from '../../api/Endpoints.js';



const LoginPage = ()=>{
        const [responseMessage, setResponseMessage] = useState({
          message: "",
          cssClass: "",
        });

    const[user, setUser] = useState({
        email:'',
        password:''
    })

    function onSubmitHandler(e) {
    e.preventDefault();
    axios
      .post(Endpoints.LOGIN_URL, user)
      .then((response) => {
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.user))
        console.log(response.data);
        setResponseMessage({
            message: 'login successful',
            cssClass: 'alert-success'
        })
      }, (error) => {
          setResponseMessage({
              message: error.response.data.message,
              cssClass: 'alert-danger'
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }

    function onChangeHandler(e){
        setUser({
            ...user, 
            [e.target.name]: e.target.value
        })
    }

    return (
      <div className='wrapper'>
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <div className="wrapper text-center">
              <h3>Login</h3>
              <br />
              {responseMessage.message && (
              <div className="alert alert-success" role="alert">
              {responseMessage.message}
            </div>
          )}
              <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                  <input placeholder='Email' type="text" name="email" onChange={onChangeHandler} className="form-control text-center" value={user.email} />
                </div>
                <div className="form-group">
                  <input placeholder='Password' type="password" name="password" onChange={onChangeHandler} className="form-control text-center" value={user.password}/>
                </div>
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-primary btn-block"
                />
                <a href='#'>New to Maveric Book? signup</a>
                <br />
                <a href='#'>forgot password?</a> 
              </form>
            </div>
          </div>
          <div className="col-lg-3"></div>
        </div>
        </div>
      );
}
export default LoginPage;