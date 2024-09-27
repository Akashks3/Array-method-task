//1
fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(countries => {
        const asianCountries = countries.filter(country => country.region === 'Asia');
        console.log(asianCountries);
    });
//2
fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(countries => {
        const smallPopulationCountries = countries.filter(country => country.population < 200000);
        console.log(smallPopulationCountries);
    });
//3
fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(countries => {
        countries.forEach(country => {
            console.log(`Name: ${country.name.common}, Capital: ${country.capital ? country.capital[0] : 'N/A'}, Flag: ${country.flags.svg}`);
        });
    });
 //4 
fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(countries => {
        const totalPopulation = countries.reduce((total, country) => total + country.population, 0);
        console.log(`Total Population: ${totalPopulation}`);
    });
 //5 
fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(countries => {
        const usDollarCountries = countries.filter(country => {
            return country.currencies && Object.keys(country.currencies).includes('USD');
        });
        
        usDollarCountries.forEach(country => {
            console.log(`Country: ${country.name.common} uses US Dollar`);
        });
    });