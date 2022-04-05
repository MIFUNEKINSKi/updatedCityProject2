

    // Load the Visualization API and the piechart package.
    google.load('visualization', '1.0', {'packages': ['corechart'] });

    // Set a callback to run when the Google Visualization API is loaded.
    google.setOnLoadCallback(drawChart);

    // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.
    function drawChart() {

        // Create the data table.
        var data = google.visualization.arrayToDataTable([
    ['Item', 'Yes', {role: 'tooltip' }, 'No', {role: 'tooltip' }],
    ['Score1', 50, '', .5, ''],
    ['Score2', 90, '', .5, ''],
    ]);


    var options = {
        width: 250,
    height: 150,
    backgroundColor: '#FFFFF0',
    legend: {position: 'none' },
    hAxis: {textPosition: 'none', gridlines: {color: 'grey', count: 2 } },
    bar: {groupWidth: '75%' },
    isStacked: true,
    colors: ['#FF6600', '#FFFFF0'],
        };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
    chart.draw(data, options);
    var chart2 = new google.visualization.BarChart(document.getElementById('chart_div2'));
    chart.draw(data2, options2);
    }

    draw(chart);
    draw(chart2);
