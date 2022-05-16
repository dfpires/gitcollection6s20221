import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {Dashboard} from '../pages/Dashboard/index'
import {Repository} from '../pages/Repository/index'
import {Sobre} from '../pages/Sobre/index'

export const Routes: React.FC = () => {
    return (
        <Switch> {/* define as rotas da aplicação */}
            <Route component={Dashboard} path="/" exact/>
            <Route component={Repository} path="/repositories/:repository+" />
            <Route component={Sobre} path="/sobre" />
        </Switch>
    )
}