package com.anime.api_anime404.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.anime.api_anime404.model.Phim;
import com.anime.api_anime404.reposirory.PhimRepository;

@Service
public class PhimService {
    @Autowired
    PhimRepository phimRepository;

    /**
     * limit là số lượng phim tối đa muốn lấy ra,
     * phim được lấy ra sẽ có ngày chỉnh sửa giảm dần
     * 
     * @return
     */
    public List<Phim> findMoviesSortedByModified(int limit) {
        Pageable pageable = PageRequest.of(0, limit, Sort.by(Sort.Direction.DESC, "chiTietPhim.modified"));
        Page<Phim> list = phimRepository.findMoviesSortedByModified(pageable);
        return list.getContent();
    }

    public List<Phim> findAll() {
        return phimRepository.findAll();
    }

    public Phim findByIdAndSlug(String id, String slug) {
        return phimRepository.findByIdAndSlug(id, slug);
    }

    // Them xoa sua
    public boolean insertPhim(Phim phim) {
        try {
            phimRepository.save(phim);
        } catch (Exception e) {
            // TODO: handle exception
            throw e;
        }
        return true;
    }

    public boolean deletePhim(String id) {
        try {

            phimRepository.delete(phimRepository.findById(id).orElse(null));
        } catch (Exception e) {
            // TODO: handle exception
            throw e;
        }
        return true;
    }

    public boolean editPhim(String id, Phim phim) {
        try {
            Phim p = phimRepository.findById(id).orElse(null);
            if(p == null){
                return false;
            }
           
        } catch (Exception e) {
            // TODO: handle exception
            throw e;
        }
        return true;
    }

    //

}
