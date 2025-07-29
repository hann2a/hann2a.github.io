---
title: "Python Data Structure-2"
sidebar: home_sidebar
layout: post
categories: [daily-review]
updated: 2025-07-29
summary: 
---

[라이브 링크](https://www.youtube.com/watch?v=VxGJxG_gV4c)

### 딕셔너리 

- 키와 값을 짝지어 저장하는 자료구조 

- 딕셔너리는 내부적으로 해시테이블을 사용하여 키-값 쌍을 관리

- 키를 통한 값의 삽입, 삭제, 검색의 데이터의 크기와 관계없이 **매우 빠름**

- 키는 hashable한 고유 값이어야 하지만, 값은 중복이 가능하고 어떤 자료형도 저장할 수 있음

## 딕셔너리 메서드 

### `.get(key[, default])`

- 키 연결된 값을 반환하거나 키가 없으면 None 혹은 기본 값을 반환

- get으로 불러오면 오류 안나는데 인덱싱으로 부르면 오류남

```python 
person = {'name': 'Alice', 'age':25}
print(person.get('name')) # Alice
print(person.get('country')) # None
print(person.get('country', 'Unknown')) # Unknown 
print(person['country']) #KeyError: 'country'
```

### `dict_keys(['name', 'age'])`

- 실시간으로 동기화되는 확인 창(view)

### `.keys()`

- 딕셔너리 키를 모은 객체를 반환

```python
person = {'name': 'Alice', 'age': 25}
print(person.keys()) # dict_keys(['name', 'age'])
for item in person.keys():
  print(item)
"""
name
age
"""
```
### `.values()`

- 딕셔너리 값을 모은 객체를 반환 

```python
person = {'name': 'Alice', 'age': 25}
print(person.keys()) # dict_keys(['name', 'age'])
for item in person.values():
  print(item)
"""
Alice
25
"""
```

### `.items()`

- 딕셔너리 키/값 쌍을 모은 객체를 반환 

```python
person = {'name': 'Alice', 'age': 25}
print(person.keys()) # dict_keys(['name', 'age'])
for item in person.values():
  print(item)
"""
Alice
25
"""
```