import React from 'react';

const Kompetisi4 = () => {
    return (
        <section className="bg-white top-0" id="4">
            <div className="container">
                <h2 className="text-center" style={{ fontFamily: "'Kanit', sans-serif", color: '#ff5500', fontSize: '25px' }}>
                    Apa topik yang dibahas dalam setiap kategori lombanya?
                </h2>
                <div className="card shadow mt-3">
                    <div className="card-body">
                        Topik yang dibahas dalam IT COMP pada setiap kategori lombanya adalah sebagai berikut :
                        <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center mt-1">
                            <div className="card">
                                <div className="card-header">
                                    <b>Design UI/UX</b>
                                </div>
                                <div className="card-body">
                                    Mengerjakan projek desain tampilan antar muka semenarik mungkin dan tidak mengandung unsur Sarah selama 3 jam pengerjaan dan dipresentasikan hasilnya di depan juri
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <b>Olimpiade IT</b>
                                </div>
                                <div className="card-body">
                                    Mengerjakan soal pilihan ganda yang terdiri dari 50 soal dengan rincian sebagai berikut :
                                    <ol>
                                        <li>
                                            Pengetahuan umum IT sebanyak 35 / 30 soal
                                        </li>
                                        <li>
                                            Pengetahuan umum desain grafis sebanyak 15 / 20 soal
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-3">
                <h2 className="text-center" style={{ fontFamily: "'Kanit', sans-serif", color: '#ff5500', fontSize: '25px' }}>
                    TimeLine perlombaan
                </h2>
                <div className="card shadow mt-">
                    <div className="card-body">
                        <ul className="timeline">
                            <li className="timeline-item mb-5">
                                <h5 className="fw-bold">Open Registration</h5>
                                <span className="text-muted">12 Februari 2024</span>
                            </li>
                            <li className="timeline-item mb-5">
                                <h5 className="fw-bold">Close Registration and Technical meeting</h5>
                                <span className="text-muted">19 Februari 2024</span>
                            </li>
                            <li className="timeline-item mb-5">
                                <h5 className="fw-bold">Waktu pelaksanaan lomba</h5>
                                <span className="text-muted">28 - 29 Februari 2024</span>
                            </li>
                            <li className="timeline-item mb-5">
                                <h5 className="fw-bold">Pengumuman pemenang Desain UI/UX & Olimpiade IT</h5>
                                <span className="text-muted">28 - 29 Februari 2024</span><br />
                                <span className="text-muted">setelah seluruh peserta menyelesaikan presentasi </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <br />
        </section>
    );
};

export default Kompetisi4;