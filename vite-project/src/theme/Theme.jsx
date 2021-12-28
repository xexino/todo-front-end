import React, { useEffect } from 'react'
import DashboardHeader from '../component/dashboard/DashboardHeader'


const cssCDN = "//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css"

export default function Theme({ children }) {

    useEffect(() => {
        let _headContent = document.querySelector("head").innerHTML

        document.querySelector("head").innerHTML =
            `<link  rel="stylesheet" href=${cssCDN} />` + _headContent

        console.log(_headContent)
        return () => document.querySelector("head link:first-child").remove()
    }, [])

    return (
        <>
            <div className="Home">
                <div className="container-fluid display-table">
                    <div className="row display-table-row">
                        {/* SIDEBAR */}
                        <div className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box" id="navigation">

                        </div>
                        {/* SIDEBAR */}

                        <div className="col-md-10 col-sm-11 display-table-cell v-align">
                            {/*<button type="button" class="slide-toggle">Slide Toggle</button> */}
                            <div className="row">
                                {/* HEADER */}
                                <header>
                                    <DashboardHeader />
                                    {/* HEADER */}
                                </header>
                            </div>

                            <div className="user-dashboard">
                                {children}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
