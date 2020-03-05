// Km/h in dagen

google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart1);

      function drawChart1() {
        var data = google.visualization.arrayToDataTable([
          ['dagen', 'Km/h'],
          ['0',  0,],
          ['2',  10000,],
          ['4',  15000,],
          ['6',  11500,],
          ['8',  13000,],
          ['10',  11500,],
          ['12',  12000,]
        ]);

        var options = {
          title: 'De aantal kilimeters per uur',
          hAxis: {title: 'dagen',  titleTextStyle: {color: '#fff'}},
          vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);


      }


// benzine

google.charts.load('current', {'packages':['gauge']});
      google.charts.setOnLoadCallback(drawChart2);

      function drawChart2() {

        var data = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Kerosine', 200],
        ]);

        var options = {
          width: 400, height: 260,
          redFrom: 85, redTo: 100,
          yellowFrom:65	, yellowTo: 85,
          minorTicks: 10
        };

        var chart = new google.visualization.Gauge(document.getElementById('chart2_div'));

        chart.draw(data, options);

        setInterval(function() {
          data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
          chart.draw(data, options);
        }, 13000);
        setInterval(function() {
          data.setValue(1, 1, 40 + Math.round(60 * Math.random()));
          chart.draw(data, options);
        }, 5000);
        setInterval(function() {
          data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
          chart.draw(data, options);
        }, 26000);
      }


//Voedsel

google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart3);
    function drawChart3() {
      var data = google.visualization.arrayToDataTable([
        ["Element", "Density", { role: "style" } ],
        ["Eten", 11.94, "#52DB31"],
        ["Drinken", 12.49, "#3998F8"],
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        width: 260,
        height: 200,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.BarChart(document.getElementById("barchart_values"));
      chart.draw(view, options);
  }