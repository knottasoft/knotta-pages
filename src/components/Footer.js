import React from 'react'

import {connect} from "react-redux";
import {withRouter} from '../helpers/with-router'
import Logo from "../assets/logo-full-soft.svg";
import { HashLink as Link } from 'react-router-hash-link';

class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    componentDidMount() {

    }

    render() {

        return (
            <React.Fragment>
                <div className={"bg-knotta-primary w-screen flex flex-col items-center relative"}>
                    <div className={"container px-4 my-10"}>
                        <div className={"flex flex-row space-x-20"}>
                            <img style={{ width: '150px' }} alt={"logo"} src={Logo} />
                            <Link to={"/#solutions"} className="text-white">Услуги</Link>
                            <Link to={"/projects"} className="text-white">Проекты</Link>
                            <Link to={"/#principles"} className="text-white">Принципы работы</Link>
                            <Link to={"/#contacts"} className="text-white">Контакты</Link>
                        </div>
                    </div>
                    <div className={"bg-[#0061FF] absolute right-0 top-0 object-contain h-full w-4/12 flex flex-col justify-center"}>
                        <div className={"my-10 ml-10"}>
                            <p className={"text-white mb-2"}>2019-2022</p>
                            <p className={"text-white"}>Все права защищены</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

Footer.propTypes = {

}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Footer))
