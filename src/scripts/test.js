

fetch('https://api.teleport.org/api/urban_areas/')
  .then((res) => {
   
      if (res.ok) {
      console.log("success");
      return res.json();
    } else {
      throw new Error('Network response was not ok');
    }

  })

  .then((data) => console.log(data))
  .catch((error) => console.log(error));


// console.log(data1);

// let jsondata;
// fetch('https://api.teleport.org/api/urban_areas/').then(
//   function (u) { return u.json(); }
// ).then(
//   function (json) {
//     jsondata = json;
//   }
// )
// console.log(jsondata)


// $.get('https://api.teleport.org/api/countries/').then(function (data) {
//   var countries = data.map(data['_links']['country:items'], function (country) { return country.name });
//   fetchedCities = [];
//   countries.forEach(function (country) {
//     $.get('https://api.teleport.org/api/cities/?search=' + country + '&embed=city%3Asearch-results%2Fcity%3Aitem%2Fcity').then(function (data) {
//       var cities = data['_embedded']['city:search-results'];
//       cities.forEach(function (city) {
//         var city = {
//           country: country,
//           fullName: city['_embedded']['city:item'].full_name,
//           name: city['_embedded']['city:item'].name,
//           population: city['_embedded']['city:item'].population
//           latlon: city['_embedded']['city:item'].latlon
//           geoname_id: city['_embedded']['city:item'].latlon
//           
//         }
//         fetchedCities.push(city);
//       });
//       console.log(fetchedCities);
//     });
//   });
// });