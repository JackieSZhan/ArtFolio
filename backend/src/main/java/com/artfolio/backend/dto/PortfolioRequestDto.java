package com.artfolio.backend.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class PortfolioRequestDto {

    @NotBlank
    private String artistName;

    private String bio;
    private String biography;
    private String heroImageUrl;

    @Email
    private String contactEmail;
}