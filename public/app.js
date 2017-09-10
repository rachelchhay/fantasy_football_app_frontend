const app = angular.module('fantasy_football_app', []);

console.log('app')

app.controller('mainController', ['$http',
function($http) {

  this.players = [];
  this.users = [];
  this.rosters = [];
  this.URL = 'https://fantasy-football-tool-api.herokuapp.com/players';

// SEARCH FORM FUNCTION- PLAYER 1
  this.searchPlayers = () => {
    $http({
      method: 'GET',
      url: this.URL,
      data: {
        name: this.name,
        position: this.position,
        team: this.team
      }
    }).then(
      (response) => {
        console.log('Player 1 found: ', response)

        this.foundPlayer = response.data
        this.name = ''
        this.position = ''
        this.team = ''
    }).catch(
      (err) => {
        console.log(err)
      }
    )
  }

  // SEARCH FORM FUNCTION- PLAYER 2
  this.searchPlayers2 = () => {
    $http({
      method: 'GET',
      url: this.URL,
      data: {
        name: this.name2,
        position: this.position2,
        team: this.team2
      }

    }).then(
      (response) => {
        console.log('Player 2 found: ', response)

        this.foundPlayer2 = response.data
        this.name2 = ''
        this.position2 = ''
        this.team2 = ''
    }).catch(
      (err) => {
        console.log(err)
      }
    )
  }




// $http({
//   method: 'GET',
//   url: 'http://localhost:3000/users',
// }).then(function(response){
//   console.log(response.data);
//   this.users = response.data;
// })
// .catch(err => console.log(err));
//
// $http({
//   method: 'GET',
//   url: 'http://localhost:3000/rosters',
// }).then(function(response){
//   console.log(response.data);
//   this.players = response.data;
// })
// .catch(err => console.log(err));


// end of controller
}])
