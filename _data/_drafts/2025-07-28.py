'''
가로의 구성 숫자 요소 리스트를 만든다 
세로의 구성 숫자 요소 리스트를 만든다 
두 숫자의 겹치는 숫자를 각각 카운트한다(가로 따로 세로 따로) 
그 둘을 더한다 

영역의 개수에 따라서 이걸 나누는 게 달라져야 하니까 반복문 써야겠네 
case의 개수 ... 에 따라서 리스트를 여러개 만들 수가 있나? 없을 것 같음 
'''
T = int(input())
for test_case in range(1, T + 1):
    case = int(input())
    data = []
    for _ in range(case):
        row = list(map(int, input().split()))
        data.append(row)

    painted = dict()     # key: (x, y), value: 색 갯수 or 횟수
    overlap = set()

    for info in data:
        x1, y1, x2, y2, color = info
        for x in range(x1, x2 + 1):
            for y in range(y1, y2 + 1):
                pos = (x, y)
                if pos in painted:
                    overlap.add(pos)
                else:
                    painted[pos] = color  # 색 저장은 이제 의미 없음

    print(f"#{test_case} {len(overlap)}")

