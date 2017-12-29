import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import DashboardPage from "./components/pages/DashboardPage";
import NavigatorBar from "./components/NavigationBar";
import StudentRoute from './components/routes/StudentRoute';
import GuestRoute from './components/routes/GuestRoute';
import PropTypes from "prop-types";
import SignupPage from "./components/pages/SignupPage";
import CourseInfoPage from "./components/pages/CourseInfoPage"


const App = ({location}) => (
            <div>
                <div className="container">
                    <NavigatorBar/>
                </div>
                <div className="ui container">
                    <Route
                        location={location}
                        path="/"
                        exact component={HomePage} />
                    <GuestRoute
                        location={location}
                        path="/login"
                        exact component={LoginPage} />
                    <GuestRoute
                        location={location}
                        path="/signup"
                        exact component={SignupPage}
                    />
                    <StudentRoute
                        location={location}
                        path="/dashboard"
                        exact component={DashboardPage} />

                </div>
            </div>
        );

App.propTypes ={
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired,
};




export default App;
