package com.artfolio.backend.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.time.LocalDate;

@Data
public class ProjectRequestDto {

    @NotBlank
    private String title;

    private String description;

    @NotBlank
    private String category;

    private LocalDate createdDate;

    private int displayOrder;

    private Long portfolioId;
}