const app = angular.module('fantasy_football_app', []);

console.log('app')

app.controller('mainController', ['$http',
function($http) {

this.players = [];
this.users = [];
this.rosters = [];

$http({
  method: 'GET',
  url: 'http://localhost:3000/players',
}).then(function(response){
  this.players = response.data;
  console.log(this.players)
})
.catch(err => console.log(err));

$http({
  method: 'GET',
  url: 'http://localhost:3000/users',
}).then(function(response){
  console.log(response.data);
  this.users = response.data;
})
.catch(err => console.log(err));

$http({
  method: 'GET',
  url: 'http://localhost:3000/rosters',
}).then(function(response){
  console.log(response.data);
  this.players = response.data;
})
.catch(err => console.log(err));

}])
