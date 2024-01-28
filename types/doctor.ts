export type Doctor = {
    uuid: string;
    first_name: string;
    last_name: string;
    physician_id: string | null;
    accepting: boolean;
    created: Date;
    updated: Date;
}

export type CreateDoctorRequest = {
    firstName: string,
    lastName: string,
    physicianId: string | null
    accepting: boolean
}
