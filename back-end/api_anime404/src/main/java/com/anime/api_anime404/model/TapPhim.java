package com.anime.api_anime404.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
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
@Table(name = "TapPhim")
public class TapPhim {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "server_name")
    private String serverName;

    @Column(name = "episode")
    private Integer episode;

    @Column(name = "slug")
    private String slug;

    @Column(name = "embed")
    private String embed;

    @Column(name = "m3u8")
    private String m3u8;

    @ManyToOne
    @JoinColumn(name = "phim_id", referencedColumnName = "id")
    @JsonIgnore
    private Phim phim;

    // Getters and setters
}
