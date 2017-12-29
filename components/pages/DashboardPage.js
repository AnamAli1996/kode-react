import React from 'react';
import {Jumbotron, Button} from 'react-bootstrap';
import axios from 'axios';
import * as actions  from "../../actions/auth";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage"
import PropTypes from "prop-types"
import styles from "../../app.css"
import CourseList from "../search/CourseList";


const courseList=[];
const DashboardPage = ({isAuthenticated, logout} ) => (

    <div>
        <div>
            <Jumbotron>
                <h1>My Dashboard</h1>
                <p>{isAuthenticated ? (
                    <button onClick={() => logout()}>Logout</button>
                ) : (
                    <div>
                        <Link to="/login">Login</Link>
                    </div>
                )}</p>
            </Jumbotron>
            <CourseList/>
        </div>

    </div>





);

DashboardPage.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.webToken
    };
}



export default connect(mapStateToProps, { logout: actions.logout })(DashboardPage);