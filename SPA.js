let countries;
fetch("https://restcountries.eu/rest/v2/all")
.then(res => res.json() )
.then (data => initilize(data))
.catch(err => console.log("ERROR: ", err))

function initilize(countriesData) {
	countries = countriesData;
	let names = "";
	let capital = "";
	let details = "";
	for(let i=0; i<15; i++) {
		names += `<li>${countries[i].name}</li>`

	  if(countries[i].capital == "") {
	  	capital+=`<li>${countries[i].name} has no capital </li>`
	  			}
	  else{
		capital+=`<li>${countries[i].capital} </li>`
			}

		details += `<button data-target="more" class="test" value="${countries[i].alpha3Code}"> Details </button>`
	}


let countriesList = document.getElementById("countries"),
		capitalsList = document.getElementById("capitals"),
		buttonsList =  document.getElementById("details")
		countriesList.innerHTML = names;
		capitalsList.innerHTML = capital;
		buttonsList.innerHTML = details;
}
