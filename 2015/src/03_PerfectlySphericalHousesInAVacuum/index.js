function numHousesOnSantasRoute (routeDirections) {
  if (typeof routeDirections === 'string') {
    var route = trackARoute(routeDirections.split(''));
    return Object.keys(route).length;
  } else {
    throw new TypeError('The parameter routeDirections must be a string.');
  }
}

function numHousesOnSplitRoute (routeDirections) {
  if (typeof routeDirections === 'string') {
    var directions = routeDirections.split('');
    var santasRoute = trackARoute(directions.filter((step, i) => i % 2 === 0));
    var addRoboSantasRoute = trackARoute(directions.filter((step, i) => i % 2 !== 0), santasRoute);
    return Object.keys(addRoboSantasRoute).length;
  } else {
    throw new TypeError('The parameter routeDirections must be a string.');
  }
}

function trackARoute (directions, visitedHomes) {
  var currentX = 0;
  var currentY = 0;
  var visited = visitedHomes || {};
  var xyAxisLocation = `[${currentX}][${currentY}]`;
  visited[xyAxisLocation] = visited[xyAxisLocation] + 1 || 1;

  for (let i = 0; i < directions.length; i = i + 1) {
    switch (directions[i]) {
    case '^':
      currentY = currentY + 1;
      break;
    case 'v':
      currentY = currentY - 1;
      break;
    case '<':
      currentX = currentX - 1;
      break;
    case '>':
      currentX = currentX + 1;
      break;
    default:
      break;
    }
    xyAxisLocation = `[${currentX}][${currentY}]`;
    (visited[xyAxisLocation]) ? visited[xyAxisLocation] += 1 : visited[xyAxisLocation] = 1;
  }

  return visited;
}

module.exports = {
  numHousesOnSantasRoute: numHousesOnSantasRoute,
  numHousesOnSplitRoute: numHousesOnSplitRoute
};
