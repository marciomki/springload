import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import styles from '../styles/Home.module.scss'

const Form = () => {
    const { register, watch, handleSubmit, formState:{ errors } } = useForm();
    const onSubmit = data => console.log(data);

    const showArea = watch('animal');
    return (
        <div className={'container-fluid'}>
           <form onSubmit={handleSubmit(onSubmit)} className={'d-flex text-left col-md-8 col-lg-4 col-12 flex-column m-auto pb-5'}>
                <label className={styles.label}>Email</label>
                <input className={styles.input} {...register('email', { required: true, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}})}  type='email' placeholder="marcio@springload.com"/>
                {errors.email && <span className={styles.validationMsg}>Email is invalid</span>}
                <br />
                <label className={styles.label}>Password</label>
                <input className={styles.input} {...register('password', { required: true, minLength: 8 })} type='password' placeholder="minimum of 8 characters" />
                {errors.password && <span className={styles.validationMsg}>Password requires minimum of 8 characters</span>}
                <br />
                <label className={styles.label}>Colour</label>
                <select className={styles.input} {...register('colour')}>
                    <option value="null" defaultValue>Select Colour</option>
                    <option value="blue" >Blue</option>
                    <option value="green">Green</option>
                    <option value="red">Red</option>
                    <option value="black">Black</option>
                    <option value="brown">Brown</option>
                </select>
                <br/>
                <label className={styles.label}>Animals</label>
                <select className={styles.input} {...register('animal')} >
                    <option value="null" defaultValue>Select Animal</option>
                    <option value="bear">Bear</option>
                    <option value="tiger">Tiger</option>
                    <option value="snake">Red</option>
                    <option value="donkey">Black</option>
                </select>
                {showArea == 'tiger' && 
                    <span>
                        <br/>
                        <label className={styles.label}>Type of tiger</label><br/>
                        <textarea {...register('tigertype', { required: true})} className={styles.input} />
                    </span>
                }
                {errors.tigertype && <span className={styles.validationMsg}>Tiger type is required</span>}
                
                <br/><br/>
                <input className={styles.submitButton} type='submit' value='Done' />
            </form> 
        </div>
    )
}
export default Form;