import React from "react";

const Footer = () => {
    return (
        <footer className="bg-dark text-center text-white p-3 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p className="mb-0">© 2023 Kompetisi. All rights reserved.</p>
                    </div>
                    {/* <div className="col-md-6">
                    <ul className="list-inline social-icons mb-0">
                        <li className="list-inline-item">
                            <a href="#" className="text-white">
                                <i className="fab fa-facebook"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#" className="text-white">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#" className="text-white">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </li>
                    </ul>
                </div> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;