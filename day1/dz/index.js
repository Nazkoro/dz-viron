let validationFalse = false
do {
 
  validationFalse = false
 
  const surname = prompt('фамилия');
  const name = prompt('Имя');
  const  patronymic = prompt(' Отчество');
  
  if(surname.length <3 || name.length<3 || patronymic.length <3  ) {
    alert('ФИО длжны быть запонены')
    validationFalse = true
  }
  const  age = prompt('Возраст');

  if(  age <2 || age >115) {
    alert('Диапозон возраста от 1 до 114')
    validationFalse = true
  }

  const sex = confirm('Ваш пол - мужской?');
  const res = sex? 'мужской': 'женский';

  const day =age *365;
  const pension = age > 60 ? 'да': 'нет'

  if(!validationFalse){
    let response = new Map([
      ["Ваше ФИО", ` ${surname} ${name} ${patronymic}`],
      ["Ваш возраст в годах", age],
      ["Ваш возраст в днях", day],
      [`Вы  ${age>18? ' уже совершеннолетний':' несовершеннолетний'}`],
      ["Ваш пол",   res],
      ["Вы на пенсии",  pension]
    ]);
    let output = ''
    for (let entry of response) {
      output +=entry + '\n'
    }
    const newstr = output.replace(/,/gi, ':')
    alert(newstr)
  }
} while(validationFalse)









