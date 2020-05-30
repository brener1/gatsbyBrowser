import React from 'react'
import * as Styled from './styled'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'

const CardSPost = (props) => {
    return (
        <Styled.CardV2Wrapper 
        className="card" 
        background={props.backgroundCards}
        primary={props.styleDefault}
        >
            <div className="card-body">
                <h5 className="card-title">{props.titleCard}</h5>
                <p className="card-text">{props.textCard}</p>
                <Link to="/blogentry" activeStyle={{ color: "red" }} className="btn btn-primary" activeClassName="active">Clique Aqui para ver a matéria</Link>
            </div>
        </Styled.CardV2Wrapper>
    )
}

export default CardSPost