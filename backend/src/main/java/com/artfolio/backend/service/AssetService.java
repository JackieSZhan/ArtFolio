package com.artfolio.backend.service;

import com.artfolio.backend.dto.AssetRequestDto;
import com.artfolio.backend.entity.Asset;
import com.artfolio.backend.entity.Project;
import com.artfolio.backend.repository.AssetRepository;
import com.artfolio.backend.repository.ProjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AssetService {

    private final AssetRepository assetRepository;
    private final ProjectRepository projectRepository;

    @Transactional
    public Asset create(AssetRequestDto dto) {
        // Look up the parent project this asset (image) belongs to
        Project project = projectRepository.findById(dto.getProjectId())
                .orElseThrow(() -> new RuntimeException("Project not found: " + dto.getProjectId()));

        Asset asset = Asset.builder()
                .imageUrl(dto.getImageUrl())
                .caption(dto.getCaption())
                .sortOrder(dto.getSortOrder())
                .project(project)
                .focalPoint(dto.getFocalPoint())
                .build();

        return assetRepository.save(asset);
    }
}