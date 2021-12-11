fetch("scores.txt")
    .then(resp => resp.text())
    .then(text => chartFrontier(getScorePoints(text)));

function getScorePoints(text) {
    var points = [];
    scores = text.split('\n');
    for (let i = 0; i < scores.length; i++) {
        var metrics = scores[i].split('/');
        points.push({x: metrics[0], y: metrics[2]})
    }
    return points
}

function chartFrontier(points) {
  const data = {
    datasets: [{
      backgroundColor: 'rgb(0, 0, 0)',
      data: points,
    }]
  };

  const options = {
      scales: {
          x: { title: {display: true, text: "Cycles"},
               type: 'linear',
               ticks: { beginAtZero: false }},
          y: { title: {display: true, text: "Symbols"}}
      }
  };

  const frontier = new Chart(
    document.getElementById('frontier'),
    { type: 'line', data: data, options: options});
}
