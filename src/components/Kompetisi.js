import React, { useState, useEffect } from "react";
import ReactGA from 'react-ga';
import '../App.css';

const Kompetisi = () => {
    const [loading, setLoading] = useState(true);
    const Uximage = '../img/pc.png';
    const Kertasimage = '../img/kertas.png';

    useEffect(() => {
        // Simulate loading delay
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 3000);

        ReactGA.pageview(window.location.pathname + window.location.search);

        return () => clearTimeout(timeout);
    }, []);
    return (
        <div>
            {loading ? (
                // Skeleton loading UI
                <div className="text-center mt-5">
                    <div className="spinner-border text-primary" role="status"></div>
                    <p>Loading...</p>
                </div>
            ) : (
                <>
                    <section id="1">
                        <div>
                            <h2 className="mt-4 text-center" style={{ color: 'orangered', fontSize: '40px' }}>
                                IT COMP
                                <br />
                                Fusion of Art & Technology
                            </h2>
                            <div className="text-center">
                                <a
                                    className="btn text-white shadow mt-4 fw-bold"
                                    style={{ background: 'orangered', textDecoration: 'none', padding: '10px 20px', borderRadius: '5px' }}
                                    href="https://forms.gle/bSkQHvPRVvLNkBjq7"
                                >
                                    Daftar Sekarang
                                </a>

                            </div>
                        </div>
                    </section>
                    <div className="mt-5" style={{ background: 'orangered', width: '100%', padding: '10px', margin: '0 auto' }}>
                        <h2 className="text-center" style={{ fontFamily: "'Kanit', sans-serif", color: 'white', fontSize: '25px' }}>
                            Apa itu IT COMP?
                        </h2>
                    </div>
                    <section id="2" className="mt-5">
                        <div className="container">
                            <div className="card shadow">
                                <div className="card-body">
                                    IT Comp adalah acara tahunan yang diselenggarakan oleh Jurusan Teknik Informatika Politeknik Negeri Indramayu dalam bidang Teknologi Informasi. Acara ini menawarkan wadah bagi siswa SMA/SMK Sederajat dari berbagai institusi untuk berkompetisi dan mengembangkan keterampilan dalam berbagai bidang IT seperti Design UI/UX dan Olimpiade IT.
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="mt-5" style={{ background: 'orangered', width: '100%', padding: '10px', margin: '0 auto' }}>
                        <h2 className="text-center" style={{ fontFamily: "'Kanit', sans-serif", color: 'white', fontSize: '25px' }}>
                            Kategori lomba apa saja yang diadakan pada IT COMP ini?
                        </h2>
                    </div>
                    <section id="3" className="mt-5">
                        <div className="container">
                            <div className="card">
                                <div className="card-header">
                                    <span className="fs-5 fw-bold">kami menyediakan 2 kategori lomba yaitu:</span>
                                </div>
                                <div className="card-body">
                                    <div className="row row-cols-2 g-4 justify-content-center">
                                        <img src={Uximage} className="img-fluid mx-auto" style={{ width: '200px' }} alt="gambar ui/ux" />
                                        <img src={Kertasimage} className="img-fluid mx-auto" style={{ width: '200px' }} alt="olimpiade IT" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="mt-5" style={{ background: 'orangered', width: '100%', padding: '10px', margin: '0 auto' }}>
                        <h2 className="text-center" style={{ fontFamily: "'Kanit', sans-serif", color: 'white', fontSize: '25px' }}>
                            Siapa yang bisa ikut serta dalam IT COMP ini?
                        </h2>
                    </div>
                    <section id="4" className="mt-5">
                        <div className="container">
                            <div className="container">
                                <div className="card">
                                    <div className="card-body">
                                        IT COMP ini terbuka untuk peserta siswa-siswi SMA/SMK sederajat, setiap kategori lomba hanya terdiri dari satu individu.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="mt-5" style={{ background: 'orangered', width: '100%', padding: '10px', margin: '0 auto' }}>
                        <h2 className="text-center" style={{ fontFamily: "'Kanit', sans-serif", color: 'white', fontSize: '25px' }}>
                            Apa saja benefit yang didapatkan ketika mengikuti acara ini?
                        </h2>
                    </div>
                    <section id="5" className="mt-5">
                        <div className="container">
                            <div className="card">
                                <div className="card-body">
                                    Benefit yang didapatkan ketika mengikuti kompetisi ini adalah menumbuhkan sikap percaya diri, jiwa kompetitif, ilmu yang bermanfaat, pengalaman yang menarik dan menciptakan trackrecord yang baik
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="mt-5" style={{ background: 'orangered', width: '100%', padding: '10px', margin: '0 auto' }}>
                        <h2 className="text-center" style={{ fontFamily: "'Kanit', sans-serif", color: 'white', fontSize: '25px' }}>
                            Berapa jumlah hadiah yang disediakan?
                        </h2>
                    </div>
                    <section id="6" className="mt-5">
                        <div className="container">
                            <div className="card">
                                <div className="card-body">
                                    Hadiah juara untuk IT COMP tahun 2023 adalah uang  tunai dengan rincian sebagai berikut :
                                    <div className="row row-cols-2 g-4 justify-content-center mt-1">
                                        <div className="col text-center">
                                            <b>Design UI/UX</b>
                                            <div className="row row-cols-1 row-cols-md-3 g-3 justify-content-center">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <i className="bi bi-trophy"></i> Juara 1 : Rp. 500.000 + sertifikat
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-body">
                                                        <i className="bi bi-trophy"></i> Juara 2 : Rp. 400.000 + sertifikat
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-body">
                                                        <i className="bi bi-trophy"></i> Juara 3 : Rp. 300.000 + sertifikat
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col text-center">
                                            <b>Olimpiade IT</b>
                                            <div className="row row-cols-1 row-cols-md-3 g-3 justify-content-center">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <i className="bi bi-trophy"></i> Juara 1 : Rp. 350.000 + sertifikat
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-body">
                                                        <i className="bi bi-trophy"></i> Juara 2 : Rp. 250.000 + sertifikat
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-body">
                                                        <i className="bi bi-trophy"></i> Juara 3 : Rp. 200.000 + sertifikat
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="mt-5" style={{ background: 'orangered', width: '100%', padding: '10px', margin: '0 auto' }}>
                        <h2 className="text-center" style={{ fontFamily: "'Kanit', sans-serif", color: 'white', fontSize: '25px' }}>
                            Apa topik yang dibahas dalam setiap kategori lombanya?
                        </h2>
                    </div>
                    <section id="7" className="mt-5">
                        <div className="container">
                            <div className="card">
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
                    </section>
                    <div className="mt-5" style={{ background: 'orangered', width: '100%', padding: '10px', margin: '0 auto' }}>
                        <h2 className="text-center" style={{ fontFamily: "'Kanit', sans-serif", color: 'white', fontSize: '25px' }}>
                            TimeLine perlombaan
                        </h2>
                    </div>
                    <section id="8" className="mt-5">
                        <div className="container">
                            <div className="card">
                                <div className="card-body">
                                    <ul className="timeline">
                                        <li className="timeline-item mb-5">
                                            <h5 className="fw-bold">Open Registration</h5>
                                            <span className="text-muted">10 Januari 2024</span>
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
                    </section>
                </>
            )
            }
        </div>
    );
}
export default Kompetisi;
