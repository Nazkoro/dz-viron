const modal = document.querySelector('.modal')
const modalFull = document.querySelector('.modal-full')

export class WheatherWidget {
    key = '6d21c3a258af6885acaa2c45a49a091d'
    icon = 'http://openweathermap.org/img/wn/'
    
    constructor(city, lang ){
        this.city = city
        this.lang = lang
        this.url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}&lang=${this.lang}`
        this.url3Day = `https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&appid=${this.key}&lang=${this.lang}`
    }

    async getWheather (){
        let response = await fetch(this.url);
        
        let response3Days = await fetch(this.url3Day);
        this.objWheather = await (response.json()); // прочитать тело ответа как текст
         console.log(this.objWheather);
         this.objWheather3Days = await (response3Days.json()); // прочитать тело ответа как текст
         console.log(this.objWheather3Days)
         return this
    }

    printWheater() {
        this.icon = this.objWheather.weather[0].icon
        console.log('icon',this.icon);
        // this.objWheather = objWheather
        let celcia = this.objWheather.main.temp -273
        let wind = this.objWheather.wind.speed
        console.log('цельсиа',celcia);
        console.log(this.icon);

        modal.innerHTML +=`
        <button class="btn_element">Прогноз на 3 дня</button>
        <span class="close" >x</span>
        <div class="temperatura">Сейчас в Минске ${Math.round(celcia)} °C</div>
        <div class="wind">Ветер: ${Math.round(wind)} м/c</div>
        <div class="wind"><img src="https://openweathermap.org/img/wn/${this.icon}.png" alt="image"></div>
        <span class="desc"> ${this.objWheather.weather[0].description}</span>
        `  
    }

    printWheaterfor3Days() {
        modalFull.innerHTML =''
        let arrayList = this.objWheather3Days.list
        console.log(arrayList);
        let arraywheatherSort = []
        for(let i =0; i<arrayList.length; i+=8){
            if(i<24){
                arraywheatherSort.push(arrayList[i])
                console.log(i, arraywheatherSort);
            } 

        }
        for (let j = 0; j < arraywheatherSort.length; j++) {
            const element = arraywheatherSort[j];

            this.icon = element.weather[0].icon
            console.log('icon',this.icon);
            // this.objWheather = objWheather
            let celcia = element.main.temp -273
            let wind = element.wind.speed

            modalFull.innerHTML +=`
            <div class="modal" id=${j}>
                <div class="data">${element.dt_txt}</div>
                
                <div class="temperatura">Сейчас в Минске ${Math.round(celcia)} °C</div>
                <div class="wind">Ветер: ${Math.round(wind)} м/c</div>
                
                <div class="wind"><img src="https://openweathermap.org/img/wn/${this.icon}.png" alt="image"></div>
                <span class="desc"> ${element.weather[0].description}</span>
                </div>
                `  
        }

    }

}


