import React from 'react'
import logo from '../../assets/logo.svg'
import {Title, Formulario, Repo} from './styles'

import {api} from '../../services/api'

import {Link} from 'react-router-dom'

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
    
    // vai na api do github e traz as info do repo
    async function handleAddRepo(event: React.FormEvent<HTMLFormElement>, ): Promise<void>{
        // não atualiza a página
        event.preventDefault()
        // tenta chamar a api

        const config = {
            headers: { 
                Authorization: `Bearer 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` 
            }
        };

        try {
            const resposta = await api.get<IGithubRepository>(`repos/${novoRepo}`)
            const aux = resposta.data // acessa os dados do resultado
            // adiciona o resultado no vetor repos
            setRepos([...repos, aux])
        }
        catch {
            console.log(`Repositório não encontrado`)
        }
    }
    return (
        <> 
            <img src={logo} alt="Git Collection"/>
            <Title> Catálogo de repositórios do Github </Title>
            <Formulario onSubmit={handleAddRepo}>
                <input placeholder="username/nome_repo" onChange={handleInputChange}/>
                <button type="submit"> Buscar </button> 
            </Formulario>

            <Repo>
                { // percorrer o vetor repos
                repos.map((item, indice) => (
                    <Link 
                        to={`/repositories/${item.full_name}`}
                        key={item.full_name + indice}    >
                        <img src={item.owner.avatar_url} alt={item.owner.login}/>
                        <div>
                            <strong> {item.full_name} </strong>
                            <p> {item.description} </p> 
                        </div>
                    </Link>
                )

                )

                }
            </Repo>    
        </>
    )
}