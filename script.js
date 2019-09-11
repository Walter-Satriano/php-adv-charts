$(document).ready(function() {

  getDataStep1();
  getDataStep2();
  getDataStep3();


  //funzione per convertire la data in italiano
  function getMonths() {

    moment.locale("it");
    var months = moment.months();

    return months;
  }

  //--------------------- STEP 1 ---------------------------
  //funzione per prendere i dati
  function getDataStep1() {

    $.ajax({

      url: "fulldb.php",
      method: "GET",
      success: function(data) {

        printLineGraphStep1(data);
        console.log("data1", data);
      },
      error: function() {
        alert("errore!!!");
      }
    });
  }

  //funzione per stampare il grafico a linea
  function printLineGraphStep1(data) {

    var monthsLabel = getMonths();

    var ctxLine = $("#line_graph_montly_sales");
    var lineGraph = new Chart(ctxLine, {
      type: "line",
      data: {
        labels: monthsLabel,
        datasets: [{
          label: "Vendite",
          data: data,
          borderColor: "rgb(170, 0, 255)",
          backgroundColor: "rgb(194, 194, 194, 0.2)"
        }]
      },
    });
  }


  // ------------------- STEP 2 -------------------------
  //funzione per prendere i dati
  function getDataStep2() {

    $.ajax({

      url: "fulldb2.php",
      method: "GET",
      success: function(data) {

        printLineGraphStep2(data);
        printPieGraphStep2(data);
        console.log("data2", data);
      },
      error: function() {
        alert("errore!!!");
      }
    });
  }

  //funzione per stampare il grafico a linea
  function printLineGraphStep2(data) {

    var monthsLabel = getMonths();
    var typeGraph = data.fatturato.type;
    var montlySales = data.fatturato.data;

    var ctxLine = $("#line_graph_montly_sales2");
    var lineGraph = new Chart(ctxLine, {
      type: typeGraph,
      data: {
        labels: monthsLabel,
        datasets: [{
          label: "Vendite",
          data: montlySales,
          borderColor: "rgb(170, 0, 255)",
          backgroundColor: "rgb(194, 194, 194, 0.2)"
        }]
      },
    });
  }

  //funzione per stampare il grafico a torta
  function printPieGraphStep2(data) {

    var typeGraph = data.fatturato_by_agent.type;
    var agentName = Object.keys(data.fatturato_by_agent.data);
    var salesByAgent = Object.values(data.fatturato_by_agent.data);

    var ctxPie = $("#pie_graph_sales_by_agent");
    var pieGraph = new Chart(ctxPie, {
      type: typeGraph,
      data: {
        labels: agentName,
        datasets: [{
          label: "# Vendite per Agente",
          data: salesByAgent,
          backgroundColor: [
            "rgb(255, 0, 0)",
            "rgb(255, 255, 0)",
            "rgb(0, 255, 0)",
            "rgb(0, 0, 255)"
          ]
        }]
      },
    });
  }

  // ------------------- STEP 3 -------------------------
  //funzione per prendere i dati
  function getDataStep3() {

    $.ajax({

      url: "fulldb3.php",
      method: "GET",
      success: function(data) {

        printMultiLineGraph(data);
        console.log("data3", data);
      },
      error: function() {
        alert("errore!!!");
      }
    });
  }

  //funzione per stampare il grafico multilinea
  function printMultiLineGraph(data) {

    var monthsLabel = getMonths();
    var typeGraph = data.team_efficiency.type;
    var team = Object.keys(data.team_efficiency.data);
    var efficiencytTeam1 = Object.values(data.team_efficiency.data.Team1);
    var efficiencytTeam2 = Object.values(data.team_efficiency.data.Team2);
    var efficiencytTeam3 = Object.values(data.team_efficiency.data.Team3);

    console.log("team", team);

    var ctxLine = $("#multiline_graph_team");
    var lineGraph = new Chart(ctxLine, {
      type: typeGraph,
      data: {
        labels: monthsLabel,
        datasets: [
          {
            label: team[0],
            data: efficiencytTeam1,
            backgroundColor: "rgb(194, 194, 194, 0.2)",
            borderColor: "rgb(0, 255, 0)"
          },
          {
            label: team[1],
            data: efficiencytTeam2,
            backgroundColor: "rgb(194, 194, 194, 0.3)",
            borderColor: "rgb(0, 0, 255)"
          },
          {
            label: team[2],
            data: efficiencytTeam3,
            backgroundColor: "rgb(194, 194, 194, 0.4)",
            borderColor: "rgb(255, 0, 0)"
          }
        ]
      },
    });
  }





});
