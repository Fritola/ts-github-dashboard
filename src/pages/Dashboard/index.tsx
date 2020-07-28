import React from 'react'
import logoImage from '../../assets/Logo.svg'
import {Title, Form, Repositories} from './style'

import { FiChevronRight } from 'react-icons/fi'

const Dashboard: React.FC = () => {
    return(
        <>
            <img src={logoImage} alt="Github Explorer" />
            <Title>Explore repositórios no Github</Title>

            <Form>
                <input placeholder="Digite o nome do repositório"/>
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="#">
                    <img src="https://avatars0.githubusercontent.com/u/16598311?s=460&u=a1dc92b8e16f088b8c39791d8dd5f5ca925ac79c&v=4" alt=""/>
                    
                    <div>
                        <strong>Fritola/beerport</strong>
                        <p>App to check yours beers</p>
                    </div>

                    <FiChevronRight size={20}/>
                </a>       

                <a href="#">
                    <img src="https://avatars0.githubusercontent.com/u/16598311?s=460&u=a1dc92b8e16f088b8c39791d8dd5f5ca925ac79c&v=4" alt=""/>
                    
                    <div>
                        <strong>Fritola/beerport</strong>
                        <p>App to check yours beers</p>
                    </div>

                    <FiChevronRight size={20}/>
                </a>           
            </Repositories>
        </>
    )
}

export default Dashboard

