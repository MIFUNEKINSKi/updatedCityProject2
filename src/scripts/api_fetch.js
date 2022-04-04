$.get('https://api.teleport.org/api/countries/').then(function (data) {
  var countries = $.map(data['_links']['country:items'], function (country) { return country.name });
  fetchedCities = [];
  countries.forEach(function (country) {
    $.get('https://api.teleport.org/api/cities/?search=' + country + '&embed=city%3Asearch-results%2Fcity%3Aitem%2Fcity').then(function (data) {
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
});


