// task1 1-2
// const btn1 = document.querySelector('.btn-1')
// const btn2 = document.querySelector('.btn-2')
// const btn3 = document.querySelector('.btn-3')

// function makeCounter() {
//     let count = 0;
  
//     return function() {
//       return count++; 
//     };
//   }
    
// let counter1 = makeCounter();
// let counter2 = makeCounter();
// let counter3 = makeCounter();

//   btn1.addEventListener('click', () => {
//     btn1.textContent = counter1()

//   })
  
//   btn2.addEventListener('click', () => {
//     btn2.textContent = counter2()
//   })
  
//   btn3.addEventListener('click', () => {
//     btn3.textContent = counter3()
//   })




function curryCalc(f) { 
    return function(a) {
      return function(b) {
          return function (c) {
            return f(a, b, c);
          }
       
      };
    };
  }
  function curryPow(f) { // curry(f) выполняет каррирование
    return function(a) {
     
          return function (n) {
            return f(a,n);
          }
       
      
    };
  }

  function calculate(a,b,c) {
    switch (b) {
        case '+':
            return (a + c);
           
        case '-':
            return (a - c);
           
        case '/':
            return (a / c);
            
        case '*':
            return (a * c);   
    }
  }

  
  function pow(a,n) {
      if(n<0){
          n = -n
          return ((-a) * pow(a , n-1))

      }
    else if(n ==1){
        return a
    } else {
        return a * pow(a , n-1)
    }

  }


//   function powNew(a) {
//    return function (n) {
//     if(n ==1){
//         return a
//     } else {
//         return a * pow(a , n-1)
//     }
//    }

//   }

let curriedSum = curryCalc(calculate);
let curriedPw = curryPow(pow);
// let curriedPw = powNew(a);
  
  
  console.log(( curriedSum(10)('+')(2))); 
//   console.log(( curriedPw(10)(2))); 
  console.log(( curriedPw(10)(-2))); 


  
  
