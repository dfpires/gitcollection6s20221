import React from 'react'
import {NavLink} from 'react-router-dom'

export const Header:React.FC = () => {
    return (
       <ul>
           <li> <NavLink to="/"> DashBoard </NavLink> </li>
           <li> <NavLink to="/repo"> Repositório </NavLink> </li>
           <li> <NavLink to="/sobre"> Sobre </NavLink> </li> 
       </ul>
    )
}