import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import * as Styled from './styled'

const Footer = () => {
    const {
        site: {
          siteMetadata: {
            socialMedia:{
              github,
            },
            copyright,
            description
          }
        }
      } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          socialMedia{
            github
          }
          copyright
          description
        }
      }
    }
  `)
    return (
        <div className="bg-dark">
            <div className="container">
                <div className="row text-white py-4 mt-5">
                    <div className="col-6">
                        {description}
                    </div>
                    <div className="col-6 d-flex justify-content-center align-items-center">
                      <a href={github}><Styled.GitHubIcon/></a>
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                        {copyright}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer