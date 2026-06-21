package com.artfolio.backend.dto;

import lombok.Data;

@Data
public class AssetResponseDto {
    private Long id;
    private String imageUrl;
    private String caption;
    private int sortOrder;
    private String focalPoint;
}