const ul = document.querySelector('.ul')
const btn = document.querySelector('.btn')
const btnRemove = document.querySelector('.btn-remove')
const inputList = document.querySelector('.input-list')

let arr = []

function createMass(inp , ul) {
    inp.value = ''
    ul.innerHTML = '';
    arr.map((element,i) => ul.innerHTML += `<li class="li-item" data-index="${i}" ><input type="text" value="${element}"></li>`)
}

function addItem() {
    if(inputList.value.length >0){
        arr.push(inputList.value) 
        createMass(inputList,ul)
    } 
}

function removeLastItem() {
    if(arr.length > 0){
        arr.pop(inputList.value) ;
        createMass(inputList,ul)
    } else btnRemove.setAttribute('disabled', true)
}

btn.addEventListener('click' ,addItem)
btnRemove.addEventListener('click' ,removeLastItem)

document.addEventListener("change", e => {
    const target = e.target
    if (target.closest('.li-item')?.dataset?.index) {
        const index = target.closest('.li-item').dataset.index
        arr.splice(index, 1, target.closest('input').value)
    }
})


