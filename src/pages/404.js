import React from 'react'
import Layout from '../components/layout'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Banner from '../components/Banner'
import styles from '../css/error.module.css'

const Error = () => {
    return (
        <Layout>
          <header className={styles.error}>
            <Banner title='its dead end'>
              <AniLink fade to='/' className='btn-white'>Back to home</AniLink>
            </Banner>    
          </header>
        </Layout>
    )
}

export default Error
