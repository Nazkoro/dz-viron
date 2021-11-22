const selectMonth = document.querySelector('.select_month')
const selectYear = document.querySelector('.select_year')
const btnAddCalendar = document.querySelector('.btn')
const btnRemoveCalendar = document.querySelector('.btn-remove')
const main = document.querySelector('.main')
const header = document.querySelector('.header')
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
		this.Dlast = new Date(year,month+1,0).getDate(); //последний день месяца
		this.D = new Date(year,month,this.Dlast);//полная дата последнего дня месяца 
		this.DNlast = new Date(this.D.getFullYear(),this.D.getMonth(),this.Dlast).getDay(); // день недели последнего дня месяца
		this.DNfirst = new Date(this.D.getFullYear(),this.D.getMonth(),1).getDay();// день недели первого дня месяца


	}
	addEmptyCellToTeBeginning(){
				// пустые клетки до первого дня текущего месяца
			if (this.DNfirst != 0) {
			for(let  i = 1; i < this.DNfirst; i++) this.calendar = this.calendar + '<td>';
			}else{// если первый день месяца выпадает на воскресенье, то требуется 7 пустых клеток 
			for(let  i = 0; i < 6; i++) this.calendar = this.calendar +'<td>';
			}
	}

	printCalendar(id){
			document.querySelector('#'+id+' tbody').innerHTML = this.calendar;
			document.querySelector('#'+id+' thead td:nth-child(3)').innerHTML = this.month[this.D.getMonth()] +' '+ this.D.getFullYear() + ' года';
			document.querySelector('#'+id+' thead td:nth-child(3)').dataset.month = this.D.getMonth();
			document.querySelector('#'+id+' thead td:nth-child(3)').dataset.year = this.D.getFullYear();
			// if (document.querySelectorAll('#'+id+' tbody tr').length < 6) {  // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
			// 	document.querySelector('#'+id+' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
			// }
	}

	addDaysOfMonth(id){
		this.addEmptyCellToTeBeginning()
		// дни месяца
			for(let  i = 1; i <= this.Dlast; i++) {
			if (i == new Date().getDate() && this.D.getFullYear() == new Date().getFullYear() && this.D.getMonth() == new Date().getMonth()) {
				this.calendar = this.calendar + '<td class="today">' + i;// сегодняшней дате можно задать стиль CSS
			}else{
				this.calendar = this.calendar + '<td>' + i;
			}
			if (new Date(this.D.getFullYear(),this.D.getMonth(),i).getDay() == 0) {
				this.calendar =  this.calendar +'<tr>'; // если день выпадает на воскресенье, то перевод строки
			}
			}
		// пустые клетки после последнего дня месяца
			for(let  i = this.DNlast; i < 7; i++) this.calendar = this.calendar + '<td>';
			this.printCalendar(id)
	}
	

}

	header.addEventListener('click', (e) => {
		if(e.target === btnAddCalendar){
			++countCalendar
			main.innerHTML +=`<table id="calendar${countCalendar}" class="calendar">
				<thead>
				<tr><td class="left-year"><<<td class="left-month"><<td colspan="5" class="calendar-data"><td class="right-month">><td class="right-year">>>
				<tr><td>Пн<td>Вт<td>Ср<td>Чт<td>Пт<td>Сб<td>Вс
				<tbody>`
		let objCalendar = new Calendar(+selectYear.value, +selectMonth.value) ;
 		objCalendar.addDaysOfMonth(`calendar${countCalendar}`)

		btnRemoveCalendar.removeAttribute("disabled")
		}

		if(e.target === btnRemoveCalendar){
		main.childNodes.length === 0 ?
		btnRemoveCalendar.setAttribute("disabled", true) :
		main.firstChild.remove()
		}
	})

	document.addEventListener('change' , () => {
	if (selectMonth.value === "Выбрать месяц"|| selectYear.value ==='Выбрать год'){
			btnAddCalendar.setAttribute("disabled", true);
		} else btnAddCalendar.removeAttribute("disabled")
	})

	main.addEventListener('click', (e) => {
	let table = e.target.closest("table")
	let td = table.querySelectorAll('td')
	let id = table.id

	let leftMonth = table.querySelector('.left-month')
	let leftYear = table.querySelector('.left-year')
	let righttMonth = table.querySelector('.right-month')
	let rightYear = table.querySelector('.right-year')
	let calendarData = table.querySelector('.calendar-data')
 //change backgroung color calendar td
	if(table.id){
			for(let i =0; i< td.length;i++){
				td[i].classList.remove('active')
			}
		}			
		  e.target.classList.add('active')
//arrow logics 
	leftMonth.onclick = function() {
		let objCalendar = new Calendar(calendarData.dataset.year, parseFloat(calendarData.dataset.month)-1) ;
		objCalendar.addDaysOfMonth(id);
	}

	righttMonth.onclick = function() {
	let objCalendar = new Calendar(calendarData.dataset.year, parseFloat(calendarData.dataset.month)+1) ;
	objCalendar.addDaysOfMonth(id);
}

	leftYear.onclick = function() {
		let objCalendar = new Calendar(parseFloat(calendarData.dataset.year)-1, calendarData.dataset.month) ;
		objCalendar.addDaysOfMonth(id);
	}

	rightYear.onclick = function() {
	let objCalendar = new Calendar(parseFloat(calendarData.dataset.year)+1, calendarData.dataset.month) ;
	objCalendar.addDaysOfMonth(id);
}
})

// dele node type text
function clean(node) {
    for (var n = 0; n < node.childNodes.length; n ++) {
        var child = node.childNodes[n];
        if (child.nodeType === 8 || (child.nodeType === 3 && !/\S/.test(child.nodeValue))) {
            node.removeChild(child);
            n --;
        } else if(child.nodeType === 1) {
            clean(child);
        }
    }
}

let objCalendar = new Calendar(new Date().getFullYear(), new Date().getMonth()) ;
objCalendar.addDaysOfMonth('calendar2');

clean(document);