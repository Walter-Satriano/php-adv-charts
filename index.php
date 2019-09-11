<!DOCTYPE html>
<html lang="" dir="ltr">
  <head>
    <meta charset="utf-8">
    <!-- FONT: LATO -->
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet">

    <!-- FONT: FONTAWESOME -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css">

    <!-- JS: JQUERY -->
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <!-- JS: MOMENT -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.min.js"></script>

    <!-- JS: HANDLEBARS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.1.0/handlebars.min.js" charset="utf-8"></script>
    <!-- TEMPLATE: MESSAGE MENU -->
    <script id="item-template" type="text/x-handlebars-template">
    </script>

    <!-- JS: CHART JS -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0/dist/Chart.min.js"></script>

    <!-- CSS: MY STYLE -->
    <link rel="stylesheet" href="style.css">

    <title>Advanced Dashboard Charts</title>
  </head>
  <body>

    <div class="container">

      <div class="step1">
        <h1>STEP 1</h1>
        <canvas id="line_graph_montly_sales"></canvas>
      </div>

      <div class="step2">
        <h1>STEP 2</h1>
        <canvas id="line_graph_montly_sales2"></canvas>
        <canvas id="pie_graph_sales_by_agent"></canvas>
      </div>


    </div>


    <!-- JS: MY SCRIPT -->
    <script src="script.js" charset="utf-8"></script>

  </body>
</html>
