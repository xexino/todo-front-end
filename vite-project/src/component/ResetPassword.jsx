import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import '../styles/login.css'


const cssCDN = "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"

class newPassword {
    constructor(password = '', Cfpassword = '') {
        this.password = password
        this.Cfpassword = Cfpassword
    }
}

export default function ResetPassword({ match }) {

    useEffect(() => {
        console.log(match)
        let _headContent = document.querySelector("head").innerHTML

        document.querySelector("head").innerHTML =
            `<link  rel="stylesheet" href=${cssCDN} />` + _headContent

        return () => document.querySelector("head link:first-child").remove()

    }, [])

    const [credentials, setcredentials] = useState(new newPassword())

    const [errorMsg, setErrorMsg] = useState("")

    let handelSubmitNewPAssword = (e) => {

        e.preventDefault();

        setErrorMsg(validateRegisterData(credentials))

        Axios.post('http://localhost:9000/api/auth/Reset-Password/:userEmail/code/:emailToken', credentials)
            .then((d) => {
                console.log(d)
                alert("Password changed with succes")
            }).catch(error => {
                setErrorMsg(error.response.data.message)
            })

    }

    let validateRegisterData = (newpassword = new newPassword()) => {

        let newpass = newpassword.Cfpassword
        let pass = newpassword.password
        if (newpass.localeCompare(pass)) {
            //password
            let passwordPattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,12}$/
            if (!passwordPattern.test(newpassword.pass)) {
                return "password should be at least 8  and  max 12 💦"
            }
            if (!passwordPattern.test(newpass)) {
                return "password should be at least 8  and  max 12"
            }
        }
        else {
            return "The password confirmation does not match"
        }

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
                        <div className="card-header" style={{ margin: 9 }}>
                            <h3 style={{ textAlign: 'center' }}>Confirm your new password</h3>
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
                            <form onSubmit={handelSubmitNewPAssword}>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key" /></span>
                                    </div>
                                    <input type="password"
                                        className="form-control"
                                        name='password'
                                        onChange={handelchanche}
                                        onFocus={() => setErrorMsg("")}
                                        placeholder="your new password" />
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user-lock" /></span>
                                    </div>
                                    <input type="password"
                                        className="form-control"
                                        name='Cfpassword'
                                        onChange={handelchanche}
                                        onFocus={() => setErrorMsg("")}
                                        placeholder="confirm your password" />
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Send" className="btn float-right login_btn" />
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-center links">
                                You Don't have an account?<a href="#" className="link">Sign Up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
