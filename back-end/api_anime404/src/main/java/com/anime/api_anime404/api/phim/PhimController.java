package com.anime.api_anime404.api.phim;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;




@RestController
@RequestMapping("api")
public class PhimController {

@Autowired PhimService phimService;



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

@GetMapping("path")
public List<Phim> getMethodName() {
    List<Phim> list = new ArrayList<>();
    list = phimService.findMoviesSortedByModified(10);
    return list;
}



}
