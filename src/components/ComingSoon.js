import React from 'react';
import "../ComingSoon.css";

const ComingSoon = () => {
    return (
        <div className="coming-soon-container">
            <div className="content">
                <h1>COMING SOON</h1>
                <p>We're working on something exciting for the IT Competition.</p>
                {/* <div className="categories">
                    <div className="category">
                        <h2>Olimpiade IT</h2>
                        <p>Challenge your IT skills in our Olimpiade IT category.</p>
                    </div>
                    <div className="category">
                        <h2>Desain UI/UX</h2>
                        <p>Get creative in the Desain UI/UX category and showcase your design skills.</p>
                    </div>
                </div> */}
                <p className='pp'>Stay tuned for more updates!</p>
            </div>
        </div>
    );
};

export default ComingSoon;
