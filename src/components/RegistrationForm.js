import React, { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc, updateDoc } from "firebase/firestore";
import { storage } from "../firebase";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import Swal from "sweetalert2";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        address: "",
        school: "",
        department: "",
        competitionCategory: "",
        studentCardImages: [],
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, studentCardImages: Array.from(e.target.files) });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a Firestore reference
        const firestore = getFirestore();

        // Add data to Firestore without including the file
        const docRef = await addDoc(collection(firestore, "registrations"), {
            fullName: formData.fullName,
            address: formData.address,
            school: formData.school,
            department: formData.department,
            competitionCategory: formData.competitionCategory,
        });

        // Upload student card images to Storage
        const imageUrls = await Promise.all(
            formData.studentCardImages.map(async (file) => {
                const storageRef = ref(storage, `studentCards/${docRef.id}/${file.name}`);
                await uploadBytes(storageRef, file);
                return getDownloadURL(storageRef);
            })
        );

        // Update Firestore document with the image URLs
        await updateDoc(docRef, {
            studentCardImages: imageUrls,
        });

        Swal.fire({
            icon: "success",
            title: "Pendaftaran Berhasil!",
            text: "Terima kasih atas partisipasinya.",
        });

        // Reset the form after submission
        setFormData({
            fullName: "",
            address: "",
            school: "",
            department: "",
            competitionCategory: "",
            studentCardImages: [],
        });
    };

    return (
        <>
            <div className="container mt-5">
                <form onSubmit={handleSubmit} className="p-4 max-w-2xl mx-auto bg-white rounded-md shadow">
                    <h2 className="text-center mb-4 text-xl font-bold text-gray-900 dark:text-white" style={{ color: 'orangered' }}>Pendaftaran IT-COMP</h2>

                    <div className="mb-3">
                        <MDBInput
                            label="Nama Lengkap"
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <MDBInput
                            label="Alamat"
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <MDBInput
                            label="Nama Sekolah"
                            type="text"
                            name="school"
                            value={formData.school}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <MDBInput
                            label="Jurusan"
                            type="text"
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <MDBInput
                            label="Kategori Lomba"
                            type="text"
                            name="competitionCategory"
                            value={formData.competitionCategory}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <MDBInput
                            label="Upload File"
                            type="file"
                            onChange={handleFileChange}
                            multiple
                            required
                            accept=".jpg, .jpeg, .png" // Specify allowed file types
                        />
                        <small className="text-muted">Maximum file size: 5 MB. Allowed file types: JPG, JPEG, PNG</small>
                    </div>

                    <div className="mb-3">
                        <MDBBtn type="submit" className="w-100 text-white px-4 py-2 rounded-md" style={{ background: 'orangered' }}>
                            Daftar Lomba
                        </MDBBtn>
                    </div>
                </form>
            </div>
        </>
    );
};

export default RegistrationForm;
