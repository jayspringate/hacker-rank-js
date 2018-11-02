var racecar = 'racecar';
var something = 'something';

function reverse (str) {
	if (str.length <= 1) {
		return str;
	}
	if (str) {
		return reverse(str.substring(1)) + str[0];
	}	
}

function reverseStringWithLoop (str) {
	var newStr = ''
	for (var i = str.length - 1; i > -1; i--) {
		newStr += str[i];
	}
	return newStr;
}

console.time('1');
for (var i = 0; i < 100000; i++) {
	reverse(racecar);
}
console.timeEnd('1');
console.time('2');
for (var i = 0; i < 100000; i++) {
	reverse(something);
}
console.timeEnd('2');

console.time('3');
for (var i = 0; i < 100000; i++) {
	reverseStringWithLoop(racecar);
}
console.timeEnd('3');
console.time('4');
for (var i = 0; i < 100000; i++) {
	reverseStringWithLoop(something);
}
console.timeEnd('4');
