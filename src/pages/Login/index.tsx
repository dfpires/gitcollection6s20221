import React from 'react'
import {Title, Form} from './styles'
import logo from '../../assets/logo.svg'
import {apiLocal} from '../../services/api'
import {useHistory} from 'react-router-dom'

// cria um tipo de dado
interface ILogin {
    email: string;
    password: string
}

export const Login: React.FC = () => {

    // estado
    let [login, setLogin] = React.useState<ILogin>( {} as ILogin)

    // estamos utilizando um Hook do ReactJS -> permite que mudemos de rota quando necessário
    // pois o hook guarda o histório de navegação
    let history = useHistory()

    // função chamada toda vez que o usuário digitar algo em um dos inputs
    async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        // altera o respectivo campo com o respectivo valor
        let auxiliar = Object.assign(login, {
            [e.target.name]: e.target.value
        })
        // altera o valor de login
        setLogin(auxiliar)
    }

    return (
        <>
            <img src={logo} alt="Login"/>
            <Title> Área de Login </Title>
            <Form>
                <div>
                    <label> Email </label>
                    <input name="email" placeholder="Informe o email" onChange={handleChange}/> 
                </div>
                <div>
                    <label> Senha </label>
                    <input name="password" type="password" onChange={handleChange}/>
                </div>
                <button onClick={ () => {
                   apiLocal
                        .get<String>(`/user/${login.email}/${login.password}`)
                        .then (response => {
                            if (response.data === "Usuário OK"){
                                history.push("/dashboard")
                            }
                            else {
                                alert(`Usuário / Senha inválido`)
                            }
                        })
                        .catch(
                            function (error) {
                                alert(`Erro ao consumit api ${error.response.status}`)
                            }
                        )
                }} type="button"> Entrar </button> 
            </Form>
        </>
    )
}