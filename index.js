"use strict";
const apiKey = 'ef171a0f7a5385aa841ac64f68cfd9e8';


let appelApi = function(ville) {

	//URL openweather
	let url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${apiKey}&units=metric&lang=fr`;

	fetch (url).then((response) => 
			response.json().then((data) => {
			console.log (data);

		//ville
			document.querySelector("#ville").innerHTML = data.name + "<br/>"+ "<img src='images/weather-report.png' class='icon-weather'>";
			

		// temps
			document.querySelector("#temps").innerHTML = data.main.temp + "°C" + "<br/>"+ "<img src='images/temperature.png' class='icon'>";


		//humidite
			document.querySelector("#humidite").innerHTML = data.main.humidity + "%" + "<br/>" + "<img src='images/humidite.png' class='icon'>";
			

		//vent
			document.querySelector("#vent").innerHTML = data.wind.speed + "km/h" + "<br/>" + "<img src='images/vent.png' class='icon'>";
		
		// info climat	
			document.querySelector("#info").innerHTML = data.weather[0].description;

			})
			)
		.catch(err => console.log('Erreur : '+ err));

}



//Event

const cta = document.querySelector('#bouton');

cta.addEventListener ("click", function(e) {
	
	e.preventDefault();

	let meteoVille = document.querySelector("#inputCity").value;

	//Regex - regular expression, je veux seulement des lettres
	let rejex = new RegExp (/[a-zA-Z]/);

	//Est-ce que la variable meteoVille match le regex ?
	let res = meteoVille.match(rejex)

	if (res) {
		appelApi(meteoVille);

	} else {
		alert ('Désolé, il faut rentrer des lettres');
		//si ça ne marche pas j'affiche erreur
	}

});


// Météo par default à l'ouverture de la page

appelApi("Lyon");

