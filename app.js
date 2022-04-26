const search = document.querySelector('.search');
const city = document.querySelector('.city');
const country = document.querySelector('.country');
const value = document.querySelector('.value');
const moreDesc = document.querySelector('.more-desc');
const shortDesc = document.querySelector('.short-desc');
const visibility = document.querySelector('.visibility span');
const wind = document.querySelector('.wind span');
const humidity = document.querySelector('.humidity span');
const time = document.querySelector('.time');
const content = document.querySelector('.content');
const body = document.querySelector('body');

console.log(body)

async function changeWeatherUI(searchInput){
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=2fc71e2dc88f1aa87443e65b5e02abe8`
    let data = await fetch(apiURL).then(res=>res.json());
    if(data.cod == 200){
        
        content.classList.remove('hide');
        city.innerText = data.name;
        country.innerText = data.sys.country;
        visibility.innerText = data.visibility+ ' m';
        wind.innerText = data.wind.speed + ' m/s';
        humidity.innerText = data.main.humidity + ' %';
        shortDesc.innerText = data.weather[0].description;
        let temp = Math.round(data.main.temp - 273.15);
        value.innerText = temp;
        console.log(temp);
        time.innerText = new Date().toLocaleString('vi')
        
        body.setAttribute('class','hot');
        if(temp <=25){
            body.setAttribute('class','warm');
        }
        
        if(temp <=20){
            body.setAttribute('class','cool');
        }
        
        if(temp <=15){
            body.setAttribute('class','cold');
        }
    }else{
        content.classList.add('hide');
    }
    
}

search.addEventListener('keypress',function(e){
    if(e.code == 'Enter'){
        let searchInput = search.value.trim();
        changeWeatherUI(searchInput);
    }
})
changeWeatherUI("Ho Chi Minh");
