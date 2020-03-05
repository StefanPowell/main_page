main_div_id = "main_collage";
popup_div_id = "pop_up";


function pop_up(text){
	document.getElementById(main_div_id).style.display = "none";
	document.getElementById(popup_div_id).style.display = "block";
	document.getElementById("heading_text").innerHTML = texta;
}
function cancel(){
	document.getElementById(main_div_id).style.display = "block";
	document.getElementById(popup_div_id).style.display = "none";
}