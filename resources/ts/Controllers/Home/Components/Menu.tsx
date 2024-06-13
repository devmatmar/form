import React from "react";
import {Container, Navbar, NavbarBrand} from "react-bootstrap";

export default function Menu() {

    return (
        <Navbar expand="lg" className="bg-primary" variant="dark">
            <Container>
                <NavbarBrand href="/">Form | React-Bootstrap</NavbarBrand>
            </Container>
        </Navbar>
    );
}
