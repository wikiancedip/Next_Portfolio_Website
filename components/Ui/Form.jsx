import React from 'react'
import classes from '../../styles/form.module.css'

const Form = () => {
  return <form className={`${classes.form}`}>
    <div className={`${classes.form__group}`}>
        <input type="text" placeholder='Your Name' required />
    </div>
    <div className={`${classes.form__group}`}>
        <input type="email" placeholder='Email Address' required />
    </div>
    <div className={`${classes.form__group}`}>
        <textarea type="text" rows={5} placeholder='Describe Your Requirements' required/>
    </div>

    <button className="primary__btn" type='submit'>Submit</button>
  </form>
}

export default Form
