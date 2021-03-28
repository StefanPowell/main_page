cols = ["a", "b", "c", "d", "e", "f", "g", "h"];
rows = [1, 2, 3, 4, 5, 6, 7, 8];
min_value = 1;
max_value = 8;
//set starting four - two white [d4, e5] and two black [d5, e4]

//create file for static variables
var turnCount = 0
var playerTurn;
var playerOneScore = 0;
var playerTwoScore = 0;
var players=[];
var playerOneTokenColor = "black"
var playerTwoTokenColor = "white"
var playerTwoLocations = ["a2", "b1", "b3", "c2", "d1", "d3", "e2", "f1", "f3", "g2", "h1", "h3"]
var playerOneLocations = ["a6", "a8", "b7", "c6", "c8", "d7", "e6", "e8", "f7", "g6", "g8", "h7"]
var currentSelected = false

function Game(){
	this.playerOneTurn = true;
	this.playerTwoTurn = false;
	this.currentSelected = false;
	this.changeTurns = function(){
		this.playerOneTurn = change(this.playerOneTurn);
		this.playerTwoTurn = change(this.playerTwoTurn);
	}
}

function Player(name, locationsarray) {
  this.name = name;
  this.score = 0;
  this.tokenLocation = locationsarray;
  this.getname = function(){
	return name;
  }
  this.getTokenLocations = function(){
	  return this.tokenLocation;
  }
}

function change(bool){
	if(bool == true){
		return false;
	}else{
		return true;
	}
}

function begin(){
  var startingvalues = {};
    
  for(i = 0; i < playerOneLocations.length; i++){
	  startingvalues[playerOneLocations[i]] = playerOneTokenColor;
  }
  for(j = 0; j < playerTwoLocations.length; j++){
	  startingvalues[playerTwoLocations[j]] = playerTwoTokenColor;
  }
  
  for(var element in startingvalues) {
    var color = startingvalues[element];
    document.getElementById(element).style.backgroundColor = color;
    document.getElementById(element).style.color = color;
    document.getElementById(element).style.display = "block";
  }
}

function log_data(text){
  current_logs = document.getElementById("logs").innerHTML;
  new_logs = text.concat(current_logs);
  document.getElementById("logs").innerHTML = new_logs;
}

function start_game(){
  var player1 = document.getElementById("first_player_input").value;
  var player2 = document.getElementById("second_player_input").value;
  if(player1.length > 0 && player2.length > 0){
	GameInstance = new Game();
	begin();
	playerOne = new Player(player1, playerOneLocations);
	playerTwo = new Player(player2, playerTwoLocations);
	log_data(playerOne.getname().toString() + " vs " + playerTwo.getname().toString())
  }else{
	log_data("Please Add Usernames")
  }
}

function coordinates(event){
  max = 500;
  var x = event.clientX;
  var y = event.clientY;
  var coor = "X coords: " + x + ", Y coords: " + y;
  if(x > (max/10) && x < (max)-(max/10) && y > (max/10) && y < (max)-(max/10)){
	//GameInstance.changeTurns();
    var point_min = 50;
    var point_max = 450;
    //get x coordinates
    x_coord = Math.floor(cols.length - ((point_max - x) / point_min));
    //get y coordinates
    y_coord = Math.floor(cols.length - ((point_max - y) / point_min));
	isvalidselect(cols[x_coord], rows[y_coord]);
	//log_data("<div> > " + cols[x_coord] + rows[y_coord].toString() + "</div>")
  }
}

function currentplayer(){
	if(GameInstance.playerOneTurn){current_player = 1}else{current_player = 2};
	return current_player;
}

function isvalidselect(letter, number){
	if(currentSelected == false){
		cell_selected = "" + letter + number.toString() + "";
		current_player = currentplayer();
		if(current_player == 1 && playerOne.getTokenLocations().includes(cell_selected)){
			currentSelected = cell_selected;
			highlightselected(cell_selected);
			show_possible_moves(cell_selected);
		} else if(current_player == 2 && playerTwo.getTokenLocations().includes(cell_selected)){
			//console.log(true);
		}
	}else if(currentSelected != false){
		//remove slevcted value
		//remove_selected()
	}
}

function show_possible_moves(element){
	if(currentplayer() == 1){
		directblockscheck(element);
		//jumpcheck();
	}else{
		//
	}
}

function directblockscheck(element){
	x_value = element[0];
	y_value = element[1];
	x_location = cols.indexOf(x_value);
	y_location = rows.indexOf(parseInt(y_value));
	try{location_right = "" + cols[x_location - 1].toString() + rows[y_location - 1] + "";}catch(err){location_right = null}
	try{location_left = "" +  cols[x_location + 1].toString() + rows[y_location - 1] + "";}catch(err){location_left = null}
	all_cells = [];
	array_of_blocks = [];
	for(i=0; i<cols.length; i++){
		for(j=0; j<rows.length; j++){
			all_cells.push( cols[i] + rows[j].toString() );
		}
	}
	if(all_cells.includes(location_right)){array_of_blocks.push(location_right)}
	if(all_cells.includes(location_left)){array_of_blocks.push(location_left)}
	highlight_blocks([array_of_blocks]);
}

function highlight_blocks(values){
	for(x = 0; x < values.length + 1; x++){
		cell_location = values[values.length - 1];
		cell = cell_location[x][0] + "_" + cell_location[x][1];
		document.getElementById(cell).style.backgroundColor = "#93aff3";
	}
}

function highlightselected(element){
	document.getElementById(element).style.backgroundColor = "#00FF7F";
    document.getElementById(element).style.color = "#00FF7F";
}

function placePlayerToken() {
  document.querySelectorAll('.inside').forEach(item => {
    item.addEventListener('click', event => {
      var tokenToPlace
      if(item.children[0].style.display === "block"){
        alert("You can not place a new token in an occupied cell.")
        return
      }
      turnCount += 1
      determinePlayerTurn(turnCount)
      console.log("FIRST","Turn Count:", turnCount, "Player Turn:", playerTurn,"Scores: ", playerOneScore, playerTwoScore)

      if(playerTurn == players[1]){
        buildPlayerToken(playerTwoTokenColor, item.children[0])
        playerTwoScore += 1
      }else if(playerTurn == players[0]) {
        buildPlayerToken(playerOneTokenColor, item.children[0])
        playerOneScore += 1
      }
      updateScoreBoard()
      console.log("Current Score",playerOneScore, playerTwoScore)
    })
  })
}

function determinePlayerTurn(turnCount) {
  if(turnCount % 2 == 0) {
    playerTurn = players[1]
  }else{
    playerTurn = players[0]
  }
  console.log("THIRD", "Player Turn", playerTurn)
}

