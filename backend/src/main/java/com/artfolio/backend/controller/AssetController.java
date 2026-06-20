package com.artfolio.backend.controller;

import com.artfolio.backend.dto.AssetRequestDto;
import com.artfolio.backend.entity.Asset;
import com.artfolio.backend.service.AssetService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/assets")
@RequiredArgsConstructor
public class AssetController {

    private final AssetService assetService;

    @PostMapping
    public ResponseEntity<Map<String, Long>> create(@Valid @RequestBody AssetRequestDto dto) {
        Asset saved = assetService.create(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(Map.of("id", saved.getId()));
    }
}