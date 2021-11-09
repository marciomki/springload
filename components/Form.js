import React from 'react';

const Form = () => {
    return (
        <div className={'container-fluid'}>
            <form className={'d-flex text-left col-4 flex-column m-auto'}>
                <label>Email</label>
                <input type='email' placeholder="marcio@springload.com"/>
                <br />
                <label>Password</label>
                <input type='password' placeholder="minimum of 8 characters" />
                <br />
                <label>Colour</label>
                <select>
                    <option value="null" defaultValue>Select Colour</option>
                    <option value="blue" >Blue</option>
                    <option value="green">Green</option>
                    <option value="red">Red</option>
                    <option value="black">Black</option>
                    <option value="brown">Brown</option>
                </select>
                <br/>
                <label>Animals</label>
                <select>
                    <option value="null" defaultValue>Select Animal</option>
                    <option value="bear">Bear</option>
                    <option value="tiger">Tiger</option>
                    <option value="snake">Red</option>
                    <option value="donkey">Black</option>
                </select>
                <br/>
                <label>Type of tiger</label>
                <textarea className={"w-100"} />
                <br/><br/>
                <input className='submitButton' type='submit' value='Done' />
            </form> 
        </div>
    )
}
export default Form;