const loadCountrys = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(Response => Response.json())
        .then(data => displayCountrys(data))
}

loadCountrys()

const displayCountrys = countrys => {
    // for (country of countrys) {
    //     console.log(country)
    const countryDiv = document.getElementById('countyrs');
    countrys.forEach(country => {
        // console.log(country)
        const div = document.createElement('div')
        div.classList.add('country')
        div.innerHTML = `
        <h2>${country.name}</h2>
        <p>${country.capital}</p>
        <button onclick="countryDetails('${country.name}')">Details</button>
        `

        countryDiv.appendChild(div);

    })

};

const countryDetails = country => {
    const url = `https://restcountries.eu/rest/v2/name/${country}`;
    fetch(url)
        .then(Response => Response.json())
        .then(data => displayCountryDetails(data[0]))
};

const displayCountryDetails = country => {
    // console.log(country)
    const countryDetails = document.getElementById('country-details');
    countryDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('country-details')
    div.innerHTML = `
        <h2>Name: ${country.name}</h2>
        <p>Population: ${country.population}</P>
        <img width="200px"; src="${country.flag}">
    `
    countryDetails.appendChild(div)
}