---
title: "Daily Review"
keywords: daily, review, retrospective
sidebar: home_sidebar
permalink: retrospective/daily-review.html
summary: "일일 회고 및 학습 정리"
---

# Daily Review

## 오늘의 학습 내용
- 

## 배운 점
- 

## 어려웠던 점
- 

## 내일 계획
- 

---

### 최근 Daily Review
{% for post in site.categories.daily-review limit:5 %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y-%m-%d" }}
{% endfor %}