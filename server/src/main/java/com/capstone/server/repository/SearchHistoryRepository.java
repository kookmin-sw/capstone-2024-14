package com.capstone.server.repository;

import com.capstone.server.model.MissingPeopleEntity;
import com.capstone.server.model.SearchHistoryEntity;
import com.capstone.server.model.enums.Step;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SearchHistoryRepository extends JpaRepository<SearchHistoryEntity, Long> {
    List<SearchHistoryEntity> findByMissingPeopleEntityId(Long id);

    SearchHistoryEntity findFirstByMissingPeopleEntityAndStepOrderByCreatedAtDesc(MissingPeopleEntity missingPeopleEntity, Step step);
}
