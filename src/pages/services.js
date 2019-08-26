import React from 'react'
import Layout from '../components/layout' 
import Images from '../components/Images'
import StyledHero from '../examples/StyledHero'
import {graphql} from 'gatsby'

const services = ({data}) => {
    return (
        <Layout>
           <StyledHero img={data.Earth.childImageSharp.fluid}></StyledHero>
           <Images></Images>
           
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
