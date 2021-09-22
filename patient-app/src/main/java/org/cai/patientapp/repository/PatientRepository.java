package org.cai.patientapp.repository;

import java.util.List;

import org.cai.patientapp.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientRepository extends JpaRepository<Patient, Long> {

	Patient findPatientById(Long id);	
}
