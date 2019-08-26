import React from 'react'
import Styles from '../css/footer.module.css'
import social from '../constants/social'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import link from '../constants/link'
const Footer = () => {
    return (
        <footer className={Styles.footer}>
            <div className={Styles.link}>
                {link.map((item, index ) => {
                  return (
                      <AniLink fade key={index} to={item.path}>
                          {item.text}
                      </AniLink>
                  ) 
                })}
            </div>
            <div className={Styles.icon}>
                {social.map((item, index) =>{
                    return (
                        <a key={index} href={item.url} target='_blank'
                        rel="noopener noreferrer">
                            {item.icon}
                        </a>
                    )
                })}
            </div>
            <div className={Styles.copyright}>
                copyright &copy; spaceX company {new Date().getFullYear()}  All
                 Rights Reserved 

            </div>
        </footer>
    )
}

export default Footer
