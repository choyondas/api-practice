const loadCountries = ()=>{
    fetch("https://restcountries.com/v3.1/all")
    .then(res=>res.json())
    .then(data=>displayCountries(data))
}



const displayCountries = countries =>{
    console.log(countries[0])
    const countriesHTML = countries.map(country=>showCountryHTML(country))
    const container = document.getElementById("countries");
container.innerHTML=countriesHTML.join(' ')
console.log(countriesHTML[0])
}


const showCountryHTML = country=>{
console.log(country[0])


return `

<div class="country" >

<h2> ${country.name.common}</h2>
<h4>${country.capital}</h4>
<img src="${country.flags.png}" ></img>

</div>

`

}



loadCountries()