import React from 'react'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import styles from "../app.css"

export default class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar className={styles.navbar}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Kode</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav className={styles.navbar}>
                    <NavItem eventKey={1} href="/login">Login</NavItem>
                    <NavItem eventKey={2} href="/signup">Register</NavItem>
                    <NavDropdown eventKey={3} title="" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}>Separated link</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
        );
    }
}

