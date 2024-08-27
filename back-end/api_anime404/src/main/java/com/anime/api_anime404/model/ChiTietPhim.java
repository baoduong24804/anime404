package com.anime.api_anime404.model;


import java.sql.Timestamp;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "ChiTietPhim")
public class ChiTietPhim {
    @Id
    @Column(name = "phim_id", nullable = false)
    private String phimId;

    @Column(name = "created")
    private Timestamp created;

    @Column(name = "modified")
    private Timestamp modified;

    @Column(name = "description", columnDefinition = "TEXT")
    private String description;

    @Column(name = "total_episodes")
    private Integer totalEpisodes;

    @Column(name = "language")
    private String language;

    @Column(name = "quality")
    private String quality;

    @OneToOne
    @JoinColumn(name = "phim_id", referencedColumnName = "id")
    @JsonIgnore
    private Phim phim;

    @ManyToOne
    @JoinColumn(name = "director_id", referencedColumnName = "id")
    private NhaSanXuat nhaSanXuat;

    @ManyToOne
    @JoinColumn(name = "cast_id", referencedColumnName = "id")
    private DienVien dienVien;

    // Getters and setters
}

