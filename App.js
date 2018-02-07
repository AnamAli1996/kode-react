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
import ViewAllCourses from "./components/pages/ViewAllCourses";
import Main from "./components/Course/Flashcard/Main"
import CoursePage from "./components/pages/CourseInfo"
import QuizGame from "./components/pages/QuizGame";

const App = ({location}) => (
            <div>
                <div className="container">
                    <NavigatorBar/>
                </div>
                <div className="padding">

                </div>
                <div className="ui container">
                    <Route
                        location={location}
                        path="/"
                        exact component={HomePage} />
                    <Route
                        path="/courses/:id"
                        exact component={CoursePage}
                        />
                    <Route
                        path="/QuizGame"
                        exact component={QuizGame}
                    />
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
                    <StudentRoute
                        location={location}
                        path="/AllCourses"
                        exact component={ViewAllCourses}/>

                </div>
            </div>
        );

App.propTypes ={
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired,
};




export default App;
