import React from 'react';

const Kompetisi1 = () => {
    return (
        <section id="1">
            <div className="mb-7">
                <h2 className="mt-4 text-center" style={{ color: 'white', fontSize: '40px' }}>
                    IT COMP

                    <p style={{ fontSize: '30px' }}>Fusion of Art & Technology</p>
                </h2>
                <div className="text-center">
                    <div>
                        <a
                            className="btn shadow mt-2 fw-bold"
                            style={{ background: 'white', color: '#ff5500' }}
                            href="https://forms.gle/bSkQHvPRVvLNkBjq7"
                        >
                            Daftar Sekarang
                        </a>
                    </div>
                    <div>
                        <a
                            className="btn shadow mt-2 fw-bold"
                            style={{ background: 'white', color: '#ff5500' }}
                            href="/"
                        >
                            Buku Panduan IT-Competitions 2024
                        </a>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#ffffff" fill-opacity="1" d="M0,160L80,144C160,128,320,96,480,122.7C640,149,800,235,960,240C1120,245,1280,171,1360,133.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
        </section>
    );
};

export default Kompetisi1;
