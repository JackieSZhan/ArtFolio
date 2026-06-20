package com.artfolio.backend.service;

import com.artfolio.backend.dto.ProjectRequestDto;
import com.artfolio.backend.entity.Portfolio;
import com.artfolio.backend.entity.Project;
import com.artfolio.backend.repository.PortfolioRepository;
import com.artfolio.backend.repository.ProjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class ProjectService {

    private final ProjectRepository projectRepository;
    private final PortfolioRepository portfolioRepository;

    @Transactional
    public Project create(ProjectRequestDto dto) {
        // Look up the parent portfolio this project belongs to
        Portfolio portfolio = portfolioRepository.findById(dto.getPortfolioId())
                .orElseThrow(() -> new RuntimeException("Portfolio not found: " + dto.getPortfolioId()));

        Project project = Project.builder()
                .title(dto.getTitle())
                .description(dto.getDescription())
                .category(dto.getCategory())
                .createdDate(dto.getCreatedDate())
                .displayOrder(dto.getDisplayOrder())
                .portfolio(portfolio)
                .build();

        return projectRepository.save(project);
    }
}