import React from 'react'
import {StaticQuery, graphql} from 'gatsby'

const getSiteData = graphql`
query {
    site {
      siteMetadata {
        author 
        title
        data{
          age
          name
        }
        
      }
    }
  }
`

const RegularHeader = () => {
    return ( <StaticQuery query={getSiteData} render={(data) =>{
           
        return (<h1>hello people</h1>)
    }}></StaticQuery>);
}

export default RegularHeader
