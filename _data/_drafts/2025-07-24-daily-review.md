zip map while sorted 알고리즘 





1.    도서관 사용자 관리 서비스 - 데이터 수집
2.    
53분부터 
문자열이랑 int를 비교하려고함 ,.
소수점은 float인거 기억하기...ㅠ 
lat랑 lng랑 통일안시킴 미친거아니야 
import requests
from pprint import pprint as print



# 무작위 유저 정보 요청 경로
API_URL = 'https://jsonplaceholder.typicode.com/users/'


dummy_data = []
for numbering in range(1, 11):
    url = 'https://jsonplaceholder.typicode.com/users/' + str(numbering)
    response = requests.get(url)
    parsed_data = response.json()
    name = {}
    name['company'] = parsed_data['company']['name']
    if float(parsed_data['address']['geo']['lat']) >= 80 or float(parsed_data['address']['geo']['lat']) <= -80:
        pass
    else: 
        name['lat'] = parsed_data['address']['geo']['lat']
    if float(parsed_data['address']['geo']['lng']) >= 80 or float(parsed_data['address']['geo']['lng']) <= -80:
        pass
    else: 
        name['lng'] = parsed_data['address']['geo']['lng']
    name['name'] = parsed_data['name']
    print(name)

    내가 쓴 코드 

    import requests
from pprint import pprint as print

# 무작위 유저 정보 요청 경로
API_URL = 'https://jsonplaceholder.typicode.com/users/'

dummy_data = []
for numbering in range(1, 11):
    url = 'https://jsonplaceholder.typicode.com/users/' + str(numbering)
    response = requests.get(url)
    parsed_data = response.json()
    
    lat = float(parsed_data['address']['geo']['lat'])
    lng = float(parsed_data['address']['geo']['lng'])
    
    # lat과 lng가 모두 -80 초과 80 미만인 경우만 추가
    if (-80 < lat < 80) and (-80 < lng < 80):
        name = {}
        name['company'] = parsed_data['company']['name']
        name['lat'] = parsed_data['address']['geo']['lat']  # lat 값 할당
        name['lng'] = parsed_data['address']['geo']['lng']  # lng 값 할당
        name['name'] = parsed_data['name']
        dummy_data.append(name)
        print(name)

    클로드 코드 

3.    도서관 사용자 관리 서비스 - 블랙 리스트 관리 

4.    도서관 사용자 관리 서비스 - 데이터 유효성 검사 


2998. 대여 불가 도서 관리하기 
난이도: 2점 
막힌 부분:
- 리스트 컴프리헨션 기억 안나 
- 리스트 컴프리헨션에서 if문을 변수 없이 작성 
- 보충이랑 모든 도서 대여 이거 위치를 잘 모르겠음 ... for else 아닌듯 
  - 그냥 분리해서 missing_book any()를 씀 any()는 비어있으면 false를 반환함 
푼 시간: 11시 48분 ~ 12시 2분(14분)
문제: 자동화 시스템 개선
대여 예정 도서 목록 중, 현재 보유하고 있지 않은 도서가 있다면 해당 문서들만 새로운 리스트에 모아서 출력하시오 
보유 하고 있지 않은 도서는 missing_book에 담는다 (리스트 컴프리헨션 사용)
모든 도서를 보유하고 있다면 모든 도서가 대여 가능한 상태입니다 출력 
보유하고 있지 않은 도서 목록이 있다면 각각 {도서명}을 보충하여야 합니다 출력 
코드: 

```Python
list_of_book = [
    '장화홍련전',
    '가락국 신화',
    '온달 설화',
    '금오신화',
    '이생규장전',
    '만복자서포기',
    '수성지',
    '백호집',
    '원생몽유록',
    '홍길동전',
    '장생전',
    '도문대작',
    '옥루몽',
    '옥련몽',
]

rental_book = [
    '장생전',
    '위대한 개츠비',
    '원생몽유록',
    '이생규장전',
    '데미안',
    '장화홍련전',
    '수성지',
    '백호집',
    '난중일기',
    '홍길동전',
    '만복자서포기',
]

missing_book = [book for book in rental_book if book not in list_of_book]

for book in missing_book:
    print(f'{book} 을/를 보충하여야 합니다.')

if any(missing_book) == False:
    print('모든 도서가 대여 가능한 상태입니다.')
```
컴프리헨션이 허용하는 문법 
https://wikidocs.net/22805












----

jekyll blog 보안에 관해 

가장 쉬운 무료 방법

Netlify에 Jekyll 블로그 배포 (무료)
Netlify Identity 활성화 (무료)
간단한 JavaScript로 인증 체크 (무료)