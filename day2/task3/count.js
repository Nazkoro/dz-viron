function count (str){
	let arr = str.split('')
	console.log(arr);
	let arr2 = arr.filter(item => item === 'а' || item === 'у'|| item ==='о'|| item ==='ы'|| item ==='э'|| item ==='я'|| item ==='ю'|| item ==='ё'|| item ==='и'|| item ==='е')
	console.log(arr2);
	console.log(arr2.length);
	return arr2.length
}
count('Ghbdtn, z r dfv bp Hjccbb')