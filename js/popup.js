main_div_id = "main";
popup_div_id = "hidden_div";

function web_design(){
	document.getElementById(main_div_id).style.display = "none";
	document.getElementById(popup_div_id).style.display = "block";
}

function hide(){
	document.getElementById(main_div_id).style.display = "block";
	document.getElementById(popup_div_id).style.display = "none";
}
