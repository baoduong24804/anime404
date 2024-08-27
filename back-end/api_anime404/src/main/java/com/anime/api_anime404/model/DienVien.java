package com.anime.api_anime404.model;


import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "DienVien")
public class DienVien {
    @Id
    @Column(name = "id", nullable = false)
    private String id;

    @Column(name = "casts")
    private String casts;

    @OneToMany(mappedBy = "dienVien", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnore
    private Set<ChiTietPhim> chiTietPhims;

    // Getters and setters
}

