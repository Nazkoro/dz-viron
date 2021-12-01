const closeModal = document.querySelector('.modal')
const closeAll = document.querySelector('.modal-full')
const closeFull = document.querySelector('.close-full')
import {WheatherWidget} from './WheatherWidget.js';

let obj = new WheatherWidget('minsk', 'ru').getWheather()
.then(ob => ob.printWheater())

document.addEventListener('click' , (e) => {
    if(e.target.closest('.close')){
        closeModal.style.display ='none'
    }

    if(e.target.closest('.close-full')){
        closeAll.style.display ='none'
        closeFull.style.display ='none'
        closeModal.style.display ='flex'
    }

    if(e.target.closest('.btn_element')){
        closeModal.style.display ='none'
        closeFull.style.display ='flex'
        closeAll.style.display ='flex'
        let obj = new WheatherWidget('minsk', 'ru').getWheather()
        .then(ob => ob.printWheaterfor3Days())

    }
    
})
