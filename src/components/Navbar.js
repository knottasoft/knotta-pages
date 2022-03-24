import React from 'react'

import {connect} from "react-redux";

import {withRouter} from '../helpers/with-router'
import DarkLogo from '../assets/logo-full-soft.svg'
import LightLogo from '../assets/logo-full-soft-light.svg'
import { HashLink as Link } from 'react-router-hash-link';
import PropTypes from "prop-types";

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: 'text-white',
            logo: DarkLogo
        };
    }

    componentDidMount() {
        if(this.props.theme === 'light'){
            this.setState({
                text: 'text-black',
                logo: LightLogo
            })
        } else if (this.props.theme === 'dark') {
            this.setState({
                text: 'text-white',
                logo: DarkLogo
            })
        }
    }

    render() {

        const activeStyle = 'underline underline-offset-8 decoration-knotta-cyan decoration-4'

        return (
            <React.Fragment>
                <div className="navbar px-4 mt-4">
                    <div className="navbar-start">
                        <label tabIndex="0" className="">
                            <img style={{ width: '200px' }} alt={"logo"} src={this.state.logo} />
                        </label>

                        {/*<div className="dropdown">*/}
                        {/*    <label className="btn btn-ghost lg:hidden">*/}
                        {/*        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"*/}
                        {/*             viewBox="0 0 24 24" stroke="currentColor">*/}
                        {/*            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
                        {/*                  d="M4 6h16M4 12h8m-8 6h16"/>*/}
                        {/*        </svg>*/}
                        {/*    </label>*/}
                        {/*    <ul tabIndex="0"*/}
                        {/*        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">*/}
                        {/*        <li><a>Item 1</a></li>*/}
                        {/*        <li tabIndex="0">*/}
                        {/*            <a className="justify-between">*/}
                        {/*                Parent*/}
                        {/*                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24"*/}
                        {/*                     height="24" viewBox="0 0 24 24">*/}
                        {/*                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>*/}
                        {/*                </svg>*/}
                        {/*            </a>*/}
                        {/*            <ul className="p-2">*/}
                        {/*                <li><a>Submenu 1</a></li>*/}
                        {/*                <li><a>Submenu 2</a></li>*/}
                        {/*            </ul>*/}
                        {/*        </li>*/}
                        {/*        <li><a>Item 3</a></li>*/}
                        {/*    </ul>*/}
                        {/*</div>*/}

                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            {/*<li><a href={"#company"} className="text-white">О компании</a></li>*/}
                            <li>
                                <Link
                                    to={"/#solutions"}
                                    className={`${this.state.text}`}
                                >
                                    Услуги
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/projects"}
                                    className={`
                                        ${this.state.text} 
                                        ${this.props.active === 'projects' ? activeStyle : null}`
                                    }
                                >
                                    Проекты
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={'/#principles'}
                                    className={`${this.state.text}`}
                                >
                                    Принципы работы
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={'/#contacts'}
                                    className={`${this.state.text}`}
                                >
                                    Контакты
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a href={"tel:+79064914593"} className={`${this.state.text}`}>
                            +7.906.491.45.93
                        </a>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

Navbar.propTypes = {
    theme: PropTypes.string,
    active: PropTypes.string
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar))
