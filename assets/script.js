var playing = false;

var middle
var topi;
var bottom;
var left;
var right;	

var gameSquare;

var section = document.getElementsByTagName("section")
var sectionMenu;
var sectionGame;
var sectionConfig;
var sectionAbout;
var sectionKeys;

var gamemodeTimerStatus;
var gamemodePlaysStatus;
var gamemodeMissStatus;

var gamemodeTimerLimit = 0;
var gamemodePlaysLimit = 0;
var gamemodeMissLimit = 0;

var timerFunction
var timer = 0;
var plays = 0;
var hits = 0;
var miss = 0;

var scorePlaysValue;
var scoreHitsValue;
var scoreMissValue;

var colors = ["hsl(200, 70%, 70%)", "hsl(0, 70%, 70%)", "hsl(100, 70%, 70%)", "hsl(300, 70%, 70%)", "green", "red"]
var colorRandom;
var topiColor = colors[0];
var bottomColor = colors[1];
var leftColor = colors[2];
var rightColor = colors[3];

var borderStyle = "2px solid "
var shadowStyle = "0 0 6px 0 "

var keyColors;
var keyShortcuts;

var gameKeydown

function displaySwitch(selectDisplay)
{
	console.log(selectDisplay)
	for(var iSection = 0; iSection < section.length; iSection++)
	{
		section[iSection].style.display = "none";
	}	
	document.getElementById(selectDisplay).style.display = "block";
}

function gameController(e)
{
	window.addEventListener("keydown", gameKeydown)
	function gameKeydown(e)
	{
		if(keyShortcuts.includes(e.key))
		{
			for(var iColors = 0; iColors < 4; iColors++)
			{
				if(e.key == keyColors[iColors][0] && middle.style.background == keyColors[iColors][1])
				{
					hits++
					hit()
				}
			}
			/*else
			{
				miss++
				mis()
			}*/
			
			plays++
			miss = plays - hits
			console.log("plays: "+plays+" hits: "+hits+" miss: "+miss);
			
			document.getElementById("gamePlays").innerText = plays;
			document.getElementById("gameHits").innerText = hits;
			document.getElementById("gameMiss").innerText = miss;
			
			var middleColor = colors[Math.floor(Math.random() * 4)];
			middle.style.background = middleColor;
			middle.style.border = middleColor;
			middle.style["boxShadow"] = "0 0 6px 0 "+middleColor+", inset 0 0 6px 0 "+middleColor;

			if((gamemodeTimerStatus == true && timer <= 0) || (gamemodePlaysStatus == true && plays == gamemodePlaysLimit) || (gamemodeMissStatus == true && miss == gamemodeMissLimit) || (e.key == "r"))
			{
				clearInterval(timerFunction)
				window.removeEventListener("keydown", gameKeydown)
				console.log("fim")
				sectionScore()
				displaySwitch("score")
			}
		}
	}
	if(gamemodeTimerStatus == true)
	{
		console.log(gamemodeTimerLimit)
		timer = gamemodeTimerLimit * 100
		document.getElementById("gameTimer").innerText = timer;		
		timerFunction = setInterval( function(){
			console.log(timer)
			timer--			
			document.getElementById("gameTimer").innerText = timer;			
			if(timer == 0)
			{
				clearInterval(timerFunction)
				window.removeEventListener("keydown", gameKeydown)
				console.log("fim")
				sectionScore()
				displaySwitch("score")
			}			
		}, 10)
	}
	else
	{
		timer = gamemodeTimerLimit
		document.getElementById("gameTimer").innerText = timer;
	}
}

function hit()
{
	topi.style.border = colors[4];
	topi.style["boxShadow"] = "0 0 12px 0 "+colors[4]+", inset 0 0 12px 0 "+colors[4];
	bottom.style.border = colors[4];
	bottom.style["boxShadow"] = "0 0 12px 0 "+colors[4]+", inset 0 0 12px 0 "+colors[4];
	left.style.border = colors[4];
	left.style["boxShadow"] = "0 0 12px 0 "+colors[4]+", inset 0 0 12px 0 "+colors[4];
	right.style.border = colors[4];
	right.style["boxShadow"] = "0 0 12px 0 "+colors[4]+", inset 0 0 12px 0 "+colors[4];

	var playHitFeedback = setInterval( function()
	{
		console.log("acerto")
			topi.style.border = topiColor;
			topi.style["boxShadow"] = "0 0 6px 0 "+topiColor+", inset 0 0 6px 0 "+topiColor;
			bottom.style.border = bottomColor;
			bottom.style["boxShadow"] = "0 0 6px 0 "+bottomColor+", inset 0 0 6px 0 "+bottomColor;
			left.style.border = leftColor;
			left.style["boxShadow"] = "0 0 6px 0 "+leftColor+", inset 0 0 6px 0 "+leftColor;
			right.style.border = rightColor;
			right.style["boxShadow"] = "0 0 6px 0 "+rightColor+", inset 0 0 6px 0 "+rightColor;
		clearInterval(playHitFeedback)
	}, 100);
}

function mis()
{
	topi.style.border = colors[5];
	topi.style["boxShadow"] = "0 0 6px 0 "+colors[5]+", inset 0 0 6px 0 "+colors[5];
	bottom.style.border = colors[5];
	bottom.style["boxShadow"] = "0 0 6px 0 "+colors[5]+", inset 0 0 6px 0 "+colors[5];
	left.style.border = colors[5];
	left.style["boxShadow"] = "0 0 6px 0 "+colors[5]+", inset 0 0 6px 0 "+colors[5];
	right.style.border = colors[5];
	right.style["boxShadow"] = "0 0 6px 0 "+colors[5]+", inset 0 0 6px 0 "+colors[5];

	var playMissFeedback = setInterval( function()
	{
		console.log("errou")
			topi.style.border = topiColor;
			topi.style["boxShadow"] = "0 0 6px 0 "+topiColor+", inset 0 0 6px 0 "+topiColor;
			bottom.style.border = bottomColor;
			bottom.style["boxShadow"] = "0 0 6px 0 "+bottomColor+", inset 0 0 6px 0 "+bottomColor;
			left.style.border = leftColor;
			left.style["boxShadow"] = "0 0 6px 0 "+leftColor+", inset 0 0 6px 0 "+leftColor;
			right.style.border = rightColor;
			right.style["boxShadow"] = "0 0 6px 0 "+rightColor+", inset 0 0 6px 0 "+rightColor;
		clearInterval(playMissFeedback)
	}, 100);
}

function gameStarter()
{
	plays = 0;
	hits = 0;
	miss = 0;
	
	document.getElementById("gamePlays").innerText = plays;
	document.getElementById("gameHits").innerText = hits;
	document.getElementById("gameMiss").innerText = miss;
	
	colorRandom = Math.floor(Math.random() * 4)
	console.log("plays: "+plays+" hits: "+hits+" miss: "+miss);
	
	middle = document.getElementById("gameMiddle");
	middle.style.background = colors[colorRandom];
	middle.style.border = colors[colorRandom];
	middle.style["boxShadow"] = shadowStyle+colors[colorRandom]+", inset "+shadowStyle+colors[colorRandom];

	topi = document.getElementById("gameTop");
	topi.style.background = topiColor;
	topi.style.border = topiColor;
	topi.style["boxShadow"] = shadowStyle+topiColor+", inset "+shadowStyle+topiColor;
	topi.value = "w";
	
	bottom = document.getElementById("gameBottom");
	bottom.style.background = bottomColor;
	bottom.style.border = bottomColor;
	bottom.style["boxShadow"] = shadowStyle+bottomColor+", inset "+shadowStyle+bottomColor;
	bottom.value = "s";
	
	left = document.getElementById("gameLeft");
	left.style.background = leftColor;
	left.style.border = leftColor;
	left.style["boxShadow"] = shadowStyle+leftColor+", inset "+shadowStyle+leftColor;	
	left.value = "a";
	
	right = document.getElementById("gameRight");
	right.style.background = rightColor;
	right.style.border = rightColor;
	right.style["boxShadow"] = shadowStyle+rightColor+", inset "+shadowStyle+rightColor;
	right.value = "d";
	
	keyColors =
	{
		0: [topi.value, topi.style.background],
		1: [bottom.value, bottom.style.background],
		2: [left.value, left.style.background],
		3: [right.value, right.style.background]
	}
	
	keyShortcuts = [topi.value, bottom.value, left.value, right.value, "r"]
	console.log(keyShortcuts)
	
	gameController()
}

function sectionConfig()
{
	document.getElementById("configTimerLimit").onclick = function()
	{
		gamemodeTimerStatus = true;
		gamemodeTimerLimit += 10;		
		
		document.getElementById("configTimerStatus").innerText = "TIMER\n"+gamemodeTimerStatus;
		document.getElementById("configTimerLimit").innerText = gamemodeTimerLimit;
	}
	document.getElementById("configPlaysLimit").onclick = function()
	{
		gamemodePlaysStatus = true;
		gamemodePlaysLimit += 2;		
		
		document.getElementById("configPlaysStatus").innerText = "PLAYS\n"+gamemodePlaysStatus;
		document.getElementById("configPlaysLimit").innerText = gamemodePlaysLimit;
	}
	document.getElementById("configMissLimit").onclick = function()
	{
		gamemodeMissStatus = true;
		gamemodeMissLimit += 2;		
		
		document.getElementById("configMissStatus").innerText = "MISS\n"+gamemodeMissStatus;
		document.getElementById("configMissLimit").innerText = gamemodeMissLimit;
	}
	document.getElementById("configReset").onclick = function()
	{
		gamemodeTimerStatus = false;
		gamemodeTimerLimit = 0;				
		document.getElementById("configTimerStatus").innerText = "TIMER\n"+gamemodeTimerStatus;
		document.getElementById("configTimerLimit").innerText = gamemodeTimerLimit;
		gamemodePlaysStatus = false;
		gamemodePlaysLimit = 0;		
		document.getElementById("configPlaysStatus").innerText = "PLAYS\n"+gamemodePlaysStatus;
		document.getElementById("configPlaysLimit").innerText = gamemodePlaysLimit;
		gamemodeMissStatus = false;
		gamemodeMissLimit = 0;
		document.getElementById("configMissStatus").innerText = "MISS\n"+gamemodeMissStatus;
		document.getElementById("configMissLimit").innerText = gamemodeMissLimit;
	}
	console.log("config")
}

function sectionScore()
{
	document.getElementById("scorePlaysValue").innerText = plays;
	document.getElementById("scoreHitsValue").innerText = hits;
	document.getElementById("scoreMissValue").innerText = miss;
	document.getElementById("scoreTimerValue").innerText = gamemodeTimerLimit+"''";
}

function sectionKeys()
{
	var keysTopi = document.getElementById("keysTopi")
	keysTopi.style.border = borderStyle+topiColor;
	keysTopi.style["boxShadow"] = shadowStyle+topiColor+", inset "+shadowStyle+topiColor;
	var keysTopi = document.getElementById("keysBottom")
	keysBottom.style.border = borderStyle+bottomColor;
	keysBottom.style["boxShadow"] = shadowStyle+bottomColor+", inset "+shadowStyle+bottomColor;
	var keysTopi = document.getElementById("keysLeft")
	keysLeft.style.border = borderStyle+leftColor;
	keysLeft.style["boxShadow"] = shadowStyle+leftColor+", inset "+shadowStyle+leftColor;
	var keysTopi = document.getElementById("keysRight")
	keysRight.style.border = borderStyle+rightColor;
	keysRight.style["boxShadow"] = shadowStyle+rightColor+", inset "+shadowStyle+rightColor;
	var keysMiddle = document.getElementById("keysMiddle");
	keysMiddle.style.border = borderStyle+topiColor;
	keysMiddle.style["boxShadow"] = shadowStyle+topiColor+", inset "+shadowStyle+topiColor;
	
	setInterval( function()
	{
		var keysMiddleColor = colors[Math.floor(Math.random() * 4)]
		keysMiddle.style.border = borderStyle+keysMiddleColor;
		keysMiddle.style["boxShadow"] = shadowStyle+keysMiddleColor+", inset "+shadowStyle+keysMiddleColor;
	}
	,2000)
}