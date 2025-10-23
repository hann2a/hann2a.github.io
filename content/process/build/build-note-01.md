---
title: "AI 챌린지 1일차 TIL"
date: 2025-10-23
---

# SSAFY AI 챌린지

## 미션 요약 
이미지와 질문을 함께 보고 정답(ex.파스타 위에 올려진 노란 소스는?)을 맞춰야 함. <br>
모델이 **이미지를 보고 문제를 푸는 AI**를 만드는 게 목표. 

## 데이터 구조
데이터 구조는 다음과 같음 
|파일명|설명|
|---|---|
|train.csv|학습용 데이터 (이미지 경로, 질문, 보기, 정답 포함)|
|test.csv|평가용 데이터 (정답 없음)|
|sample_submission.csv|제출 형식 예시|
|train/|학습용 이미지 폴더|
|test/|평가용 이미지 폴더|

test.csv에 대해 모델이 예측한 정답을 `submission.csv 형식으로 제출`
```python
# 구글드라이브 마운트
from google.colab import drive
drive.mount('/content/drive')
```