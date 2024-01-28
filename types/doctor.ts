export type Doctor = {
    uuid: string;
    first_name: string;
    last_name: string;
    physician_id: string;
    accepting: boolean;
}

export type CreateDoctorRequest = {
    firstName: string,
    lastName: string,
    physicianId: string | null
    accepting: boolean
}
