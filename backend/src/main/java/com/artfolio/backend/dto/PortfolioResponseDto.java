package com.artfolio.backend.dto;

import lombok.Data;
import java.util.List;

@Data
public class PortfolioResponseDto {
    private Long id;
    private String artistName;
    private String bio;
    private String heroImageUrl;
    private String contactEmail;
    private List<ProjectResponseDto> projects;
}