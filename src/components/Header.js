import React from 'react'

import {connect} from "react-redux";
import HeroBackground from '../assets/hero-background.png'
import {withRouter} from '../helpers/with-router'
import Navbar from "./Navbar";

class Header extends React.Component {
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
                <div className="bg-knotta-primary relative">
                    <div
                        className="bg-cover bg-no-repeat"
                        style={{
                            opacity: 0.5,
                            height: '848px',
                            backgroundImage: `url(${HeroBackground})`,
                        }}
                    />
                    <div className={"absolute top-0 left-0 w-screen flex flex-col items-center h-full"}>
                        <div className={"container px-4 mt-4"}>
                            <Navbar theme={"dark"} />
                        </div>
                        <div className={"container px-4 mt-4 h-full"}>
                            <div className={"w-1/2 flex items-center h-full"}>
                                <div className={"flex flex-col"}>
                                    <h1 className="text-6xl text-white mb-10">
                                        Помогаем бизнесу повысить эффективность
                                    </h1>
                                    <article className="prose text-white mb-10 w-2/3">
                                        <p>Разрабатываем и внедряем digital решения для оптимизации бизнес процессов.</p>
                                    </article>
                                    <div className={"flex-none"}>
                                        <button className={"btn bg-knotta-secondary btn-md rounded-none flex-none"}>
                                            <span className={"px-4 text-sm"}>СВЯЖИТЕСЬ С НАМИ</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        );
    }
}

Header.propTypes = {

}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header))
