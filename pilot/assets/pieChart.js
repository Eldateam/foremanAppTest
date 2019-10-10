google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per day'],
        ['Labour', 11],
        ['Electrical', 5],
        ['Pipe', 2],
        ['Mechanical', 5],
        ['Shift Extra', 1]
    ]);

    var options = {
        title: 'Anual Material budget',
        is3D: true,
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
    chart.draw(data, options);
}