import React from 'react'
import {useStaticQuery,graphql} from 'gatsby'

const Header = () => {
   const data = useStaticQuery (graphql`
   {
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
  
   `)
   
    return (
        <div>
            <h1>Title:{data.site.siteMetadata.title}</h1>
            <h1>Author:{data.site.siteMetadata.author}</h1>
        </div>
    )
}

export default Header
