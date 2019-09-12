$(document).ready(function() {

  $("#level_button").click(getDataStep3);
  // getDataStep1();
  // getDataStep2();


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
        alert("errore in getDataStep1!!!");
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
        alert("errore in getDataStep2!!!");
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
          borderColor: "rgb(0, 0, 0)",
          backgroundColor: [
            "rgb(255, 0, 0)",
            "rgb(255, 255, 0)",
            "rgb(0, 255, 0)",
            "rgb(0, 0, 255)"
          ],
          borderWidth: 1,
        }]
      },
    });
  }

  // ------------------- STEP 3 -------------------------
  //funzione per prendere i dati
  function getDataStep3() {

    var level = $(".select_level").val();
    console.log("level selected: ", level);

    $.ajax({

      url: "fulldb3.php",
      method: "GET",
      data: {"level": level},
      success: function(data) {


        if(data[0]) {
          printLineGraphStep3(data[0]);
        }

        if(data[1]) {
          printPieGraphStep3(data[1]);
        }

        if(data[2]) {
          printMultiLineGraph(data[2]);
        }

        console.log("data3", data);
      },
      error: function() {
        alert("errore in getDataStep3!!!");
      }
    });
  }

  //funzione per stampare il grafico a linea
  function printLineGraphStep3(data) {

    var ctxLine = $('#line_graph_montly_sales3');
    var lineGraph = new Chart(ctxLine, {
      type: data.type,
      data: {
        labels: getMonths(),
        datasets: [{
          label: "Vendite",
          data: data.data,
          borderColor: "rgb(170, 0, 255)",
          backgroundColor: "rgb(194, 194, 194, 0.2)"
        }]
      },
    });
  }

  //funzione per stampare il grafico a torta
  function printPieGraphStep3(data) {

    var ctxPie = $("#pie_graph_sales_by_agent2");
    var pieGraph = new Chart(ctxPie, {
      type: data.type,
      data: {
        labels: Object.keys(data.data),
        datasets: [{
          label: "# Vendite per Agente",
          data: Object.values(data.data),
          borderColor: "rgb(0, 0, 0)",
          backgroundColor: [
            "rgb(255, 0, 0)",
            "rgb(255, 255, 0)",
            "rgb(0, 255, 0)",
            "rgb(0, 0, 255)"
          ],
          borderWidth: 1,
        }]
      },
    });
  }

  //funzione per stampare il grafico multilinea
  function printMultiLineGraph(data) {

    var ctxLine = $("#multi_line_graph_team");
    var lineGraph = new Chart(ctxLine, {
      type: data.type,
      data: {
        labels: getMonths(),
        datasets: [
          {
            label: Object.keys(data.data)[0],
            data: Object.values(data.data.Team1),
            backgroundColor: "rgb(194, 194, 194, 0.2)",
            borderColor: "rgb(0, 255, 0)"
          },
          {
            label: Object.keys(data.data)[1],
            data: Object.values(data.data.Team2),
            backgroundColor: "rgb(194, 194, 194, 0.3)",
            borderColor: "rgb(0, 0, 255)"
          },
          {
            label: Object.keys(data.data)[2],
            data: Object.values(data.data.Team3),
            backgroundColor: "rgb(194, 194, 194, 0.4)",
            borderColor: "rgb(255, 0, 0)"
          }
        ]
      },
    });
  }


});
