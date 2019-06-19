import angular from 'angular';

import {initRoutes} from '../routes/config.js'
import SoccerController from '../controllers/soccerController'
import NavBarController from '../controllers/NavBarController'
import {LeagueService} from '../factories/leagues'
import { ILeagueService} from '../factories/leagues'
import {ScorerService,IScorers} from '../services/scorerService'
import CustomFilters from '../filters/customFilters'
import PlayerController from '../controllers/PlayerController'
import CreateController from '../controllers/createController'

const MODULE_NAME = 'soccerApp';

angular.module(MODULE_NAME,[require('angular-route')])
.controller("soccerCtrl",SoccerController)
.controller('navCtrl',NavBarController)
.controller('playerCrtl',PlayerController)
.controller('createCtrl',CreateController)
.factory("soccerApi",factoryLeague)
.service("scorerService",serviceScorer)
.filter("countryKeyFormat",CustomFilters.countryKeyFormat);

factoryLeague.$inject = ['$http'];
function factoryLeague($http: ng.IHttpService): ILeagueService {
    return new LeagueService($http);
}

serviceScorer.$inject = ['$http'];
function serviceScorer($http: ng.IHttpService): IScorers {
    return new ScorerService($http);
}

initRoutes();
export default MODULE_NAME;