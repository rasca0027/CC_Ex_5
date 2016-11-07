var poem;
var line_count = 0;
var word_count = 0;
var state = 'typing';
var input = '';
var hidden_input = '';
var skip = false;
var arr = [];


function preload() {
  poem = loadStrings("howl.txt");
  myFont = loadFont("ProggyClean.ttf");
}

function setup() {
  createCanvas(1600, 600);
  console.log(poem[0][100]);
  frameRate(5);
  textSize(32);
  
}

function draw() {
  
  background(255);
  textFont(myFont);
  //text(poem[0].substring(0, frameCount), 100, 100);
  x = 80;
  y = 100;
  word_count ++;
  

    for(var i=0;i<word_count;i++) {
      
      // different color for marked words
      for (var j=0;j<arr.length;j++){
        arr[j].update();
      }
      // always black for normal words
      fill(0);
      // `who` is an important word in Ginsberg's poem. 
      /*
      if ((poem[0][i] == 'w') && (poem[0][i+1] == 'h') && (poem[0][i+2] == 'o')) 
        fill(255, 0, 0);
      if ((poem[0][i] == 'h') && (poem[0][i+1] == 'o') && (poem[0][i-1] == 'w')) 
        fill(255, 0, 0);
      if ((poem[0][i] == '0') && (poem[0][i-1] == 'h') && (poem[0][i-2] == 'w')) 
        fill(255, 0, 0);
      */
      
      // I re-use some of my code last week
      if (state == 'dropping') {
        for (var j=0; j<hidden_input.length; j++) {
          if (poem[0][i] == hidden_input[j]) {
            skip = true;
            var n = new MusicBrick(x, y, poem[0][i]);
            n.display();
            arr.push(n);
            
            
          }
        }
        //state = 'typing';  
      } else if (state == 'typing') {
        for (var j=0; j<input.length; j++) {
          if (poem[0][i] == input[j]) {
            fill(255, 0, 0);
          }
        }
      }
      
      if (skip) {
        text(" ", x, y);
      } else {
        text(poem[0][i], x, y);
      }
      // manually move along x-axis
      x += 15;
      skip = false;
      
      // handle line breaks!
      if ((x >= 1000) || (poem[0][i] == ',')){
        x = 80;
        y += 30;
      }
    } // end for

  // handle user inputs
  text("Type something: ", 100, 500);
  text(input, 330, 500);
  
    

  
}

function keyTyped() {
  input += key;
  state = 'typing';
  
  if (keyCode == '13') {
    state = 'dropping';
    hidden_input += input;
    input = '';
  }
  // uncomment to prevent any default behavior
  // return false;
}

