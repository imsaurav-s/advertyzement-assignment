import { render } from '@testing-library/react';
import React, {useState} from 'react'
import Users from './user';
import Loading from './loading';
import 'bootstrap/dist/css/bootstrap.css'
import './button.css'


const Button = () =>{

    const callUsers=()=> {
        render(
              
            <Users/>
        )
    } 

   
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar" href="src\App.js">Saurav Sharma</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="users">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                    <button className="getuser" onClick={callUsers} >Get Users </button>

                    </li>
                    </ul>
                    
                </div>
                </div>
                
                </nav>
        </>
    )
}

export default Button;