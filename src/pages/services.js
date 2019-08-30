import React from 'react'
import Layout from '../components/layout' 

import StyledHero from '../examples/StyledHero'
import {graphql} from 'gatsby'

const services = ({data}) => {
    return (
        <Layout>
           <StyledHero img={data.Earth.childImageSharp.fluid}></StyledHero>
         
           
        </Layout>
    )
}

export const query = graphql`
query{
Earth:file(relativePath: {eq: "earth.jpg"})
  {
    childImageSharp {
      fluid(quality:90, maxWidth: 4160) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}

`
export default services
