var map = {};

document.addEventListener('keydown', function(e) {
  map[e.keyCode] = true;
  if(map[18] && map[16] && map[88]) {
      window.location = 'https://www.reddit.com/r/random';
  }
}, false);

document.addEventListener('keyup', function(e) {
  map[e.keyCode] = false;
}, false);
