import React from "react";
import {connect} from "react-redux";
import "./App.css";

import {
    Route,
    BrowserRouter as Router,
    Routes
} from "react-router-dom";

import MainPage from "./components/main";
import ProjectsList from "./components/projects/ProjectsList";
import ProjectDetails from "./components/projects/ProjectDetails";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/projects/:slug" element={<ProjectDetails />} />
                <Route exact path="/projects" element={<ProjectsList />} />
                <Route path="/" element={<MainPage />} />
            </Routes>
        </Router>
    )
}

App.propTypes = {

}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(App)
