package com.anime.api_anime404.reposirory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.anime.api_anime404.model.Phim;

@Repository
public interface PhimRepository extends JpaRepository<Phim, String> {
    // Các phương thức custom nếu cần
    @Query("SELECT m FROM Phim m WHERE m.id = :id and m.slug = :slug")
    Phim findByIdAndSlug(@Param("id") String id,@Param("slug") String slug);


    @Query("SELECT p FROM Phim p JOIN p.chiTietPhim ctp ORDER BY ctp.modified DESC")
    Page<Phim> findMoviesSortedByModified(Pageable pageable);

}

