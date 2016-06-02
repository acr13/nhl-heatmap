// for now - our hockey net is a 10/10 grid
// each cell represents a percentage (0 - 1)
// of shots taken at that target, and how
// often they result in a goal.

function init() {
  var net = [];
  var GRID_SIZE = 10;

  for (var row = 0; row < GRID_SIZE; row++) {
    net[row] = [];

    for (var column = 0; column < GRID_SIZE; column++) {
      net[row][column] = Math.random().toFixed(2);
    }
  }

  // convert this gird into an html grid
  var htmlNet = document.getElementsByClassName('net')[0];

  for (row = 0; row < GRID_SIZE; row++) {

    var netRow = document.createElement('div');
    netRow.className = 'row';

    for (var column = 0; column < GRID_SIZE; column++) {
      var cell = document.createElement('div');
      cell.innerHTML = net[row][column];
      netRow.appendChild(cell);
    }

    htmlNet.appendChild(netRow);
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  init();
});