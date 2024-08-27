package com.anime.api_anime404.reposirory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.anime.api_anime404.model.DienVien;

@Repository
public interface DienVienRepository extends JpaRepository<DienVien, String> {
    // Các phương thức custom nếu cần
}

