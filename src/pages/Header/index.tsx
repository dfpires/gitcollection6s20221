import React from 'react'
import {NavLink} from 'react-router-dom'
import {Navegacao} from './styles'
export const Header:React.FC = () => {
    return (
       <>
       <Navegacao>
            <ul>
                <li> <NavLink to="/"> DashBoard </NavLink> </li>
                <li> <NavLink to="/repo"> Repositório </NavLink> </li>
                <li> <NavLink to="/sobre"> Sobre </NavLink> </li> 
            </ul>
        </Navegacao>
       </>
    )
}