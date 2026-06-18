package com.artfolio.backend.dto;

import lombok.Data;
import java.time.LocalDate;
import java.util.List;

@Data
public class ProjectResponseDto {
    private Long id;
    private String title;
    private String description;
    private String category;
    private LocalDate createdDate;
    private List<AssetResponseDto> assets;
    private int displayOrder;
}