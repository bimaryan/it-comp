import React, { useState, useEffect } from "react";
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth, storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc, updateDoc, getDoc, doc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBBtn, MDBInput } from 'mdb-react-ui-kit';

const Home = () => {
    const Uximage = '../img/pc.png';

    const [user, setUser] = useState(null);
    const [profileData, setProfileData] = useState({ username: "", deskripsi: "", imageUrl: "" });
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            if (user) {
                // Fetch profile data from Firestore when the user is logged in
                fetchProfileData(user.uid);
            }
        });

        return () => unsubscribe();
    }, []);

    const fetchProfileData = async (userId) => {
        if (userId) {
            const firestore = getFirestore();
            const profileRef = doc(firestore, 'profil', userId);
            const profileSnapshot = await getDoc(profileRef);

            if (profileSnapshot.exists()) {
                const data = profileSnapshot.data();
                setProfileData({
                    username: data.username || "",
                    deskripsi: data.deskripsi || "",
                    imageUrl: data.imageUrl || "",
                });
            }
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/login');
        } catch (error) {
            console.error('Error signing out', error);
        }
    };

    const [formData, setFormData] = useState({
        username: "",
        deskripsi: "",
        profilImages: [],
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, profilImages: Array.from(e.target.files) });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const firestore = getFirestore();

        const docRef = await addDoc(collection(firestore, "profil"), {
            username: formData.username,
            deskripsi: formData.deskripsi,
        });

        const imageUrls = await Promise.all(
            formData.profilImages.map(async (file) => {
                const storageRef = ref(storage, `profilImages/${docRef.id}/${file.name}`);
                await uploadBytes(storageRef, file);
                return getDownloadURL(storageRef);
            })
        );

        await updateDoc(docRef, {
            profilImages: imageUrls,
        });

        Swal.fire({
            icon: "success",
            title: "Update Profil Berhasil!",
        });

        // Reset the form after submission
        setFormData({
            username: "",
            deskripsi: "",
            profilImages: [],
        });

        // Fetch updated profile data after submission
        fetchProfileData(user.uid);
    };

    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="3" className="mt-2">
                    <MDBCard>
                        <MDBCardImage
                            src={profileData.imageUrl || Uximage}
                            alt="Profile"
                            fluid
                        />
                        <MDBCardTitle className="h5 text-center">{profileData.username}</MDBCardTitle>
                        <MDBCardBody>
                            <MDBCardText>{profileData.deskripsi}</MDBCardText>
                            {user ? (
                                <div className="d-flex justify-content-center">
                                    <MDBBtn onClick={handleLogout} color="danger" size="sm" className="me-1">Logout</MDBBtn>
                                </div>
                            ) : (
                                <div className="d-flex justify-content-center">
                                    <MDBBtn color="success" size="sm" className="me-1">Share Profile</MDBBtn>
                                </div>
                            )}
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md="9" className="mt-2">
                    <MDBCard>
                        <MDBCardBody>
                            {/* User stats */}
                            <div className="d-flex justify-content-between">
                                <span>Posts: 10</span>
                                <span>Followers: 100</span>
                                <span>Following: 50</span>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                    {user ? (
                        <div className="card mt-2">
                            <div className="card-body">
                                <h5 className="mb-3">Edit Profile</h5>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <MDBInput
                                            label="Upload File"
                                            type="file"
                                            onChange={handleFileChange}
                                            multiple
                                            accept=".jpg, .jpeg, .png"
                                        />
                                        <small className="text-muted">Maximum file size: 5 MB. Allowed file types: JPG, JPEG, PNG</small>
                                    </div>

                                    <MDBInput
                                        label="username"
                                        type="text"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        className="mb-3"
                                        required
                                    />
                                    <MDBInput
                                        label="deskripsi"
                                        type="textarea"
                                        name="deskripsi"
                                        value={formData.deskripsi}
                                        onChange={handleChange}
                                        className="mb-3"
                                    />
                                    <div className="d-flex justify-content-start">
                                        <MDBBtn color="success" size="sm" type="submit">
                                            Save Changes
                                        </MDBBtn>
                                    </div>
                                </form>
                            </div>
                        </div>
                    ) : null}
                    <MDBCard className="mt-2">
                        <MDBCardBody>
                            <div className="grid gap-4">
                                <div className="g-col-4 g-col-md-4 text-center border border-danger">
                                    1
                                </div>
                                <div className="g-col-4 g-col-md-4 text-center border">
                                    2
                                </div>
                                <div className="g-col-4 g-col-md-4 text-center border">
                                    3
                                </div>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default Home;
