let seconds = 0;
let milliseconds = 0;
let timerBottomBarMilliseconds = 0;
let timerBottomBarLength = seconds;
let tierSetting = 0;
let timerInterval;
let timerBottomBarInterval;

function countTimer(){
	if(milliseconds < 1){
		subtractSecond();
		milliseconds = 99.5;
	}
	else{
		subtractMilliSecond();
	}
}

function countBottomBarLength(){
	let progressPercentage = (0 - (timerBottomBarLength / timerBottomBarMilliseconds)) * 101;
	let sparkLength = (-1404 * (timerBottomBarLength) / timerBottomBarMilliseconds) - 55 + 'px';
	document.querySelector('.timerBarFillDiv').style.scale = progressPercentage + '% 1';
	document.querySelector('.hotseatSparkleImg').style.left = sparkLength;
}

function subtractMilliSecond(){
	milliseconds -= 1;
	timerBottomBarLength -= 1;
}

function subtractSecond(){
	if(seconds < 2){
		pauseTimer();
		document.querySelector('.timerBarFillDiv').style.scale = '100% 1';
		/* document.querySelector('.hotseatSparkleImg').style.left = '1445px'; */
		hideTimer()
		window.GameVariables.QuestionSequenceCounter = 12;
	}
	else{
		seconds -= 1;
	}
}

function startTimer(){
	timerInterval = setInterval(function (){
		countTimer();
	}, 10);
	timerBottomBarInterval = setInterval(function (){
		countBottomBarLength();
	}, 10);
	startLifelineActiveSound("timer.mp3");
	showTimer();
	window.GameVariables.TimerPaused = false;
}

function pauseTimer(){
	clearInterval(timerInterval);
	clearInterval(timerBottomBarInterval);
	stopLifelineActiveSound();
	window.GameVariables.TimerPaused = true;
}

function hideTimer(){
	$('.hotseatTimerDiv').transition({perspective:0, opacity:0}, 250, 'linear');
}

function showTimer(){
	$('.hotseatTimerDiv').transition({perspective:0, opacity:1}, 250, 'linear');
}

function resetTimer(){
	milliseconds = 99.5;
	timerBottomBarLength = 0;
	document.querySelector('.timerBarFillDiv').style.scale = '0% 1';
	document.querySelector('.hotseatSparkleImg').style.left = '-55px';
}

function setTimer(){
	if(window.GameVariables.QuestionLevel < 6){
		tier1Timer();
	}
	else if(window.GameVariables.QuestionLevel < 11){
		tier2Timer();
	}
	else{
		tier3Timer();
	}
}

function tier1Timer(){
	seconds = 15;
	tierSetting = 1;
	resetTimer();
	setTimerBarMilliSeconds();
}

function tier2Timer(){
	seconds = 30;
	tierSetting = 2;
	resetTimer();
	setTimerBarMilliSeconds();
}

function tier3Timer(){
	seconds = 45;
	tierSetting = 3;
	resetTimer();
	setTimerBarMilliSeconds();
}

function setTimerBarMilliSeconds(){
	if(tierSetting == 1){
		timerBottomBarMilliseconds = 1500;
	}
	else if(tierSetting == 2){
		timerBottomBarMilliseconds = 3000;
	}
	else if(tierSetting == 3){
		timerBottomBarMilliseconds = 4500;
	}
	else{
		timerBottomBarMilliseconds = 0;
	}
}