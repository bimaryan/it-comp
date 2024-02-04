import React, { useState, useEffect } from "react";
import ReactGA from 'react-ga';
import '../App.css';
import Kompetisi1 from "./Kompetisi1";
import Kompetisi2 from "./Kompetisi2";
import Kompetisi3 from "./Kompetisi3";
import Kompetisi4 from "./Kompetisi4";

const Kompetisi = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading delay
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1000);

        ReactGA.pageview(window.location.pathname + window.location.search);

        return () => clearTimeout(timeout);
    }, []);
    return (
        <div>
            {loading ? (
                // Skeleton loading UI
                <div className="text-center mt-3">
                    <div className="spinner-border text-white" role="status"></div>
                    <p className="text-white">Loading...</p>
                </div>
            ) : (
                <>
                    <Kompetisi1/>
                    <Kompetisi2/>
                    <Kompetisi3/>
                    <Kompetisi4/>
                </>
            )
            }
        </div>
    );
}
export default Kompetisi;
