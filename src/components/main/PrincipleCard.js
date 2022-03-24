import React from 'react'

import {connect} from "react-redux";
import {withRouter} from '../../helpers/with-router'
import PropTypes from "prop-types";

class PrincipleCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    componentDidMount() {

    }

    render() {

        return (
            <React.Fragment>
                <div className="rounded-none">
                    <div className={"p-5"}>
                        <div className="avatar placeholder pr-4 pb-5">
                            <div className="bg-[#0061FF] rounded-full w-9 h-9">
                                    <span className="text-sm text-white">
                                        { this.props.number }
                                    </span>
                            </div>
                        </div>
                        <div className={"mb-10"}>
                            <h2 className="text-white text-xl mb-10 font-semibold">
                                {this.props.title}
                            </h2>
                        </div>
                        <div className={"flex flex-row items-end"}>
                            <p className={"text-white text-sm"}>
                                { this.props.description }
                            </p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

PrincipleCard.propTypes = {
    number: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PrincipleCard))
