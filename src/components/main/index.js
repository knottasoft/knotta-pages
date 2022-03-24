import React from "react";
import {connect} from "react-redux";

import Main from "./Main";
import Header from "../Header";
import Footer from "../Footer";

const MainPage = () => {

    return (
        <React.Fragment>
            <div className={"bg-knotta-primary"}>
                <Header />
                <Main />
                <Footer />
            </div>
        </React.Fragment>
    )
}

MainPage.propTypes = {

}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
