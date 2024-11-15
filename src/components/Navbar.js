// import React, { useState } from "react";

const Navbar = () => {
    // const [openNavRight] = useState(false);
    return (
        <div className="fixed-top">
            <nav className="navbar navbar-expand-lg rounded shadow mb-3">
                <div className="container-fluid">
                    <a className="navbar-brand rounded" href="/">
                        <div className="container">
                            <img src="../img/logo.jpeg" alt="Logo" height="30" />
                            Himatif Polindra
                        </div>
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
