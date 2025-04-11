import React, { useState, useRef } from "react";
import Alert from './Alert';

export default function TextForm ({heading = "Form", ...props}) {
    const [alert, setAlert] = useState(null);
    const [email, setEmail] = useState("asfund@me.com");
    const [phone, setPhone] = useState("");

    const emailInputFocus = useRef(null);

    const handleSubmit = () => {
        emailInputFocus.current.focus();
        console.log(emailInputFocus);

        let msg = "", type = "";
        if (!phone || !email) {
            msg = "Please fill email and phone";
            type = "danger";
            props.showAlert(msg, type);
            setAlert({ msg, type });
            return;
        }
        msg = `Form submitted with email ${email} and phone ${phone}`;
        type = "success";
        props.showAlert(msg, type);
        setAlert({ msg, type });
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    }

    const handleClear = () => {
        setEmail("");
        setPhone("");
        let msg = "Form is cleared", type = "warning";
        props.showAlert(msg, type);
        setAlert({ msg, type });
    }
    return (
        <>
        <h2>{heading} - {email} - {phone}</h2>
              
        <Alert customClass="mt-2" alert={alert} showCloseBtn={true} />
        
        {/* <form> */}
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" ref={emailInputFocus} className="form-control" onChange={handleEmailChange} value={email} id="exampleInputEmail1"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
                <input type="text" className="form-control" onChange={handlePhoneChange} value={phone} id="exampleInputPassword1" />
            </div>
            {/* <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div> */}
            <button type="submit" onClick={handleSubmit} className="btn btn-primary me-2">Submit</button>
            <button type="submit" onClick={handleClear} className="btn btn-danger">Clear</button>
        {/* </form> */}
        </>
    );
}