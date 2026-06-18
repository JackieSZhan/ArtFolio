package com.artfolio.backend.controller;

import com.artfolio.backend.dto.PortfolioRequestDto;
import com.artfolio.backend.dto.PortfolioResponseDto;
import com.artfolio.backend.service.PortfolioService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/portfolios")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class PortfolioController {

    private final PortfolioService portfolioService;

    @PostMapping
    public ResponseEntity<PortfolioResponseDto> create(
            @Valid @RequestBody PortfolioRequestDto dto) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(portfolioService.create(dto));
    }

    @GetMapping("/{id}")
    public ResponseEntity<PortfolioResponseDto> getById(@PathVariable Long id) {
        return ResponseEntity.ok(portfolioService.getById(id));
    }

    @GetMapping
    public ResponseEntity<List<PortfolioResponseDto>> getAll() {
        return ResponseEntity.ok(portfolioService.getAll());
    }

    @PutMapping("/{id}")
    public ResponseEntity<PortfolioResponseDto> update(
            @PathVariable Long id,
            @Valid @RequestBody PortfolioRequestDto dto) {
        return ResponseEntity.ok(portfolioService.update(id, dto));
    }
}