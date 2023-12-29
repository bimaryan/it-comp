// components/Admin.js
import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth'; // Import onAuthStateChanged
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { exportExcel } from './ExcelExporter';

const Admin = () => {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate(); // Use useNavigate to get the navigation function

    useEffect(() => {
        const fetchData = async () => {
            const db = getFirestore();
            const usersRef = collection(db, 'registrations');
            const usersSnapshot = await getDocs(usersRef);

            const usersData = usersSnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            setUserData(usersData);
            setLoading(false);
        };

        fetchData();
    }, []);

    const handleExportToExcel = () => {
        exportExcel(userData);
    };

    useEffect(() => {
        const authStateChanged = onAuthStateChanged(auth, (user) => {
            if (!user) {
                // If the user is not authenticated, navigate to the login page
                navigate('/login');
            }
        });

        return () => authStateChanged(); // Cleanup the auth state listener when the component unmounts
    }, [navigate]);

    return (
        <div className='container'>
            <div className='card mt-4'>
                <div className='card-header text-center fw-bold fs-3'>Daftar peserta IT-COMP</div>
                <div className='card-body'>
                    <div className='mb-3'>
                        <button className='btn btn-success' onClick={handleExportToExcel}>
                            Export to Excel
                        </button>
                    </div>
                    {loading ? (
                        <p>Loading data...</p>
                    ) : (
                        <div className='table-responsive'>
                            <table className="table" id="exportTable">
                                <thead>
                                    <tr className='text-center'>
                                        <th>ID</th>
                                        <th>Nama</th>
                                        <th>Alamat</th>
                                        <th>Sekolah</th>
                                        <th>Jurusan</th>
                                        <th>Kategori Lomba</th>
                                        <th>Foto peserta dan bukti pembayaran</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userData.map((user) => (
                                        <tr key={user.id} className='text-center'>
                                            <td>{user.id}</td>
                                            <td>{user.fullName}</td>
                                            <td>{user.address}</td>
                                            <td>{user.school}</td>
                                            <td>{user.department}</td>
                                            <td>{user.competitionCategory}</td>
                                            <td>
                                                {user.studentCardImages.map((imageUrl, index) => (
                                                    <img
                                                        key={index}
                                                        src={imageUrl}
                                                        alt={`Student Card ${index + 1}`}
                                                        style={{ width: '50px', height: 'auto' }}
                                                        className='m-2'
                                                    />
                                                ))}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Admin;
