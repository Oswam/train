import React from 'react'
import Tour from '../tours/Tour'
import {useStaticQuery, graphql} from 'gatsby'
import Title from '../title'
import Styles from '../../css/items.module.css'
import Anilink from 'gatsby-plugin-transition-link/AniLink'

const Featured = () => {
    return (
        <section className={Styles.tours}>
            <Title title='Featured' subtitle='Explorations'></Title>
           hello form tours page.
           <Tour></Tour> 
           <Anilink fade to='/tours' className='btn-primary'>All Tours</Anilink>
        </section>
    )
}

export default Featured
