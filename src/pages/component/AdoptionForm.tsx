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

        </div>
    );
};

export default AdoptionForm;