import React from 'react'
import logo from '../../assets/logo.svg'
import {Title} from './styles'

export const Dashboard:React.FC = () => {
    return (
        <> 
            <img src={logo} alt="Git Collection"/>
            <Title> Catálogo de repositórios do Github </Title>
            
        </>
    )
}

