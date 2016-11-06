var poem;
var line_count = 0;
var count = 0;


function preload() {
  poem = loadStrings("howl.txt");
  myFont = loadFont("monof55.ttf");
}

function setup() {
  createCanvas(1600, 600);
  console.log(poem[0].substring(0, 10));
  frameRate(5);
  textSize(32);
  
}

function draw() {
  
  background(255);
  textFont(myFont);
  //text(poem[0].substring(0, frameCount), 100, 100);
  x = 100;
  y = 100;
  count ++;
  
  
  if (count >= poem[line_count].length)
    line_count += 1;

  if (line_count >= 30)
    line_count = 30;

  for (var j=0; j<=line_count;j++) {
    for (var i=0; i<=count;i++) {
      if (poem[j][i] == ',') {
        line_count += 1;
      }
      text(poem[j][i], x, y);
      console.log(poem[j][i]);
      x += 15;
    }
    y += 40;
    x = 100;
    //count = 0;
    
  }
  
}