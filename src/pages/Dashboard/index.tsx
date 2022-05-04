import React from 'react'
import logo from '../../assets/logo.svg'
import {Title, Formulario} from './styles'

export const Dashboard:React.FC = () => {
    // vamos criar interface (tipo de dado) contendo campos de 
    // interesse do repositório
    interface IGithubRepository {
        full_name: string;
        description: string;
        owner: {
            login: string;
            avatar_url: string;
        }
    }
    // criar um estado que representa um novo repositório e inicia com vazio
    const [novoRepo, setNovoRepo] = React.useState('')
    // criar um estado que representa o vetor de repositórios buscados
    // inicia com vazio - tipo do vetor é de IGithubRepository
    const [repos, setRepos] = React.useState<IGithubRepository[]>([])
    
    // o que for digitado no input vai para a variávei novoRepo
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
        setNovoRepo(event.target.value)
    }
    return (
        <> 
            <img src={logo} alt="Git Collection"/>
            <Title> Catálogo de repositórios do Github </Title>
            <Formulario>
                <input placeholder="username/nome_repo" onChange={handleInputChange}/>
                <button type="submit"> Buscar </button> 
            </Formulario>    
        </>
    )
}

