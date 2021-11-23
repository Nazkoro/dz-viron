
function compress (str) {
    let output = '';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      count++;
      if (str[i] != str[i+1]) {
        output += str[i] + count;
        count = 0;
      }
    }
    console.log(output);
    return output
  }

//solution1
// function uncompress(str){
// 	let arr2 = str.split('')
// 	    for (let k =0; k<arr2.length; k++){
//         if (arr2[k] !== arr2[k+1] && typeof arr2[k] === 'string' && arr2[k+1] !== undefined && typeof Number(arr2[k+1]) ==='number' ){
//             arr2.splice(k,2,mult(arr2[k],arr2[k+1]))
//         }
//     }
//     return arr2.join('')
// }
// 	function mult(simbol,count){
// 		let swap = ''
// 		for (let i = 0; i < count; i++) {
// 			swap += simbol
// 		}
// 		return swap
// 	}

//solution2
function uncompress(str) {
  const uncompres = str.split('').reduce((prev, current , i , arr) => {
    debugger;
    if(+current){
      for(let k =1; k<+current; k++) {
        prev += arr[i -1]
      }
    } else {
      prev += current
    } 

    return prev;
  }, '')
  console.log(uncompres);
}

  compress('aaaabbc'); //a4b2c1

	uncompress('a2b1c3')














