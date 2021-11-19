
    class Calendar{

        calendar = '<tr>';
        month=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];

        constructor(year,month) {
 
            this.Dlast = new Date(year,month+1,0).getDate();
            this.D = new Date(year,month,this.Dlast);
            this.DNlast = new Date(this.D.getFullYear(),this.D.getMonth(),this.Dlast).getDay();
            this.DNfirst = new Date(this.D.getFullYear(),this.D.getMonth(),1).getDay();
            console.log(this.Dlast,this.D ,this.DNlast ,this.DNfirst );
            console.log(this.D);
        }
        

        showCalendar(id){
            console.log(this.Dlast,this.D ,this.DNlast ,this.DNfirst );
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
              console.log(this.calendar);
              console.log(document.querySelector('#'+id+' tbody'));
              console.log(id);
              document.querySelector('#'+id+' tbody').innerHTML = this.calendar;
              document.querySelector('#'+id+' thead td:nth-child(3)').innerHTML = this.month[this.D.getMonth()] +' '+ this.D.getFullYear() + ' года';
              document.querySelector('#'+id+' thead td:nth-child(3)').dataset.month = this.D.getMonth();
              document.querySelector('#'+id+' thead td:nth-child(3)').dataset.year = this.D.getFullYear();
            
              if (document.querySelectorAll('#'+id+' tbody tr').length < 6) {  // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
                  document.querySelector('#'+id+' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
              }

        }

    }

  let objCalendar = new Calendar(new Date().getFullYear(), new Date().getMonth()) ;
  objCalendar.showCalendar('calendar2');

    document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(2)').onclick = function() {
        let objCalendar = new Calendar(document.querySelector('#calendar2 thead td:nth-child(3)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(3)').dataset.month)-1) ;
        objCalendar.showCalendar('calendar2');
      }
      // переключатель плюс месяц
      document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(4)').onclick = function() {
        let objCalendar = new Calendar(document.querySelector('#calendar2 thead td:nth-child(3)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(3)').dataset.month)+1) ;
        objCalendar.showCalendar('calendar2');
        
      }

      
    document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
        let objCalendar = new Calendar(parseFloat(document.querySelector('#calendar2 thead td:nth-child(3)').dataset.year)-1, document.querySelector('#calendar2 thead td:nth-child(3)').dataset.month) ;
        objCalendar.showCalendar('calendar2');
      }
      // переключатель плюс месяц
      document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(5)').onclick = function() {
        let objCalendar = new Calendar(parseFloat(document.querySelector('#calendar2 thead td:nth-child(3)').dataset.year)+1, document.querySelector('#calendar2 thead td:nth-child(3)').dataset.month) ;
        objCalendar.showCalendar('calendar2');
        
      }