import React from 'react'

import {connect} from "react-redux";
import {withRouter} from '../../helpers/with-router'
import {BsLinkedin} from "react-icons/bs";

class Solutions extends React.Component {
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
                <div className={"container px-4 my-10"}>
                    <div className={"flex flex-row justify-between"}>
                        <div className="stat">
                            <div className="stat-title mb-2">Телефон</div>
                            <div className="stat-value text-2xl font-semibold">
                                <a href={"tel:+79064914593"}>
                                    +7.906.491.45.93
                                </a>
                            </div>
                        </div>
                        <div className="stat">
                            <div className="stat-title mb-2">E-mail</div>
                            <div className="stat-value text-2xl font-semibold">
                                <a href={"mailto:info@knotta.ru"}>
                                    info@knotta.ru
                                </a>
                            </div>
                        </div>
                        <div className="stat">
                            <div className="stat-title mb-2">Telegram</div>
                            <div className="stat-value text-2xl font-semibold">
                                <a href={"tg://resolve?domain=amarshalkin"} target={"_blank"} rel="noreferrer">
                                    @amarshalkin
                                </a>
                            </div>
                        </div>
                        <div className="stat">
                            <div className="stat-title mb-2">Соцсети</div>
                            <div className="stat-value text-2xl flex flex-row space-x-10 font-semibold">
                                <a href={"https://www.linkedin.com/company/knotta"} target={"_blank"} rel="noreferrer"><BsLinkedin /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

Solutions.propTypes = {

}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Solutions))
