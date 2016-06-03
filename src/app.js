// for now - our hockey net is a 10/10 grid
// each cell represents a percentage (0 - 1)
// of shots taken at that target, and how
// often they result in a goal.

// each point is a list of the form
// [x, y, value]

// 600 x 400 = 240,000
function makeData() {
  var data = [];

  var RADIUS = 45;
  var WIDTH = RADIUS * 2;
  var NUM_COLUMNS = Math.ceil(600 / WIDTH);

  for (var row = 0; row < 5; row++) {

    // col
    for (var i = 0; i < NUM_COLUMNS; i++) {
      var x = (i * WIDTH) + RADIUS;
      var y = (row * WIDTH) + RADIUS;

      data.push([ x, y, Math.random() ]);
    }
  }

  return data;
}

function drawHeatmap() {
  var data = makeData();

  var heat = simpleheat('canvas')
    .radius(45, 60)
    .data(data);

  heat.draw();
}

drawHeatmap();