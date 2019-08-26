import React from 'react'
import Title from '../title'
import styles from '../../css/servicesec.module.css'
import services from '../../constants/services'

const Servicesec = () => {
    return (
        <section className={styles.Services}>
            <Title title='Our' subtitle='Services'></Title>
            <div className={styles.center}>
                {
                    services.map((item, index) => {
                        return <article key={index} className={styles.servicesec}><span>
                            {item.icon}
                        </span>
                        <h4>{item.title}</h4>
                        <p>{item.text}</p> 
                        </article>                       
                    })
                }
            </div>
            
        </section>
    )
}

export default Servicesec