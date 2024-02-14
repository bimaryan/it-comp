import React from 'react';

const Kompetisi3 = () => {
    return (
        <section className="top-0" id="3">
            <div className="container mt-3">
                <h2 className="text-center" style={{ fontFamily: "'Kanit', sans-serif", color: 'white', fontSize: '25px' }}>
                    Siapa yang bisa ikut serta dalam IT COMP ini?
                </h2>
                <div className="card shadow mt-3">
                    <div className="card-body">
                        IT COMP ini terbuka untuk peserta siswa-siswi SMA/SMK sederajat, setiap kategori lomba hanya terdiri dari satu individu.
                    </div>
                </div>
            </div>
            <div className="container mt-3">
                <h2 className="text-center" style={{ fontFamily: "'Kanit', sans-serif", color: 'white', fontSize: '25px' }}>
                    Apa saja benefit yang didapatkan ketika mengikuti acara ini?
                </h2>
                <div className="card shadow mt-3">
                    <div className="card-body">
                        Benefit yang didapatkan ketika mengikuti kompetisi ini adalah menumbuhkan sikap percaya diri, jiwa kompetitif, ilmu yang bermanfaat, pengalaman yang menarik dan menciptakan trackrecord yang baik
                    </div>
                </div>
            </div>
            <div className="container mt-3">
                <h2 className="text-center" style={{ fontFamily: "'Kanit', sans-serif", color: 'white', fontSize: '25px' }}>
                    Berapa jumlah hadiah yang disediakan?
                </h2>
                <div className="card shadow mt-3">
                    <div className="card-body">
                        Hadiah juara untuk IT COMP tahun 2024 adalah uang  tunai dengan rincian sebagai berikut :
                        <div className="row row-cols-1 row-cols-md-2 justify-content-center mt-1">
                            <div className="col text-center">
                                <p className="mb-3 mt-3 fw-bold">Design UI/UX</p>
                                <div className="row row-cols-1 row-cols-md-3 gap-2 justify-content-center">
                                    <div className="card">
                                        <div className="card-header">
                                            <i className="bi bi-trophy"></i> Juara 1
                                        </div>
                                        <div className="card-body">
                                            Rp. 500.000 + sertifikat
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <i className="bi bi-trophy"></i> Juara 2
                                        </div>
                                        <div className="card-body">
                                            Rp. 400.000 + sertifikat
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <i className="bi bi-trophy"></i> Juara 3
                                        </div>
                                        <div className="card-body">
                                            Rp. 300.000 + sertifikat
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col text-center">
                                <p className="mb-3 mt-3 fw-bold">Olimpiade IT</p>
                                <div className="row row-cols-1 row-cols-md-3 gap-2 justify-content-center">
                                    <div className="card">
                                        <div className="card-header">
                                            <i className="bi bi-trophy"></i> Juara 1
                                        </div>
                                        <div className="card-body">
                                            Rp. 350.000 + sertifikat
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <i className="bi bi-trophy"></i> Juara 2
                                        </div>
                                        <div className="card-body">
                                            Rp. 250.000 + sertifikat
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <i className="bi bi-trophy"></i> Juara 3
                                        </div>
                                        <div className="card-body">
                                            Rp. 200.000 + sertifikat
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#ffffff" fill-opacity="1" d="M0,160L80,144C160,128,320,96,480,122.7C640,149,800,235,960,240C1120,245,1280,171,1360,133.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
        </section>
    );
};

export default Kompetisi3;
