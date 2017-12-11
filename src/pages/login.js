import React, { Component } from 'react'
import { Link } from "react-router"
import logo from './logo.jpg';

export default class LoginPage extends Component {
  render() {
    return (
        <div className="login-page">
            <div className="login-form-cont">
                <div style={{paddingBottom:'10px'}}> <img src={logo} width="270" height="54" /> </div>
                <form className="login-form">
                    <input type="text" placeholder="username"/>
                    <input type="password" placeholder="password"/>
                    <Link to={`/Home`}> 
                        <button> login </button>  
                    </Link>
                </form>
            </div>
        </div> 
    )
  }
}
