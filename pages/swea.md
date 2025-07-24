---
title: "SWEA"
permalink: swea.html
sidebar: home_sidebar
layout: page
---

# SWEA solved 

학습한 SWEA 문제들을 기록하는 페이지 입니다. 

## 최근 SWEA solved 포스트
{% for post in site.categories.swea %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y-%m-%d" }}
{% endfor %}

---

## SWEA solved  작성 가이드
- 해결 후 3일 이내 작성 
- 새롭게 배운 개념 명시 
- 고쳐야할 생각 명시 
- 생각의 흐름 정리 
- 추가 학습 제안 