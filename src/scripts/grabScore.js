
function cityScoreFromName(city) {
        const getData = async () => {
            const data = [];

  const f1_data = await fetch(`https://api.teleport.org/api/urban_areas/slug:${city}/scores/`)
                .then(response => response.json())
                .then(data => 
                  console.log(data.teleport_city_score));


        };

  getData();
    }
