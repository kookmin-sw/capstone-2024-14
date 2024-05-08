"""
TODO
[ ] 이미지 저장명 수정
[x] 객체 탐지 프레임 조정 
[x] save_crop 시에 bbox 비율 조정해주기 (3:5)
[x] 2-stage 모델을 위한 annotation Json 파일 생성
"""


import os
import cv2
from PIL import Image  
from ultralytics import YOLO
from ultralytics.utils.plotting import save_one_box
import torch
from datetime import datetime
from pathlib import Path
import json
import re


# source video FPS 계산 함수
def get_video_fps(video_path):
    video = cv2.VideoCapture(video_path)
    fps = video.get(cv2.CAP_PROP_FPS)
    video.release()
    return fps


# 학습된 weight path 넣기
model = YOLO('/Users/lim/Develop/Capston/YOLO/model_train/weights/best.pt')

# 테스트 할 소스 디렉토리
source_path = '/Users/lim/Develop/Capston/YOLO/dataset/test'
detect_path = Path('/Users/lim/Develop/Capston/YOLO/detect')


categories = []
annotations = []
for filename in os.listdir(source_path):
    source = os.path.join(source_path, filename)
    cap = cv2.VideoCapture(source)  # 비디오 파일
    fps = get_video_fps(source)  # FPS
    stride = int(fps * 10)  # 현재는 10초당 한 번 탐색 진행, 수정 필요할 경우 fps * __ 수정하면 됨

    """
    NOTE 결과 저장 옵션
    iou: Intersection Over Union 조정
    vid_stride: 프레임 조절

    save_crop: bbox 저장
    save: 소스 탐색 내역 저장(예: bbox 표시된 영상)
    show_conf: 정확도 표시
    show_labels: 라벨 표시
    """
    results = model.predict(source, save_crop=True, stream=True, show_conf=False, vid_stride = stride)

    frame_num = 1   
    for i, r in enumerate(results):
        frame_num += stride
        cap.set(cv2.CAP_PROP_POS_FRAMES, frame_num)  # 현재 탐색 중인 프레임으로 이동
        ret, frame = cap.read()  # 프레임을 읽어옴
        if ret:  # 프레임을 성공적으로 읽어온 경우 bbox 저장을 수행
            for box in r.boxes:
                xyxy = box.xyxy
                for j in range(xyxy.size(0)):  # 바운딩 박스의 개수에 맞게 루프를 돌며 전처리 및 저장
                # === 바운딩 박스 비율 조정 === #
                    target_ratio = 3/5

                    x1, y1, x2, y2 = xyxy[j]
                    width = x2 - x1
                    height = y2 - y1

                    current_ratio = torch.round(width / height * 10) / 10

                    if current_ratio > target_ratio:
                        # 현재 비율이 목표 비율보다 가로가 더 길다면 세로를 늘려줌 
                        new_height = width / target_ratio
                        y_center = (y1 + y2) / 2
                        y1 = y_center - (new_height // 2)
                        y2 = y_center + new_height - (new_height // 2)
                    elif current_ratio < target_ratio:
                        # 현재 비율이 목표 비율보다 세로가 더 길다면 가로를 늘려줌
                        new_width = height * target_ratio
                        x_center = (x1 + x2) / 2
                        x1 = x_center - new_width // 2
                        x2 = x_center + new_width - (new_width // 2)
                                                    
                    # 수정된 좌표 정정
                    modified_xyxy = [x1, y1, x2, y2]

                    # 검출된 이미지 저장
                    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")

                    # 해당 프레임을 컬러 이미지 input으로 변환
                    im0 = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

                    # 파일 경로 생성 및 이름 지정
                    file_path = detect_path / f"{timestamp}.jpg"

                    # 디렉토리가 존재하지 않는 경우 생성 후 저장
                    file_path.parent.mkdir(parents=True, exist_ok=True)
                    save_one_box(modified_xyxy, im0, file=file_path, BGR=True)


# ==== 마지막 필터링 ==== #
for filename in os.listdir(detect_path):
    file_path = os.path.join(detect_path, filename)
    img = cv2.imread(file_path)
    h, w = img.shape[:2]

    # 검출 정확도 향상을 위해 h <= w인 이미지 삭제
    if h <= w:
        os.remove(file_path)
    
    # 종횡비 안 맞는 이미지 한 번 더 삭제
    elif int(w/h * 10) / 10 != target_ratio:
        os.remove(file_path)


# ==== 2-stage 모델을 위한 annotation Json 파일 생성 ==== #
annotation_idx = 0
for filename in os.listdir(detect_path):
    id = re.sub(r'\D', '', filename)
    annotation = {
        "image_id": annotation_idx,
        "id": id,
        "file_path": f"{detect_path}/{filename}",
        "sentence": "",
        "onehot": []
        }
    categories.append(id)
    annotations.append(annotation)
    annotation_idx += 1

data = {"categories": categories, "annotations": annotations}

jsonfiledir = f"{detect_path}/annotations.json"
with open(jsonfiledir, "w") as f:
    json.dump(data, f)
print("Save Json file.")