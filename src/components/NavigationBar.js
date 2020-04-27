import React from 'react'

import {Nav, Navbar} from 'react-bootstrap'
import styled from 'styled-components'


const Styles = styled.div`
    .navbar {
        background-color: #222;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;

        &:hover {
            color: white;
        }
    }
`;


const defaults = {
    'brand' : 'brand Title here',
    'toggle_aria_controls' : 'basic-navbar-nav',
    'nav_class' : 'ml-auto'
}


export const NavigationOption = (props) => (
    <Nav.Item><Nav.Link href={props.href}>{props.label}</Nav.Link></Nav.Item>
)


export const NavigationBar = (props) => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">{ props.brand || defaults['brand'] }</Navbar.Brand>
            <Navbar.Toggle aria-controls={ props.toggle_aria_controls || defaults['toggle_aria_controls'] }/>
            <Navbar.Collapse id={ props.toggle_aria_controls || defaults['toggle_aria_controls'] }>
                <Nav className={ props.nav_class || defaults['nav_class'] }>
                    {props.children}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)
