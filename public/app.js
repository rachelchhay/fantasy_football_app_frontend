const app = angular.module('fantasy_football_app', []);

console.log('app')

app.controller('mainController', ['$http',
function($http) {

  // this.players = [];
  // this.users = [];
  // this.rosters = [];

// SEARCH FORM FUNCTION- PLAYER 1
  this.searchPlayers = () => {
    $http({
      method: 'GET',
      url: 'http://localhost:3000/players',
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
      url: 'http://localhost:3000/players',
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

  this.comparePlayers1 = function() {

    const ctx = document.querySelector('#touchdowns');

    const chartData = {

      labels: [],

      datasets: [
        {
          label: 'Touchdowns',
          data: []
        },
        {
          label: 'Fantasy Points',
          data: []
        },
        {
          label: 'Yards',
          data: []
        }
      ]
    };

  fetch('http://localhost:3000/players/1')
  .then(response => response.json())
  .then(json => {
      console.log(json);


      const tds= json.touchdowns;
      const points = json.fantasy_points;
      const yards = json.yards;
      console.log(tds);
      console.log(points);

      chartData.datasets[1].data.push(points);
      chartData.datasets[0].data.push(tds);
      chartData.datasets[2].data.push(yards)



      const statsChart = new Chart(ctx, {
        type:'bar',
        data: chartData
      })
    })
  .catch(err => console.log(err));
}

this.comparePlayers2 = function() {

  const ctx = document.querySelector('#touchdowns2');

  const chartData = {

    labels: [],

    datasets: [
      {
        label: 'Touchdowns',
        data: []
      },
      {
        label: 'Fantasy Points',
        data: []
      },
      {
        label: 'Yards',
        data: []
      }
    ]
  };

fetch('http://localhost:3000/players/2')
.then(response => response.json())
.then(json => {
    console.log(json);


    const tds= json.touchdowns;
    const points = json.fantasy_points;
    const yards = json.yards;
    console.log(tds);
    console.log(points);

    chartData.datasets[1].data.push(points);
    chartData.datasets[0].data.push(tds);
    chartData.datasets[2].data.push(yards)



    const statsChart = new Chart(ctx, {
      type:'bar',
      data: chartData
    })
  })
.catch(err => console.log(err));
}

  // const statsChart = new Chart(ctx, {
  //   type:'line',
  //   data: chartData
  // })
  // .catch(err => console.log(err))
// }






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
