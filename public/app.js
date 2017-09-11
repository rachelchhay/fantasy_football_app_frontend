const app = angular.module('fantasy_football_app', []);

console.log('app')

app.controller('mainController', ['$http',
function($http) {

  this.players = [];
  this.users = [];
  this.rosters = [];
  this.player1 = {};
  this.player2 = {};
  this.URL = 'https://fantasy-football-tool-api.herokuapp.com/players';

  this.URLii = 'http://localhost:3000/players';

  this.positionArray = [
    {position: 'RB', name: 'RB'},
    {position: 'WR', name: 'WR'},
    {position: 'TE', name: 'TE'},
    {position: 'QB', name: 'QB'},
  ];
  this.teamArray = [
    {team: 'Ari', name: 'Ari'},
    {team: 'Atl', name: 'Atl'},
    {team: 'Bal', name: 'Bal'},
    {team: 'Buf', name: 'Buf'},
    {team: 'Car', name: 'Car'},
    {team: 'Chi', name: 'Chi'},
    {team: 'Cin', name: 'Cin'},
    {team: 'Cle', name: 'Cle'},
    {team: 'Dal', name: 'Dal'},
    {team: 'Den', name: 'Den'},
    {team: 'Det', name: 'Det'},
    {team: 'GB', name: 'GB'},
    {team: 'Hou', name: 'Hou'},
    {team: 'Ind', name: 'Ind'},
    {team: 'Jax', name: 'Jax'},
    {team: 'KC', name: 'KC'},
    {team: 'LAC', name: 'LAC'},
    {team: 'LAR', name: 'LAR'},
    {team: 'Mia', name: 'Mia'},
    {team: 'Min', name: 'Min'},
    {team: 'NE', name: 'NE'},
    {team: 'NO', name: 'NO'},
    {team: 'NYG', name: 'NYG'},
    {team: 'NYJ', name: 'NYJ'},
    {team: 'Oak', name: 'Oak'},
    {team: 'Phi', name: 'Phi'},
    {team: 'Pit', name: 'Pit'},
    {team: 'Sea', name: 'Sea'},
    {team: 'SF', name: 'SF'},
    {team: 'TB', name: 'TB'},
    {team: 'Ten', name: 'Ten'},
    {team: 'Wsh', name: 'Wsh'}
  ];
  this.position2Array = [
    {position: 'RB', name: 'RB'},
    {position: 'WR', name: 'WR'},
    {position: 'TE', name: 'TE'},
    {position: 'QB', name: 'QB'},
  ];
  this.team2Array = [
    {team: 'Ari', name: 'Ari'},
    {team: 'Atl', name: 'Atl'},
    {team: 'Bal', name: 'Bal'},
    {team: 'Buf', name: 'Buf'},
    {team: 'Car', name: 'Car'},
    {team: 'Chi', name: 'Chi'},
    {team: 'Cin', name: 'Cin'},
    {team: 'Cle', name: 'Cle'},
    {team: 'Dal', name: 'Dal'},
    {team: 'Den', name: 'Den'},
    {team: 'Det', name: 'Det'},
    {team: 'GB', name: 'GB'},
    {team: 'Hou', name: 'Hou'},
    {team: 'Ind', name: 'Ind'},
    {team: 'Jax', name: 'Jax'},
    {team: 'KC', name: 'KC'},
    {team: 'LAC', name: 'LAC'},
    {team: 'LAR', name: 'LAR'},
    {team: 'Mia', name: 'Mia'},
    {team: 'Min', name: 'Min'},
    {team: 'NE', name: 'NE'},
    {team: 'NO', name: 'NO'},
    {team: 'NYG', name: 'NYG'},
    {team: 'NYJ', name: 'NYJ'},
    {team: 'Oak', name: 'Oak'},
    {team: 'Phi', name: 'Phi'},
    {team: 'Pit', name: 'Pit'},
    {team: 'Sea', name: 'Sea'},
    {team: 'SF', name: 'SF'},
    {team: 'TB', name: 'TB'},
    {team: 'Ten', name: 'Ten'},
    {team: 'Wsh', name: 'Wsh'}
  ];


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
        console.log('Players on left side: ', response)
        console.log(response.data)

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
        console.log('Players on the right side: ', response)

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

  this.comparePlayers1 = function(p) {

    console.log(p);

    this.player1 = p;
    // console.log('Player grabbed: ' , this.player1)

    const ctx = document.querySelector('#touchdowns');

    const chartData = {

      labels: [],

      datasets: [
        {
          label: 'Touchdowns',
          data: [this.player1.touchdowns]
        },
        {
          label: 'Fantasy Points/Week',
          data: [(this.player1.fantasy_points/16)]
        },
        {
          label: 'Yards/Week',
          data: [(this.player1.yards/16)]
        }
      ]
    };

    const statsChart = new Chart(ctx, {
      type:'bar',
      data: chartData
    })

// .catch(err => console.log(err));
}

this.comparePlayers2 = function(x) {

  console.log(x);


  const ctx = document.querySelector('#touchdowns2');

  const chartData = {

    labels: [],

    datasets: [
      {
        label: 'Touchdowns',
        data: [this.player2.touchdowns]
      },
      {
        label: 'Fantasy Points',
        data: [(this.player2.fantasy_points/16)]
      },
      {
        label: 'Yards',
        data: [(this.player2.yards)]
      }
    ]
  };

  const statsChart = new Chart(ctx, {
    type:'bar',
    data: chartData
  })
// .catch(err => console.log(err));
}

    // const tds= json.touchdowns;
    // const points = json.fantasy_points;
    // const yards = json.yards;
    // console.log(tds);
    // console.log(points);
    //
    // chartData.datasets[1].data.push(points);
    // chartData.datasets[0].data.push(tds);
    // chartData.datasets[2].data.push(yards)


//     const statsChart = new Chart(ctx, {
//       type:'bar',
//       data: chartData
//     })
//   })
// .catch(err => console.log(err));
// }

  // const statsChart = new Chart(ctx, {
  //   type:'line',
  //   data: chartData
  // })
  // .catch(err => console.log(err))
// }

// .then(response => response.json())
// .then(json => {
//     console.log(json);



// Code graveyard for player comparisons

    // const statsChart = new Chart(ctx, {
    //   type:'line',
    //   data: chartData
    // })
    // .catch(err => console.log(err))
    // }

    // .then(response => response.json())
    // .then(json => {
    //     console.log(json);

    // const tds= json.touchdowns;
    // const points = json.fantasy_points;
    // const yards = json.yards;
    // console.log(tds);
    // console.log(points);

    // chartData.datasets[1].data.push(points);
    // chartData.datasets[0].data.push(tds);
    // chartData.datasets[2].data.push(yards)




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
