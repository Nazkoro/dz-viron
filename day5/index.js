//1
// numbers = [2, 3, 5, 7, 11, 13, 17, 19];

// function currentSums(numbers) {
//     let arr = [];

//     numbers.reduce((sum, current) => {
            
//             arr.push(sum);
//             return sum + current;
            
//     })
//     console.log(arr);
//     return arr;
    
// }
// currentSums(numbers)




//2
// Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19].
//  Используя метод reduce(), создаем функцию currentSums(numbers), 
//  которая возвращает новый массив из такого же числа элементов,
//   в котором на каждой позиции будет находиться сумма элементов массива numbers
//    до этой позиции включительно.
// Т.е. для numbers = [2, 3, 5, 7, 11, 13, 17] мы должны увидеть,
//  вызвав currentSums(numbers):

// [2, 2+3, 2+3+5, 2+3+5+7, 2+3+5+7+11, 2+3+5+7+11+13, 2+3+5+7+11+13+17]
//  = [ 2,5,10,17,28,41,58]

// function strTrim(str){
//   let newArr = str.split(' ')
//   let result = newArr.filter(item => newArr.split('').push(item[0]))
//   console.log(result);
// }

// strTrim('Каждый охотник желает знать, где сидит фазан.')





//3
function changeArr(arr2){
    
    let leftArr = [];
    let rightArr = [];
 
    let len = arr2.length;

    let middle = Math.round(len/2);


    for (let i = 0; i < arr2.length; i++) {
        if(len %2 ===0 && i < middle){
            leftArr.push(arr2[i])
        }

        else if (len %2 ===0 && i >= middle) {
            rightArr.push(arr2[i])
        }

        else if(len %2 !==0 && i < middle-1){
            leftArr.push(arr2[i])
        }
       
        else if (len %2 !==0 && i >= middle) {   
            rightArr.push(arr2[i])
        }
        
    }

    if(len %2 !==0 ){

        rightArr.push(arr2[middle-1])

    }

    // rightArr.concat(leftArr)
    let result = rightArr.concat(leftArr)
    console.log(result);
    return result

}
changeArr([ 1, 2 ,3,4])