import React from 'react'
import styles from '../../css/contact.module.css'
import Title from '../title'

const Cform = () => {
    return (
        <section className={styles.contact}>
         <Title title='contact' subtitle='Us'></Title>
         <div className={styles.center}>
             <form className={styles.form} action="https://smartforms.dev/submit/5d58f24f3e236c10bd27f374" method="POST">
               <div>
                   <label htmlFor='name'>name</label>
                   <input type="text" 
                   name="name"
                    id="name"
                    className={styles.formControl} 
                   placeholder="loreum ipsum" / >
               </div>
               <div>
               <label htmlFor='email'>email</label>
                   <input type="email" 
                   name="email"
                    id="email"
                    className={styles.formControl} 
                   placeholder="xyz@email.com" / >
               </div>
               <div>
               <label htmlFor='message'>message</label>
                  <textarea name='message' id='message' rows='5' className={styles.formControl}
                  placeholder='hello there'>
                  </textarea>
               </div>
               <div>
                 <input type='submit' value='submit here' className={styles.submit}></input>
               </div>
             </form>
         </div>
        </section>
    )
}

export default Cform
