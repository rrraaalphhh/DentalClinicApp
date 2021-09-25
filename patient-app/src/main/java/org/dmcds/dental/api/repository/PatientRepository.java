package org.dmcds.dental.api.repository;

import java.util.List;

import org.dmcds.dental.api.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientRepository extends JpaRepository<Patient, Long> {

	Patient findPatientById(Long id);	
}
