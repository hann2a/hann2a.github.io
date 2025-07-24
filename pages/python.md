---
title: "Python"
permalink: python.html
sidebar: home_sidebar
layout: page
---

# Python-study

파이썬 개념 및 코드 학습 페이지 입니다. 

## 최근 Python-study 포스트
{% for post in site.categories.python %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y-%m-%d" }}
{% endfor %}

---

## Python-study 작성 가이드
- 각 개념은 구분된 글로 
- 같은 개념은 ver2. 이런 식으로 새 글 작성 