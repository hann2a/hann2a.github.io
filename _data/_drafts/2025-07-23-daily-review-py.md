---
title: "파이썬 복습 3일차"
sidebar: home_sidebar
layout: post
categories: [daily-review]
updated: 2025-07-23
summary: 
---

**파이썬 도큐먼트 볼 것** 

- **자습서**
- **라이브러리 레퍼런스**
- **언어 레퍼런스**
1. 부분 보기 파이썬 코드 

참고 부분 보기 

- 함수
    
    특정 작업을 수행하기 위한 재사용 가능한 코드 묶음 
    
    내부 코드는 숨겨져 있고, 우리는 그저 함수 이름을 불러 특정 기능을 사용한다. 
    
- 함수를 사용하는 이유
    - 두 수의 합을 구하는 함수를 정의하고 사용함으로써 코드의 중복을 방지
    - 재사용성이 높아지고, 코드의 가독성과 유지보수성 향상
    
    ```python
    #두 수의 합을 구하는 코드 
    num = 5
    num = 3
    sum_result = num1 + num2 
    
    print(sum_result)
    
    #두 수의 합을 구하는 함수 
    def get_sum(num1, num2):
    	return num1 + num2
    ```
    
- 함수 호출 fucntion call
    
    함수를 실행하기 위해 **함수의 이름을 사용**하여 **해당 함수의 코드 블록을 실행**하는 것 
    
    ```python
    #함수를 호출하여 결과 출력
    num1 = 5
    num2 = 3
    sum_result = get_sum(num1, num2)
    print(sum_result)
    ```
    
- 함수 구조
    
    ![image.png](attachment:eb7bc0b6-6d1a-4f7b-bec5-6901404736ad:image.png)
    
    ```python
    def make_sum(pram1, pram2): # Input x
    """이것은 두 수를 받아
    두 수의 합을 반환하는 함수입니다.
    >>> make_sum(1, 2)
    3
    """  #Docstring 설명서(선택)
    		 #Function Body 
    returm pram1 + pram2 # Output f(x) - return value 
    ```
    
- 함수 정의와 호출
    - 정의
        
        ```python
        def make_sum(pram1, pram2): # Input x
        """이것은 두 수를 받아
        두 수의 합을 반환하는 함수입니다.
        >>> make_sum(1, 2)
        3
        """  #Docstring 설명서(선택)
        		 #Function Body 
        returm pram1 + pram2 # Output f(x) - return value 
        ```
        
        함수 정의는 def 키워드로  시작 
        
        괄호 안에 매개변수를 정의할 수 있음 
        
        매개변수는 **함수에 전달되는 값** 
        
    - 함수 body
        
        콜론 다음에 **들여쓰기 된 코드 블록** 
        
        함수가 실행될 때 수행되는 코드를 정의 
        
    - Docstring
        - body의 상단 부분에 작성하는 설명서
    - 함수 반환 값
        
        **‘필요한 경우’** return으로 **결과를 반환할 수 있음** 
        
        return 키워드 이후에 반환할 값을 명시 
        
        return문은 함수의 실행을 종료하고, **결과를 호출 부분으로 반환** 
        
        - return 만나면 종료되기 때문에  return 뒤에는 뭐 쓰면 안됨
        
        함수 내에서 return 문이 없다면 None이 반환 됨 
        
    - 함수 호출
        - **이름과 소괄호**를 이용해 호출
        - 필요한 경우 **인자argument를 전달**
        - 호출 부분에서 전달된 인자는 함수 정의 시 작성한 매개변수에 대입 됨
        
        ```python
        def make_sum(pram1, pram2): 
        """이것은 두 수를 받아
        두 수의 합을 반환하는 함수입니다.
        >>> make_sum(1, 2)
        3
        """
        returm pram1 + pram2 
        
        result = make_sum(100, 30)
        print(result) #130 
        ```
        
- print() 함수는 반환 값이 없음
    
    출력은 화면에 보여주는 것 
    
    print()는 **None을 줌** 
    
    → 내부적으로 아무 값도 반환하지 않는 함수와 마찬가지 
    
    ```python
    return_value = print(1)
    print(return_value) #None
    
    def my_func():
    	print('hello')
    
    result= my_func()
    print(result) # None 
    ```
    
- 평가에 대한 추가 이해
    
    ```python
    return_value = print(1)
    print(return_value) #None
    ```
    
    - 평가  evaluation: 표현식을 실행해서 그 결과값을 얻는 과정
    - `print(1)` 실행 → 화면에 1 출력
    - `print(1)`의 결과값: 반환값은 `None`
    - 그 `None`이 `return_value`에 할당
    - `return_value`에 들어 있는 값 `None`을 출력
    
    **오른쪽 함수가 먼저 실행되고, 그 함수의 반환값이 변수에 할당된다**
    
- 매개변수 / 인수
    
    함수를 정의할 때, 함수가 받을 값을 나타내는 변수 
    
    함수를 호출할 때, 실제로 전달되는 값 
    
    ```python
    def add_numbers(x, y): # x와 y는 매개변수(parameter)
    	result = x + y
    	return result 
    	
    a = 2
    b = 3
    
    sum_result = add_numbers(a, b)
    print(sum_result)
    ```
    
- 다양한 인자 종류
    - 위치인자/키워드인자 = **호출 방식**의 차이
    - 필수/선택적 매개변수 = **정의할 때** 기본값 유무의 차이
    - Positional Arguments(위치 인자)
        
        **인자의 위치에 따라 전달되는 인자**
        
        위치 인자는 함수 호출 시 **반드시 값을 전달해야 함** 
        
        ```python
        def greet(name, age):
        	print(f'안녕하세요, {name}님! {age}살이시군요.')
        	
        greet('Alice', 25) # 안녕하세요, Alice님! 25살이시군요. 
        greet(25, 'Alice') # 안녕하세요, 25님! Alice살이시군요. 
        greet('Alice') # TypeError: greet() missing 1 required positional arguemt: 'age'
        ```
        
    - Default Argument Values(기본 인자 값)
        - 함수 정의에서 매개변수에 기본 값을 할당하는 것
        - 함수 호출 시 인자를 전달하지 않으면, 기본값이 매개변수에 할당됨
        
        ```python
        def gret(name, age=30):
        	print(f'안녕하세요, {name}님! {age}살이시군요.')
        
        greet('Bob') # 안녕하세요, Bob님! 30살이시군요. 
        greet('Charlie', 40) # 안녕하세요, Charlie님! 40살이시군요. 
        ```
        
    - Keyword Arguments(키워드 인자)
        - 함수 호출 시 인자의 이름과 함께 값을 전달하는 인자
        - 매개변수와 인자를 일치 시키지 않고, 특정 매개변수에 값을 할당할 수 있음
        - 인자의 순서는 중요하지 않으며, 인자의 이름을 명시하며 전달
        
        ```python
        def greet(name, age):
        print(f'안녕하세요, {name}님! {age}살이시군요.')
        
        greet(name='Dave', age=35) #안녕하세요, Dave님! 35살이시군요.
        greet(age=35, name='Dave') #안녕하세요, Dave님! 35살이시군요.
        
        greet(age=35, 'Dave') # positional argument follows keyword argument
        ```
        
    - Arbitrary Argument Lists(임의의 인자 목록)
        
        정해지지 않은 개수의 인자를 처리하는 인자 
        
        함수 정의 시 매개변수 앞에 ‘*’를 붙여 사용 
        
        **여러 개의 인자를 tuple로 처리** 
        
        ```python
        def calculate_sum(*args):
        	print(args) # (1, 100, 5000, 30)
        	print(type(args)) # <class 'tuple'>
        	
        	calculate_sum(1, 100, 5000, 30)
        ```
        
    - Arbitrary Keyword Argument Lists(임의의 키워드 인자 목록)
        
        정해지지 않은 개수의 키워드 인자를 처리하는 인자
        
        함수 정의 시 매개변수 앞에 ‘**’를 붙여 사용 
        
        여러 개의 인자를 dict로 묶어 처리 
        
        ```python
        def print_info(**kwargs):
        	print(kwargs)
        	
        print_info(name='Eve', age=30) # {'name': 'Eve', 'age':30}
        ```
        
    - 함수 인자 권장 작성 순서
        
        위치 → 기본 → 가변 → 가변 키워드 
        
        호출 시 인자를 전달하는 과정에서 혼란을 줄일 수 있도록 함
        
        단, 모든 상황에 적용되는 절대적인 규칙은 아니며, 상황에 따라 유연하게 조정될 수 있음 
        
        ```python
        def func(pos1, pos2, default_arg='default', *args, **kwargs):
        ...
        ```
        
    - 인자의 모든 종류를 적용한 예시
        
        ```python
        def func(pos1, pos2, default_arg='default', *args, **kwargs):
        	print('pos1:', pos1)
        	print('pos2:', pos2)
        	print('default_arg:', default_arg)
        	print('args:', args)
        	print('kwargs:', kwargs)
        	
        	func(1, 2, 3, 4, 5, 6, key1='value1', key2='value2')
        	
        	"""
        	pos1: 1
        	pos2: 2
        	defualt_arg:3
        	args: (4, 5, 6)
        	kwargs: {'key1': 'value1', 'key2': 'value2'}
        	"""
        ```
        
        default_arg =’default’
        
        → 값이 없으면 ‘default’을 할당한다는 뜻이지 **문자열만 온다는 게 아님** 
        
        파이썬에서 인자에 어떤 자료의 타입을 강제할 수 있는지 찾아보기? 
        
        - 강제할 수는 없고 가이드는 할 수 있음
        - 파이썬이 좀 높은 자유도인 편
        
- 재귀 함수
    
    함수 내부에서 자기 자신을 호출하는 함수 
    
    - 팩토리얼
        
        $$
        n!
        
        $$
        
        $$
        n * (n-1)!
        $$
        
        $$
        n * (n-1) * (n-2)!
        $$
        
        - factorial 함수는 자기 자신을 재귀적으로 호출하여 입력된 숫자 n의 팩토리얼을 계산
        - 재귀 호출은 n이 0이 될 때까지 반복되며, 종료 조건을 설정하여 재귀 호출이 멈추도록 함
        - 재귀 호출의 결과를 이용하여 문제를 작은 단위의 문제로 분할하고, 분할된 문제들의 결과를 조합하여 최종 결과를 도출
        - n! = n *(n-1)*(n-2)* … *1
        - 5! = 5 * 4 * 3 * 2* 1 = 120
        
        ![image.png](attachment:e4a7aeb6-77a8-4e1f-bc58-7cad47aa195b:image.png)
        
        ```python
        def factorial(n):
        	# 종료 조건: n이 0이면 1을 반환 
        	if n ==0: 
        		return 1
        	else:
        		#재귀 호출: n과 n-1의 팩토리얼을 곱한 결과를 반환
        		return n * factorial(n-1)
        		
        # 팩토리얼 계산 예시
        print(factorial(5)) # 120
        ```
        
        같은 문제를 다른 input을 통해서 해결 
        
        → base case 수렴 
        
        ![image.png](attachment:d8c933b2-1545-4e89-8926-906cd259a970:image.png)
        
    - 재귀 함수 특징
        - 특정 알고리즘 식을 표현할 때, 변수의 사용이 줄어들며, 코드의 가독성이 높아짐
        - 1개 이상의 base case(종료되는 상황)가 존재하고, 수렴하도록 작성
        - 스택 오버플로우: 작업 공간에 일이 너무 많이 쌓여 프로그램이 멈추는 오류
    - 재귀 함수 활용 시 기억해야 할 것
        - 종료 조건을 명확히 할 것
        - 반복되는 호출이 종료 조건을 향하도록 할 것
        
        <aside>
        💡
        
        - 재귀 함수는 메모리 사용량이 많고 느릴 수 있습니다.
        - 종료 조건이 잘못되면 스택 오버플로우 에러가 발생할 수 있으니 주의해야 합니다.
        - 복잡한 재귀 함수는 오히려 코드의 가독성을 저하시킬 수 있습니다.
        </aside>
        
    - 재귀 함수를 사용하는 이유
        - 문제의 자연스러운 표현
            - 복잡한 문제를 간결하고 직관적으로 표현 가능
        - 코드 간결성
            - 상황에 따라  반복문보다 알고리즘 코드가 더 간결하고 명확해질 수 있음
        - 수학적 문제 해결
            - 수학적 정의가 재귀적으로 표현되는 경우, 직접적인 구현 가능
    
- 내장 함수
    - 파이썬이 기본적으로 제공하는 함수
    - 별도의 import 없이 바로 사용 가능
    - 내장 함수는 편리하지만, 이름이 같아도 다른 언어에서는 다르게 동작할 수 있기에 주의해야 합니다.
    - 단순히 함수를 사용하는 것에 그치지 않고, 내부 동작 원리를 이해하면 문제 해결에 더 효과적으로 활용하고 성능 저하 같은 잠재적 문제를 피할 수 있습니다.
    - 자주 사용되는 내장 함수 예시
        
        ```python
        numbers = [1, 2, 3, 4, 5]
        
        print(numbers) #[1, 2, 3, 4, 5]
        print(len(numbers)) # 5
        print(max(numbers)) #  5
        print(min(numbers)) # 1
        print(sum(numbers)) # 15
        print(sorted(numbers, reverse=True)) # [5, 4, 3, 2, 1]
        ```
        
- 함수와 Scope
    
    함수는 코드 내부에 `local space`를 생성하며, 그 외의 공간은 `global scope`로 구분
    
    - 범위와 변수 관계
        
        scope
        
        - global scope: **코드 어디에서든** 참조할 수 있는 공간
        - local scope: 함수가 만든 scope (함수 내부에서만 참조 가능)
        
        variable
        
        - global variable: global scope에 정의된 변수
        - local variable: local scope에 정의된 변수
    - Scope 예시
        - num은 `local scope`에 존재하기 때문에 `global scope`에서 사용할 수 없음
        
        ```python
        def func():
        	num = 20
        	print('local', num) # local 20
        	
        func()
        print('global', num) #NameError: name 'num' is not defined 
        ```
        
    - 변수 수명 주기
        
        변수의 수명 주기는 변수가 선언되는 위치와 scope에 따라 결정됨 
        
        - `built-in scope` 파이썬이 실행된 이후부터 영원히 유지
        - `global scope` 모듈이 호출된 시점 이후 혹은 인터프리터가 끝날 때까지 유지
            - 모듈 = 파이썬 파일(.py)
            - 인터프리터 = 파이썬을 실행하는 프로그램
                
                ```python
                # 처음에는 math_utils 모듈이 메모리에 없음
                import math_utils  # ← 이 순간 모듈이 "호출"됨
                # 이제부터 math_utils의 변수들이 global scope에 존재
                print(math_utils.PI)  # 접근 가능
                ```
                
            - global scope = 프로그램이 실행되는 동안 계속 살아있는 영역
        - `local scope` 함수가 호출될 때 생성되고, 함수가 종료될 때까지 유지
    - 이름 검색 규칙 (Name Resolution)
        - 파이썬에서 사용되는 이름(식별자)들은 특정한 이름공간(namespace)에 저장되어 있음
        - 아래와 같은 순서로 이름을 찾아 나가며, LEGB Rule이라고 부름
            
            ![image.png](attachment:aa96a801-3dff-4d53-a6cc-f579690210ad:image.png)
            
            - local scope
                - 지역 범위(현재 작업 중인 범위)
            - Enclosed scope
                - 지역 범위 한 단계 위 범위
            - global scope
                - 최상단에 위치한 범위
            - built-in scope
                - 모든 것을 담고 있는 범위(정의하지 않고 사용할 수 있는 모든 것)
            - 함수 내에서는 바깥 scope의 변수에 접근 가능하나 수정은 할 수 없음
                - 즉, 안에서 바깥 거 접근만 가능
    - LEGB Rule 예시
        - sum이라는 이름을 global scope에서 사용함으로써, 기존 built-in scope에 있던 내장함수 sum을 사용하지 못하게됨
            - 즉, 안쪽에서 출발하므로 안쪽이 더 강력한 영향력
            - sum을 참조시 LEGB Rule에 따라 global에서 먼저 찾기 때문
        
        ```python
        print(sum) # <built-in function sum>
        print(sum(range(3))) # 3
        
        sum = 5
        
        print(sum) # 5
        print(sum(range(3))) # TypeError: 'int' object is not callable 
        ```
        
    - `del`은 "참조"를 삭제하는 것\
        
        ```python
        a = [1, 2, 3]
        b = a  # 같은 리스트를 참조
        del a  # a 변수만 삭제, 리스트 자체는 남아있음
        print(b)  # [1, 2, 3] - 여전히 접근 가능
        ```
        
        ![image.png](attachment:412552a9-b56a-48e2-8990-a59681813814:image.png)
        
        ![image.png](attachment:adfe4bab-cd71-4451-9536-16e4e9e8976b:image.png)
        
    - LEGB Rule 퀴즈
        - Enclosing = "나를 감싸고 있는 함수의 지역 영역”
        
        ```python
        x = 'G'
        y = 'G'
        
        def outer_func():
        	x = 'E'
        	y - 'E'
        	
        	def inner_func(y):
        		z = 'L'
        		print(x, y, z) #EPL
        	
        	inner_func('P')
        	print(x, y) # EE 
        	
        outer_func()
        print(x, y) # GG
        ```
        
    - ‘global’ 키워드
        - 변수의 스코프를 전역 범위로 지정하기 위해 사용
        - 일반적으로 함수 내에서 **전역 변수를 수정하려는 경우**에 사용
        
        ```python
        num = 0 # 전역 변수 
        def increment():
        	global num #num을 전역변수로 선언 / 나 num 수정할거야. 
        	num += 1
        	
        print(num) #0
        increment()
        print(num) #1
        ```
        
    - ‘global’ 키워드 주의사항
        - global 키워드 선언 전에 참조 불가
        
        ```python
        num = 0
        def increment():
        	# SynaxError: nam 'num' is used
        	# prior to global declaration
        	print(num)
        	global num
        	num +=1
        ```
        
        - 매개변수에는 global 키워드 사용 불가
        
        ```python
        num = 0 
        def increment(num):  # 이 순간 num은 "지역 변수"로 확정
        	#"num" is assigned before global 
        	#declaration
        	global num # 모순! 이미 지역 변수인데 전역으로?
        	num += 1 
        ```
        
- 함수 스타일 가이드
    - 함수 이름 작성 규칙
        
        **기본 규칙** 
        
        - 소문자와 언더스코어 사용
        - 동사로 시작하여 함수의 동작 설명
        - 약어 사용 지양
        
        ```python
        # Good
        def calculate_total_price(price, tax):
        	return price + (price * tax)
        	
        # Bad
        def calc_price(p, t):
        	return p + ( p * t)
        ```
        
        **함수 이름 구성 요소** 
        
        - 동사 + 명사 `save_user()`
        - 동사 + 형용사 + 명사 `calculate_total_price()`
        - get/set 접두사 `get_username()`, `set_username()`
        - 이름만으로 ‘무엇을 하는지’ 명확하게 표현하세요
        - T/F를 반환한다면 is OR has로 시작
        - 프로젝트 전체에서 일관성을 지키는 것이 가독성에 도움을 줌
    - 단일 책임 원칙
        - 모든 객체는 하나의 명확한 목적과 책임만을 가져야 함
    - 함수 설계 원칙
        
        1) 명확한 목적
        
        - 한 가지 작업만 수행
        - 함수 이름으로 목적을 명확히 표현
        
        2) 책임 분리 
        
        - 데이터 검증, 처리, 저장 등을 별도 함수로 분리
        - 각 함수는 **독립적으로** 동작 가능하도록 설계
        
        3) 유지보수성
        
        - 작은 단위의 함수로 나누어 관리
        - 코드 수정 시 영향 범위를 최소화
    - 잘못된 설계 예시
        
        ```python
        def process_user_data(user_data):
        	# 책임 1: 데이터 유효성 검사
        	if len(user_data['password'] < 8:
        		raise ValueError('비밀번호는 8자 이상이어야 합니다')
        	# 책임 2: 비밀번호 암호화 및 저장 
        	user_data['password'] = hash_password(user_data['password']
        	db.user.insert(user_data)
        	
        	# 책임 3: 이메일 발송
        	send_email(user_data['email'], '가입을 환영합니다!')
        ```
        
    - 올바른 설계 예시(책임 분리)
        
        ```python
        def validate_password(password):
        	"""비밀번호 유효성 검사"""
        	if len(password) < 8:
        		raise ValueError('비밀번호는 8자 이상이어야 합니다')
        		
        def save_user(user_data):
        	"""비밀번호 암호화 및 저장"""
        	user_data['password'] = hash_password(user_data['password']_
        	db.users.insert(user_data)
        	
        def send_welcome_email(email):
        	"""환영 이메일 발송"""
        	send_email(email, '가입을 환영합니다!')
        	
        # 메인 함수에서 순차적으로 실행 
        def process_user_data(user_data):
        	validate_password(user_data['password'])
        	save_user(user_data)
        	send_welcome_email(user_data['email'])
        ```
        
- Packing & Unpacking
    - 패킹
        
        여러 개의 데이터를 하나의 컬렉션으로 **모아 담는 과정** 
        
        **기본 원리** 
        
        - 여러 개의 값을 하나의 **튜플로** 묶는 파이썬의 기본 동작
        - 한 변수에 콤마(,)로 구분된 값을 넣으면 자동으로 튜플로 처리
        
        ```python
        packed_values = 1, 2, 3, 4, 5
        print(packed_values) # (1, 2, 3, 4, 5)
        ```
        
        **‘*’을 활용한 패킹(함수 매개변수 작성 시)**
        
        - 남는 위치 인자들을 튜플로 묶기
        - *를 붙인 매개변수가 남는 위치 인자들을 모두 모아 하나의 튜플로 만듦
        
        ```python
        def my_func(*args):
        	print(args) # (1, 2, 3, 4, 5)
        	print(type(args)) # <class 'tuple'>
        	
        my_func(1, 2, 3, 4, 5)
        ```
        
        **‘**’을 활용한 패킹 (함수 매개변수 작성 시)**
        
        - 남는 위치 인자들을 딕셔너리로 묶기
        - **를 붙인 매개변수가 남는 키워드 인자들을 모두 모아 하나의 딕셔너리로 만듦
        
        ```python
        def my_func2(**kwargs):
        	print(kwargs) # {'a': 1, 'b':2, 'c': 3}
        	print(type(kwargs)) # <class 'dict'>
        
        my_func2(a=1, b=2, c=3)
        ```
        
        print 함수의 패킹 예시
        
        - print 함수에서 임의의 가변 인자를 가변 인자를 작성할 수 있었던 이유
        - 인자 개수에 상관없이 튜플 하나로 패킹되어서 내부에서 처리
            
            ```python
            def my_func(*objects):
            	print(objects) # (1, 2, 3, 4, 5)
            	print(type(objects)) # <class 'tuple'>
            	
            my_func(1, 2, 3, 4, 5)
            # (1, 2, 3, 4, 5)
            # <class 'tuple'> 
            ```
            
            ![image.png](attachment:de9dd90b-bfae-4cd0-af17-d180db72df19:image.png)
            
    - 언패킹 ‘
        
        컬렉션에 담겨있는 데이터들을 개별 요소로 펼쳐 놓는 과정
        
        **기본 원리** 
        
        - 튜플이나 리스트 등의 객체의 요소들을 개별 변수에 할당
        - 시퀀스 언패킹 또는 다중 할당 이라고 부름
        
        ```python
        packed_values = 1, 2, 3, 4, 5
        # (1, 2, 3, 4, 5) 튜플의 각 요소들이 
        # a, b, c, d, e 변수에 순서대로 '언패킹' 되어 할당됨 
        a, b, c, d, e = packed_values
        print(a, b, c, d, e) # 1 2 3 4 5
        ```
        
        ![image.png](attachment:fce3f0d1-1c2a-4832-b3d2-1f47e3c1f912:image.png)
        
        **‘*’을 활용한 언패킹** 
        
        리스트나 튜플 앞에 *을 붙여 각 요소를 함수의 개별 위치 인자로 전달 
        
        ```python
         def my_function(x, y, z):
        	 print(x, y, z)
        
        names = ['alice', 'jane', 'peter']
        my_function(*names) # alice jane peter 
        ```
        
        ![image.png](attachment:3cacc6c6-baa4-4209-9a91-d173cc9725f8:image.png)
        
        **‘**’을 활용한 언패킹 (딕셔너리 → 함수 키워드 인자)**
        
        딕셔너리 앞에 **을 붙여 {키: 값} 쌍을 키=값 형태의 키워드 인자로 전달 
        
        ```python
         def my_function(x, y, z):
        	 print(x, y, z)
        
        my_dict = {'x': 1, 'y': 2, 'z': 3}
        my_function(**my_dict) # 1 2 3
        ```
        
        ![image.png](attachment:eedaf60b-b223-4dfb-96ed-a76722095f88:image.png)
        
    
    ![image.png](attachment:c63b5055-8510-410b-b350-1787a8b0e8da:image.png)