document.onkeydown = checkpressed;

function Player(x_pos, y_pos, score) {
  this.name = name;
  this.score = score;
  this.position = [x_pos, y_pos];
  this.update = function(){
    return (this.score + 1);
  }
}

function Food(x_pos, y_pos){
  this.x_pos = x_pos;
  this.y_pos = y_pos;
}

function make_food(){
  random_xx = Math.floor(Math.random() * 100);
  random_yy = Math.floor(Math.random() * 95) + -3;
  food = new Food(random_xx, random_yy);
  random_yy_design = random_yy + 2.5;
  document.getElementById('food').style.marginLeft = random_xx.toString() + "%";
  document.getElementById('food').style.top = random_yy_design.toString() + "%";
}

function start(){
  random_x = Math.floor(Math.random() * 100);
  random_y = Math.floor(Math.random() * 95) + -3;
  current_player = new Player(random_x, random_y, 0);
  document.getElementById('play_er').style.marginLeft =  random_x.toString() + "%";
  document.getElementById('play_er').style.top = random_y.toString() + "%";
  make_food();
}

function did_eat(){
  if
    (((current_player.position[0]>((food.x_pos)-1)) & (current_player.position[0]<((food.x_pos)+1)))
    &
    ((current_player.position[1]>((food.y_pos)-1)) & (current_player.position[1]<((food.y_pos)+1))))
    {
      make_food();
      current_player.score = current_player.update();
      document.getElementById('score').innerHTML = current_player.score;
    }
}

function checkpressed(x) {
    x = x || window.event;
    if( (x.keyCode == '37') & ((parseInt(current_player.position[0], 10))>0) ){
      document.getElementById('play_er').style.display = "none";
      new_x_coord = ( parseInt(current_player.position[0], 10) - 1);
      x_new = new_x_coord.toString();
      document.getElementById('play_er').style.marginLeft =  x_new.concat("%");
      current_player.position[0] = x_new;
      document.getElementById('play_er').style.display = "block";
    }
    else if( (x.keyCode == '38') & ((parseInt(current_player.position[1], 10))>-3) ){
      document.getElementById('play_er').style.display = "none";
      new_y_coord = ( parseInt(current_player.position[1], 10) - 1);
      y_new = new_y_coord.toString();
      document.getElementById('play_er').style.top =  y_new.concat("%");
      current_player.position[1] = y_new;
      document.getElementById('play_er').style.display = "block";
    }
    else if( (x.keyCode == '39') & ((parseInt(current_player.position[0], 10))<99) ){
      document.getElementById('play_er').style.display = "none";
      new_x_coord = ( parseInt(current_player.position[0], 10) + 1);
      x_new = new_x_coord.toString();
      document.getElementById('play_er').style.marginLeft =  x_new.concat("%");
      current_player.position[0] = x_new;
      document.getElementById('play_er').style.display = "block";
    }
    else if( (x.keyCode == '40') & ((parseInt(current_player.position[1], 10))<95) ){
      document.getElementById('play_er').style.display = "none";
      new_y_coord = ( parseInt(current_player.position[1], 10) + 1);
      y_new = new_y_coord.toString();
      document.getElementById('play_er').style.top =  y_new.concat("%");
      current_player.position[1] = y_new;
      document.getElementById('play_er').style.display = "block";
    }
    did_eat();
}

function toggle_userinput(){
  btn_status = document.getElementById("btnsave").innerHTML;
  if(btn_status == "Save"){
    document.getElementById("usertext").disabled = true;
    document.getElementById("btnsave").innerHTML = "Done";
  }
}
