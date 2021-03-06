<?php 
include('php/fb.php');
?>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <title>Facebook Graph Application</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Le styles -->
    <link href="css/bootstrap.css" rel="stylesheet">
    <style type="text/css">
      body {
        padding-top: 40px;
        padding-bottom: 40px;
        background-color: #f5f5f5;
      }

      .app {
        -webkit-box-sizing: border-box;
           -moz-box-sizing: border-box;
                box-sizing: border-box;
        padding: 19px 29px 29px;
        margin: 0 auto 20px;
        background-color: #fff;
        border: 1px solid #e5e5e5;
        -webkit-border-radius: 5px;
           -moz-border-radius: 5px;
                border-radius: 5px;
        -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.05);
           -moz-box-shadow: 0 1px 2px rgba(0,0,0,.05);
                box-shadow: 0 1px 2px rgba(0,0,0,.05);
      }
      .app .app-heading,
      .app .checkbox {
        margin-bottom: 10px;
      }
      .app input[type="text"],
      .app input[type="password"] {
        font-size: 16px;
        height: auto;
        margin-bottom: 15px;
        padding: 7px 9px;
      }

      .app-toolbar{padding: 10px 0px;margin-left: 0px !important;}
      .app .friend-item{margin-bottom:10px;}
    </style>
    <link href="css/bootstrap-responsive.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/style.css">
  </head>

  <body>

    <div class="container">
      <div class="app row">
        <div class="span12">
          <h2 class="app-heading">Facebook Friends Analysis</h2>
          <?php if($currentUser) : ?>

            <img src="<?= $currentProfile['picture']['data']['url'] ?>" alt="Photo de profil"> <?= $currentProfile['name'] ?><br>
            Nombre d'amis : <?= sizeof($friendsProfile['data'])  ?>

            <a class='fbLogout' href="<?= $logoutUrl ?>">Deconnexion Facebook</a>

          <?php else : ?>

            <a class='fbLogin' href="<?= $loginUrl ?>">Connexion Facebook</a>

          <?php endif; ?>
          <div class="chartdiv" id="sex"></div><div class="chartdiv" id="relation"></div><div class="chartdiv" id="age"></div><div class="chartdiv" id="mutual"></div>
          <div class="span12 app-toolbar">
            <input id="filtrer" type="text" size="65" placeholder="Filtrer votre liste d'ami(e)s..."/>
          </div>
          <div class="span12 app-toolbar btn-group">
            <button class="btn" id="stat">Analyser les données de mes ami(e)s</button>
            <button class="btn" id="byName">Sort by name</button>
            <button class="btn" id="byBirthday">Sort by birthday</button>
            <div id="fb-root"></div>
            <fb:login-button show-faces="true" width="200" max-rows="1"></fb:login-button>
          </div>
          <div class="friend-list row"></div>
        </div>
      </div>
    </div>

    <!-- Le javascript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->

    <script id="friendsTmpl" type="text/x-template" charset="utf-8">
      <div class="media">
        <a class="pull-left">
          <img class="media-object" data-src="holder.js/64x64" alt="64x64" style="width: 64px; height: 64px;" src="<%= picture %>">
        </a>
        <div class="media-body">
          <h4 class="media-heading"><a href="<%= link %>" target="_blank"><%= first_name %> <%= last_name %></a></h4>
        </div>
        Anniversaire : <%= birthday %><br>
        Status Relationnel : <%= relationship_status %><br>
        <a href="<%= website %>" target='_blank'>Site internet</a>
      </div>
    </script>

    <script src="js/getFriends.js"></script>
    <script src="js/jquery-1.9.0.js"></script>
    <script src="js/highcharts.js"></script>
    <script src="js/charts.js"></script>
    <script src="js/bootstrap.2.2.2.js"></script>
    <script src="js/underscore.1.4.js"></script>
    <script src="js/backbone.1.0.0.js"></script>
    

    <!-- on déclare un espace de nom -->
    <script>
      var FbApp = {};
    </script>

    <script src="app/Friend.js"></script>
    <script src="app/FriendView.js"></script>
    <script src="app/FriendsView.js"></script>
    <script src="app/Friends.js"></script>
    <script src="app/charts/ChartModel.js"></script>
    <script src="app/charts/ChartView.js"></script>
    <script src="app/charts/ChartsSexModel.js"></script>
    <script src="app/charts/ChartsAgeModel.js"></script>
    <script src="app/charts/ChartsMutualFriendsModel.js"></script>
    <script src="app/charts/ChartsRelationShipModel.js"></script>
    <script src="app/charts/ChartsSexView.js"></script>
    <script src="app/charts/ChartsRelationShipView.js"></script>
    <script src="app/charts/ChartsAgeView.js"></script>
    <script src="app/charts/ChartsMutualFriendsView.js"></script>

    <script src="app/AppView.js"></script>
    <script src="js/init.js"></script>
    <!-- <script src="js/fb.js"></script> -->
  </body>
</html>
