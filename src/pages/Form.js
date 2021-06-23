import { readdirSync } from 'fs';
import Rect from 'react';

const Form  = () => {
    return (
        <>
            <div className="form_container">
                <label className="email">Email Address</label>
                <input type="text" className="form" placeholder="Email" />
                <div className="pass">
                    <label className="passwords">Password</label>
                    <label className="forget">
                        <a href="#" className="forgot">Forgot Your Password</a>
                    </label>
                </div>
                <input type="password" className="form" placeholder="Password" />
                <button className="button">Sign In</button>
            </div>
        </>
    )
}

export default Form;