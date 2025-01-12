import React, { useState } from 'react';
import '../styles/FoodBook.css';

const ReservationForm = () => {

    const [selectedDiseases, setSelectedDiseases] = useState([]);
    const [selectedAllergies, setSelectedAllergies] = useState([]);

    // Add disease to the selectedDiseases array
    const handleDiseaseChange = (event) => {
        const disease = event.target.value;
        if (disease && !selectedDiseases.includes(disease)) {
            setSelectedDiseases([...selectedDiseases, disease]);
        }
    };

    // Add allergy to the selectedAllergies array
    const handleAllergyChange = (event) => {
        const allergy = event.target.value;
        if (allergy && !selectedAllergies.includes(allergy)) {
            setSelectedAllergies([...selectedAllergies, allergy]);
        }
    };

    // Remove disease from the selectedDiseases array
    const handleDeleteDisease = (disease) => {
        setSelectedDiseases(selectedDiseases.filter(d => d !== disease));
    };

    // Remove allergy from the selectedAllergies array
    const handleDeleteAllergy = (allergy) => {
        setSelectedAllergies(selectedAllergies.filter(a => a !== allergy));
    };

    return (
        <div className="containerform">
            <div className="panel panel-primary dialog-panel">
                <div className="panel-heading">
                    <h5>Hospital Meal - Reservation</h5>
                </div>
                <div className="panel-body">
                    <form className="form-horizontal" role="form">
                        {/* Name */}
                        <div className="form-group">
                            <h4 className="control-label col-md-2 col-md-offset-2" htmlFor="id_name">
                                Name
                            </h4>
                            <div className="col-md-8">
                                <div className="col-md-2 indent-small">
                                    <select className="form-control" id="id_title">
                                        <option>Mr</option>
                                        <option>Ms</option>
                                    </select>
                                </div>
                                <div className="col-md-3 indent-small">
                                    <input className="form-control" id="id_first_name" type="text" placeholder="First Name" />
                                </div>
                                <div className="col-md-3 indent-small">
                                    <input className="form-control" id="id_last_name" type="text" placeholder="Last Name" />
                                </div>
                            </div>
                        </div>
                        {/*diseases*/}
                        <div className="form-group">
                            <h4 className="control-label col-md-2 col-md-offset-2" htmlFor="id_name">
                                Diseases
                            </h4>
                            <div className="col-md-8">
                                <div className="col-md-3 indent-small">
                                    <select className="form-control" id="id_title" onChange={handleDiseaseChange}>
                                        <option value="">Select Disease</option>
                                        <option>Cancer</option>
                                        <option>Diabetes</option>
                                        <option>Respiratory Diseases</option>
                                        <option>Infectious Diseases</option>
                                    </select>
                                </div>
                                <div className="col-md-3 indent-small">
                                    <select className="form-control" id="id_title" onChange={handleAllergyChange}>
                                        <option value="">Select Allergy</option>
                                        <option>Pollen Allergy</option>
                                        <option>Dust Mite Allergy</option>
                                        <option>Mold Allergy</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Display selected diseases with delete buttons */}
                        <div className="form-group">
                            <div className="col-md-8 col-md-offset-2">
                                {selectedDiseases.map((disease, index) => (
                                    <div key={index} className="selected-item">
                                        {disease}
                                        <button type="button" className="delete-btn" onClick={() => handleDeleteDisease(disease)}>
                                            &#10005; {/* Cross sign */}
                                        </button>
                                    </div>
                                ))}
                                {selectedAllergies.map((allergy, index) => (
                                    <div key={index} className="selected-item">
                                        {allergy}
                                        <button type="button" className="delete-btn" onClick={() => handleDeleteAllergy(allergy)}>
                                            &#10005; {/* Cross sign */}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Age */}
                        <div className="form-group">
                            <h4 className="control-label col-md-2 col-md-offset-2" htmlFor="id_age">
                                Age
                            </h4>
                            <div className="col-md-3">
                                <input className="form-control" id="id_age" type="number" placeholder="Age" />
                            </div>
                        </div>

                        {/* Gender */}
                        <div className="form-group">
                            <h4 className="control-label col-md-2 col-md-offset-2" htmlFor="id_gender">
                                Gender
                            </h4>
                            <div className="col-md-3">
                                <select className="form-control" id="id_gender">
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="form-group">
                            <h4 className="control-label col-md-2 col-md-offset-2" htmlFor="id_contactInfo">
                                Contact Info
                            </h4>
                            <div className="col-md-6">
                                <input className="form-control" id="id_contactInfo" type="text" placeholder="E-mail" />
                                <input className="form-control" id="id_phone" type="text" placeholder="Phone: (xxx) - xxx xxxx" />
                            </div>
                        </div>

                        {/* Emergency Contact */}
                        <div className="form-group">
                            <h4 className="control-label col-md-2 col-md-offset-2" htmlFor="id_emergencyContact">
                                Emergency Contact
                            </h4>
                            <div className="col-md-6">
                                <input className="form-control" id="id_emergencyContact" type="text" placeholder="Emergency Contact Name" />
                                <input className="form-control" id="id_emergencyPhone" type="text" placeholder="Emergency Contact Phone" />
                            </div>
                        </div>

                        {/* Room, Bed, and Floor */}
                        <div className="form-group">
                            <h4 className="control-label col-md-2 col-md-offset-2" htmlFor="id_roomNumber">
                                Room Number
                            </h4>
                            <div className="col-md-3">
                                <input className="form-control" id="id_roomNumber" type="text" placeholder="Room Number" />
                            </div>
                        </div>

                        <div className="form-group">
                            <h4 className="control-label col-md-2 col-md-offset-2" htmlFor="id_bedNumber">
                                Bed Number
                            </h4>
                            <div className="col-md-3">
                                <input className="form-control" id="id_bedNumber" type="text" placeholder="Bed Number" />
                            </div>
                        </div>

                        <div className="form-group">
                            <h4 className="control-label col-md-2 col-md-offset-2" htmlFor="id_floorNumber">
                                Floor Number
                            </h4>
                            <div className="col-md-3">
                                <input className="form-control" id="id_floorNumber" type="text" placeholder="Floor Number" />
                            </div>
                        </div>

                        {/* Submit and Cancel Buttons */}
                        <div className="form-group">
                            <div className="col-md-offset-4 col-md-3">
                                <button className="btn-lg btn-primary" type="submit">
                                    Request Reservation
                                </button>
                            </div>
                            <div className="col-md-3">
                                <button className="btn-lg btn-danger" type="button" style={{ float: 'right' }}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ReservationForm;
