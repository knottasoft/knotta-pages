import React from 'react'

import {connect} from "react-redux";
import {withRouter} from '../../helpers/with-router'
import PrincipleCard from "./PrincipleCard";
import {principles} from "../../helpers/content";

class Principles extends React.Component {
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
                <div className={"container px-4 m-20"}>
                    <div className={"flex flex-col"}>
                        <p className={"text-6xl text-white mb-3"}>
                            Принципы работы
                        </p>
                        <div className={"flex flex-row"}>
                            <div className={"grid gap-4 grid-cols-2 w-2/3"}>
                                {principles.map(principle => {
                                    return (
                                        <PrincipleCard
                                            number={principle.number}
                                            title={principle.title}
                                            description={principle.description}
                                        />
                                    )
                                })}
                            </div>
                        </div>

                    </div>

                </div>
            </React.Fragment>
        );
    }
}

Principles.propTypes = {

}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Principles))
