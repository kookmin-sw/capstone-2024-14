package com.capstone.server.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.locationtech.jts.geom.Point;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "cctv")
public class CCTVEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cctv_id")
    private Long id;

    // @NotBlank
    // private BigDecimal latitude;

    // @NotBlank
    // private BigDecimal longitude;

    // @NotBlank
    // private String locationAddress;

    // @NotBlank
    @Column(columnDefinition = "geometry(Point, 4326)")
    private Point gps;

    // // N:1 양방향 관계 매핑
    // @OneToMany(mappedBy = "CCTVEntity", cascade = CascadeType.ALL)
    // List<SearchResultEntity> searchResultEntities;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }
}
