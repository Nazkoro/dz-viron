//solution 1_1
// function currentSums(numbers) {
//     let arr = [];
//     numbers.reduce((sum, current) => { 
//         arr.push(sum);
//         return sum + current;
//     })
//     console.log(arr);
//     return arr;
// }
//solution 1_2
function currentSums(numbers) {
    
    const arr = numbers.reduce((prev, current, i) => { 
        if(i === 0) {
            prev[0].push(`${current}`);
            prev[1].push(current);
        } else {
            prev[0].push(`${prev[0][i-1]} + ${current}`);
            prev[1].push(current + prev[1][i-1]);
        }

        
        return prev;
    },[[],[]]);
    console.log(arr);
    
}


currentSums([2, 3, 5, 7, 11, 13, 17, 19])


function strTrim(str){
  let newArr = str.split(' ');

  let arr = [];
  let result = newArr.filter(item => arr.push(item[0].split('')))
  console.log(arr.flat());
}

strTrim('Каждый охотник желает знать, где сидит фазан.')

//solition 3_1
// function changeArr(arr2){
    
//     let leftArr = [];
//     let rightArr = [];
 
//     let len = arr2.length;
//     let middle = Math.round(len/2);

//     for (let i = 0; i < arr2.length; i++) {
//         if(len %2 ===0 && i < middle){
//             leftArr.push(arr2[i])
//         }

//         else if (len %2 ===0 && i >= middle) {
//             rightArr.push(arr2[i])
//         }

//         else if(len %2 !==0 && i < middle-1){
//             leftArr.push(arr2[i])
//         }
       
//         else if (len %2 !==0 && i >= middle) {   
//             rightArr.push(arr2[i])
//         }
        
//     }

//     if(len %2 !==0 ){
//         rightArr.push(arr2[middle-1])
//     }

//     let result = rightArr.concat(leftArr)
//     console.log(result);
//     return result

// }

//solition 3_2
function changeArr(arr){

    if(arr.length %2 ===0 ){
        const middle = arr.length/2
        const leftArr = arr.slice(0, middle)
        const rightArr = arr.slice(middle, arr.length)
        console.log(rightArr.concat(leftArr));

    } else {
        const middle = (arr.length -1)/2
        const leftArr = arr.slice(0, middle)
        const rightArr = arr.slice(middle + 1, arr.length)
        console.log(rightArr.concat(arr[middle]).concat(leftArr));

    }
}


changeArr([ 1, 2,8 ,3,4])