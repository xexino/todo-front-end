import React from 'react'
import { Link } from 'react-router-dom'

export default function DashboardHeader() {
    return (
        <>
            <div className="col-md-7">
                <div className="search ">
                    <input type="text" placeholder="Search For movie by title" id="search" />
                </div>
            </div>
            <div className="col-md-5">
                <div className="header-rightside">
                    <ul className="list-inline header-top pull-right">
                        <li><a href="#"><i className="fa fa-envelope" aria-hidden="true" /></a></li>
                        <li>
                            <a href="#" className="icon-info">
                                <i className="fa fa-bell" aria-hidden="true" />
                                <span className="label label-primary">3</span>
                            </a>
                        </li>
                        <li className="dropdown">
                            <a data-toggle="dropdown">
                                <img src="https://scontent.fcmn2-2.fna.fbcdn.net/v/t1.6435-9/244353596_3166326670270624_6710343667654698093_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEcyPLQeYjs7JxlGHcfImt6k3YfK8XfcyGTdh8rxd9zIbXHcWHY64_4UVojSwbW13TvmpFu6U1j5Xz80NhdEnVk&_nc_ohc=2JwATUhmKoMAX-XMBsI&_nc_ht=scontent.fcmn2-2.fna&oh=559a1051cc552025851836dd220e5219&oe=61896016"
                                    alt="user" />
                                <b className="caret" />
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <div className="navbar-content">
                                        <span>ayman</span>
                                        <p className="text-muted small">
                                            Good@gail.com
                                        </p>
                                        <div className="divider">
                                        </div>
                                        <a href="#" className="view btn-sm active">View Profile</a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </div>
        </>
    )
}
