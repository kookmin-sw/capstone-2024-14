package com.capstone.server.model.enums;

import com.capstone.server.code.ErrorCode;
import com.capstone.server.exception.CustomException;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Arrays;

@Getter
@NoArgsConstructor
@AllArgsConstructor
//실종자 발견 여부(실종자 탐색 종료 여부)
public enum Status {
    SEARCHING("탐색중", "searching"),
    EXIT("종료", "exit");

    private String kor;
    private String value;

    public static Status fromKor(String kor) {
        for (Status status : Status.values()) {
            if (status.getKor().equals(kor)) {
                return status;
            }
        }
        throw new CustomException(ErrorCode.BAD_REQUEST);
        // TODO : 에러 수정
    }

    public static Status getDefault() {
        return SEARCHING;
    }

    public static Status fromValue(String value) {
        return Arrays.stream(Status.values())
                .filter(status -> status.value.equals(value.trim()))
                .findFirst()
                .orElseThrow(() -> new CustomException(ErrorCode.BAD_REQUEST, "Wrong status", "put 'searching' or 'exit'"));
        // TODO : 에러 수정
    }
}