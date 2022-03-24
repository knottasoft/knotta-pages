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

        return (
            <React.Fragment>
                <div className="rounded-none bg-white">
                    <div className={"p-5"}>
                        <div className={"flex flex-row pr-4"}>
                            <div className="avatar placeholder pr-4">
                                <div className="bg-[#0061FF] rounded-full w-9 h-9">
                                    <span className="text-sm text-white">
                                        {this.props.number}
                                    </span>
                                </div>
                            </div>
                            <div className={"flex flex-col"}>
                                <div className={"h-44"}>
                                    <h2 className="text-base-content text-2xl h-30 mb-5 font-semibold">
                                        {this.props.title}
                                    </h2>
                                </div>
                                <div className={"h-44"}>
                                    <div className={"flex flex-row items-end h-30 mt-5"}>
                                        <p className={"text-base-content"}>
                                            {this.props.description}
                                        </p>
                                    </div>
                                </div>
                                <ul>
                                    <li className="flex flex-row items-center justify-start mt-10">
                                        <img alt={"arrow-down-right"} className={"w-4 h-4 mr-4"} src={ArrowDownRight}/>
                                        <Link to={`/projects/${this.props.slug}`}>
                                            <p className={"font-bold"}>Подробнее</p>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

ProjectCard.propTypes = {
    number: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    slug: PropTypes.string
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProjectCard))
