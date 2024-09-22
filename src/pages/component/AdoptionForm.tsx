"use client";
import React from "react";
import {useState} from "react";
import {AdoptionRequest, FamilyHomeType} from "../interface/types";

const blankAdoptionRequest: AdoptionRequest = {
    name: "",
    description: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    familyInfo: {
        familyName: "",
        familySize: 0,
        familyPetCount: 0,
        familyHomeType: FamilyHomeType.OTHER
    },
    appointmentAvailability: []
}

const AdoptionForm = () => {
    const [adoptionForm, setAdoptionForm] = useState(blankAdoptionRequest);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    }

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        setAdoptionForm(e.currentTarget.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={adoptionForm.name} onChange={handleFormChange}/>
                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" value={adoptionForm.description} onChange={handleFormChange}/>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={adoptionForm.email} onChange={handleFormChange}/>
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" value={adoptionForm.phone} onChange={handleFormChange}/>
                <label htmlFor="address">Address</label>
                <input type="text" id="address" name="address" value={adoptionForm.address} onChange={handleFormChange}/>
                <label htmlFor="city">City</label>
                <input type="text" id="city" name="city" value={adoptionForm.city} onChange={handleFormChange}/>
                <label htmlFor="state">State</label>
                <input type="text" id="state" name="state" value={adoptionForm.state} onChange={handleFormChange}/>
                <label htmlFor="zip">Zip</label>
                <input type="text" id="zip" name="zip" value={adoptionForm.zip} onChange={handleFormChange}/>
                <label htmlFor="familyName">Family Name</label>
                <input type="text" id="familyName" name="familyName" value={adoptionForm.familyInfo.familyName} onChange={handleFormChange}/>
                <label htmlFor="familySize">Family Size</label>
                <input type="number" id="familySize" name="familySize" value={adoptionForm.familyInfo.familySize} onChange={handleFormChange}/>
                <label htmlFor="familyPetCount">Family Pet Count</label>
                <input type="number" id="familyPetCount" name="familyPetCount" value={adoptionForm.familyInfo.familyPetCount} onChange={handleFormChange}/>
                <label htmlFor="familyHomeType">Family Home Type</label>
                <select id="familyHomeType" name="familyHomeType" value={adoptionForm.familyInfo.familyHomeType} onChange={handleFormChange}>
                    <option value={FamilyHomeType.OTHER}>Other</option>
                    <option value={FamilyHomeType.SINGLE_FAMILY_HOME}>Single Family Home</option>
                    <option value={FamilyHomeType.MULTI_FAMILY_HOME}>Multi Family Home</option>
                    <option value={FamilyHomeType.OTHER}>Other</option>
                </select>
                <label htmlFor="appointmentAvailability">Appointment Availability</label>
                <input type="text" id="appointmentAvailability" name="appointmentAvailability" value={adoptionForm.appointmentAvailability} onChange={handleFormChange}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AdoptionForm;