function Star(x,y) {
  this.x = x;
  this.y = y;
  var d = random(1,5);

  this.show = function(){
    ellipse(this.x, this.y, d, d);
    stroke(140);
    noFill();
  }

  this.move = function(v){
      this.x += random(-v,v);
      this.y += random(-v,v);
  }

  this.follow = function(v){
    if ((this.x < windowWidth/2) && (dist(this.x, this.y, windowWidth/2, windowHeight/2) > windowWidth/3)) {
      this.x += random(-v,3*v);
    }else if ((this.x > windowWidth/2) && (dist(this.x, this.y, windowWidth/2, windowHeight/2) > windowWidth/3)) {
      this.x += random(-3*v,v);
    }else if ((this.y < windowHeight/2) && (dist(this.x, this.y, windowWidth/2, windowHeight/2) > windowHeight/3)){
      this.y += random(-v,3*v);
    }else if((this.y > windowHeight/2) && (dist(this.x, this.y, windowWidth/2, windowHeight/2) > windowHeight/3)){
      this.y += random(-3*v,v);
    }
  }

}
