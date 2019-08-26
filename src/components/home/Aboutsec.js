import React from 'react'
import Title from '../title'
import styles from '../../css/aboutsec.module.css'
//import img from '../../images/falconX.jpg'
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'

const getAbout = graphql`
query aboutImage{
  aboutImage:file(relativePath: {eq: "falconX.jpg"})
  {
    childImageSharp {
      fluid(maxWidth: 600) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

const Aboutsec = () => {
  const {aboutImage} = useStaticQuery(getAbout)
    return (
        <section className={styles.aboutsec}>
           
          <Title title='About' subtitle='Us'></Title> 

          <div className={styles.aboutsecCenter}>
            <article className={styles.aboutsecImg}>
              <div className={styles.imgContainer}>
                
                   <Img fluid={aboutImage.childImageSharp.fluid} alt='awesome land scape'></Img>
              </div>
              </article>
              <article className={styles.aboutsecInfo}>
              <h4>
                 Explore the difference.
              </h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                   <button type='button' className='btn-primary' >Read more</button>
        
              </article>

          </div>
        
        </section>
        
        
    )    

    
}


export default Aboutsec
