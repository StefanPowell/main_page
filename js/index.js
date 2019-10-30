//phone view toggle add animation - jQuery

$(document).ready(function(){
  $("#toggle_img").click(function(){
	$("#git").toggle();
	$("#insta").toggle();
    $("#fb").toggle();
  });
});

//code that animates containers
//create triple array with current div poistions - top and left and element id
var div_id = ['algo', 'os', 'database', 'ml', 'data', 'web', 'cyber', 'cloud', 'compilers']
var containers = [
	//left top - algorithms div being center
	[0, 0],
	[32, 0],
	[64, 0],
	[0, 105],
	[32, 105],
	[64, 105],
	[0, 210],
	[32, 210],
	[64, 210]
]

//function to select a random number
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

//randomly select two element by id
function select_div(){
	elements = []
	element_one = getRandomInt(0,8);
	elements.push(element_one);
	element_two = getRandomInt(0,8);
 	while (element_one == element_two) {
  		element_two = getRandomInt(0,8);
	}
	elements.push(element_two);
	return elements;
}

function animate(elementid, left, top, elementidnext, left_next, top_next){
	var cssAnimation = document.createElement('style');
	cssAnimation.type = 'text/css';
	
	var first_rules = document.createTextNode('@-webkit-keyframes ' + elementid + ' {'+
	  '0%   {left:0%; top:0%;}'+
	  '100% {left:' + left + '%; top:' + top + '%;}'+
	'}');
	var second_rules = document.createTextNode('@-webkit-keyframes ' + elementidnext + ' {'+
	  '0%   {left:0%; top:0%;}'+
	  '100% {left:' + left_next + '%; top:' + top_next + '%;}'+
	'}');
	
	cssAnimation.appendChild(first_rules);
	cssAnimation.appendChild(second_rules);
	document.getElementsByTagName("head")[0].appendChild(cssAnimation);
}

function compareleft (x1, x2){
	if (x1 < x2){
		x1 = x2 - x1;
	}
	if (x1 > x2){
		x1 = 0 - x1;
	}
	return x1;
}
function comparetop (x1, x2){
	if (x1 < x2){
		x1 = x2 - x1;
	}
	if (x1 > x2){
		x1 = 0 - x1;
	}
	return x1;
}

function set_animation(){
	selected_elements = select_div();
	first_element_name = div_id[selected_elements[0]];
	second_element_name = div_id[selected_elements[1]];
	first_element_points = containers[selected_elements[0]];
	second_element_points = containers[selected_elements[1]];
	
	temp_points = first_element_points;
	
	first_element_points[0] = compareleft(first_element_points[0], second_element_points[0]);
	first_element_points[1] = comparetop(first_element_points[1], second_element_points[1]);
	second_element_points[0] = compareleft(second_element_points[0], temp_points[0]);
	second_element_points[1] = comparetop(second_element_points[1], temp_points[1]);
	
	animate(first_element_name, first_element_points[0], first_element_points[1], second_element_name, second_element_points[0], second_element_points[1]);
}

