package com.anime.api_anime404.reposirory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.anime.api_anime404.model.TapPhim;

@Repository
public interface TapPhimRepository extends JpaRepository<TapPhim, Long> {
    // Các phương thức custom nếu cần
}

