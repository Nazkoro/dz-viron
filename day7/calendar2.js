const selectMonth = document.querySelector('.select_month')
const selectYear = document.querySelector('.select_year')
const btnAddCalendar = document.querySelector('.btn')
const btnRemoveCalendar = document.querySelector('.btn-remove')
const main = document.querySelector('.main')
let countCalendar = 2


        const  month=["Выбрать месяц","Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
		 const arrYears =[
			'Выбрать год','1980',
			'1981','1982', '1983',
			'1984','1985', '1986',
			'1987','1988', '1989',
			'1990','1991', '1992',
			'1993','1994', '1995',
			'1996','1997', '1998',
			'1999','2000', '2001',
			'2002','2003', '2004',
			'2005','2006', '2007',
			'2008','2009', '2010',
			'2011','2012', '2013',
			'2014','2015', '2016',
			'2017','2018', '2019',
			'2020','2021', 
			]
			// arrYears.innerHTML = '';
			for (let i = 0; i < arrYears.length; i++) {
				selectYear.innerHTML +=`<option value="${arrYears[i]}">${arrYears[i]}</option>`
			}
			for (let i = 0; i < month.length; i++) {
				
				selectMonth.innerHTML +=`<option value="${i===0?'Выбрать месяц':i-1}">${month[i]}</option>`

			}

    class Calendar{


        calendar = '<tr>';
        month=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];

        constructor(year,month) {
            this.Dlast = new Date(year,month+1,0).getDate();
            this.D = new Date(year,month,this.Dlast);
            this.DNlast = new Date(this.D.getFullYear(),this.D.getMonth(),this.Dlast).getDay();
            this.DNfirst = new Date(this.D.getFullYear(),this.D.getMonth(),1).getDay();

        }
        showCalendar(id){


            if (this.DNfirst != 0) {
                for(let  i = 1; i < this.DNfirst; i++) this.calendar = this.calendar + '<td>';
              }else{
                for(let  i = 0; i < 6; i++) this.calendar = this.calendar +'<td>';
              }
          
              for(let  i = 1; i <= this.Dlast; i++) {
                if (i == new Date().getDate() && this.D.getFullYear() == new Date().getFullYear() && this.D.getMonth() == new Date().getMonth()) {
                    this.calendar = this.calendar + '<td class="today">' + i;
                }else{
                    this.calendar = this.calendar + '<td>' + i;
                }
                if (new Date(this.D.getFullYear(),this.D.getMonth(),i).getDay() == 0) {
                    this.calendar =  this.calendar +'<tr>';
                }
              }
          
              for(let  i = this.DNlast; i < 7; i++) this.calendar = this.calendar + '<td>&nbsp;';

              document.querySelector('#'+id+' tbody').innerHTML = this.calendar;
              document.querySelector('#'+id+' thead td:nth-child(3)').innerHTML = this.month[this.D.getMonth()] +' '+ this.D.getFullYear() + ' года';
              document.querySelector('#'+id+' thead td:nth-child(3)').dataset.month = this.D.getMonth();
              document.querySelector('#'+id+' thead td:nth-child(3)').dataset.year = this.D.getFullYear();
            
              if (document.querySelectorAll('#'+id+' tbody tr').length < 6) {  // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
                  document.querySelector('#'+id+' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
              }
        }
    }
//исходные данные
  let objCalendar = new Calendar(new Date().getFullYear(), new Date().getMonth()) ;
  objCalendar.showCalendar('calendar2');

    document.querySelector('.calendar thead tr:nth-child(1) td:nth-child(2)').onclick = function() {
        let objCalendar = new Calendar(document.querySelector('.calendar thead td:nth-child(3)').dataset.year, parseFloat(document.querySelector('.calendar thead td:nth-child(3)').dataset.month)-1) ;
        objCalendar.showCalendar('calendar2');
      }
      // переключатель плюс месяц
      document.querySelector('.calendar thead tr:nth-child(1) td:nth-child(4)').onclick = function() {
        let objCalendar = new Calendar(document.querySelector('.calendar thead td:nth-child(3)').dataset.year, parseFloat(document.querySelector('.calendar thead td:nth-child(3)').dataset.month)+1) ;
        objCalendar.showCalendar('calendar2');
        
      }

    document.querySelector('.calendar thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
        let objCalendar = new Calendar(parseFloat(document.querySelector('.calendar thead td:nth-child(3)').dataset.year)-1, document.querySelector('.calendar thead td:nth-child(3)').dataset.month) ;
        objCalendar.showCalendar('calendar2');
      }
      // переключатель плюс месяц
      document.querySelector('.calendar thead tr:nth-child(1) td:nth-child(5)').onclick = function() {
        let objCalendar = new Calendar(parseFloat(document.querySelector('.calendar thead td:nth-child(3)').dataset.year)+1, document.querySelector('.calendar thead td:nth-child(3)').dataset.month) ;
        objCalendar.showCalendar('calendar2');
        
      }


//эксперимент
	
	  btnAddCalendar.addEventListener('click', () => {
			++countCalendar
			main.innerHTML +=`<table id="calendar${countCalendar}" class="calendar">
						<thead>
						<tr><td class="left-year"><<<td class="left-month"><<td colspan="5"><td class="right-month">><td class="right-year">>>
						<tr><td>Пн<td>Вт<td>Ср<td>Чт<td>Пт<td>Сб<td>Вс
						<tbody>
					 `
		  let objCalendar = new Calendar(+selectYear.value, +selectMonth.value) ;
 			 objCalendar.showCalendar(`calendar${countCalendar}`)

			  main.childNodes.length === 0 ?
		btnRemoveCalendar.setAttribute("disabled", true) :
		 btnRemoveCalendar.removeAttribute("disabled")

			//   countCalendar++
	  })

	  	btnRemoveCalendar.addEventListener('click' , () => {
		console.log('main.firstChild',main);
	
		if(main.childNodes.length){
			main.firstChild.remove()
		} 
		
		main.childNodes.length === 0 ?
		btnRemoveCalendar.setAttribute("disabled", true) :
		 btnRemoveCalendar.removeAttribute("disabled")
	  })

	  document.addEventListener('change' , () => {
		if (selectMonth.value === "Выбрать месяц"|| selectYear.value ==='Выбрать год'){
			 btnAddCalendar.setAttribute("disabled", true);
		 } else btnAddCalendar.removeAttribute("disabled")
	  })



	  
	  //change backgroung color calendar td
	  main.addEventListener('click', (e) => {

		let table = e.target.closest("table")
		let td = table.querySelectorAll('td')

		if(table.id){
			for(let i =0; i< td.length;i++){
				td[i].classList.remove('active')
			}
		}			
		  e.target.classList.add('active')
	  })

//начало эксперимента
	// let objCalendar = new Calendar(new Date().getFullYear(), new Date().getMonth()) ;
	// objCalendar.showCalendar('calendar2');

	// document.querySelector(`#calendar${countCalendar} .left-month`).onclick = function() {
	// 	console.log(1);
	// 	let objCalendar = new Calendar(document.querySelector(`#calendar${countCalendar} thead td:nth-child(3)`).dataset.year, parseFloat(document.querySelector(`#calendar${countCalendar} thead td:nth-child(3)`).dataset.month)-1) ;
	// 	objCalendar.showCalendar(`calendar${countCalendar}`);
	// }
	// // переключатель плюс месяц
	// document.querySelector('.calendar thead tr:nth-child(1) td:nth-child(4)').onclick = function() {
	// 	let objCalendar = new Calendar(document.querySelector('.calendar thead td:nth-child(3)').dataset.year, parseFloat(document.querySelector('.calendar thead td:nth-child(3)').dataset.month)+1) ;
	// 	objCalendar.showCalendar('calendar2');
		
	// }

	// document.querySelector('.calendar thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
	// 	let objCalendar = new Calendar(parseFloat(document.querySelector('.calendar thead td:nth-child(3)').dataset.year)-1, document.querySelector('.calendar thead td:nth-child(3)').dataset.month) ;
	// 	objCalendar.showCalendar('calendar2');
	// }
	// // переключатель плюс месяц
	// document.querySelector('.calendar thead tr:nth-child(1) td:nth-child(5)').onclick = function() {
	// 	let objCalendar = new Calendar(parseFloat(document.querySelector('.calendar thead td:nth-child(3)').dataset.year)+1, document.querySelector('.calendar thead td:nth-child(3)').dataset.month) ;
	// 	objCalendar.showCalendar('calendar2');
		
	// }

	// main.addEventListener('click', (e) => {

	// 		let table = e.target.closest("table")
	// 		let id = table.id
	// 		(`id `)
			
	// 	})


//конец эксперимента