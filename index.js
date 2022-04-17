let set = ["Rock", "Paper", "Scisor"];

function computerPlay(){
	return set[Math.floor(Math.random() * 3)];
}

function playerPlay(round){
	play = window.prompt("Round-"+round+"\t"+"What're you playing?(R,P,S)");
	for (let i=0; i<3; i++){
		if (play.toUpperCase() == set[i].toUpperCase()){
		return set[i]
		break;
		}
	}
}


function playGround(playerChoice, computerChoice){
	if (playerChoice == computerChoice){
		return "draw";
	}else if(playerChoice == "Rock" && computerChoice == "Scisor"){
		return "player";
	}else if(playerChoice == "Paper" && computerChoice == "Rock"){
		return "player";
	}else if (playerChoice == "Scisor" && computerChoice == "Paper"){
		return "player";
	}else{
		return "computer";
	}
}

function Game(){
	let player=0;
	let computer = 0;

	for (let i=1; i<6; i++){

		playerChoice = playerPlay(i);
		computerChoice = computerPlay();

		console.log("Player:"+playerChoice, "Computer:"+computerChoice);
		result = playGround(playerChoice, computerChoice);
		console.log(result);
		
		if (result == "player"){
			player += 1;
		}else if (result == "computer"){
			computer += 1;
		}
	}

	console.log("Result:\n");
	if (player > computer){
		console.log("You Won!");
	}else if (computer > player){
		console.log("You Lost!");
	}else{
		console.log("Draw!");
	}

	console.log("You:"+player, "Computer:"+computer);
}

