package com.artfolio.backend.controller;

import com.artfolio.backend.dto.ProjectRequestDto;
import com.artfolio.backend.entity.Project;
import com.artfolio.backend.service.ProjectService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/projects")
@RequiredArgsConstructor
public class ProjectController {

    private final ProjectService projectService;

    @PostMapping
    public ResponseEntity<Map<String, Long>> create(@Valid @RequestBody ProjectRequestDto dto) {
        Project saved = projectService.create(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(Map.of("id", saved.getId()));
    }
}