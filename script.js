$(document).ready(function() {

  getDataStep1();
  getDataStep2();


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
          label: "# Vendite",
          data: data,
           borderColor: [
             "rgb(170, 0, 255)"
           ]
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
          label: "# Vendite",
          data: montlySales,
          borderColor: [
            "rgb(170, 0, 255)"
          ]
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





});
