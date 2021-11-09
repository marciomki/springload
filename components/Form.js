import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import ModalError from './modal/modalError.js'
import { useForm } from "react-hook-form";
import styles from '../styles/Home.module.scss'

const Form = () => {
    const { register, watch, handleSubmit, formState:{ errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className={'container-fluid'}>
           <form onSubmit={handleSubmit(onSubmit)} className={'d-flex text-left col-4 flex-column m-auto'}>
                <label>Email</label>
                <input {...register('email', { required: true, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}})}  type='email' placeholder="marcio@springload.com"/>
                <br />
                <label>Password</label>
                <input {...register('password', { required: true, minLength: 8 })} type='password' placeholder="minimum of 8 characters" />
                <br />
                <label>Colour</label>
                <select {...register('colour')}>
                    <option value="null" defaultValue>Select Colour</option>
                    <option value="blue" >Blue</option>
                    <option value="green">Green</option>
                    <option value="red">Red</option>
                    <option value="black">Black</option>
                    <option value="brown">Brown</option>
                </select>
                <br/>
                <label>Animals</label>
                <select {...register('animal')} >
                    <option value="null" defaultValue>Select Animal</option>
                    <option value="bear">Bear</option>
                    <option value="tiger">Tiger</option>
                    <option value="snake">Red</option>
                    <option value="donkey">Black</option>
                </select>
                    <span>
                        <br/>
                        <label>Type of tiger</label><br/>
                        <textarea {...register('tigertype', { required: true})} className={"w-100"} />
                    </span>
                
                <br/><br/>
                <input className='submitButton' type='submit' value='Done' />
            </form> 
        </div>
    )
}
export default Form;