import React from 'react'

import {connect} from "react-redux";

import {withRouter} from '../../helpers/with-router'
import Navbar from "../Navbar";
import {Link} from "react-router-dom";
import {projects} from '../../helpers/content'
import ProjectListItem from "./ProjectListItem";
import VerticalBlack from "../../assets/vertical-black.png"
import Footer from "../Footer";
import PropTypes from "prop-types";

class ProjectDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            slug: this.props.params.slug,
            content: null
        };
    }

    componentDidMount() {
        this.setState({
            content: projects.find(project => project.slug === this.state.slug)
        })
    }

    render() {

        const content = this.state.content

        return (
            <React.Fragment>
                <div className={"w-screen flex flex-col items-center"}>
                    <div className={"container px-4 mt-4"}>
                        <Navbar theme={"light"} active={"projects"}/>
                    </div>
                </div>
                <div className={"divider"} />
                {content && (
                    <div className={"bg-base-100 w-screen flex flex-col items-center"}>
                        <div className={"container px-4 mt-4 flex flex-col items-start"}>
                            <div className={"flex flex-row space-x-3 items-center"}>
                                <Link to={"/"} className={"text-knotta-cyan"} >Главная</Link>
                                <img src={VerticalBlack} width={2} height={12} />
                                <Link to={"/projects"} className={"text-knotta-cyan"} >Проекты</Link>
                            </div>

                            <p className={"text-5xl mt-4 mb-2"}>{content.title}</p>
                        </div>
                    </div>
                )}
                <Footer />
            </React.Fragment>
        );
    }
}

ProjectDetails.propTypes = {
    params: PropTypes.any
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProjectDetails))
