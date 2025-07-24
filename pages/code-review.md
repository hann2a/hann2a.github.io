---
title: "code-review"
permalink: code-review.html
sidebar: home_sidebar
layout: page
---

# Code solved 

학습한 온라인 실습실 문제들을 기록하는 페이지 입니다. 

## 최근 온라인 실습실 포스트
{% for post in site.categories.swea %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y-%m-%d" }}
{% endfor %}

---

## 온라인 실습실 작성 가이드
- 당일 작성 
- 난이도, 막힌 부분, 푼 시간, 문제, 코드, 추가학습 내용 기재 