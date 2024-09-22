export enum FamilyHomeType {
    SINGLE_FAMILY_HOME,
    MULTI_FAMILY_HOME,
    LARGE_APARTMENT,
    SMALL_APARTMENT,
    STUDIO_APARTMENT,
    ESTATE,
    FARM,
    OTHER
}

export interface FamilyInfo {
    familyName: string;
    familySize: number;
    familyPetCount: number;
    familyHomeType: FamilyHomeType;
}

export interface AdoptionRequest {
    name: string;
    description: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    familyInfo: FamilyInfo;
    appointmentAvailability: [];
}


export interface PetInfoCardProps {
    picture: any; // Image URL or path
    petType: string;
    gender: string;
    weight: number;
    height: number;
    physique: string;
    name: string;
    dob: string; // Date of birth
    breed: string;
    location: string;
    bio: string;
}
