import { render } from '@testing-library/react'
import React, { Component } from 'react' 
import {Link} from 'react-router-dom'
import './styles.css'

export default class Header extends Component {
    render() {
        return(
           <div className="Header">
               <h1>Company name</h1>
               <nav className="Nav">
               <Link to={`/Buy`}>Shop</Link>
               <Link to={`/my-product`}>My products</Link>
               <Link to={`/account`}>Account</Link>
               </nav>
           </div>
        )
    }
}