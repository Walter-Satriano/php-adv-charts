$(document).ready(function() {

  getData();


  //funzione per prendere i dati
  function getData() {

    $.ajax({

      url: "fulldb.php",
      method: "GET",
      success: function(data) {

        printLineGraph(data);
        console.log("data", data);

      },
      error: function() {

        alert("errore!!!");
      }
    });
  }

  //funzione per convertire la data in italiano
  function getMonths() {

    moment.locale("it");

    var months = moment.months();
    console.log("funzione getMonths", months);

    return months;
  }


  //funzione per stampare il grafico a linea
  function printLineGraph(data) {

    var monthsLabel = getMonths();

    var ctxLine = document.getElementById("line_graph").getContext("2d");
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


});
