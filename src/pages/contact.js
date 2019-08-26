import React from 'react'
import Layout from '../components/layout'
import StyledHero from '../examples/StyledHero'
import {graphql} from 'gatsby'
import Cform from '../components/Contact/Cform'


const Contact = ({data}) => {
    
    return (
        <Layout>        
           <StyledHero img={data.contact.childImageSharp.fluid}></StyledHero> 
           <Cform></Cform>
        </Layout>
    )
}
export const query = graphql`
query{
  contact:file(relativePath: {eq: "contact.jpg"})
  {
    childImageSharp {
      fluid(quality:90, maxWidth: 4160) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`
export default Contact
