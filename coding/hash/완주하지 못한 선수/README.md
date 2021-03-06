문제 링크
- https://programmers.co.kr/learn/courses/30/lessons/42576

해결
- 맨처음 썼던 방법은 참가자 배열을 loop 돌리면서 완주자 배열에 동일한 값이 있는지 체크함
- 참가자 배열에 중복 이름이 있을 수도 있으므로 한번 체크할 때 해당 이름을 완주자 배열에서 빼가면서 체크함
- hash 를 이용하지 않은 위 방법으로는 완주자 배열에 동일한 값이 있는지를 이중 loop 로 찾아 최악의 경우 O(n^2) 반복 체크
- 결과적으로 효율성 테스트에 실패함
- 반면 hash 는 key 값을 index 로 변환하여 값을 O(1) 에 찾을 수 있음
- hash 도 검색 시 충돌이 많아지면 최악의 경우 O(n) 이 될 수 있다고 하지만 위 방법보단 빠른 것 같다
- 참가자 배열 값을 hash 의 key 로 하고, value 에 +1 을 하며 hash 배열을 만들어줌
- 완주자 배열을 loop 돌리며 hash 배열의 key 에 완주자 배열 값이 있으면 -1 해줌
- 결과적으로 마지막 hash 배열에 0 보다 큰 값을 가진 key 가 완주하지 못한 선수이다