import React from 'react'
import Layout from '../components/layout'
//import Header from '../examples/RegularHeader'
import StyledHero from '../examples/StyledHero'
import {graphql} from 'gatsby'

const Blog = ({data}) => {
    return (
        <Layout>
            <StyledHero img={data.Blog.childImageSharp.fluid} />
        </Layout>
    )
}
export const query = graphql`
query{
  Blog:file(relativePath: {eq: "blogBcg.jpeg"})
  {
    childImageSharp {
      fluid(quality:90, maxWidth: 4160) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}

`
export default Blog
