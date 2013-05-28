// initialisation de la vue de l'application
(function(){
  var myFriends = new FbApp.Friends();
  var myFriendsModif = new FbApp.Friends();
  // model par charts
  var myChartSex = new FbApp.ChartsSexModel({
    collection:myFriendsModif,
    search:'sex'
  });
  var myChartAge = new FbApp.ChartsAgeModel({
    collection:myFriendsModif,
    search:'birthday_date'
  });
  var myChartRelationShip = new FbApp.ChartsRelationShipModel({
    collection:myFriendsModif,
    search:'relationship_status'
  });
  var myChartMutualFriends = new FbApp.ChartsMutualFriendsModel({
    collection:myFriendsModif,
    search:'mutual_friend_count'
  });

  var myApp = new AppView({
    collection : myFriends,
    modifColl: myFriendsModif,
    el: $('.app')[0]
  });
  myFriends.reset(getFriends());

  var chartSex = new FbApp.ChartsSexView({
    model:myChartSex,
    collection:myChartSex.collection,
    el: $('#sex')[0]
  });

  var chartRelationShip = new FbApp.ChartsRelationShipView({
    model:myChartRelationShip,
    collection:myChartRelationShip.collection,
    el: $('#relation')[0]
  });

  var chartAge = new FbApp.ChartsAgeView({
    model:myChartAge,
    collection:myChartAge.collection,
    el: $('#age')[0]
  });

  var chartMutualFriends = new FbApp.ChartsMutualFriendsView({
    model:myChartMutualFriends,
    collection:myChartMutualFriends.collection,
    el: $('#mutual')[0]
  });

})();