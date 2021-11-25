const closeModal = document.querySelector('.modal')
import {WheatherWidget} from './WheatherWidget.js';

let obj = new WheatherWidget('minsk', 'ru').getWheather()
.then(ob => ob.printWheater())
// .then(ob => ob.printWheaterfor3Days())

document.addEventListener('click' , (e) => {
    if(e.target.closest('.close')){
        closeModal.style.display ='none'
    }

    if(e.target.closest('.btn_element')){
        closeModal.style.display ='none'
        let obj = new WheatherWidget('minsk', 'ru').getWheather()
        .then(ob => ob.printWheaterfor3Days())
       
        // console.log( document.querySelectorAll('.modal'));
        // .map(item => () => {
        //     item.onclick = function(){
        //         item.remove()
        //     }
        // })
    }
    
    // if(e.target.closest('#1')){
    //     console.log(e.target.closest(id));
    //     // closeModal.style.display ='none'
    //     // let obj = new WheatherWidget('minsk', 'ru').getWheather()
    //     // .then(ob => ob.printWheaterfor3Days())
    // }
})

// closeModal.addEventListener('click', (e) =>{
//     if(e.target.closest('.close')){
//         closeModal.style.display ='none'
//     }
    
// })

// closeModal.addEventListener('click', (e) =>{
//     if(e.target.closest('.btn_element')){
//         closeModal.style.display ='none'
//         let obj = new WheatherWidget('minsk', 'ru').getWheather()
//         .then(ob => ob.printWheaterfor3Days())
//     }
    
// })