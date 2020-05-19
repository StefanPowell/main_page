document.onkeydown = checkpressed;

function Player(x_pos, y_pos) {
  this.name = name;
  this.score = 0;
  this.position = [x_pos, y_pos];
}

function Block(){
  this.speed = 1;
  this.x_pos = 0;
  this.y_pos = 0;
}

current_player = new Player(50, 0);
block = new Block();

function create_blocks(){
  //  create element
  //  add class
  //  add id
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
    else if( (x.keyCode == '39') & ((parseInt(current_player.position[0], 10))<95) ){
      document.getElementById('play_er').style.display = "none";
      new_x_coord = ( parseInt(current_player.position[0], 10) + 1);
      x_new = new_x_coord.toString();
      document.getElementById('play_er').style.marginLeft =  x_new.concat("%");
      current_player.position[0] = x_new;
      document.getElementById('play_er').style.display = "block";
    }

}
