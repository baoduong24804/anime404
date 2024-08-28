package com.anime.api_anime404.api.phim;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.anime.api_anime404.model.ChiTietPhim;
import com.anime.api_anime404.model.Phim;
import com.anime.api_anime404.reposirory.ChiTietPhimRepository;
import com.anime.api_anime404.reposirory.DienVienRepository;
import com.anime.api_anime404.reposirory.NhaSanXuatRepository;
import com.anime.api_anime404.reposirory.PhimRepository;
import com.anime.api_anime404.reposirory.TapPhimRepository;
import com.anime.api_anime404.service.PhimService;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;



@CrossOrigin(origins = {"https://anime404.click"})
//@CrossOrigin(origins = {"http://localhost:3000", "https://anime404.click"})
@RestController
@RequestMapping("api")
public class PhimController {

@Autowired PhimService phimService;

@Autowired PhimRepository phimRepository;



@GetMapping("/get/films")
public List<Phim> getAll() {
    List<Phim> list = new ArrayList<>();
    list = phimService.findAll();
    return list;
}

@GetMapping("get/film/{id}/{slug}")
public Phim getMethodName(@PathVariable(name = "id",required = true) String id,
@PathVariable(name = "slug",required = true) String slug) {
    Phim phim = new Phim();
    phim = phimService.findByIdAndSlug(id, slug);
    return phim;
}

@GetMapping("top10")
public List<ChiTietPhim> getMethodName() {
    List<ChiTietPhim> list = new ArrayList<>();
    list = phimService.findByModified();
    return list;
}

// Endpoint để thêm một phim mới
    @PostMapping("/add")
    public boolean addPhim(@RequestBody Phim phim) {
        try {
            phimRepository.save(phim);
        } catch (Exception e) {
            // TODO: handle exception
            throw e;
        }
        return true;
    }



}
