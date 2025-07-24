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
- 오늘 학습한 개념 
- 왜 내가 이걸 작성하는지 쓰기 