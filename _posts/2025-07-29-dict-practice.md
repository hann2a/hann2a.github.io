---
title: "99-dict-practice-01"
sidebar: home_sidebar
layout: post
categories: [daily-review]
updated: 2025-07-29
summary: 월말평가를 위한 딕셔너리 연습 
---

```python
# 각 혈액형의 인원수를 계산하는 딕셔너리를 생성하기.
blood_types = ['A', 'B', 'O', 'AB', 'A', 'O', 'B', 'A', 'AB', 'O', 'A', 'B']
```
<br>

```python
# 1. [] 표기법을 사용한 방법
def count_blood_types(blood_types):
    count_blood = {}
    for blood in blood_types:
        if blood not in count_blood:
            count_blood[blood] = 1
        else: 
            count_blood[blood] += 1
    return count_blood 

print(count_blood_types(blood_types))  # {'A': 4, 'B': 3, 'O': 3, 'AB': 2}
```
<br>

몰랐던 점 

- key가 dictionary에 있는지 확인할 때에는 '있는지'를 확인하면 오류가 나서 코드가 진행이 안되므로 '없는지'를 확인해야 한다. 

<br>

```python
for blood in blood_types:
  if blood not in count_blood:
```
<br>

```python
# 2. get() 메서드를 사용한 방법
def count_blood_types(blood_types):
    blood_count = {}

    for blood in blood_types:
        blood_count[blood] = blood_count.get(blood, 0) + 1

    return blood_count

print(count_blood_types(blood_types))  # {'A': 4, 'B': 3, 'O': 3, 'AB': 2}
```
<br>

 몰랐던 점 

 - get은 결국 []와 똑같이 어떤 값을 끌어오는 것이고, 없을 때 디폴트를 설정할 수 있으므로 똑같이 더하는 로직을 구현하면 된다. 

<br>

```python
# 딕셔너리를 입력받아 value와 key를 뒤집은 결과를 반환하는 함수 `dict_invert()`를 작성하기
```
<br>

```python
# 1. [] 표기법을 사용한 방법
def dict_invert(input_dict):
    output_dict = {}
    for input in input_dict:
        if input_dict[input] not in output_dict:
            output_dict[input_dict[input]] = [input]
        else: 
            output_dict[input_dict[input]].append(input)
    return output_dict
```
<br>

```python
# 2. get 메서드를 사용한 방법
def dict_invert(input_dict):
    output_dict = {}
    for key, value in input_dict.items():
        output_dict[value] = output_dict.get(value, []) + [key]
    return output_dict
```

<br>

몰랐던 점 

```python
for key, value in input_dict.items():
```
<br>
- 이 문법을 쓰면 key와 value를 자유롭게 쓸 수 있다. 
<br>

```python
def dict_invert(input_dict):
    new_dict = {}
    # 거꾸로 된 value 값에 (기존의 key값) 리스트를 생성하고, 그 리스트에 k를 집어넣는다.
    for k, v in input_dict.items():
        new_dict.setdefault(v, []).append(k)
    return new_dict
```
<br>

몰랐던 점 

- `setdefault`를 처음 써봐서 어색했다. 어쨌든 `new_dict.setdefault(sth, []).append(sbd)`이 많이 쓰인다고 하니 알아두자. 
