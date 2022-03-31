# Momentum App

## 프로젝트 소개

JavaScript를 이용하여 Chrome의 모멘텀 앱을 클론한 앱입니다.
기본적인 Todo-List에 날씨 API와 사용자를 추가했습니다.

## 기능

![momen1](https://user-images.githubusercontent.com/89452058/160976437-8f9ea351-6d76-4ffe-b7a9-5e2c1d73a8a6.png)

간단한 사용자 이름 입력으로 수행하는 로그인 기능과 todo-list, 날씨 및 위치가 나타나는 앱입니다.
사용자 이름과 todo-list는 로컬스토리지에 저장하여 사용자가 웹 브라우저를 종료 하더라도 저장될 수 있게 했습니다.

## After...

API같은 경우는 fetch와 then을 통해 데이터를 추출했습니다. 또한 현재 시간을 구하는 Date.now()에서 시간이 한자리인 경우 0을 추가하는(ex- 05시:05분) padStart 메서드를 이용했습니다.
localstorage.getitem을 통해 기존 사용자인지 확인하고 todo-list를 .setitem으로 저장하였습니다.
