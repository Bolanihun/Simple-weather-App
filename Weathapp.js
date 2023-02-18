
//let cities = ["Abuja","Cape town", "New york", "Istanbul", "Dubai"]

//cities.forEach(fetchWeather)


//API FETCH
let weather = {

  apiKey: "91f01b13ee48a44ecf7c67d7c07315fe",
  fetchWeather: function(city){
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
    + city +
    "&appid=91f01b13ee48a44ecf7c67d7c07315fe&units=metric"
    )
    .then((response) => response.json())
    .then((data) => this.displayWeather(data));
  },
 
  displayWeather: function (data) {
    
    const { name } = data;
    const { description } = data.weather[0];
    const {temp, humidity } = data.main;
    const { speed } = data.wind;
    const { country } = data.sys;

    console.log(name, description, temp, humidity, speed, country)
    document.querySelector(".city").innerText = name ;
    document.querySelector(".descr").innerText = description;
    document.querySelector("#temp").innerText = temp + "°C";
    document.querySelector("#humid").innerText = humidity + "%";
    document.querySelector("#windsp").innerText = speed + "Km/hr";
    document.querySelector(".country").innerText = "  " + country ;
    
    document.querySelector('.container').style.backgroundImage = "url('https://source.unsplash.com/random/?sky&1/orientation=landscape')"   
    
    //document.querySelector('#CT').innerText = name.cities[1] "url('https://source.unsplash.com/featured?" + description +  "orientation=landscape')" 
    
     
  },

  sEarch: function () {
    this.fetchWeather(document.querySelector(".inputext").value)
  },

 
  
}




document.querySelector(".search").addEventListener('click', function () {
  weather.sEarch();
});

document.querySelector(".inputext").addEventListener("keypress", function (event){
  if (event.key  == "Enter") {
    weather.sEarch()
  }
})


const icon = document.querySelector('.icon');
const search = document.querySelector('.search');
const clearbtn = document.querySelector('.close');
const input = document.querySelector('.inputext')


icon.onclick = function(){
  search.classList.toggle('active')
}
clearbtn.addEventListener("click", () => {
  input.value = " ";
})

 

weather.fetchWeather("Abuja")


let cities = ["Kenya", "New york", "Istanbul", "Dubai"]


//API FETCH
let weatheR = {

    apiKey: "91f01b13ee48a44ecf7c67d7c07315fe",
    fetchWeatheR: function(city){
      fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
      + city +
      "&appid=91f01b13ee48a44ecf7c67d7c07315fe&units=metric")
      .then((response) => response.json()).then((data) => this.displayWeatheR(data));
    },
    
     //Display weather
    displayWeatheR: function (data) {
      const  { name } = data;
      const {temp} = data.main;
      const { country } = data.sys;

      console.log(name, temp, country)
     
      let newElement =  document.createElement('div');
      let brac = document.createElement('div');
      let h3 = document.createElement('div');
      let p = document.createElement('p');
      let span = document.createElement('span');

      newElement.classList.add('c1');
      brac.classList.add('brac');
      h3.classList.add('text')
      p.classList.add('sm')
      span.classList.add('text')

      //console.log(span.className);

      h3.textContent = name;
      p.textContent = country;
      span.textContent = temp + ' °C';

     const body = document.querySelector('.content');
     body.appendChild(newElement);
     brac.append(h3,p)
     newElement.append(brac, span);
     
    }
    
};


for (var i = 0; i < cities.length; i++) {
  console.log(weatheR.fetchWeatheR(cities[i]));
   
  };


 
 
 