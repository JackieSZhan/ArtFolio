package com.artfolio.backend.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "portfolios")
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Portfolio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String artistName;

    @Column(columnDefinition = "TEXT")
    private String bio;

    private String heroImageUrl;

    @Email
    private String contactEmail;

    @OneToMany(mappedBy = "portfolio", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @Builder.Default
    private List<Project> projects = new ArrayList<>();
}