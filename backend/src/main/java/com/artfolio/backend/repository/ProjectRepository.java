package com.artfolio.backend.repository;

import com.artfolio.backend.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProjectRepository extends JpaRepository<Project, Long> {
    // Find all projects for a portfolio, sorted by displayOrder
    List<Project> findByPortfolioIdOrderByDisplayOrderAsc(Long portfolioId);
}