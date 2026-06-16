package com.artfolio.backend.repository;

import com.artfolio.backend.entity.Asset;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AssetRepository extends JpaRepository<Asset, Long> {}