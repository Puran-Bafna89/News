import React, { Component } from 'react';
import { NavLink } from 'react-router';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/health">Health</NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink className="nav-link" to="/business">Business</NavLink>
                                </li>
                                <li className='nav-item'><NavLink className="nav-link" to="/Sports">Sports</NavLink></li>
                                <li className='nav-item'><NavLink className="nav-link" to="/Entertainment">Entertainment</NavLink></li>
                                <li className='nav-item'><NavLink className="nav-link" to="/Technology">Technology</NavLink></li>
                                <li className='nav-item'><NavLink className="nav-link" to="/Science">Science</NavLink></li>
                            </ul>
                            {/* <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                            </form> */}
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
