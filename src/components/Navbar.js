import React, { useState } from "react";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarNav,
    MDBCollapse,
} from 'mdb-react-ui-kit';

const Navbar = () => {
    const [openNavRight] = useState(false);
    return (
        <MDBNavbar expand='lg'>
            <MDBContainer fluid>
                <a className="nav-link text-center" href='/'>
                    Bimz
                </a>

                <MDBCollapse navbar open={openNavRight}>
                    <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>

                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
};

export default Navbar;
