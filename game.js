var game = {
	state: {
	flower: 0,
	C1: {
		amount: 0,
		cost: 40,
		prod: 1,
		interval: 1
	},
	C3: {
		amount: 0,
		cost: 2000,
		prod: 50,
		interval: 3
	},
	C4: {
		amount: 0,
		cost: 60000,
		prod: 24000,
		interval: 4
	},
	tap: 1
	},
	upgradeArray: [1337,0,0,0,0,0,0,0,0,0,0,0,0,0],
	buttonArray: [420,"<button type='button' onclick='u1()'>Make More Flowers<br>Costs 200 flowers<br>F/C: 1->10</button><br>","<button type='button' onclick='u2()'>Bigger Leaves 1<br>Costs 1,000 flowers<br>Multiply 1 Leaf Clovers' production by 5.</button><br>","","","","","","","","","","",""],
	strArray: [69,
		   "<button type='button' onclick='u1()'>Make More Flowers<br>Costs 200 flowers<br>F/C: 1->10</button><br>",
		   "<button type='button' onclick='u2()'>Bigger Leaves 1<br>Costs 1,000 flowers<br>Multiply 1 Leaf Clovers' production by 5.</button><br>",
		   "<button type='button' onclick='u3()'>Bigger Leaves 2<br>Costs 10,000 flowers<br>Multiply 1 Leaf Clovers' production by 4.</button><br>",
		   "<button type='button' onclick='u4()'>Bigger Leaves 3<br>Costs 50,000 flowers<br>Multiply 1 Leaf Clovers' production by 3.</button><br>",
		   "<button type='button' onclick='u5()'>Bigger Leaves 4<br>Costs 170,000 flowers<br>Double 1 Leaf Clovers' production.</button><br>",
		   "<button type='button' onclick='u6()'>Bigger Leaves 5<br>Costs 400,000 flowers<br>Double 1 Leaf Clovers' production.</button><br>",
		   "<button type='button' onclick='u7()'>Bigger Leaves 6<br>Costs 800,000 flowers<br>Double 1 Leaf Clovers' production.</button><br>",
		   "<button type='button' onclick='u8()'>Bigger Leaves 7<br>Costs 1,800,000 flowers<br>Double 1 Leaf Clovers' production.</button><br>",
		   "<button type='button' onclick='u9()'>Better Leaves 1<br>Costs 10,000 flowers<br>Triple 3 Leaf Clovers' production.</button><br>",
		   "<button type='button' onclick='u10()'>Better Leaves 2<br>Costs 25,000 flowers<br>Triple 3 Leaf Clovers' production.</button><br>",
		   "<button type='button' onclick='u11()'>Better Leaves 3<br>Costs 125,000 flowers<br>Triple 3 Leaf Clovers' production.</button><br>",
		   "<button type='button' onclick='u12()'>Better Leaves 4<br>Costs 500,000 flowers<br>Triple 3 Leaf Clovers' production.</button><br>",
		   "<button type='button' onclick='u13()'>Better Leaves 5<br>Costs 1,800,000 flowers<br>Triple 3 Leaf Clovers' production.</button><br>"]
};
var AFPS;
function hardReset() {
	game = {
	state: {
	flower: 0,
	C1: {
		amount: 0,
		cost: 40,
		prod: 1,
		interval: 1
	},
	C3: {
		amount: 0,
		cost: 2000,
		prod: 50,
		interval: 3
	},
	C4: {
		amount: 0,
		cost: 60000,
		prod: 24000,
		interval: 4
	},
	tap: 1
	},
	upgradeArray: [1337,0,0,0,0,0,0,0,0,0,0,0,0,0],
	buttonArray: [420,"<button type='button' onclick='u1()'>Make More Flowers<br>Costs 200 flowers<br>F/C: 1->10</button><br>","<button type='button' onclick='u2()'>Bigger Leaves 1<br>Costs 1,000 flowers<br>Multiply 1 Leaf Clovers' production by 5.</button><br>","","","","","","","","","","",""],
	strArray: [69,
		   "<button type='button' onclick='u1()'>Make More Flowers<br>Costs 200 flowers<br>F/C: 1->10</button><br>",
		   "<button type='button' onclick='u2()'>Bigger Leaves 1<br>Costs 1,000 flowers<br>Multiply 1 Leaf Clovers' production by 5.</button><br>",
		   "<button type='button' onclick='u3()'>Bigger Leaves 2<br>Costs 10,000 flowers<br>Multiply 1 Leaf Clovers' production by 4.</button><br>",
		   "<button type='button' onclick='u4()'>Bigger Leaves 3<br>Costs 50,000 flowers<br>Multiply 1 Leaf Clovers' production by 3.</button><br>",
		   "<button type='button' onclick='u5()'>Bigger Leaves 4<br>Costs 170,000 flowers<br>Double 1 Leaf Clovers' production.</button><br>",
		   "<button type='button' onclick='u6()'>Bigger Leaves 5<br>Costs 400,000 flowers<br>Double 1 Leaf Clovers' production.</button><br>",
		   "<button type='button' onclick='u7()'>Bigger Leaves 6<br>Costs 800,000 flowers<br>Double 1 Leaf Clovers' production.</button><br>",
		   "<button type='button' onclick='u8()'>Bigger Leaves 7<br>Costs 1,800,000 flowers<br>Double 1 Leaf Clovers' production.</button><br>",
		   "<button type='button' onclick='u9()'>Better Leaves 1<br>Costs 10,000 flowers<br>Triple 3 Leaf Clovers' production.</button><br>",
		   "<button type='button' onclick='u10()'>Better Leaves 2<br>Costs 25,000 flowers<br>Triple 3 Leaf Clovers' production.</button><br>",
		   "<button type='button' onclick='u11()'>Better Leaves 3<br>Costs 125,000 flowers<br>Triple 3 Leaf Clovers' production.</button><br>",
		   "<button type='button' onclick='u12()'>Better Leaves 4<br>Costs 500,000 flowers<br>Triple 3 Leaf Clovers' production.</button><br>",
		   "<button type='button' onclick='u13()'>Better Leaves 5<br>Costs 1,800,000 flowers<br>Triple 3 Leaf Clovers' production.</button><br>"]
};
}
function commaNumber(x) {
	x = x.toString();
	var pattern = /(-?\d+)(\d{3})/;
	while (pattern.test(x))
		x = x.replace(pattern, "$1,$2");
	return x;
}
setInterval(function() {
AFPS = Math.round(game.state.C1.prod * game.state.C1.amount + (game.state.C3.prod/game.state.C3.interval * game.state.C3.amount) + (game.state.C4.prod/game.state.C4.interval * game.state.C4.amount))
}, 20);
function UpdateAFPS(){
	document.getElementById('AverageFlowerPerSecond').innerHTML = commaNumber(AFPS);
}
function MakeFlowers(amt){
	game.state.flower += amt;
	document.getElementById("flower").innerHTML = commaNumber(Math.round(game.state.flower));
}
setInterval(function() { // Interval function for 1-leaf clovers
	MakeFlowers(game.state.C1.prod * game.state.C1.amount);
}, game.state.C1.interval*1000);
setInterval(function(){ // Interval function for 3-leaf clovers
	MakeFlowers(game.state.C3.prod * game.state.C3.amount);
}, game.state.C3.interval*1000);
setInterval(function(){ // Interval function for 4-leaf clovers!
	MakeFlowers(game.state.C4.prod * game.state.C4.amount);
}, game.state.C4.interval*1000);
function buyC1() { // The buying functions for C1-4.
	if(game.state.flower < game.state.C1.cost) return 0;
	if(game.state.flower >= game.state.C1.cost) {
		game.state.flower-=game.state.C1.cost;
		game.state.C1.amount++;
		game.state.C1.cost = Math.pow(1.03,game.state.C1.amount)*40;
	}
}
function buyC3() {
	if(game.state.flower < game.state.C3.cost) return 0;
	if(game.state.flower >= game.state.C3.cost) {
		game.state.flower-=game.state.C3.cost;
		game.state.C3.amount++;
		game.state.C3.cost = Math.pow(1.05,game.state.C3.amount)*2000;
	}
}
function buyC4() {
	if(game.state.flower < game.state.C4.cost) return 0;
	if(game.state.flower >= game.state.C4.cost) {
		game.state.flower-=game.state.C4.cost;
		game.state.C4.amount++;
		game.state.C4.cost = Math.pow(1.1,game.state.C4.amount)*60000;
	}
}
function u1(){ // Upgrades 1-8 will JUST focus on C1's. Nothing else!
	if(game.state.flower >= 200 && game.upgradeArray[1] == 0){
		game.state.flower-=200;
		game.state.tap*=10;
		game.upgradeArray[1] = 1;
		game.buttonArray[1] = "";
	}
}
function u2(){
	if(game.state.flower >= 1000 && game.upgradeArray[2] == 0){
		game.state.flower-=1000;
		game.state.C1.prod*=5;
		game.upgradeArray[2] = 1;
		game.buttonArray[2] = "";
		game.buttonArray[3] = game.strArray[3];
	}
}
function u3(){
	if(game.state.flower >= 10000 && game.upgradeArray[3] == 0){
		game.state.flower-=10000;
		game.state.C1.prod*=4;
		game.upgradeArray[3] = 1;
		game.buttonArray[3] = "";
		game.buttonArray[4] = game.strArray[4];
	}
}
function u4(){
	if(game.state.flower >= 50000 && game.upgradeArray[4] == 0){
		game.state.flower-=50000;
		game.state.C1.prod*=3;
		game.upgradeArray[4] = 1;
		game.buttonArray[4] = "";
		game.buttonArray[5] = game.strArray[5];
	}
}
function u5(){
	if(game.state.flower >= 170000 && game.upgradeArray[5] == 0){
		game.state.flower-=170000;
		game.state.C1.prod*=2;
		game.upgradeArray[5] = 1;
		game.buttonArray[5] = "";
		game.buttonArray[6] = game.strArray[6];
	}
}
function u6(){
	if(game.state.flower >= 400000 && game.upgradeArray[6] == 0){
		game.state.flower-=400000;
		game.state.C1.prod*=2;
		game.upgradeArray[6] = 1;
		game.buttonArray[6] = "";
		game.buttonArray[7] = game.strArray[7];
	}
}
function u7(){
	if(game.state.flower >= 800000 && game.upgradeArray[7] == 0){
		game.state.flower-=800000;
		game.state.C1.prod*=2;
		game.upgradeArray[7] = 1;
		game.buttonArray[7] = "";
		game.buttonArray[8] = game.strArray[8];
	}
}
function u8(){
	if(game.state.flower >= 1800000 && game.upgradeArray[8] == 0){
		game.state.flower-=1800000;
		game.state.C1.prod*=2;
		game.upgradeArray[8] = 1;
		game.buttonArray[8] = "";
	}
}
function u9(){ // Upgrades 9-13 are focusing on C3's.
	if(game.state.flower >= 10000 && game.upgradeArray[9] == 0){
		game.state.flower-=10000;
		game.state.C3.prod*=3;
		game.upgradeArray[9] = 1;
		game.buttonArray[9] = "";
		game.buttonArray[10] = game.strArray[10];
	}
}
function u10(){
	if(game.state.flower >= 25000 && game.upgradeArray[10] == 0){
		game.state.flower-=25000;
		game.state.C3.prod*=3;
		game.upgradeArray[10] = 1;
		game.buttonArray[10] = "";
		game.buttonArray[11] = game.strArray[11];
	}
}
function u11(){
	if(game.state.flower >= 125000 && game.upgradeArray[11] == 0){
		game.state.flower-=125000;
		game.state.C3.prod*=3;
		game.upgradeArray[11] = 1;
		game.buttonArray[11] = "";
		game.buttonArray[12] = game.strArray[12];
	}
}
function u12(){
	if(game.state.flower >= 500000 && game.upgradeArray[12] == 0){
		game.state.flower-=500000;
		game.state.C3.prod*=3;
		game.upgradeArray[12] = 1;
		game.buttonArray[12] = "";
		game.buttonArray[13] = game.strArray[13];
	}
}
function u13(){
	if(game.state.flower >= 1800000 && game.upgradeArray[13] == 0){
		game.state.flower-=1800000;
		game.state.C3.prod*=3;
		game.upgradeArray[13] = 1;
		game.buttonArray[13] = "";
	}
}
setInterval(function(){
	UpdateAFPS();
	document.getElementById("C1s").innerHTML = commaNumber(Math.round(game.state.C1.amount));
	document.getElementById("C1cost").innerHTML = commaNumber(Math.round(game.state.C1.cost));
	document.getElementById("C1prod").innerHTML = commaNumber(Math.round(game.state.C1.prod));
	document.getElementById("C3s").innerHTML = commaNumber(Math.round(game.state.C3.amount));
	document.getElementById("C3cost").innerHTML = commaNumber(Math.round(game.state.C3.cost));
	document.getElementById("C3prod").innerHTML = commaNumber(Math.round(game.state.C3.prod));
	document.getElementById("C4s").innerHTML = commaNumber(Math.round(game.state.C4.amount));
	document.getElementById("C4cost").innerHTML = commaNumber(Math.round(game.state.C4.cost));
	document.getElementById("C4prod").innerHTML = commaNumber(Math.round(game.state.C4.prod));
	document.getElementById("Upgrades").innerHTML = game.buttonArray[1]+game.buttonArray[2]+game.buttonArray[3]+game.buttonArray[4]+game.buttonArray[5]+game.buttonArray[6]+game.buttonArray[7]+game.buttonArray[8]+game.buttonArray[9]+game.buttonArray[10]+game.buttonArray[11]+game.buttonArray[12]+game.buttonArray[13];
}, 40);
function save(){
	localStorage.cc = btoa(JSON.stringify(game));
}
function load(){
	if(!localStorage.cc) return;
	game = JSON.parse(atob(localStorage.cc));
//	transformToDecimal(game);
}
//function transformToDecimal(object) { 
//	for(var i in object) {
//		if(typeof(object[i]) == "string" && !isNaN(new Decimal(object[i]).mag)) object[i] = new Decimal(object[i]); 
//		if(typeof(object[i]) == "object") transformToDecimal(object[i]);
//	}
//}
load();
setInterval(function(){
	save();
}, 15000);
