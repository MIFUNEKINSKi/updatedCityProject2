
                const width = 960;
                const height = 500;
                const config = {
                    speed: 0.005,
                    verticalTilt: -30,
                    horizontalTilt: 0
                }
                let locations = [];
                let svg = d3.select('svg')
                    .attr('width', width).attr('height', height);
                const markerGroup = svg.append('g');
                const projection = d3.geoOrthographic();
                const initialScale = projection.scale();
                const path = d3.geoPath().projection(projection);
                const center = [width / 2, height / 2];

                drawGlobe();
                drawGraticule();
                enableRotation();

                function drawGlobe() {
                    d3.queue()
                        .defer(d3.json, 'https://gist.githubusercontent.com/mbostock/4090846/raw/d534aba169207548a8a3d670c9c2cc719ff05c47/world-110m.json')
                        .defer(d3.json, 'locations.json')
                        .await((error, worldData, locationData) => {
                            svg.selectAll(".segment")
                                .data(topojson.feature(worldData, worldData.objects.countries).features)
                                .enter().append("path")
                                .attr("class", "segment")
                                .attr("d", path)
                                .style("stroke", "#888")
                                .style("stroke-width", "1px")
                                .style("fill", (d, i) => '#e5e5e5')
                                .style("opacity", ".6");
                            locations = locationData;
                            drawMarkers();
                        });
                }

                function drawGraticule() {
                    const graticule = d3.geoGraticule()
                        .step([10, 10]);

                    svg.append("path")
                        .datum(graticule)
                        .attr("class", "graticule")
                        .attr("d", path)
                        .style("fill", "#fff")
                        .style("stroke", "#ccc");
                }

                function enableRotation() {
                    d3.timer(function (elapsed) {
                        projection.rotate([config.speed * elapsed - 120, config.verticalTilt, config.horizontalTilt]);
                        svg.selectAll("path").attr("d", path);
                        drawMarkers();
                    });
                }

                function drawMarkers() {
                    const markers = markerGroup.selectAll('circle')
                        .data(locations);
                    markers
                        .enter()
                        .append('circle')
                        .merge(markers)
                        .attr('cx', d => projection([d.longitude, d.latitude])[0])
                        .attr('cy', d => projection([d.longitude, d.latitude])[1])
                        .attr('another', d => projection([d.longitude, d.latitude, d.name])[2])
           
                        .on("mouseover", function (d) {
                            console.log(d)
                            NAME = d.name
                            d3.timer(function (elapsed) {
                                projection.rotate([config.speed % elapsed - 120, config.verticalTilt, config.horizontalTilt]);
                                svg.selectAll("path").attr("d", path);
                                drawMarkers();
                            });
                            enableRotation()

                        })
                        .on("click", function (d) {
                            console.log("clicking");
                            console.log(cityScoreFromName(NAME))
                        })
                     
                        .attr('fill', d => {
                            const coordinate = [d.longitude, d.latitude];
                            gdistance = d3.geoDistance(coordinate, projection.invert(center));
                            return gdistance > 1.57 ? 'none' : 'steelgrey';
                        })

                        .attr('r', 7);
                        
                        
                        

                    markerGroup.each(function () {
                        this.parentNode.appendChild(this);
                        
                    });
        }



           


// var width = 345,
//     height = 300;
// var projection = d3.geoMercator()
//     .center([88.36, 27.58])
//     .translate([width / 2, height / 2])
//     .scale(7000);
// var path = d3.geoPath()
//     .projection(projection);

// var svg = d3.select('#Sk_Map').append('svg')
//     .attr('width', width)
//     .attr('height', height);

// var g = svg.append('g');

// d3.json('https://raw.githubusercontent.com/shklnrj/IndiaStateTopojsonFiles/master/Sikkim.topojson')
//     .then(state => {

//         g.append("g")
//             .selectAll("path")
//             .data(topojson.feature(state, state.objects.Sikkim).features)
//             .enter()
//             .append("path")
//             .attr("d", path)
//             .attr("class", "feature")
//             .on("click", function (d) {
//                 var prop = d.properties;
//                 var string = "<p><strong>District Name</strong>: " + prop.Dist_Name;
//                 d3.select("#Place_Details")
//                     .html(string)
//             })

//         g.append('path')
//             .datum(topojson.mesh(state, state.objects.Sikkim, (a, b) => a !== b))
//             .attr('class', 'boundary')
//             .attr('d', path);

//     });