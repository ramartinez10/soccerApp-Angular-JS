import angular from 'angular';

import {initRoutes} from '../routes/config.js';
import mainController from '../controllers/mainController.js';
import navController from '../controllers/navController.js';
import getLeagues from '../factories/leagues.js';
import playersService from '../services/playersService.js'
import customFilters from '../filters/customFilters.js';


let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}


const MODULE_NAME = 'soccerApp';

angular.module(MODULE_NAME,['customFilters',require('angular-route')])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl)
  .controller("navCtrl",function($scope){
    $scope.title="Soccer App"
  });

  // routes
initRoutes();

// services
playersService();

// controllers
mainController();
navController();

// factories
getLeagues();

// filters
customFilters();

export default MODULE_NAME;