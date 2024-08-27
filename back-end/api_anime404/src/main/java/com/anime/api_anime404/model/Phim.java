package com.anime.api_anime404.model;




import java.util.List;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Phim")
public class Phim {
    @Id
    @Column(name = "id", nullable = false)
    private String id;

    @Column(name = "name_flim")
    private String nameFlim;

    @Column(name = "slug")
    private String slug;

    @Column(name = "original_name")
    private String originalName;

    @Column(name = "thumb_url")
    private String thumbUrl;

    @Column(name = "poster_url")
    private String posterUrl;

    @Column(name = "new_episode")
    private Integer newEpisode;

    @Column(name = "status")
    private Boolean status;

    @OneToOne(mappedBy = "phim", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private ChiTietPhim chiTietPhim;

    @OneToMany(mappedBy = "phim", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<TapPhim> tapPhimList;

    // Getters and setters
}

