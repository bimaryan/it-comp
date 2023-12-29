import React, { useState, useEffect } from "react";
import { signOut, onAuthStateChanged } from 'firebase/auth'; // Import onAuthStateChanged
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
} from 'mdb-react-ui-kit';

const Navbar = () => {
    const [openNavRight, setOpenNavRight] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Listen for changes in authentication status
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        // Cleanup the listener on unmount
        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/');
        } catch (error) {
            console.error('Error signing out', error);
        }
    };

    return (
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='/'>Kompetisi</MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setOpenNavRight(!openNavRight)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar open={openNavRight}>
                    <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' href='/'>
                                Home
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='/regist'>Pendaftaran</MDBNavbarLink>
                        </MDBNavbarItem>
                        {user ? (
                            <MDBNavbarItem>
                                <MDBNavbarLink onClick={handleLogout} className="text-danger">
                                    Logout
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                        ) : null}
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
};

export default Navbar;
