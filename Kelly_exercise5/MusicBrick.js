
function MusicBrick(x, y, w) {
  this.base_x = x;
  this.base_y = y;
  this.x = x;
  this.y = y;
  this.speed = 0.05;
  this.stop = false;
  this.word = w;
  
  this.display = function() {
    noStroke();
    rectMode(CENTER);
    fill(this.x, 60, 150);
    //fill(random(255), 60, 150);
    text(this.word, this.x, this.y);
    
  }
  
  this.update = function() {
    
    noStroke();
    rectMode(CENTER);
    // make gradient color
    fill(map(this.x, 0, 600, 0, 255), 60, 150);
    //console.log('drop!');
    
    // drops down
    if (!this.stop) {
      this.y += this.speed * (this.y);
       if (this.y >= 580) {
        this.y = 580;
        this.stop = true;
      }
    } 
    // finally draw it
    text(this.word, this.x, this.y);
    
  }
  
  this.check_collide = function(pad) {
    
    
    /* kind of give up ........... gonna try an easier way......
    // calculate if the brick is colliding with the pad
    var vec_ab = pad.vec();
    var vec_ap = createVector(this.x - pad.x1, this.y - pad.y1);
    var pad_length = pad.get_length();
    
    // vector projection
    var projection = vec_ap.dot(vec_ab) / pad_length;
    console.log(projection);
    //var distance_pc = vector_length(vector_ap) - projection;
    
    if ((projection <= pad_length) && (distance_pc <= 1600)) {
      return true;
      console.log('collide');
    } else {
      return false;
    }*/
    
    // if the angle between brick and pad is close to zero, assume they are colliding
    var v1 = pad.vec();
    var v2 = createVector(this.x - pad.x1, this.y - pad.y1);
    var angle = p5.Vector.angleBetween(v1, v2);
    
    if ((angle <= 0.2) && (this.x - 20 < pad.x2 )){
      //console.log('collide');
      this.stop = true;
    }
    return angle;
    
  }
  
  
}