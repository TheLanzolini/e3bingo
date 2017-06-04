var congfig;
var cards = {
  0: '"is truly open world"',
  1: 'Spider Man!',
  2: 'Ubisoft opens with Just Dance',
  3: 'SPORTS!',
  4: 'Master Chief is shown',
  5: 'Stage Fright',
  6: 'An Early Access Game on stage',
  7: 'Atlus JRPG gameplay shown on switch',
  8: 'Japanese Dude w/ Translator',
  9: 'Sony reveals new hardware (not a color)',
  10: 'Call of Duty Modern Warfare 2 Remastered',
  11: 'Minecraft: Scorpio Edition',
  12: 'Someone snaps their fingers (switch noise)',
  13: 'VR Shows up',
  14: 'Splatoon eSports',
  15: 'Mario and Sonic in the same game',
  16: 'star wars games show gameplay',
  17: 'Famous person on stage that doesn\'t want to be there',
  18: 'Mixer promotion - live on twitch',
  19: 'David Cage',
  20: 'KOJIMA',
  21: 'Valve shows up',
  22: '"Hip" Exec w/ jeans + game shirt + blazer',
  23: '"It\'s all about you, the fans"',
  24: 'Bethesda launches another mobile game',
  25: 'Tom Fucking Clancy',
  26: 'Metroid bitches!',
  27: 'On stage music that shouldn\'t be there',
  28: 'Ambiguous Exclusively from Microsoft',
  29: 'KH3',
  30: 'Hitman Gets Saved',
  31: 'Cuphead',
  32: 'Someone makes a nerd joke',
  33: 'Remastered Game',
  34: 'Movie Trailer',
  35: '"PRE ORDER NOW!"',
  36: 'New First Party Nintendo title',
  37: 'SMAYSH BRUDDAS',
  38: 'KNACK 2 BAYBEEE',
  39: 'Indie Game Shown',
  40: 'Brand New IP',
  41: 'Mobile Game Appears',
  42: 'Awkward, scripted "team-speak" multiplayer demo'
}
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}

var keys = Object.keys(cards);

var shuffled = shuffleArray(keys);

shuffled = shuffled.slice(0, 25);

if(localStorage.getItem('config')){
  shuffled = JSON.parse(localStorage.getItem('config')).shuffled;
}else{
  localStorage.setItem('config', JSON.stringify({
    shuffled: shuffled
  }))
}

function init(){
  var APP = document.getElementById('app');
  var header = document.createElement('div');
  header.classList.add('header');
  var title = document.createElement('h1');
  title.innerHTML = 'E3 BINGO!';
  header.appendChild(title);
  var about = document.createElement('a');
  about.classList.add('about');
  about.innerHTML = 'About';
  about.target="_blank";
  about.href = 'http://lanzo.space/e3bingo/about';
  header.appendChild(about);

  APP.appendChild(header);

  var table = document.createElement('div');
  table.classList.add('table');
  var rowElem;
  shuffled.forEach(function(key, index){
    var cardString = cards[key];
    if(index >= 25){
      return;
    }
    if(index % 5 == 0 ){
      rowElem = document.createElement('div');
      rowElem.classList.add('row');
      rowElem.setAttribute('row', index/5);
      table.appendChild(rowElem);
    }
    var cellElem = document.createElement('div');
    cellElem.classList.add('cell');
    cellElem.setAttribute('cell', index);
    cellElem.setAttribute('type', key);
    cellElem.style.backgroundImage = "url('images/"+ key +".jpg')"
    if(index == 12){
      cellElem.innerHTML = 'FREE'
    }else{
      cellElem.innerHTML = cardString;
    }
    rowElem.appendChild(cellElem);
  });
  APP.appendChild(table);


}
document.addEventListener('DOMContentLoaded', init);
