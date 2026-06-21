package com.artfolio.backend.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class AssetRequestDto {

    @NotBlank
    private String imageUrl;

    private String caption;

    private int sortOrder;

    private Long projectId;

    private String focalPoint;
}