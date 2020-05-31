import React from 'react'
import Layout from "../components/Layout"
import { DiscussionEmbed } from 'disqus-react'
import { Link } from 'gatsby'

const blogentry = () => {
    const id = 'um'
    const title = 'teste'
    const baseUrl = 'Browser-Tech.online'
    const disqusShortname = 'BrowserTech'
    const disqusConfig = {
        identifier: id,
        title: title,
        url: baseUrl
    }
    return(
        <Layout>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12">
                        <h1 className="primary mb-4">Blog Entry</h1>
                    </div>
                </div>
                <div className="card bg-light row">
                <p>O BrowserBlog foi uma inaciativa da matéria Projeto Interdisciplinar, onde o foco era criar um blog usando um SSG(). Optamos pelo Gatsby como ferramenta para desenvolvimento do mesmo.</p>

                <p>O blog foi desenvolvido em etapas, assim como um projeto, e em cada etapa foi feita uma funcionalidade ou requisito do blog para que chegassemos no resultado final, para ser apresentado para os professores.</p>
                
                <p>O blog se trata de um site de notícias sobre tecnologia, onde serão abordados diversos assuntos relacionados ao mundo tech, como novas descubertas, desenvolvimento de novas tecnologias, empresas do ramo e muito mais, sera feita uma
                    cobertura completa sobre tudo que cerca esse mundo gigante das tecnologias.
                </p>
                </div>
                <div className="mt-3 row">
                <Link to="" activeStyle={{ color: "red" }} className="btn btn-secondary" activeClassName="active">Voltar à pagina principal</Link>
                </div>
            </div>
            <DiscussionEmbed className="ml-5" shortname={disqusShortname} config={disqusConfig}/>
        </Layout>
    )
}

export default blogentry