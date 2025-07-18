---
layout: post
title:  "Jekyll과 Github Pages로 포트폴리오 사이트 만들기"
date:   2025-07-18
excerpt: ""
tag:
- Jekyll 
- Github Pages
- Github 
- Portfolio
- Student
- Software Developer
---

{% include toc.html %}

## Background 

아래 개발자 분의 사이트가 깔끔한 것 같아 내 페이지를 만들어보기로 결정하였다. 

[김맥스 블로그](https://maxkim-j.github.io/)

참고한 글의 링크는 다음과 같다. 

[jekyll 공식 블로그](https://jekyllrb-ko.github.io/docs/)

위의 링크를 참고하여 로컬 서버를 띄웠다. 

[경은님 블로그 Git 블로그 만들기 튜토리얼](https://velog.io/@dlruddms5619/Git-Git-%EB%B8%94%EB%A1%9C%EA%B7%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0-1)

경은 개발자님 블로그를 참조하여 전반적인 진행을 하였다. 

## GitHub 블로그 만들기 

1. New Repository 생성 
   - 이름은 username.github.io
   - 해당 레포지토리의 주소를 clone 
   - desktop 폴더에 가서 bash를 실행하여 `git clone remote_repo_url` 입력 
   - clone해서 생긴 폴더로 이동하여 파일 생성 
   - '''cd username.github.io
        echo "Hello World" > index/


