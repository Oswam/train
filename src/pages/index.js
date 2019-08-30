import React from "react"
import Layout from '../components/layout'
import Aboutsec from '../components/home/Aboutsec'
import Servicesec from '../components/home/Servicesec'
import StyledHero from '../examples/StyledHero'
import Banner from '../components/Banner'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import {graphql} from 'gatsby'
import Featured from '../components/home/Featured'


export default ({data}) => {

return (
      
         <Layout>
           <StyledHero home="true" img={data.RocketX.childImageSharp.fluid} >
             <Banner title='Continue Exploring' info='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
             >
              <AniLink fade to='/services'  className='btn-white'>Explore Services</AniLink>
             </Banner>
           </StyledHero>
           <Aboutsec></Aboutsec>
           <Servicesec></Servicesec>
           <Featured></Featured>
         </Layout>
        
     
  )


}

export const query = graphql`
query{
  RocketX:file(relativePath: {eq: "RocketX.jpg"})
  {
    childImageSharp {
      fluid(quality:90, maxWidth: 4160) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}

`