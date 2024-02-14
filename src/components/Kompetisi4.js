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
                                    Mengerjakan proyek desain tampilan antarmuka dan pengalaman pengguna semenarik mungkin. Karya tidak mengandung unsur SARA, setelah karya sudah selesai dikerjakan peserta akan mempresentasikan hasil karyanya.
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <b>Olimpiade IT</b>
                                </div>
                                <div className="card-body">
                                    Mengerjakan soal pilihan ganda yang berisi tentang Pengetahuan umum IT dan desain Grafis. Jika Benar mendapat nilai (+3), jika salah mendapat nilai (-1), dan jika tidak diisi maka tidak mendapat nilai (0)
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
                                <h5 className="fw-bold">Close Registratio</h5>
                                <span className="text-muted">24 Februari 2024</span>
                            </li>
                            <li className='timeline-item mb-5'>
                                <h5 className='fw-bold'>Technical meeting (Online)</h5>
                                <span className='test-muted'>25 Februari 2024</span>
                            </li>
                            <li className="timeline-item mb-5">
                                <h5 className="fw-bold">Waktu pelaksanaan lomba</h5>
                                <span className="text-muted">28 - 29 Februari 2024</span>
                            </li>
                            <li className="timeline-item mb-5">
                                <h5 className="fw-bold">Pengumuman pemenang Desain UI/UX & Olimpiade IT</h5>
                                <span className="text-muted">28 - 29 Februari 2024</span><br />
                                <span className="text-muted">setelah presentasi (Desain UI/UX) dan pengerjaan (Olimpiade IT) selesai di masing - masing hari pelaksanaannya.</span>
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