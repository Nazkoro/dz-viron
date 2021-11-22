//solution 1
function fizzBuzz(){
for(let i =0; i<100;i++){
    if(i%3 ===0 && i%5 ===0){
        console.log('FizzBuzz', i);
    } else if(i % 5 === 0) {
        console.log('Buzz',i);
    }   else if (i%3 ===0){
        console.log('Fizz',i);

    }
    console.log(i);

}
}
fizzBuzz()
//solution 2

for (let i = 1; i <= 100; i++) {
    console.log((i % 3 === 0 && i % 5 === 0 && 'fizzbuzz') || (i % 3 === 0 && 'fizz') || (i % 5 === 0 && 'buzz') || i);
  } 