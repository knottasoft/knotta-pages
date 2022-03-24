import React from 'react'

import {connect} from "react-redux";

import {withRouter} from '../../helpers/with-router'
import Solutions from "./Solutions";
import SolutionsDetails from "./SolutionsDetails";
import Projects from "../projects/ProjectsSection";
import Principles from "./Principles";
import Background from "../../assets/principles-background.png";
import Contacts from "./Contacts";

class Main extends React.Component {
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
                <div id={"solutions"} className={"bg-knotta-primary w-screen flex flex-col items-center"}>
                    <Solutions />
                </div>
                <div style={{ backgroundImage: 'linear-gradient(180deg, #363851 50%, #FFFFFF 50%)' }} className={"w-screen flex flex-col items-center"}>
                    <SolutionsDetails />
                </div>
                <div id={"projects"} className={"bg-base-100 w-screen flex flex-col items-center"}>
                    <Projects />
                </div>
                <div className={"flex flex-row"}>
                    <div id={"principles"} className={"bg-knotta-primary w-screen flex flex-col items-center relative"}>
                        <Principles />
                        <img alt={"principles-background"} className={"absolute right-0 top-0 object-fit h-full w-4/12"} src={Background}/>
                    </div>
                </div>
                <div id={"contacts"} className={"bg-base-100 w-screen flex flex-col items-center"}>
                    <Contacts />
                </div>
            </React.Fragment>
        );
    }
}

Main.propTypes = {

}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Main))
