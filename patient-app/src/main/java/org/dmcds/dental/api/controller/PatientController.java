package org.dmcds.dental.api.controller;

import java.util.List;

import org.dmcds.dental.api.model.Patient;
import org.dmcds.dental.api.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/patient")
public class PatientController {
	
	private final PatientService patientService;

	public PatientController(PatientService patientService) {
		this.patientService = patientService;
	}
	
	@GetMapping("/find/{id}")
	public ResponseEntity<Patient> getPatientById(@PathVariable("id") Long id) {
		Patient patient = patientService.findPatientById(id);
		return new ResponseEntity<>(patient, HttpStatus.OK);
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<Patient>> getAllPatients() {
		List<Patient> patients = patientService.findAllPatients();
		return new ResponseEntity<>(patients, HttpStatus.OK);
	}	
	
	@PostMapping("/save")
	public ResponseEntity<Patient> savePatient(@RequestBody Patient patient) {
		return new ResponseEntity<>(patientService.savePatient(patient), HttpStatus.CREATED);
	}
	
	@PutMapping("/update")
	public ResponseEntity<Patient> updatePatient(@RequestBody Patient patient) {
		return new ResponseEntity<>(patientService.updatePatient(patient), HttpStatus.OK);
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deletePatient(@PathVariable("id") Long id) {
		patientService.deletePatient(id);
		return new ResponseEntity<>(HttpStatus.OK);
	} 

}
