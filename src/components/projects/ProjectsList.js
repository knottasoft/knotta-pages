import React from 'react'

import {connect} from "react-redux";

import {withRouter} from '../../helpers/with-router'
import Navbar from "../Navbar";
import {Link} from "react-router-dom";
import {projects} from '../../helpers/content'
import ProjectListItem from "./ProjectListItem";
import Footer from "../Footer";

class ProjctsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            category: 'all'
        };
    }

    componentDidMount() {
    }

    render() {

        const categoryStyle = 'text-knotta-secondary'

        return (
            <React.Fragment>
                <div className={"w-screen flex flex-col items-center"}>
                    <div className={"container px-4 mt-4"}>
                        <Navbar theme={"light"} active={"projects"}/>
                    </div>
                </div>
                <div className={"divider"} />
                <div className={"bg-base-100 w-screen flex flex-col items-center"}>
                    <div className={"container px-4 mt-4 flex flex-col items-start"}>
                        <Link className={"text-knotta-cyan"} to={"/"}>Главная</Link>
                        <p className={"text-5xl mt-4 mb-2"}>Проекты</p>
                        <div className={"flex flex-row space-x-10 mt-5"}>
                            <p
                                className={`cursor-pointer ${this.state.category === 'all' ? null : categoryStyle}`}
                                onClick={() => this.setState({category: 'all'})}
                            >
                                Все проекты
                            </p>
                            <p
                                className={`cursor-pointer ${this.state.category === 'education' ? null : categoryStyle}`}
                                onClick={() => this.setState({category: 'education'})}
                            >
                                Образование
                            </p>
                            <p
                                className={`cursor-pointer ${this.state.category === 'marketing' ? null : categoryStyle}`}
                                onClick={() => this.setState({category: 'marketing'})}
                            >
                                Маркетинг
                            </p>
                            <p
                                className={`cursor-pointer ${this.state.category === 'urban' ? null : categoryStyle}`}
                                onClick={() => this.setState({category: 'urban'})}
                            >
                                Городская среда
                            </p>
                        </div>
                    </div>
                </div>
                <div className={"bg-base-100 w-screen flex flex-col items-center mb-20"}>
                    <div className={"container px-4"}>
                        <div className={"divider"} />
                        {projects.map((project, index) =>{
                            if(this.state.category === project.category || this.state.category === 'all'){
                                return (
                                    <ProjectListItem project={project} index={index}/>
                                )
                            }

                        })}
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

ProjctsList.propTypes = {

}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProjctsList))
