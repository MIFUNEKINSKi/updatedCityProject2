                
                
                const width = 960;
                const height = 500;
                const config = {
                    speed: .0025,
                    verticalTilt: -25,
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
                const div = d3.select("body").append("div")
                    .attr("class", "tooltip-donut")
                    .style("opacity", 0);

                drawGlobe();
                drawGraticule();
            
                
                let rotationOn = false
                svg.append("text")
                    .attr("x", width / 2)
                    .attr("y", height - 10)
                    .text("PLAY")
                    .attr("text-anchor", "middle")
                    .style("font-family", "sans-serif")
                    .on("mouseout", function () { d3.select(this).style("text-decoration", "none") })
                    .on("click", function () {
                        rotationOn = !rotationOn;
                        d3.select(this).text("")
                        if (rotationOn) {
                            enableRotation();
                        }

                    })
                    

               

                function drawGlobe() {
                    d3.queue()
                        .defer(d3.json, 'https://gist.githubusercontent.com/mbostock/4090846/raw/d534aba169207548a8a3d670c9c2cc719ff05c47/world-110m.json')
                        .defer(d3.json, 'locations.json')
                        .await((error, worldData, locationData) => {
                            svg.selectAll(".segment")
                                .data(topojson.feature(worldData, worldData.objects.countries).features)
                                .enter().append("path")
                                .attr("class", "d")
                                .attr("d", path)
                                .style("stroke", "darkgrey")
                                .style("stroke-width", "1px")
                                .style("fill", (d, i) => 'green')
                                .style("opacity", ".75");
                        
                                
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
                        console.log(markers)
                    markers
                        .on('mouseover', function (d) {
                            d3.select(this).style("fill", "red")
                            // d3.select(this).transition()
                            //     .duration('50')
                            //     .attr('opacity', '.75');
                            NAME = d.name;
                            SCORE = d.score;
                            SUMMARY = d.summary;

                                div.transition()
                                .duration(50)
                                .style("opacity", 1);
                                 div.html(NAME + " " + SCORE + " " + " " + SUMMARY)
                                 .style("left", (d3.event.pageX + 10) + "px")
                                 .style("top", (d3.event.pageY - 15) + "px");
                            

                                
                        })

                        .on('mouseout', function () {
                            d3.select(this).transition()
                                .duration('50')
                                .attr('opacity', '1');
                                // try to fix bug where it follows marker after click
                            this.attr('fill', d => {
                                const coordinate = [d.longitude, d.latitude];
                                gdistance = d3.geoDistance(coordinate, projection.invert(center));
                                return gdistance > 1.57 ? 'none' : 'steelgrey';
                            });
                           
                        })
                        .enter()
                        .append('circle')
                     
                        .merge(markers)
                        .attr('cx', d => projection([d.longitude, d.latitude])[0])
                        .attr('cy', d => projection([d.longitude, d.latitude])[1])
                        
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



           

