 
// function compress(str) {
//     let arr = str.split('')
//     console.log(arr);
    

//     for(let i = 0; i<arr.length; i++){
//         let count = 1
//         // console.log('loop i, ' ,i);
//         for(let j =i+1 ; j<arr.length; j++){

//             if(arr[i] === arr[j]){
                
//                 console.log('loop i=', i,'loop j=', j,' arr[i]= ', arr[i],' arr[j]= ', arr[j]);
//                 // count++
//                 arr.splice(i+1,1,++count)
//                 console.log(arr);
//             } 
//             // else if(arr[i] !== arr[j]){
//             //     arr.splice(i+1,0,count)
//             // }
//         }
//         // console.log('count=',count);
//         // arr.splice(i+1,0,count)
        

//     }
    

//     // console.log([...new Set(arr)].join(''));
//     // console.log([...new Set(arr)]);
//     // return arr.join('')
//     let arr2 = [...new Set(arr)]
//     console.log('arr2',arr2);
//     for (let k =0; k<arr2.length; k++){
//         if (typeof arr2[k] === 'string' && typeof arr2[k+1] ==='string'){
//             console.log('k',k);
//             arr2.splice(k+1,0,1)
//         }
//     }
//     console.log(arr2.join(''));

// }

// compress('a')



// function uncompress(str){
	
// 	let arr2 = str.split('')
//     console.log(arr2);

// 	    for (let k =0; k<arr2.length; k++){
//         if (typeof arr2[k] === 'string' && typeof Number(arr2[k+1]) ==='number'){
//             console.log('keklol',k);
//             arr2.splice(k+1,0,mult(arr2[k],arr2[k+1]))
//         }
//     }

// 	console.log(arr2.join(''));
// }

// 	function mult(simbol,count){
// 		let swap = ''
// 		for (let i = 0; i < count-1; i++) {
// 			swap += simbol
			
// 		}
// 		console.log(swap);
// 		return swap

// 	}

	
function uncompress(str){
	
	let arr2 = str.split('')
    console.log(arr2);

	    for (let k =0; k<arr2.length; k++){
        if (arr2[k] !== arr2[k+1] && typeof arr2[k] === 'string' && arr2[k+1] !== undefined && typeof Number(arr2[k+1]) ==='number' ){
            console.log('keklol',k ,arr2[k],arr2[k+1]) ;
            arr2.splice(k,2,mult(arr2[k],arr2[k+1]))
			// arr2.splice(k+1,1,'s')
        }
    }

	console.log(arr2.join(''));
}

	function mult(simbol,count){
		let swap = ''
		for (let i = 0; i < count; i++) {
			swap += simbol
			
		}
		console.log(swap);
		return swap

	}

	uncompress('a2b1c3')














