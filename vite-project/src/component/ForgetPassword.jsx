import React, { useEffect, useState } from 'react'
import '../styles/login.css'
import Axios from 'axios'


const cssCDN = "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"


class UserMail {
    constructor(username) {
        this.username = username
    }
}


export default function ForgetPassword() {

    useEffect(() => {
        let _headContent = document.querySelector("head").innerHTML

        document.querySelector("head").innerHTML =
            `<link  rel="stylesheet" href=${cssCDN} />` + _headContent

        return () => document.querySelector("head link:first-child").remove()

    }, [])

    const [credentials, setcredentials] = useState(new UserMail())

    const [errorMsg, setErrorMsg] = useState("")

    let handelSubmitLogin = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:9000/users/Forgot-Password/:userEmail', credentials)
            .then((d) => {
                console.log(d)
                alert("succesfuly insert")
            }).catch(error => {
                setErrorMsg(error.response.data.message)
            })

    }

    let handelchanche = (e) => {
        setcredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-center h-100">
                    <div className="card" style={{ height: 'fit-content' }}>
                        <div className="card-header" style={{ margin: 10 }}>
                            <h3>Forgot password</h3>
                            <div className={errorMsg ? "alert alert-danger" : "d-none"} role="alert">
                                {errorMsg}
                            </div>
                            <div className="d-flex justify-content-end social_icon">
                                <span><i className="fab fa-facebook-square" /></span>
                                <span><i className="fab fa-google-plus-square" /></span>
                                <span><i className="fab fa-twitter-square" /></span>
                            </div>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handelSubmitLogin}>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-at" /></span>
                                    </div>
                                    <input type="text"
                                        className="form-control"
                                        placeholder="Enter your email"
                                        name='username'
                                        onChange={handelchanche}
                                        onFocus={() => setErrorMsg("")} />
                                </div>
                                <div className="form-group">
                                    <input type="submit" defaultValue="Send" className="btn float-right login_btn" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
