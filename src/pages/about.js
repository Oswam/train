import React from 'react'
import Layout from '../components/layout'
//import Header from '../examples/header'
import StyledHero from '../examples/StyledHero'
import {graphql} from 'gatsby'

const About = ({data}) => {
    return (
        <Layout>
           <StyledHero img={data.firststep.childImageSharp.fluid}></StyledHero>
            
        </Layout>
    )
}

export const query = graphql`
query{
  firststep:file(relativePath: {eq: "firststep.jpg"})
  {
    childImageSharp {
      fluid(quality:90, maxWidth: 4160) {

        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}

`
export default About
