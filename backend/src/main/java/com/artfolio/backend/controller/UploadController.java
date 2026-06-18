package com.artfolio.backend.controller;

import com.artfolio.backend.service.SpacesService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;

@RestController
@RequestMapping("/api/upload")
@RequiredArgsConstructor
@CrossOrigin(origins = {"http://localhost:5173", "http://209.38.143.217"})
public class UploadController {

    private final SpacesService spacesService;

    @PostMapping
    public ResponseEntity<Map<String, String>> upload(@RequestParam("file") MultipartFile file) throws Exception {
        String url = spacesService.uploadFile(file);
        return ResponseEntity.ok(Map.of("url", url));
    }
}