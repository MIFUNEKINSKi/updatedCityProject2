window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
});


// need a city class that will take in input from user and query the api for that city
// globe class
// tooltip class.


// getCities is not working 

function getCities = (){
  await fetch('https://api.teleport.org/api/countries/').then(function (data) {
    var countries = map(data['_links']['country:items'], function (country) { return country.name });
    fetchedCities = [];
    countries.forEach(function (country) {
      ('https://api.teleport.org/api/cities/?search=' + country + '&embed=city%3Asearch-results%2Fcity%3Aitem%2Fcity').then(function (data) {
        var cities = data['_embedded']['city:search-results'];
        cities.forEach(function (city) {
          var city = {
            country: country,
            fullName: city['_embedded']['city:item'].full_name,
            name: city['_embedded']['city:item'].name,
            population: city['_embedded']['city:item'].population
          }
          fetchedCities.push(city);
        });
        console.log(fetchedCities);
      });
    });
  });}





// teleport_city_score
// categories[0].name
// score_out_of_10
