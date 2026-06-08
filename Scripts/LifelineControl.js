/****************************************************************************************************************/
/* Pass Life Line Functions */
/****************************************************************************************************************/

function passLifeLineDisable(){
	$('.passLifeLine .lifelineUsedImg').css('opacity', 1);
	$('.passLifeLine .lifelineTreeImg').css('opacity', 1);
	$('.passStrapLifeLine .lifelineUsedStrapImg').css('opacity', 1);
	$('.passStrapLifeLine .lifelineStrapImg').css('opacity', 1);
}

function passLifeLineEnable(){
	$('.passLifeLine .lifelineUsedImg').css('opacity', 0);
	$('.passLifeLine .lifelineTreeImg').css('opacity', 1);
	$('.passStrapLifeLine .lifelineUsedStrapImg').css('opacity', 0);
	$('.passStrapLifeLine .lifelineStrapImg').css('opacity', 1);
}

/****************************************************************************************************************/
/* Phone a Friend Life Line Functions */
/****************************************************************************************************************/

function pafPulseLifeLine(){
	$('.pafLifeLine').transition({perspective:0, scale:[1.25,1.25]}, 250, function(){
		$('.pafLifeLine').transition({perspective:0, scale:[1,1]}, 500, function(){
			
		});
	});
	
	$('.pafLifeLine .lifelineYellowTreeImg').transition({perspective:0, opacity: 1}, 250, function(){
		$('.pafLifeLine .lifelineYellowTreeImg').transition({perspective:0, opacity: 0}, 500, function(){
			
		});
	});
	
	$('.pafStrapLifeLine').transition({perspective:0, scale:[1.25,1.25]}, 250, function(){
		$('.pafStrapLifeLine').transition({perspective:0, scale:[1,1]}, 500, function(){
			
		});
	});
	
	$('.pafStrapLifeLine .lifelineYellowStrapImg').transition({perspective:0, opacity: 1}, 250, function(){
		$('.pafStrapLifeLine .lifelineYellowStrapImg').transition({perspective:0, opacity: 0}, 500, function(){
			
		});
	});
}

function pafLifeLineDisable(){
	$('.pafLifeLine .lifelineUsedImg').css('opacity', 1);
	$('.pafLifeLine .lifelineTreeImg').css('opacity', 1);
	$('.pafStrapLifeLine .lifelineUsedStrapImg').css('opacity', 1);
	$('.pafStrapLifeLine .lifelineStrapImg').css('opacity', 1);
}

function pafRevealClock(){
	$('.pafClockDiv').transition({perspective:0, right:'300px'}, 750, 'linear', function(){
		setTimeout(function(){
			pafCountDownClock(0);
			startLifelinePassiveSound("paf_countdown.mp3");
			setTimeout(stopLifelineActiveSound, 200);
		}, 250);
	});
}

function pafCountDownClock(timeConsumed){
	if(timeConsumed == 30){
		$('.pafClockTimeDiv').html("0");
	}
	else{
		$('.pafClockTimeDiv').html(30 - timeConsumed);
	}

	if(timeConsumed == 0){
		$('#pafRightRingImg').transition({perspective:0, rotate:"+=6"}, 1, 'linear', function(){
			setTimeout(function(){
				$('#pafRightRingImg').transition({perspective:0, rotate:"+=6"}, 1, 'linear');
			}, 500);
		});
	}
	else if(timeConsumed < 15){
		$('#pafRightRingImg').transition({perspective:0, rotate:"+=6"}, 1, 'linear', function(){
			setTimeout(function(){
				$('#pafRightRingImg').transition({perspective:0, rotate:"+=6"}, 1, 'linear');
			}, 500);
		});
	}
	else if(timeConsumed < 30){
		$('#pafLeftRingImg').transition({perspective:0, rotate:"+=6"}, 1, 'linear', function(){
			setTimeout(function(){
				$('#pafLeftRingImg').transition({perspective:0, rotate:"+=6"}, 1, 'linear');
			}, 500);
		})
	}
	
	if(timeConsumed == 30){
		window.GameVariables.PAFClockTimeout = setTimeout(pafHideClock, 500);
	}
	else{
		window.GameVariables.PAFClockTimeout = setTimeout(function(){
			pafCountDownClock(timeConsumed + 1);
		}, 995);
	}
}

function pafEndClockEarly(){
	clearTimeout(window.GameVariables.PAFClockTimeout);
	pafHideClock();
	startLifelineActiveSound("paf_end_call_early.mp3");
}

function pafHideClock(){
	$('.pafClockDiv').transition({perspective:0, right:'-400px'}, 750, 'linear', function(){
		$('.pafClockTimeDiv').html(30);
		$('#pafRightRingImg').transition({perspective:0, rotate:"0"}, 1, 'linear');
		$('#pafLeftRingImg').transition({perspective:0, rotate:"0"}, 1, 'linear');
		window.GameVariables.pafLifeLineSequenceCounter = 0;
		window.GameVariables.CannotLockInFinalAnswer = false;
		pafLifeLineDisable();
	});
	
	setTimeout(playBackgroundSound, 500);
}

/****************************************************************************************************************/
/* Fifty-Fifty Life Line Functions */
/****************************************************************************************************************/

function ffPulseLifeLine(){
	$('.ffLifeLine').transition({perspective:0, scale:[1.25,1.25]}, 250, function(){
		$('.ffLifeLine').transition({perspective:0, scale:[1,1]}, 500, function(){
			
		});
	});
	
	$('.ffLifeLine .lifelineYellowTreeImg').transition({perspective:0, opacity: 1}, 250, function(){
		$('.ffLifeLine .lifelineYellowTreeImg').transition({perspective:0, opacity: 0}, 500, function(){
			
		});
	});
	
	$('.ffStrapLifeLine').transition({perspective:0, scale:[1.25,1.25]}, 250, function(){
		$('.ffStrapLifeLine').transition({perspective:0, scale:[1,1]}, 500, function(){
			
		});
	});
	
	$('.ffStrapLifeLine .lifelineYellowStrapImg').transition({perspective:0, opacity: 1}, 250, function(){
		$('.ffStrapLifeLine .lifelineYellowStrapImg').transition({perspective:0, opacity: 0}, 500, function(){
			
		});
	});
}

function ffLifeLineDisable(){
	$('.ffLifeLine .lifelineUsedImg').css('opacity', 1);
	$('.ffLifeLine .lifelineTreeImg').css('opacity', 1);
	$('.ffStrapLifeLine .lifelineUsedStrapImg').css('opacity', 1);
	$('.ffStrapLifeLine .lifelineStrapImg').css('opacity', 1);
}

function ffRemoveTwoWrongAnswers(){
	var canRemoveTwo = true;
	var counter = 0;
		
	if(window.GameVariables.AnswerAIsOut == true || window.GameVariables.AnswerBIsOut == true || window.GameVariables.AnswerCIsOut == true || window.GameVariables.AnswerDIsOut == true){
		canRemoveTwo = false;
	}
	
	if(canRemoveTwo == true){
		ffLifeLineDisable();
	
		while(counter < 2){
			var randomAnswerValue = Math.ceil(Math.random() * 4);
			
			if(randomAnswerValue == 1 && window.GameVariables.AnswerAIsOut == false && window.GameVariables.CurrentCorrectAnswer != "a"){
				$('#answerA .letterP').css('opacity', 0);
				$('#answerA .answerP').css('opacity', 0);
				$('#answerA .diagonalImg').css('opacity', 0);
				window.GameVariables.AnswerAIsOut = true;
				counter++;
			}
			
			if(randomAnswerValue == 2 && window.GameVariables.AnswerBIsOut == false && window.GameVariables.CurrentCorrectAnswer != "b"){
				$('#answerB .letterP').css('opacity', 0);
				$('#answerB .answerP').css('opacity', 0);
				$('#answerB .diagonalImg').css('opacity', 0);
				window.GameVariables.AnswerBIsOut = true;
				counter++;
			}
			
			if(randomAnswerValue == 3 && window.GameVariables.AnswerCIsOut == false && window.GameVariables.CurrentCorrectAnswer != "c"){
				$('#answerC .letterP').css('opacity', 0);
				$('#answerC .answerP').css('opacity', 0);
				$('#answerC .diagonalImg').css('opacity', 0);
				window.GameVariables.AnswerCIsOut = true;
				counter++;
			}
			
			if(randomAnswerValue == 4 && window.GameVariables.AnswerDIsOut == false && window.GameVariables.CurrentCorrectAnswer != "d"){
				$('#answerD .letterP').css('opacity', 0);
				$('#answerD .answerP').css('opacity', 0);
				$('#answerD .diagonalImg').css('opacity', 0);
				window.GameVariables.AnswerDIsOut = true;
				counter++;
			}
		}
	}
}

/****************************************************************************************************************/
/* Ask the Audience Life Line Functions */
/****************************************************************************************************************/

function ataPulseLifeLine(){
	$('.ataLifeLine').transition({perspective:0, scale:[1.25,1.25]}, 250, function(){
		$('.ataLifeLine').transition({perspective:0, scale:[1,1]}, 500, function(){
			
		});
	});
	
	$('.ataLifeLine .lifelineYellowTreeImg').transition({perspective:0, opacity: 1}, 250, function(){
		$('.ataLifeLine .lifelineYellowTreeImg').transition({perspective:0, opacity: 0}, 500, function(){
			
		});
	});
	
	$('.ataStrapLifeLine').transition({perspective:0, scale:[1.25,1.25]}, 250, function(){
		$('.ataStrapLifeLine').transition({perspective:0, scale:[1,1]}, 500, function(){
			
		});
	});
	
	$('.ataStrapLifeLine .lifelineYellowStrapImg').transition({perspective:0, opacity: 1}, 250, function(){
		$('.ataStrapLifeLine .lifelineYellowStrapImg').transition({perspective:0, opacity: 0}, 500, function(){
			
		});
	});
}

function ataLifeLineDisable(){
	$('.ataLifeLine .lifelineUsedImg').css('opacity', 1);
	$('.ataLifeLine .lifelineTreeImg').css('opacity', 1);
	$('.ataStrapLifeLine .lifelineUsedStrapImg').css('opacity', 1);
	$('.ataStrapLifeLine .lifelineStrapImg').css('opacity', 1);
}

function slideInATAGraph(){
	$('.ataGraphDiv').transition({perspective:0, right:"300px"}, 750, 'linear');
}

function generateGraphPercentanges(){
	var percentageOfDifficulty = (window.GameVariables.QuestionLevel - 1) * 5;
	var beDevious = (Math.random() * 100) > 90 ? true : false;

	if(window.GameVariables.AnswerAIsOut == true){
		window.GameVariables.AnswerAPercent = 0;
	}
	
	if(window.GameVariables.AnswerBIsOut == true){
		window.GameVariables.AnswerBPercent = 0;
	}
	
	if(window.GameVariables.AnswerCIsOut == true){
		window.GameVariables.AnswerCPercent = 0;
	}
	
	if(window.GameVariables.AnswerDIsOut == true){
		window.GameVariables.AnswerDPercent = 0;
	}
	
	if(beDevious != true){
		if(window.GameVariables.CurrentCorrectAnswer == "a" && window.GameVariables.AnswerAIsOut == false){
			window.GameVariables.AnswerAPercent = Math.ceil(Math.random() * ((100 - (percentageOfDifficulty / 1.5)) - (95 - percentageOfDifficulty)) + (95 - percentageOfDifficulty));
			window.GameVariables.AnswerBPercent = window.GameVariables.AnswerBIsOut == true ? 0 : Math.ceil(Math.random() * (100 - window.GameVariables.AnswerAPercent));
			window.GameVariables.AnswerCPercent = window.GameVariables.AnswerCIsOut == true ? 0 : Math.ceil(Math.random() * (100 - window.GameVariables.AnswerAPercent - window.GameVariables.AnswerBPercent));
			window.GameVariables.AnswerDPercent = window.GameVariables.AnswerDIsOut == true ? 0 : 100 - window.GameVariables.AnswerAPercent - window.GameVariables.AnswerBPercent  - window.GameVariables.AnswerCPercent;
		}
		
		if(window.GameVariables.CurrentCorrectAnswer == "b" && window.GameVariables.AnswerBIsOut == false){
			window.GameVariables.AnswerBPercent = Math.ceil(Math.random() * ((100 - (percentageOfDifficulty / 1.5)) - (95 - percentageOfDifficulty)) + (95 - percentageOfDifficulty));
			window.GameVariables.AnswerCPercent = window.GameVariables.AnswerCIsOut == true ? 0 : Math.ceil(Math.random() * (100 - window.GameVariables.AnswerBPercent));
			window.GameVariables.AnswerDPercent = window.GameVariables.AnswerDIsOut == true ? 0 : Math.ceil(Math.random() * (100 - window.GameVariables.AnswerBPercent - window.GameVariables.AnswerCPercent));
			window.GameVariables.AnswerAPercent = window.GameVariables.AnswerAIsOut == true ? 0 : 100 - window.GameVariables.AnswerBPercent - window.GameVariables.AnswerCPercent  - window.GameVariables.AnswerDPercent;
		}
		
		if(window.GameVariables.CurrentCorrectAnswer == "c" && window.GameVariables.AnswerCIsOut == false){
			window.GameVariables.AnswerCPercent = Math.ceil(Math.random() * ((100 - (percentageOfDifficulty / 1.5)) - (95 - percentageOfDifficulty)) + (95 - percentageOfDifficulty));
			window.GameVariables.AnswerDPercent = window.GameVariables.AnswerDIsOut == true ? 0 : Math.ceil(Math.random() * (100 - window.GameVariables.AnswerCPercent));
			window.GameVariables.AnswerAPercent = window.GameVariables.AnswerAIsOut == true ? 0 : Math.ceil(Math.random() * (100 - window.GameVariables.AnswerCPercent - window.GameVariables.AnswerDPercent));
			window.GameVariables.AnswerBPercent = window.GameVariables.AnswerBIsOut == true ? 0 : 100 - window.GameVariables.AnswerCPercent - window.GameVariables.AnswerDPercent  - window.GameVariables.AnswerAPercent;
		}
		
		if(window.GameVariables.CurrentCorrectAnswer == "d" && window.GameVariables.AnswerDIsOut == false){
			window.GameVariables.AnswerDPercent = Math.ceil(Math.random() * ((100 - (percentageOfDifficulty / 1.5)) - (95 - percentageOfDifficulty)) + (95 - percentageOfDifficulty));
			window.GameVariables.AnswerAPercent = window.GameVariables.AnswerAIsOut == true ? 0 : Math.ceil(Math.random() * (100 - window.GameVariables.AnswerDPercent));
			window.GameVariables.AnswerBPercent = window.GameVariables.AnswerBIsOut == true ? 0 : Math.ceil(Math.random() * (100 - window.GameVariables.AnswerDPercent - window.GameVariables.AnswerAPercent));
			window.GameVariables.AnswerCPercent = window.GameVariables.AnswerCIsOut == true ? 0 : 100 - window.GameVariables.AnswerDPercent - window.GameVariables.AnswerAPercent  - window.GameVariables.AnswerBPercent;
		}
	}
	else{
		if(window.GameVariables.AnswerAIsOut == false){
			window.GameVariables.AnswerAPercent = Math.ceil(Math.random() * ((100 - (percentageOfDifficulty / 1.5)) - (95 - percentageOfDifficulty)) + (95 - percentageOfDifficulty));
			window.GameVariables.AnswerBPercent = window.GameVariables.AnswerBIsOut == true ? 0 : Math.ceil(Math.random() * (100 - window.GameVariables.AnswerAPercent));
			window.GameVariables.AnswerCPercent = window.GameVariables.AnswerCIsOut == true ? 0 : Math.ceil(Math.random() * (100 - window.GameVariables.AnswerAPercent - window.GameVariables.AnswerBPercent));
			window.GameVariables.AnswerDPercent = window.GameVariables.AnswerDIsOut == true ? 0 : 100 - window.GameVariables.AnswerAPercent - window.GameVariables.AnswerBPercent  - window.GameVariables.AnswerCPercent;
		}
		
		if(window.GameVariables.AnswerBIsOut == false){
			window.GameVariables.AnswerBPercent = Math.ceil(Math.random() * ((100 - (percentageOfDifficulty / 1.5)) - (95 - percentageOfDifficulty)) + (95 - percentageOfDifficulty));
			window.GameVariables.AnswerCPercent = window.GameVariables.AnswerCIsOut == true ? 0 : Math.ceil(Math.random() * (100 - window.GameVariables.AnswerBPercent));
			window.GameVariables.AnswerDPercent = window.GameVariables.AnswerDIsOut == true ? 0 : Math.ceil(Math.random() * (100 - window.GameVariables.AnswerBPercent - window.GameVariables.AnswerCPercent));
			window.GameVariables.AnswerAPercent = window.GameVariables.AnswerAIsOut == true ? 0 : 100 - window.GameVariables.AnswerBPercent - window.GameVariables.AnswerCPercent  - window.GameVariables.AnswerDPercent;
		}
		
		if(window.GameVariables.AnswerCIsOut == false){
			window.GameVariables.AnswerCPercent = Math.ceil(Math.random() * ((100 - (percentageOfDifficulty / 1.5)) - (95 - percentageOfDifficulty)) + (95 - percentageOfDifficulty));
			window.GameVariables.AnswerDPercent = window.GameVariables.AnswerDIsOut == true ? 0 : Math.ceil(Math.random() * (100 - window.GameVariables.AnswerCPercent));
			window.GameVariables.AnswerAPercent = window.GameVariables.AnswerAIsOut == true ? 0 : Math.ceil(Math.random() * (100 - window.GameVariables.AnswerCPercent - window.GameVariables.AnswerDPercent));
			window.GameVariables.AnswerBPercent = window.GameVariables.AnswerBIsOut == true ? 0 : 100 - window.GameVariables.AnswerCPercent - window.GameVariables.AnswerDPercent  - window.GameVariables.AnswerAPercent;
		}
		
		if(window.GameVariables.AnswerDIsOut == false){
			window.GameVariables.AnswerDPercent = Math.ceil(Math.random() * ((100 - (percentageOfDifficulty / 1.5)) - (95 - percentageOfDifficulty)) + (95 - percentageOfDifficulty));
			window.GameVariables.AnswerAPercent = window.GameVariables.AnswerAIsOut == true ? 0 : Math.ceil(Math.random() * (100 - window.GameVariables.AnswerDPercent));
			window.GameVariables.AnswerBPercent = window.GameVariables.AnswerBIsOut == true ? 0 : Math.ceil(Math.random() * (100 - window.GameVariables.AnswerDPercent - window.GameVariables.AnswerAPercent));
			window.GameVariables.AnswerCPercent = window.GameVariables.AnswerCIsOut == true ? 0 : 100 - window.GameVariables.AnswerDPercent - window.GameVariables.AnswerAPercent  - window.GameVariables.AnswerBPercent;
		}
	}
	
	var sumOfAllPercents = window.GameVariables.AnswerAPercent + window.GameVariables.AnswerBPercent + window.GameVariables.AnswerCPercent + window.GameVariables.AnswerDPercent;
		
	if(sumOfAllPercents < 100){
		if(window.GameVariables.CurrentCorrectAnswer == "a" && window.GameVariables.AnswerAIsOut == false){
			window.GameVariables.AnswerAPercent += 100 - sumOfAllPercents;
		}
		
		if(window.GameVariables.CurrentCorrectAnswer == "b" && window.GameVariables.AnswerBIsOut == false){
			window.GameVariables.AnswerBPercent += 100 - sumOfAllPercents;
		}
		
		if(window.GameVariables.CurrentCorrectAnswer == "c" && window.GameVariables.AnswerCIsOut == false){
			window.GameVariables.AnswerCPercent += 100 - sumOfAllPercents;
		}
		
		if(window.GameVariables.CurrentCorrectAnswer == "d" && window.GameVariables.AnswerDIsOut == false){
			window.GameVariables.AnswerDPercent += 100 - sumOfAllPercents;
		}
	}
}

function revealGraphPercentages(){
	var barAHeight = (396 * (window.GameVariables.AnswerAPercent) / 100) + "px";
	var barBHeight = (396 * (window.GameVariables.AnswerBPercent) / 100) + "px";
	var barCHeight = (396 * (window.GameVariables.AnswerCPercent) / 100) + "px";
	var barDHeight = (396 * (window.GameVariables.AnswerDPercent) / 100) + "px";
	
	$('#graphBarA').css('height', barAHeight);
	$('#graphPercentA').html(window.GameVariables.AnswerAPercent + "%");
	$('#ataPercentStrapA').html(window.GameVariables.AnswerAPercent + "%");
	
	setTimeout(function(){
		$('#graphBarB').css('height', barBHeight);
		$('#graphPercentB').html(window.GameVariables.AnswerBPercent + "%");
		$('#ataPercentStrapB').html(window.GameVariables.AnswerBPercent + "%");
	}, 50);
	
	setTimeout(function(){
		$('#graphBarC').css('height', barCHeight);
		$('#graphPercentC').html(window.GameVariables.AnswerCPercent + "%");
		$('#ataPercentStrapC').html(window.GameVariables.AnswerCPercent + "%");
	}, 100);
	
	setTimeout(function(){
		$('#graphBarD').css('height', barDHeight);
		$('#graphPercentD').html(window.GameVariables.AnswerDPercent + "%");
		$('#ataPercentStrapD').html(window.GameVariables.AnswerDPercent + "%");
	}, 150);
}

function slideOutATAGraph(){
	$('.ataGraphDiv').transition({perspective:0, right:"-330px"}, 750, 'linear', function(){
		$('#graphBarA').css('height', "0px");
		$('#graphBarB').css('height', "0px");
		$('#graphBarC').css('height', "0px");
		$('#graphBarD').css('height', "0px");
		$('#graphPercentA').html("");
		$('#graphPercentB').html("");
		$('#graphPercentC').html("");
		$('#graphPercentD').html("");
		ataLifeLineDisable();
	});
	
	$('#ataPercentStrapA').parent().transition({perspective:0, opacity:0}, 250, 'linear');
	$('#ataPercentStrapB').parent().transition({perspective:0, opacity:0}, 250, 'linear');
	$('#ataPercentStrapC').parent().transition({perspective:0, opacity:0}, 250, 'linear');
	$('#ataPercentStrapD').parent().transition({perspective:0, opacity:0}, 250, 'linear');
}

/****************************************************************************************************************/
/* Switch the Question Life Line Functions */
/****************************************************************************************************************/

function stqLifeLineSlideIn(){
	$('.pafLifeLine').transition({perspective:0, 'left':'-70px'}, 1000);
	$('.ffLifeLine').transition({perspective:0, 'left':'170px'}, 1000);
	$('.ataLifeLine').transition({perspective:0, 'left':'300px'}, 1000);
	$('.stqLifeLine').transition({perspective:0, opacity: 1, 'left':'430px'}, 1000);
	
	$('.ffStrapLifeLine').transition({perspective:0, 'left':'625px'}, 500, 'linear');
	$('.ataStrapLifeLine').transition({perspective:0, 'left':'850px'}, 500, 'linear');
	$('.stqStrapLifeLine').transition({perspective:0, 'left':'1075px'}, 500, 'linear');
}

function stqLifeLineSlideOut(){
	window.GameVariables.LifeLineAnimationCounter = 0;
	$('.pafLifeLine').transition({perspective:0, 'left':'-50px'}, 1000);
	$('.ffLifeLine').transition({perspective:0, 'left':'220px'}, 1000);
	$('.ataLifeLine').transition({perspective:0, 'left':'390px'}, 1000);
	$('.stqLifeLine').transition({perspective:0, opacity: 0, 'left':'640px'}, 1000);
	
	$('.ffStrapLifeLine').transition({perspective:0, 'left':'745px'}, 500, 'linear');
	$('.ataStrapLifeLine').transition({perspective:0, 'left':'1090px'}, 500, 'linear');
	$('.stqStrapLifeLine').transition({perspective:0, 'left':'1870px'}, 500, 'linear');
}

function stqPulseLifeLine(){
	$('.stqLifeLine').transition({perspective:0, scale:[1.25,1.25]}, 250, function(){
		$('.stqLifeLine').transition({perspective:0, scale:[1,1]}, 500, function(){
			
		});
	});
	
	$('.stqLifeLine .lifelineYellowTreeImg').transition({perspective:0, opacity: 1}, 250, function(){
		$('.stqLifeLine .lifelineYellowTreeImg').transition({perspective:0, opacity: 0}, 500, function(){
			
		});
	});
	
	$('.stqStrapLifeLine').transition({perspective:0, scale:[1.25,1.25]}, 250, function(){
		$('.stqStrapLifeLine').transition({perspective:0, scale:[1,1]}, 500, function(){
			
		});
	});
	
	$('.stqStrapLifeLine .lifelineYellowStrapImg').transition({perspective:0, opacity: 1}, 250, function(){
		$('.stqStrapLifeLine .lifelineYellowStrapImg').transition({perspective:0, opacity: 0}, 500, function(){
			
		});
	});
}

function stqLifeLineDisable(){
	$('.stqLifeLine .lifelineUsedImg').css('opacity', 1);
	$('.stqLifeLine .lifelineTreeImg').css('opacity', 1);
	$('.stqStrapLifeLine .lifelineUsedStrapImg').css('opacity', 1);
	$('.stqStrapLifeLine .lifelineStrapImg').css('opacity', 1);
}

function switchOutToNewQuestion(){
	clearTimeout(window.GameVariables.ShowAnswerTimeout);
	resetAnswerStraps();
	stqLifeLineDisable();
	setQuestion(true);
	$('.questionStrapDiv').transition({perspective:0, 'bottom':'225px', scale:[1,1]}, 300, 'ease-out', function(){
		setTimeout(function(){
			$('.answerGroupADiv').transition({perspective:0, 'left':'0px', 'bottom':'0px', scale:[1,1]}, 250, 'ease-out');
		}, 100);
		setTimeout(function(){
			$('.answerGroupBDiv').transition({perspective:0, 'left':'0px', 'bottom':'0px', scale:[1,1]}, 250, 'ease-out');
		}, 200);
	});
}

function switchAnimation(){
	$('.answerGroupBDiv').transition({perspective:0, 'left':'-960px', 'bottom':'-450px', scale:[2,2]}, 250, 'ease-in');
	setTimeout(function(){
		$('.answerGroupADiv').transition({perspective:0, 'left':'-960px', 'bottom':'-450px', scale:[2,2]}, 250, 'ease-in');
	}, 100);
	setTimeout(function(){
		$('.questionStrapDiv').transition({perspective:0, 'bottom':'-275px', scale:[2,2]}, 300, 'ease-in');
	}, 400);
}

/****************************************************************************************************************/
/* Other Life Line Functions */
/****************************************************************************************************************/

function showLifeLineCentered(target){
	window.GameVariables.ContinuePulsingLifeLineCenter = true;
	window.GameVariables.ShowLifeLineCenteredAnimation = true;
	
	$(target).css('opacity', 1);
		
	$('.answerStrapLifeLineCenterContainerDiv').transition({perspective:0, scale:[1,1], opacity:1}, 200, 'linear', function(){
		pulseLifeLineCenteredGlow();
	});
}

function pulseLifeLineCenteredGlow(){
	$('.lifelineCenterGlowImg').transition({perspective:0, scale:[1.2,1.2]}, 1000, function(){
		$('.lifelineCenterGlowImg').transition({perspective:0, scale:[1,1]}, 1000, function(){
			if(window.GameVariables.ContinuePulsingLifeLineCenter == true){
				setTimeout(pulseLifeLineCenteredGlow, 1000);
			}
		});
	});
}

function hideLifeLineCentered(){
	window.GameVariables.ContinuePulsingLifeLineCenter = false;
	window.GameVariables.ShowLifeLineCenteredAnimation = false;
	$('.answerStrapLifeLineCenterContainerDiv').transition({perspective:0, scale:[0.2,0.2], opacity:0}, 200, 'linear', function(){
		$('.lifelineCenterImg').css('opacity', 0);
	});
}

function hideJustLifeLineCenteredContainer(){
	$('.answerStrapLifeLineCenterDiv').css('opacity', 0);
}

function showJustLifeLineCenteredContainer(){
	$('.answerStrapLifeLineCenterDiv').css('opacity', 1);
}

function slideLifeLineStrapIn(){
	$('.lifeLinesLeftStrapDiv').transition({perspective:0, 'left':'112px'}, 500);
}

function slideLifeLineStrapOut(){
	$('.lifeLinesLeftStrapDiv').transition({perspective:0, 'left':'-1696px'}, 500, function(){
		$('.lifeLinesLeftStrapDiv').transition({perspective:0, 'left':'1920px'}, 1, 'linear');
	});
}