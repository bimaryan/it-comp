import React from 'react';

const Kompetisi2 = () => {
    const Uximage = '../img/pc.png';
    const Kertasimage = '../img/kertas.png';
    return (
        <section className="bg-white top-0" id="2">
            <div className="container">
                <h2 className="text-center" style={{ fontFamily: "'Kanit', sans-serif", fontSize: '25px', color: '#ff5500' }}>
                    Apa itu IT COMP?
                </h2>
                <div className="card shadow mt-3">
                    <div className="card-body">
                        IT Comp adalah acara tahunan yang diselenggarakan oleh Jurusan Teknik Informatika Politeknik Negeri Indramayu dalam bidang Teknologi Informasi. Acara ini menawarkan wadah bagi siswa SMA/SMK Sederajat dari berbagai institusi untuk berkompetisi dan mengembangkan keterampilan dalam berbagai bidang IT seperti Design UI/UX dan Olimpiade IT.
                    </div>
                </div>
            </div>
            <div className="container mt-3">
                <h2 className="text-center" style={{ fontFamily: "'Kanit', sans-serif", fontSize: '25px', color: '#ff5500' }}>
                    Kategori lomba apa saja yang diadakan pada IT COMP ini?
                </h2>
                <div className="card shadow mt-3">
                    <div className="card-header">
                        <span className="fs-5">kami menyediakan 2 kategori lomba yaitu:</span>
                    </div>
                    <div className="card-body">
                        <div className="row row-cols-2 g-4 justify-content-center">
                            <div className="text-center">
                                <img src={Uximage} className="img-fluid mx-auto" style={{ width: '200px' }} alt="gambar ui/ux" />
                                <p>Desain UI/UX</p>
                            </div>
                            <div className="text-center">
                                <img src={Kertasimage} className="img-fluid mx-auto" style={{ width: '200px' }} alt="olimpiade IT" />
                                <p>Olimpiade IT</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#ff5500" fill-opacity="1" d="M0,160L80,144C160,128,320,96,480,122.7C640,149,800,235,960,240C1120,245,1280,171,1360,133.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
        </section>
    );
};

export default Kompetisi2;
