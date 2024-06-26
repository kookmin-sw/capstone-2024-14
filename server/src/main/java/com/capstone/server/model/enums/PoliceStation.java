package com.capstone.server.model.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
public enum PoliceStation {
    SEOUL_GANGNAM("서울강남경찰서", "seoulGangnam"),
    SEOUL_GANGDONG("서울강동경찰서", "seoulGangdong");

    private final String kor;
    private final String value;

    // TODO: 전국 경찰서 추가
    // // 서울
    // 서울강남경찰서,
    // 서울강동경찰서,
    // 서울강북경찰서,
    // 서울강서경찰서,
    // 서울관악경찰서,
    // 서울광진경찰서,
    // 서울구로경찰서,
    // 서울금천경찰서,
    // 서울남대문경찰서,
    // 서울노원경찰서,
    // 서울도봉경찰서,
    // 서울동대문경찰서,
    // 서울동작경찰서,
    // 서울마포경찰서,
    // 서울방배경찰서,
    // 서울특별시경찰청,
    // 서울서대문경찰서,
    // 서울서부경찰서,
    // 서울서초경찰서,
    // 서울성동경찰서,
    // 서울성북경찰서,
    // 서울송파경찰서,
    // 서울수서경찰서,
    // 서울양천경찰서,
    // 서울영등포경찰서,
    // 서울용산경찰서,
    // 서울은평경찰서,
    // 서울종로경찰서,
    // 서울종암경찰서,
    // 서울중랑경찰서,
    // 서울중부경찰서,
    // 서울혜화경찰서,

    // // 부산
    // 부산광역시경찰청,
    // 부산강서경찰서,
    // 부산금정경찰서,
    // 부산남부경찰서,
    // 부산동래경찰서,
    // 부산동부경찰서,
    // 부산진경찰서,
    // 부산북부경찰서,
    // 부산사상경찰서,
    // 부산사하경찰서,
    // 부산서부경찰서,
    // 부산영도경찰서,
    // 부산연제경찰서,
    // 부산중부경찰서,
    // 부산해운대경찰서,
    // 부산기장경찰서,

    // // 대구
    // 대구광역시경찰청,
    // 대구남부경찰서,
    // 대구달서경찰서,
    // 대구달성경찰서,
    // 대구동부경찰서,
    // 대구북부경찰서,
    // 군위경찰서,
    // 대구서부경찰서,
    // 대구수성경찰서,
    // 대구중부경찰서,
    // 대구성서경찰서,

    // // 인천
    // 인천광역시경찰청,
    // 인천강화경찰서,
    // 인천계양경찰서,
    // 인천남동경찰서,
    // 인천미추홀경찰서,
    // 인천부평경찰서,
    // 인천서부경찰서,
    // 인천연수경찰서,
    // 인천중부경찰서,
    // 인천삼산경찰서,
    // 인천논현경찰서,
    // 인천국제공항경찰단,

    // // 광주
    // 광주광역시경찰청,
    // 광주광산경찰서,
    // 광주남부경찰서,
    // 광주동부경찰서,
    // 광주북부경찰서,
    // 광주서부경찰서,

    // // 대전
    // 대전광역시경찰청,
    // 대전유성경찰서,
    // 대전동부경찰서,
    // 대전둔산경찰서,
    // 대전대덕경찰서,
    // 대전서부경찰서,
    // 대전중부경찰서,

    // // 울산
    // 울산광역시경찰청,
    // 울산남부경찰서,
    // 울산동부경찰서,
    // 울산울주경찰서,
    // 울산중부경찰서,
    // 울산북부경찰서,

    // // 경남
    // 경기도남부경찰청,
    // 과천경찰서,
    // 광명경찰서,
    // 광주경찰서,
    // 군포경찰서,
    // 김포경찰서,
    // 부천소사경찰서,
    // 부천원미경찰서,
    // 분당경찰서,
    // 성남수정경찰서,
    // 성남중원경찰서,
    // 수원남부경찰서,
    // 수원중부경찰서,
    // 수원서부경찰서,
    // 시흥경찰서,
    // 안산단원경찰서,
    // 안산상록경찰서,
    // 안성경찰서,
    // 안양동안경찰서,
    // 양평경찰서,
    // 여주경찰서,
    // 용인동부경찰서,
    // 이천경찰서,
    // 평택경찰서,
    // 오산경찰서,
    // 화성서부경찰서,
    // 화성동탄경찰서,
    // 하남경찰서,
    // 의왕경찰서,
    // 안양만안경찰서,
    // 부천오정경찰서,
    // 용인서부경찰서,

    // // 경북
    // 경기도북부경찰청,
    // 가평경찰서,
    // 고양경찰서,
    // 구리경찰서,
    // 남양주북부경찰서,
    // 남양주남부경찰서,
    // 동두천경찰서,
    // 양주경찰서,
    // 연천경찰서,
    // 의정부경찰서,
    // 일산동부경찰서,
    // 일산서부경찰서,
    // 파주경찰서,
    // 포천경찰서,

    // // 강원
    // 강원특별자치도경찰청,
    // 강릉경찰서,
    // 고성경찰서,
    // 동해경찰서,
    // 삼척경찰서,
    // 속초경찰서,
    // 양구경찰서,
    // 영월경찰서,
    // 원주경찰서,
    // 인제경찰서,
    // 정선경찰서,
    // 철원경찰서,
    // 춘천경찰서,
    // 태백경찰서,
    // 평창경찰서,
    // 홍천경찰서,
    // 화천경찰서,
    // 횡성경찰서,

    // // 충북
    // 충청북도경찰청,
    // 청주흥덕경찰서,
    // 청주상당경찰서,
    // 청주청원경찰서,
    // 충주경찰서,
    // 제천경찰서,
    // 음성경찰서,
    // 영동경찰서,
    // 괴산경찰서,
    // 단양경찰서,
    // 보은경찰서,
    // 옥천경찰서,
    // 진천경찰서,

    // // 충남
    // 충청남도경찰청,
    // 공주경찰서,
    // 금산경찰서,
    // 논산경찰서,
    // 당진경찰서,
    // 보령경찰서,
    // 부여경찰서,
    // 서산경찰서,
    // 서천경찰서,
    // 아산경찰서,
    // 예산경찰서,
    // 천안서북경찰서,
    // 천안동남경찰서,
    // 청양경찰서,
    // 홍성경찰서,
    // 태안경찰서,

    // // 세종
    // 세종특별자치시경찰청,
    // 세종북부경찰서,
    // 세종남부경찰서,

    // // 전북
    // 전북특별자치도경찰청,
    // 고창경찰서,
    // 군산경찰서,
    // 김제경찰서,
    // 남원경찰서,
    // 무주경찰서,
    // 부안경찰서,
    // 순창경찰서,
    // 완주경찰서,
    // 익산경찰서,
    // 임실경찰서,
    // 장수경찰서,
    // 전주덕진경찰서,
    // 전주완산경찰서,
    // 정읍경찰서,
    // 진안경찰서,

    // // 전남
    // 전라남도경찰청,
    // 신안경찰서,
    // 강진경찰서,
    // 고흥경찰서,
    // 곡성경찰서,
    // 광양경찰서,
    // 구례경찰서,
    // 나주경찰서,
    // 담양경찰서,
    // 목포경찰서,
    // 무안경찰서,
    // 보성경찰서,
    // 순천경찰서,
    // 여수경찰서,
    // 영광경찰서,
    // 영암경찰서,
    // 완도경찰서,
    // 장성경찰서,
    // 장흥경찰서,
    // 진도경찰서,
    // 함평경찰서,
    // 화순경찰서,
    // 해남경찰서,

    // // 경북
    // 경상북도경찰청,
    // 경산경찰서,
    // 경주경찰서,
    // 고령경찰서,
    // 구미경찰서,
    // 김천경찰서,
    // 문경경찰서,
    // 봉화경찰서,
    // 상주경찰서,
    // 성주경찰서,
    // 안동경찰서,
    // 영덕경찰서,
    // 영양경찰서,
    // 영주경찰서,
    // 영천경찰서,
    // 울릉경찰서,
    // 예천경찰서,
    // 울진경찰서,
    // 의성경찰서,
    // 청도경찰서,
    // 청송경찰서,
    // 칠곡경찰서,
    // 포항남부경찰서,
    // 포항북부경찰서,

    // // 경남
    // 경상남도경찰청,
    // 거제경찰서,
    // 거창경찰서,
    // 김해중부경찰서,
    // 김해서부경찰서,
    // 남해경찰서,
    // 마산동부경찰서,
    // 마산중부경찰서,
    // 밀양경찰서,
    // 사천경찰서,
    // 산청경찰서,
    // 양산경찰서,
    // 의령경찰서,
    // 진주경찰서,
    // 진해경찰서,
    // 창녕경찰서,
    // 창원서부경찰서,
    // 창원중부경찰서,
    // 통영경찰서,
    // 하동경찰서,
    // 함안경찰서,
    // 함양경찰서,
    // 합천경찰서,

    // // 제주
    // 제주특별자치도경찰청,
    // 서귀포경찰서,
    // 제주동부경찰서,
    // 제주서부경찰서,
}