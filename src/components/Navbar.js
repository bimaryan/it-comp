import React, { useState } from "react";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarNav,
    MDBCollapse,
    MDBNavbarBrand,
} from 'mdb-react-ui-kit';

const Navbar = () => {
    const [openNavRight] = useState(false);
    return (
        <MDBNavbar expand='lg'>
            <MDBContainer fluid>
                <MDBNavbarBrand className="nav-link text-center" href='/'>
                    <img src="../img/logo.jpeg" alt="Logo" height="30" />
                    Himatif Polindra
                </MDBNavbarBrand>

                <MDBCollapse navbar open={openNavRight}>
                    <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>

                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
};

export default Navbar;
