import React from 'react'
import styled from 'styled-components'

const Title = ({title, subtitle}) => {
    return (
        <TitleWrapper>
          <h4>
              <span className= 'title'>{title}</span>
              <span>{subtitle}</span>
          </h4>  
        </TitleWrapper>
    )
}
const TitleWrapper = styled.div`
text-transform: uppercase;
font-size: 2.3rem;
margin-bottom: 2rem;
h4 {text-align: center;
    letter-spacing: 7px;
    color: var(--primaryColor) ;
}
span { display: block}
`

export default Title
