//Spending credits to train more units. 
//
function build(credits, unites){

	var C = credits.value;
	var Uts = unites.value;

	if (C >= 10){
		Uts = ++Uts;
		C = C - 10;
	} 
	else{
	return;
	};

	creditNo.value = C;
	unitsNo.value = Uts;
}

function initCredits(){
	creditNo.value = 0;
	window.setInterval(function() { increment(); }, 1000);
}


//Increasing credits by 1.
//will need to be moved into the timer. 
//
function increment(){
 	creditNo.value++;
}


//Selecting the mission and passing in the units and computer units to fight with. 
//
function mission(PlayerUnits, lvl){
	console.log(PlayerUnits.value, " Units");
	console.log("mission level ", lvl);

	var Comp_units, player_units

	player_units = PlayerUnits.value

	if (lvl == 1) {
		Comp_units = 3;
		if (battle(Comp_units, player_units)){
			console.log("Sucessful returned TRUE")
			document.getElementById("Mission2").disabled = false; //Not working  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11
		}
		console.log("mission 1 failed"); //to be removed
		//FAILED
	}
	else if (lvl == 2) {
		Comp_units = 6;
		console.log("mission 2");//to be removed
		battle(Comp_units, player_units);
	}
	else if (lvl == 3) {
		Comp_units = 10;
		console.log("mission 3");//to be removed
		battle(Comp_units, player_units);
	}
	
}


//This fight code.. 
//
function battle(c_units, p_units){

	var result; 

	result = p_units - c_units;

	if (result > 0){
		unitsNo.value = result;
		return true;
	}
	else {
		return false;
	}
}