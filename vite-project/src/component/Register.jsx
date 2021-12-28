import React, { useEffect, useState } from 'react'
import '../styles/login.css'
import axios from 'axios'
import { Link } from 'react-router-dom'



const cssCDN = "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"

class UserInput {
    constructor(firstName = "", lastName = "", userName = "", password = "", avatar_url = "") {
        this.firstName = firstName
        this.lastName = lastName
        this.userName = userName
        this.password = password
        this.avatar_url = avatar_url
    }
}

export default function Register() {

    useEffect(() => {
        let _headContent = document.querySelector("head").innerHTML

        document.querySelector("head").innerHTML =
            `<link  rel="stylesheet" href=${cssCDN} />` + _headContent

        return () => document.querySelector("head link:first-child").remove()

    }, [])

    const [userInput, setuserInput] = useState(new UserInput())

    // const [error, seterror] = useState(null)
    const [errorMsg, setErrorMsg] = useState("")

    let handelChange = (e) => {
        setuserInput({
            ...userInput,
            [e.target.name]: e.target.value
        })
    }

    let handelSubmitRegister = (e) => {

        e.preventDefault()

        setErrorMsg(validateRegisterData(userInput))

        axios.post("http://localhost:9000/users/register", userInput)
            .then((d) => {
                console.log(d)
                alert("succesfuly insert")
            }).catch(error => {
                seterror(error.response.data.message)
            })
    }

    let validateRegisterData = (newUser = new UserInput()) => {

        //firstname
        let firstnamePattern = /^.{4,12}$/
        if (!firstnamePattern.test(newUser.firstName)) {
            return "FirstName Should be at least 4 characters & maximum 12 🍥"
        }
        //lastname
        let lastnamePattern = /^.{4,12}$/
        if (!lastnamePattern.test(newUser.lastName)) {
            return "LastName Should be at least 4 characters & maximum 12 📛"

        }
        //username
        let emailPattern = /^.{4,30}$/
        if (!emailPattern.test(newUser.userName)) {
            return "email Should be at least 4 characters & maximum 30 💦"

        }
        //password
        let passwordPattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,12}$/
        if (
            !passwordPattern.test(newUser.password)
        ) {
            return "Password Should be at least 8 characters & maximum 12 and contains at least one number one uppercase and lowercase😅"

        }

        //rpassword and password should be much 
        // if (newUser.password !== newUser.rPassword) return "The Repeated Password should match the Password "

        // return ""
    }

    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-center h-100">
                    <div className="card">
                        <div className="card-header">
                            <h3>Sign Up</h3>
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
                            <form>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fas fa-at"></i>
                                        </span>
                                    </div>
                                    <input type="text"
                                        className="form-control"
                                        name='userName'
                                        onChange={handelChange}
                                        onFocus={() => setErrorMsg("")} />
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fas fa-user" />
                                        </span>
                                    </div>
                                    <input type="text"
                                        className="form-control"
                                        name='firstName'
                                        placeholder="First Name"
                                        onChange={handelChange}
                                        onFocus={() => setErrorMsg("")} />
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fas fa-user"></i>
                                        </span>
                                    </div>
                                    <input type="text"
                                        className="form-control"
                                        name='lastName'
                                        placeholder="Second Name"
                                        onChange={handelChange}
                                        onFocus={() => setErrorMsg("")} />
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fas fa-key"></i>
                                        </span>
                                    </div>
                                    <input type="password"
                                        className="form-control"
                                        name='password'
                                        placeholder="password"
                                        onChange={handelChange}
                                        onFocus={() => setErrorMsg("")} />
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fas fa-user"></i>
                                        </span>
                                    </div>
                                    <input type="text"
                                        className="form-control"
                                        name='avatar_url '
                                        placeholder="Set avatar"
                                        onChange={handelChange}
                                        onFocus={() => setErrorMsg("")} />
                                </div>
                                <div className="row align-items-center remember">
                                    <input type="checkbox" />Remember Me
                                </div>
                                <div className="form-group">
                                    <button type="button"
                                        onFocus={() => setErrorMsg("")}
                                        onClick={handelSubmitRegister}
                                        className="btn btn-warning float-right">sumbit</button>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-center links">
                                you have an account?<Link to='Login' className="link">Sign in</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
