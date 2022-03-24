import React from 'react'

import {connect} from "react-redux";
import Man from '../../assets/man.png'
import ArrowDownRight from '../../assets/arrow-down-right.png'
import {withRouter} from '../../helpers/with-router'

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
                <div className={"container px-4"}>
                   <div className={"flex flex-row pt-20"}>
                       <div className={"flex flex-col"}>
                           <img alt={"solutions-vertical"} src={Man} width={533} height={731} />
                       </div>
                       <div className={"flex flex-col pl-20 justify-center w-2/3"}>
                            <p className={"text-4xl text-white w-2/3 mb-10"}>
                                Разрабатываем и внедряем digital решения
                                для оптимизации бизнес процессов
                            </p>
                           <div className="w-full mb-10">
                               <ul className="">
                                   <li className="flex flex-row items-center justify-start p-3">
                                       <img alt={"solutions-arrow-down-right-1"} className={"w-4 h-4 mr-4"} src={ArrowDownRight}/>
                                       <p className={"text-white text-base"}>Аналитика</p>
                                   </li>
                                   <li className="flex flex-row items-center justify-start p-3">
                                       <img alt={"solutions-arrow-down-right-2"} className={"w-4 h-4 mr-4"} src={ArrowDownRight}/>
                                       <p className={"text-white text-base"}>Приложения</p>
                                   </li>
                                   <li className="flex flex-row items-center justify-start p-3">
                                       <img alt={"solutions-arrow-down-right-3"} className={"w-4 h-4 mr-4"} src={ArrowDownRight}/>
                                       <p className={"text-white text-base"}>Программные платформы</p>
                                   </li>
                               </ul>
                           </div>
                           {/*<ul className="list-none mt-20">*/}
                           {/*    <li className={"prose"}>*/}
                           {/*        <img className={"inline mr-10 w-4"} src={ArrowDownRight}/>*/}
                           {/*        <p className={"inline mr-2 leading-8 text-white text-base"}>Аналитика</p>*/}
                           {/*    </li>*/}
                           {/*    <li className={"prose"}>*/}
                           {/*        <img className={"inline mr-10 w-4"} src={ArrowDownRight}/>*/}
                           {/*        <p className={"inline mr-2 leading-8 text-white text-base"}>Приложения</p>*/}
                           {/*    </li>*/}
                           {/*    <li className={"prose"}>*/}
                           {/*        <img className={"inline mr-10 w-4"} src={ArrowDownRight}/>*/}
                           {/*        <p className={"inline mr-2 leading-8 text-white text-base"}>Программные платформы</p>*/}
                           {/*    </li>*/}
                           {/*</ul>*/}
                           <div className={"prose"}>
                               <p className={"leading-8 text-white text-base"}>
                                   Специализация компании – инновационные ИТ-продукты.
                                   Есть множество задач, для которых не существует стандартных решений. Мы готовы предложить нашим клиентам инновационные продукты
                                   и обеспечить их качественную интеграцию в существующую
                                   ИТ-инфраструктуру.
                               </p>
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
