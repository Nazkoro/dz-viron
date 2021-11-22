const arr = ['а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е'];

function count (str){
	const arr2 = str.toLowerCase().split('').filter(item => arr.includes(item))
	console.log(arr2.length);
	return arr2.length
}


