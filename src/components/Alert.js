import React, {useState, useEffect} from "react";

export default function Alert({ showCloseBtn = false, ...props }) {
    const [hide, setHide] = useState(false);
    const handleHide = () => {
        setHide(true);
    }
    useEffect(() => {
        console.log("alert created");
    }, []);
    useEffect(() => {
        return () => {
            console.log("destroy/unmounted");
        }
    }, []);
    useEffect(() => {
        console.log("alert changed");
        if (props.alert && props.alert.msg) {
            setHide(false);
        }
    }, [props.alert]);
    return (
        props.alert && !hide && <div className={`alert alert-${props.alert.type} fade show ${props.customClass}`} role="alert">
            <strong>{props.alert.msg}</strong>
            {showCloseBtn && <button type="button" onClick={handleHide} className="btn-close float-end" data-bs-dismiss="alert" aria-label="Close"></button>}
        </div>
    )
}