// Modal ** NOT WORKING ** 

// import Modal from "src/scripts/modal"

// window.addEventListener('DOMContentLoaded', () => {
//   const modal = new Modal();
//   modal.render();
//   const modalContainer = document.getElementById("about-modal-container");

//   const aboutButton = document.getElementById("about-button");
//   aboutButton.addEventListener("click", () => {
//     modalContainer.id =
//       modalContainer.id === "about-modal-container"
//         ? "about-modal-container-clicked"
//         : "about-modal-container";
//   });
//   const continueButton = document.getElementById("continue-button");
//   continueButton.addEventListener("click", () => {
//     modalContainer.id =
//       modalContainer.id === "about-modal-container"
//         ? "about-modal-container-clicked"
//         : "about-modal-container";
//   });
// });


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
