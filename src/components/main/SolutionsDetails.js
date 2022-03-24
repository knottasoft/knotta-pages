import React from 'react'

import {connect} from "react-redux";
import Minus from '../../assets/minus.png'
import Vertical from '../../assets/vertical.png'
import Plus from '../../assets/plus.png'
import {withRouter} from '../../helpers/with-router'
import {BsCode, BsAsterisk, BsSearch} from "react-icons/bs";

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
                   <div className={"flex flex-row justify-between pt-20 mb-20"}>
                       <div className="rounded-none bg-[#0061FF] w-96 p-10">
                           <h2 className="text-white mb-4"><BsCode size={30} /></h2>
                           <div className={"h-20"}>
                               <h2 className="text-white text-3xl mb-10 font-semibold">
                                   Разработка
                                   и внедрение информационных систем
                               </h2>
                           </div>
                           <div className={"h-40 flex flex-row items-end"}>
                               <p className={"text-white"}>
                                   Специализация компании – инновационные ИТ-продукты.
                               </p>
                           </div>
                           <div className={"flex flex-row items-end h-16"}>
                               <img alt={"solutions-minus"} className={"mt-10"} width={16} height={2} src={Minus} />
                           </div>
                       </div>
                       <div className="rounded-none bg-[#0061FF] w-96 p-10">
                           <h2 className="text-white mb-4"><BsAsterisk size={30} /></h2>
                           <div className={"h-20"}>
                               <h2 className="text-white text-3xl mb-10 font-semibold">
                                   Интеграционные сервисы
                               </h2>
                           </div>
                           <div className={"h-40 flex flex-row items-end"}>
                               <p className={"text-white"}>
                                   Есть множество задач, для которых не существует стандартных решений
                               </p>
                           </div>
                           <div className={"flex flex-row items-end h-16"}>
                               <img alt={"solutions-plus"} className={"mt-10"} width={16} height={2} src={Plus} />
                           </div>
                       </div>
                       <div className="rounded-none bg-[#0061FF] w-96 p-10">
                           <h2 className="text-white mb-4"><BsSearch size={30} /></h2>
                           <div className={"h-20"}>
                               <h2 className="text-white text-3xl mb-10 font-semibold">
                                   Анализ информационных систем
                               </h2>
                           </div>
                           <div className={"h-40 flex flex-row items-end"}>
                               <p className={"text-white"}>
                                   Мы готовы предложить нашим клиентам инновационные продукты
                               </p>
                           </div>
                           <div className={"flex flex-row items-end h-16"}>
                               <img alt={"solutions-vertical"} className={"mt-10"} width={2} height={16} src={Vertical} />
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
