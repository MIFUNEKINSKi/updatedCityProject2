

google.load('visualization', '1.0', { 'packages': ['corechart'] });

google.setOnLoadCallback(drawChart);


function drawChart() {

    // Create the data table.
     let data = google.visualization.arrayToDataTable([
        ['Item', 'Yes', { role: 'tooltip' }, 'No', { role: 'tooltip' }],
        ['New York', 500, '', .5, ''],
        ['Everywhere else, especially socal', 90, '', .5, ''],
    ]);


    var options = {
        width: 250,
        height: 150,
        backgroundColor: '#FFFFF0',
        legend: { position: 'none' },
        hAxis: { textPosition: 'none', gridlines: { color: 'grey', count: 2 } },
        bar: { groupWidth: '75%' },
        isStacked: true,
        colors: ['#FF6600', '#FFFFF0'],
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
    chart.draw(data, options);
    // var chart2 = new google.visualization.BarChart(document.getElementById('chart_div2'));
}

draw(chart);
