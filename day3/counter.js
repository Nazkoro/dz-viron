

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



let curriedSum = curryCalc(calculate);
let curriedPw = curryPow(pow);
// let curriedPw = powNew(a);
  
  
  console.log(( curriedSum(10)('+')(2))); 
//   console.log(( curriedPw(10)(2))); 
  console.log(( curriedPw(10)(-2))); 


  
  
