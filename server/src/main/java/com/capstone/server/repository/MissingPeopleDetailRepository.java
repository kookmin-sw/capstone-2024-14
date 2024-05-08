package com.capstone.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.capstone.server.model.MissingPeopleDetailEntity;

@Repository
public interface MissingPeopleDetailRepository extends JpaRepository<MissingPeopleDetailEntity, Long>{

}
