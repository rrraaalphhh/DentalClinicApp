import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Patient } from '../model/patient';
import { PatientService } from '../service/patient.service';

@Component({
  selector: 'app-patient-page',
  templateUrl: './patient-page.component.html',
  styleUrls: ['./patient-page.component.scss']
})
export class PatientPageComponent implements OnInit {

  public patients: Patient[] = [];
  public forUpdate = {} as Patient;
  public forDelete = {} as Patient;
  public forView = {} as Patient;

  constructor(private patientService: PatientService) { }
  
  ngOnInit(): void {
    this.getAllPatients();
  }

  public getAllPatients() : void {
    this.patientService.getAllPatients().subscribe(
      (response: Patient[]) => {
        console.log(response);
        this.patients = response.filter(data => data.status !== 'DELETED');
      },
      (error: HttpErrorResponse) => {
        // open modal upon error received
        alert(error.message);
      }
    )
  }

  public savePatient(saveForm: NgForm): void {
    document.getElementById('save-patient-form')?.click();
    this.patientService.savePatient(saveForm.value).subscribe(
      (response: Patient) => {
        console.log(response);
        this.getAllPatients();
        saveForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        saveForm.reset();
      }
    )
  }

  public updatePatient(patient: Patient): void {
    this.patientService.updatePatient(patient).subscribe(
      (response: Patient) => {
        console.log(response);
        this.getAllPatients();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public deletePatient(patientId: number): void {
    this.patientService.deletePatient(patientId).subscribe(
      (response: void) => {
        console.log(response);
        this.getAllPatients();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public searchPatient(key: string): void {
    const patientList: Patient[] = [];
    for (const patient of this.patients) {
      if (patient.lastName.toLowerCase().indexOf(key.toLowerCase()) !== -1 || patient.firstName.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        patientList.push(patient);
      }
    }
    this.patients = patientList;
    if (patientList.length === 0 || !key) {
      this.getAllPatients();
    }
  }

  public onOpenAddModal(mode: string): void {
    const patient = {} as Patient;
    this.onOpenModal(patient, 'save')
  }

  public onOpenModal(patient: Patient, mode: string): void {
    const container = document.getElementById('patient-page');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'save') {
      button.setAttribute('data-target', '#savePatientModal');
    }
    if (mode === 'update') {
      this.forUpdate = patient;
      button.setAttribute('data-target', '#updatePatientModal');
    }
    if (mode === 'delete') {
      this.forDelete = patient;
      button.setAttribute('data-target', '#deletePatientModal');
    }
    if (mode === 'view') {
      this.forView = patient;
      button.setAttribute('data-target', '#viewPatientModal');
    }

    container?.appendChild(button);
    button.click();
  }

}
