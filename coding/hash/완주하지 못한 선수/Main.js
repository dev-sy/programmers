function solution(participant, completion) {

	let hashed = [];

	// 참가자 배열 값을 hash 배열의 key로 저장해서 1 더해줌 ex) hased['순영'] = 1, 같은 이름 둘이면 hased['순영'] = 2
	participant.forEach(entry => {
		hashed[entry] = hashed[entry] ? hashed[entry] + 1 : 1;
	})

	// 완주자 배열 값을 위에서 만든 hash 배열의 key로 접근하여 완주했을 경우 -1 해줌 ex) hased['순영'] = 0, 같은 이름 중 한 명만 완주했으면 hased['순영'] = 1
	completion.forEach(entry => {
		hashed[entry] = hashed[entry] - 1;
	})

	// hashed 배열 값이 1보다 크거나 같으면 완주 못한 사람이다
	for (var key in hashed) {
		if (hashed[key] >= 1) return key;
	}
}