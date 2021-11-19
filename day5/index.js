//1


function currentSums(numbers) {
    let arr = [];

    numbers.reduce((sum, current) => {
            
            arr.push(sum);
            return sum + current;
            
    })
    console.log(arr);
    return arr;
    
}
currentSums([2, 3, 5, 7, 11, 13, 17, 19])




//2


function strTrim(str){
  let newArr = str.split(' ');

  let arr = [];
  let result = newArr.filter(item => arr.push((item[0].split('')))
  
    )
  console.log(arr.flat());
}

strTrim('Каждый охотник желает знать, где сидит фазан.')





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

    let result = rightArr.concat(leftArr)
    console.log(result);
    return result

}
changeArr([ 1, 2 ,3,4])