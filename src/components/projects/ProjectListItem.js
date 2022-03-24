import React from 'react'

import {connect} from "react-redux";
import {withRouter} from '../../helpers/with-router'
import ArrowDownRight from "../../assets/arrow-down-right.png";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

class ProjectCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    componentDidMount() {

    }

    render() {

        const project = this.props.project
        const index = this.props.index

        return (
            <React.Fragment>
                <div className={"flex flex-row justify-between items-center"}>
                    <div className={"w-2/3"}>
                        <p className={"text-knotta-cyan mb-3"}>{project.date}</p>
                        <Link
                            to={`/projects/${project.slug}`}
                            className={"text-xl font-medium mb-4"}
                        >
                            {project.title}
                        </Link>
                        <p className={"mt-5 mb-4"}>{project.description}</p>
                    </div>
                    <div className={"w-1/3 flex flex-row justify-end"}>
                        {project.media && <img alt={`media-${index}`} src={project.media}/>}
                    </div>
                </div>
                <div className={"divider"} />
            </React.Fragment>
        );
    }
}

ProjectCard.propTypes = {
    project: PropTypes.object,
    index: PropTypes.number
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProjectCard))
