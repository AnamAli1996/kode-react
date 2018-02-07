import React from "react";
import PropTypes from "prop-types";
import {Carousel} from "react-bootstrap"
import { connect } from "react-redux";
import * as actions  from "../../actions/auth";
import image from './logo.png'

const HomePage = ({ isAuthenticated, logout }) => (
    <div>
        <h1>Welcome to Kode</h1>
        <Carousel>
            <Carousel.Item>
                <img width={900} height={500} alt="900x500" src={image} />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img width={900} height={500} alt="900x500" src={image} />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img width={900} height={500} alt="900x500" src={image} />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>

);

HomePage.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.webToken
    };
}

export default connect(mapStateToProps, { logout: actions.logout })(HomePage);