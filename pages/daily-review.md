---
title: "Daily Review"
permalink: daily-review.html
sidebar: home_sidebar
layout: page
---

# Daily Review

일일 회고 및 학습 정리 모음입니다.

## 최근 Daily Review 포스트
{% for post in site.categories.daily-review %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y-%m-%d" }}
{% endfor %}

---

## Daily Review 작성 가이드
- 오늘 학습한 내용
- 배운 점과 어려웠던 점  
- 내일 계획
- 추가 학습이 필요한 부분