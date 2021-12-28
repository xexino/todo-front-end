import React, { useEffect, useState } from 'react'

import '../styles/login.css'
import Axios from 'axios'


const cssCDN = "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"


class UserCredentials {
    constructor(userName = '', password = '') {
        this.userName = userName
        this.password = password
    }
}

export default function Login() {

    useEffect(() => {
        let _headContent = document.querySelector("head").innerHTML

        document.querySelector("head").innerHTML =
            `<link  rel="stylesheet" href=${cssCDN} />` + _headContent

        return () => document.querySelector("head link:first-child").remove()

    }, [])


    const [credentials, setcredentials] = useState(new UserCredentials())

    const [errorMsg, setErrorMsg] = useState("")
    // const [username, setusername] = useState('')
    // const [password, setpassword] = useState('')
    // const [eroor, seteroor] = useState(null)


    let handelchanche = (e) => {
        setcredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }


    let handelSubmitLogin = (e) => {

        e.preventDefault();

        setErrorMsg(validateRegisterData(credentials))

        if (errorMsg == "")
            Axios.post('http://localhost:9000/users/login', credentials)
                .then((d) => {
                    console.log(d)
                    alert("succesfuly ")
                }).catch(error => {
                    setErrorMsg(error.response.data.message)
                })
    }


    let validateRegisterData = (user = new UserCredentials()) => {


        let emailPattern = /^.{4,30}$/
        if (!emailPattern.test(user.userName)) {
            return "password or email are invalid 💦"
        }
        //password
        let passwordPattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,12}$/
        if (!passwordPattern.test(user.password)) {
            return "password or email are invalid😅"
        }

    }

    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-center h-100">
                    <div className="card">
                        <div className="card-header">
                            <h3>Sign In</h3>
                            <div className={errorMsg ? "alert alert-danger" : "d-none"} role="alert">
                                {errorMsg}
                            </div>
                            <div className="d-flex justify-content-end social_icon">
                                <span><i className="fab fa-facebook-square" ></i></span>
                                <span><i className="fab fa-google-plus-square"></i></span>
                                <span><i className="fab fa-twitter-square"></i></span>
                            </div>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handelSubmitLogin}>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-at"></i></span>
                                    </div>
                                    <input type="text"
                                        className="form-control"
                                        name='userName'
                                        placeholder="Email"
                                        onChange={handelchanche} />
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key" /></span>
                                    </div>
                                    <input type="password"
                                        className="form-control"
                                        name='password'
                                        placeholder="password"
                                        onChange={handelchanche} />
                                </div>
                                <div className="row align-items-center remember">
                                    <input type="checkbox" />Remember Medd
                                </div>
                                <div className="form-group">
                                    {/* <button type="button"
                                        onClick={handelSubmitLogin}
                                        className="btn btn-warning float-right">login</button> */}
                                    <input type="submit" value="Submit" className="btn float-right login_btn" />

                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-center links">
                                Don't have an account?<a href="#" className="link">Sign Up</a>
                            </div>
                            <div className="d-flex justify-content-center link">
                                <a href="#">Forgot your password?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
