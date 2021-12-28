import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgetPassword from '../component/ForgetPassword';
import Login from '../component/login';
import Register from '../component/Register';
import ResetPassword from '../component/ResetPassword';
import Dashboard from '../pages/Dashboard';


function AppRoute() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Register />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/ForgetPassword" element={<ForgetPassword />} />
                    <Route path="auth/Reset-Password/:userEmail/code/:emailToken" element={<ResetPassword />} />
                    <Route path="/dash" element={<Dashboard />} />

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRoute
