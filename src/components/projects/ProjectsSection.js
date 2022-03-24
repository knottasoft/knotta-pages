import React from 'react'

import {connect} from "react-redux";
import {withRouter} from '../../helpers/with-router'

import {projects} from '../../helpers/content'

import ProjectCard from "./ProjectCard";

import MinusBlack from "../../assets/minus-black.png";
import PlusBlack from "../../assets/plus-black.png"
import VerticalBlack from "../../assets/vertical-black.png"
import ArrowLeftBlack from "../../assets/ArrowLeftBlack.png"
import ArrowRightBlack from "../../assets/ArrowRightBlack.png"

class Solutions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            prev: 0,
            next: 3
        };
    }

    componentDidMount() {

    }

    render() {

        return (
            <React.Fragment>
                <div className={"container px-4 mb-20"}>
                   <div className={"grid grid-cols-12 py-20"}>
                       <div className={"flex flex-col col-span-3"}>
                           <p className={"text-8xl mb-3"}>
                               40+
                           </p>
                           <p className={"text-2xl mb-3"}>
                               реализованных проектов
                           </p>
                           <div className={"flex flex-row justify-between items-center h-16"}>
                               <img alt={"minus-black"} className={"mt-10"} width={16} height={2} src={MinusBlack} />
                               <img alt={"plus-black"} className={"mt-10"} width={16} height={16} src={PlusBlack} />
                               <img alt={"vertical-black"} className={"mt-10"} width={2} height={16} src={VerticalBlack} />
                           </div>
                       </div>
                       <div className={"flex flex-col pl-10 justify-center w-full col-span-9"}>
                           <div className="carousel w-full space-x-5">
                               { projects.map(project => {
                                   return (
                                       <div id={`slide${project.number}`} className="carousel-item w-96">
                                           <ProjectCard
                                               number={project.number}
                                               title={project.title}
                                               description={project.description}
                                               slug={project.slug}
                                           />
                                       </div>
                                   )
                               })}
                           </div>
                       </div>
                   </div>
                   <div className={"flex flex-row justify-between"}>
                       <a
                           href={`#slide0${this.state.prev}`}
                           onClick={() => {
                               if (this.state.prev > 1) {
                                   this.setState({
                                       prev: this.state.prev-2,
                                       next: this.state.prev
                                   })
                               }
                           }}
                       >
                           <img alt={"arrow-left-black"} src={ArrowLeftBlack} height={17} width={16} />
                       </a>
                       <img alt={"arrow-vertical-black"} src={VerticalBlack} width={2} height={17}/>
                       <a
                           href={`#slide0${this.state.next}`}
                           onClick={() => {
                               if (this.state.next < projects.length){
                                   this.setState({
                                       prev: this.state.next,
                                       next: this.state.next+1
                                   })
                               }
                           }}
                       >
                           <img alt={"arrow-right-black"} src={ArrowRightBlack} height={17} width={16} />
                       </a>
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
