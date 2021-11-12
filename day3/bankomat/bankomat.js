let start = document.querySelector('.nachalo')
let end = document.querySelector('.konec')
const btn3 = document.querySelector('.btn-3')

let line = []
let cashMachine = []

function getRandomInt() {
    return (Math.floor(Math.random() * 2)); 
  }

  for(let i =0; i<10; i++){
    line.push(getRandomInt())
  }

//   start.innerHTML = `
//     <p>привет</p>
//   `
//   start.innerHTML = `
//     <p>привет</p>
//   `
  start.textContent = line
  

setInterval(() => {
    
}, interval);

  for(let j = 0 ;j<line.length;j++){
 
    if(line[j] === 0 ){
        
 
        line.splice(j,1)
        
        --j

    } 

    
}

end.textContent = line

