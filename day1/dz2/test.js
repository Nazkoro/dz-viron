
const  numer = prompt('ведите номер');

let arr2 = numer.split('').map(Number);

for(let i = 1 ;i <arr2.length; i++){
    if(arr2[i-1] % 2 === 0 && arr2[i] % 2 === 0){
        arr2.splice(i,0,'-')
    }
}
console.log(arr2.join(''));
