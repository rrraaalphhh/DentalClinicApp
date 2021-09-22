import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../model/patient';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PatientService {
    private apiUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    public getAllPatients(): Observable<Patient[]> {
        return this.http.get<Patient[]>(`${this.apiUrl}/patient/all`);
    }

    public getPatientById(patientId: number ): Observable<Patient> {
        return this.http.get<Patient>(`${this.apiUrl}/patient/find/${patientId}`);
    }

    public savePatient(patient: Patient ): Observable<Patient> {
        return this.http.post<Patient>(`${this.apiUrl}/patient/save`, patient);
    }

    public updatePatient(patient: Patient ): Observable<Patient> {
        return this.http.put<Patient>(`${this.apiUrl}/patient/update`, patient);
    }

    public deletePatient(patientId: number ): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/patient/delete/${patientId}`);
    }

}