import React from 'react'
import {useRouteMatch} from 'react-router-dom'
import {api} from '../../services/api'


// crias três interfaces - que na verdade são tipos de dados
interface RepositoryParams {
    repository: string;
}

interface GithubRepository {
    full_name: string;
    description: string;
    forks_count: number;
    open_issues_count: number;
    stargazers_count: number;
    owner:{
        login: string;
        avatar_url:string;
    }
}

interface GithubIssue {
    id: number;
    title: string;
    html_url: string;
    user: {
        login: string
    }
}

export const Repository:React.FC = () => {

    const [repository, setRepository] = React.useState<GithubRepository | null>(null);
    const [issues, setIssues] = React.useState<GithubIssue[]>([])
    const {params} = useRouteMatch<RepositoryParams>()
    
    React.useEffect( () => {
        const config = {
            headers: { 
                Authorization: `Bearer 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` 
            }
        };
        // executado quando o repositório for alterado
        // consulta api do github para obter dados do repositório de interesse
        api
            .get<GithubRepository>(`repos/${params.repository}`, config)
            .then(response => setRepository(response.data))
        // consulta api do github para obter dados das issues do repositório de interesse
        api
            .get<GithubIssue[]>(`repos/${params.repository}/issues`, config)
            .then(response => setIssues(response.data))
        
    }, [params.repository])
    
    return (
        <>
            <h2> Repository {repository.description}</h2>
            <div>
            { issues.map(issue => (
                    <p> {issue.title} </p>
                ))
            }
            </div>
            )
        </>
    )
}

