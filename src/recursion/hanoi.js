let step = 0;
function hanoi(n, a='A', b='B', c='C') {
	step ++ ;
	if (n == 1){
		console.log('move', a, '-->', c)
		return
	}

	hanoi(n - 1, a, c, b)
	console.log('move', a, '-->', c)
	hanoi(n - 1, b, a, c)
}
hanoi(4)

console.log(step)