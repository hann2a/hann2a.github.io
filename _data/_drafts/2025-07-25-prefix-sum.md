---
title: "[파이썬 S/W 문제해결 기본] 1일차 - 구간합"
sidebar: home_sidebar
layout: post
categories: [swea]
updated: 2025-07-25
summary: 
---

### 문제

N개의 정수가 들어있는 배열에서 이웃한 M개의 합을 계산하는 것은 디지털 필터링의 기초연산이다. 

M개의 합이 가장 큰 경우와 가장 작은 경우의 차이를 출력하는 프로그램을 작성하시오. 

다음은 N=5, M=3이고, 5개의 숫자 1 2 3 4 5 가 배열 v에 들어있는 경우이다. 

이웃한 M개의 합이 가장 작은 경우 1 + 2 + 3 = 6

이웃한 M개의 합이 가장 큰 경우 3 + 4 + 5 = 12

답은 12와 6의 차인 6을 출력한다. 

### 생각 과정 

- case에서 두 번째 숫자만 중요함 -> 어떻게 두 번째 숫자만 추출하지? 넘버링? x 리스트 인덱싱 
- data의 인덱스가 case의 두번째 숫자 이하일 때 -> 그 리스트의 인덱스 숫자를 어떻게 강제하지? -> 인덱스 찾는 함수 index()
- 두번째 숫자 이하일 때까지 더하기 ! 아니면? 끝내기 
- 아 sort는 None을 반환해..? -> sorted를 써야함 
```Python
    for number in data_revised_front:
		sum_number_front = [] 
		if data_revised_front.index(number) < case[2]:
			sum_number_front.append(number) # 앞에서부터 더한 거 
            front = sum(sum_number_front)
```
이렇게 어렵게 세지 말고 

```Python
  # 앞에서부터 case[2]개 선택
  sum_number_front = data_revised_front[:case[2]]
  front = sum(sum_number_front)
``` 

이렇게 세기 

와 근데 이렇게도 셀 수 있구나.. ```sum_number_front = data_revised_front[:case[2]]``` 이게 신기함 

근데 틀린 거 였음

- 바보처럼 ,, 변수를 새로 만들어놓고 자꾸 지정을 잘못함 

### 코드 

내 꺼(수정 전)

```Python
T = int(input())

for test_case in range(1, T + 1):
	case = list(map(int, input().split()))
	data = list(map(int, input().split()))
    # 1 2 3 4 5 6 7  8 9 10
    data_revised_front = data.sortedeverse=False)
    data_revised_back = data.sortedeverse=True)
    for number in data_revised_front:
		sum_number_front = [] 
		if data_revised_front.index(number) < case[2]:
			sum_number_front.append(number) # 앞에서부터 더한 거 
            front = sum(sum_number_front)
    for number in data_revised_back:
		sum_number_back = [] 
		if data_revised_back.index(number) < case[2]:
			sum_number_back.append(number) # 뒤에서부터 더한 거 
            back = sum(sum_number_back)
    result = back - front 
    print(result)
```

수정 후 

```Python
T = int(input())
for test_case in range(1, T + 1):
    case = list(map(int, input().split()))
    data = list(map(int, input().split()))
    
    # 정렬된 복사본 생성
    data_revised_front = sorted(data, reverse=False)  # 오름차순
    data_revised_back = sorted(data, reverse=True)    # 내림차순
    
    # 앞에서부터 case[2]개 선택
    sum_number_front = data_revised_front[:case[2]]
    front = sum(sum_number_front)
    
    # 뒤에서부터 case[2]개 선택 (큰 값부터)
    sum_number_back = data_revised_back[:case[2]]
    back = sum(sum_number_back)
    
    result = back - front 
    print(result)
```
마지막 
```Python
T = int(input())
numbering = 0
for test_case in range(1, T + 1):
    case = list(map(int, input().split()))
    N, M = case[0], case[1]  # N: 배열 크기, M: 연속된 개수
    data = list(map(int, input().split()))
    
    # 연속된 M개의 합들을 계산
    sums = []
    for i in range(N - M + 1):  # 가능한 시작 위치들
        current_sum = sum(data[i:i+M])  # i부터 M개의 합
        sums.append(current_sum)
    
    # 최대값과 최소값의 차이
    result = max(sums) - min(sums)
    numbering += 1
    print(f'#{numbering} {result}')
```

### 참고 자료 

[find와 index](https://sxbxn.tistory.com/35)
[sorted](https://dev-records.tistory.com/entry/Python-%EB%A6%AC%EC%8A%A4%ED%8A%B8List-%EC%A0%95%EB%A0%AC%ED%95%98%EA%B8%B0-feat-sort-sorted)

-  기본 알고리즘 패턴들

슬라이딩 윈도우: 연속된 구간 처리

투 포인터: 배열에서 조건 만족하는 구간 찾기

누적합: 구간 합을 빠르게 계산

정렬 활용: 최댓값, 최솟값 관련 문제

### 돌아보기 

- 문제를 잘못 생각함. 정렬해서 더하면 안되는 문제였음. (왜냐면 제공한 그대로 인접한 숫자들을 더하는 거였으니까)

- 앞으로 연속된, 인접한, 구간 등의 단어들을 잘 읽기 

- 앞으로 슬라이싱 사용 arr[k:]

- index() 대신 인덱스 직접 사용 

```Python
# 당신의 방식 (비효율적이지만 로직은 맞음)
for number in data_revised_front:
    if data_revised_front.index(number) < case[2]:  # 매번 index() 호출
        sum_number_front.append(number)

# 더 간단한 방식
sum_number_front = data_revised_front[:case[2]]
```

당신이 원했던 건 아마.. 

```Python
# 방법 1: enumerate 사용
for i, number in enumerate(data_revised_front):
    if i < case[2]:
        sum_number_front.append(number)

# 방법 2: 슬라이싱 (가장 간단)
sum_number_front = data_revised_front[:case[2]]
```