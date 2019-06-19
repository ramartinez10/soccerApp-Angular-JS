function initRoutes(){
angular.module("soccerApp").config(['$routeProvider',function config($routeProvider) {
  $routeProvider.
    when('/', {
      template:require('../partials/home.html'),
      activetab: 'league'
    }).
    when('/player/', {
      template:require('../partials/player.html'),
      controller:'playerCrtl',
      activetab: 'player'
    }).
    when('/player/:codigo',{
      template:require('../partials/player.html'),
      activetab: 'player'
    })
    .when('/create',{
      template:require('../partials/createPlayer.html'),
      activetab:'create'
    })
}
]);
}

export {initRoutes};

