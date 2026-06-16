package com.artfolio.backend.service;

import com.artfolio.backend.dto.AssetResponseDto;
import com.artfolio.backend.dto.PortfolioRequestDto;
import com.artfolio.backend.dto.PortfolioResponseDto;
import com.artfolio.backend.dto.ProjectResponseDto;
import com.artfolio.backend.entity.Asset;
import com.artfolio.backend.entity.Portfolio;
import com.artfolio.backend.entity.Project;
import com.artfolio.backend.repository.PortfolioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PortfolioService {

    private final PortfolioRepository portfolioRepository;

    @Transactional
    public PortfolioResponseDto create(PortfolioRequestDto dto) {
        Portfolio portfolio = Portfolio.builder()
                .artistName(dto.getArtistName())
                .bio(dto.getBio())
                .heroImageUrl(dto.getHeroImageUrl())
                .contactEmail(dto.getContactEmail())
                .build();

        Portfolio saved = portfolioRepository.save(portfolio);
        return toResponseDto(saved);
    }

    @Transactional(readOnly = true)
    public PortfolioResponseDto getById(Long id) {
        Portfolio portfolio = portfolioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Portfolio not found: " + id));
        return toResponseDto(portfolio);
    }

    @Transactional(readOnly = true)
    public List<PortfolioResponseDto> getAll() {
        return portfolioRepository.findAll()
                .stream()
                .map(this::toResponseDto)
                .toList();
    }

    // Entity → DTO
    private PortfolioResponseDto toResponseDto(Portfolio p) {
        PortfolioResponseDto dto = new PortfolioResponseDto();
        dto.setId(p.getId());
        dto.setArtistName(p.getArtistName());
        dto.setBio(p.getBio());
        dto.setHeroImageUrl(p.getHeroImageUrl());
        dto.setContactEmail(p.getContactEmail());
        dto.setProjects(p.getProjects().stream()
                .map(this::toProjectDto)
                .toList());
        return dto;
    }

    private ProjectResponseDto toProjectDto(Project p) {
        ProjectResponseDto dto = new ProjectResponseDto();
        dto.setId(p.getId());
        dto.setTitle(p.getTitle());
        dto.setDescription(p.getDescription());
        dto.setCategory(p.getCategory());
        dto.setCreatedDate(p.getCreatedDate());
        dto.setAssets(p.getAssets().stream()
                .map(this::toAssetDto)
                .toList());
        return dto;
    }

    private AssetResponseDto toAssetDto(Asset a) {
        AssetResponseDto dto = new AssetResponseDto();
        dto.setId(a.getId());
        dto.setImageUrl(a.getImageUrl());
        dto.setCaption(a.getCaption());
        dto.setSortOrder(a.getSortOrder());
        return dto;
    }
}