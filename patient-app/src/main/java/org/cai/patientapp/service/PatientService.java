package org.cai.patientapp.service;

import java.time.LocalDate;

import java.util.List;

import javax.transaction.Transactional;

import org.cai.patientapp.model.Patient;
import org.cai.patientapp.repository.PatientRepository;
import org.joda.time.DateTime;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class PatientService {
	
	private static Logger logger = LoggerFactory.getLogger(PatientService.class);
	private final PatientRepository patientRepo;
	
	@Autowired
	public PatientService(PatientRepository patientRepo) {
		this.patientRepo = patientRepo;
	}

	public Patient savePatient(Patient patient) {
		patient.setStatus("ACTIVE");
		return patientRepo.save(patient);
	}

	public Patient updatePatient(Patient patient) {
//		patient.setDateUpdated(LocalDate.now());
		return patientRepo.save(patient);
	}

	public List<Patient> findAllPatients() {
		return patientRepo.findAll();
	}

	public void deletePatient(Long id) {
		Patient patient = this.findPatientById(id);
		patient.setStatus("DELETED");
//		patient.setDateUpdated(LocalDate.now());
		patientRepo.save(patient);
	}

	public Patient findPatientById(Long id) {
		return patientRepo.findPatientById(id);
	}
	
}
