package com.anime.api_anime404.reposirory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.anime.api_anime404.model.NhaSanXuat;

@Repository
public interface NhaSanXuatRepository extends JpaRepository<NhaSanXuat, String> {
    // Các phương thức custom nếu cần
}
