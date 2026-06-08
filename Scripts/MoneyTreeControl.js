function renderMoneyTreeTable(minus){
	var htmlTableString = "";
	
	for (var i = 14; i >= 0; i--){
		htmlTableString += "<tr id='moneyTreeTr" + (i+1) + "'>";
		
		if(window.GameVariables.ContestantsLeft >= 2){
			if(i >= (15 - minus)){
				htmlTableString += "<td class='moneyTreeAmountBlackTd'>"
			}
			else if(window.GameVariables.QuestionLevel >= 5 && i == 4){
				htmlTableString += "<td class='moneyTreeAmountReachedWhiteTd'>"
			}
			else if(i < window.GameVariables.QuestionLevel){
				htmlTableString += "<td class='moneyTreeAmountReachedTd'>"
			}
			else if(i == 14 - minus){
				htmlTableString += "<td class='moneyTreeAmountTopPrizeTd'>"
			}
			else if(i < 14 && i > 9){
				htmlTableString += "<td class='moneyTreeAmountTierThreeTd'>"
			}
			else if(i <= 9 && i > 4){
				htmlTableString += "<td class='moneyTreeAmountTierTwoTd'>"
			}
			else{
				htmlTableString += "<td class='moneyTreeAmountTierOneTd'>"
			}
		}
		else if(window.GameVariables.ContestantsLeft == 1){
			if(i >= (15 - minus)){
				htmlTableString += "<td class='moneyTreeAmountBlackTd'>"
			}
			else if(window.GameVariables.QuestionLevel >= 5 && i == 4){
				htmlTableString += "<td class='moneyTreeAmountReachedWhiteTd'>"
			}
			else if(i < window.GameVariables.QuestionLevel){
				htmlTableString += "<td class='moneyTreeAmountReachedTd'>"
			}
			else if(i == 14 - minus){
				htmlTableString += "<td class='moneyTreeAmountTopPrizeTd'>"
			}
			else if(i < 14 && i > 9){
				htmlTableString += "<td class='moneyTreeAmountTierThreeTd'>"
			}
			else if(i <= 9 && i > 4){
				htmlTableString += "<td class='moneyTreeAmountTierTwoTd'>"
			}
			else{
				htmlTableString += "<td class='moneyTreeAmountTierOneTd'>"
			}
		}
			
		if(i >= window.GameVariables.TopPrizeQuestionNumber - 1)
		{
			if(window.GameVariables.UseTopPrizeText == true){
				htmlTableString += window.GameVariables.TopPrizeText[i];
			}
			else{
				if(window.GameVariables.SecondaryNumberFormatTree == true){
					htmlTableString += window.GameVariables.SecondaryNumberPrefix + new Intl.NumberFormat(window.GameVariables.SecondaryLocaleCode, window.GameVariables.SecondaryFormatOptions).format(window.GameVariables.PrizeAmounts[i]).replace(window.GameVariables.SecondaryReplaceCharacterBefore, window.GameVariables.SecondaryReplaceCharacterAfter).trim() + window.GameVariables.SecondaryNumberSuffix;
				}
				else{
					htmlTableString += window.GameVariables.NumberPrefix + new Intl.NumberFormat(window.GameVariables.LocaleCode, window.GameVariables.FormatOptions).format(window.GameVariables.PrizeAmounts[i]).replace(window.GameVariables.ReplaceCharacterBefore, window.GameVariables.ReplaceCharacterAfter).trim() + window.GameVariables.NumberSuffix;
				}
			}
		}
		else
		{
			if(window.GameVariables.SecondaryNumberFormatTree == true){
				htmlTableString += window.GameVariables.SecondaryNumberPrefix + new Intl.NumberFormat(window.GameVariables.SecondaryLocaleCode, window.GameVariables.SecondaryFormatOptions).format(window.GameVariables.PrizeAmounts[i]).replace(window.GameVariables.SecondaryReplaceCharacterBefore, window.GameVariables.SecondaryReplaceCharacterAfter).trim() + window.GameVariables.SecondaryNumberSuffix;
			}
			else{
				htmlTableString += window.GameVariables.NumberPrefix + new Intl.NumberFormat(window.GameVariables.LocaleCode, window.GameVariables.FormatOptions).format(window.GameVariables.PrizeAmounts[i]).replace(window.GameVariables.ReplaceCharacterBefore, window.GameVariables.ReplaceCharacterAfter).trim() + window.GameVariables.NumberSuffix;
			}
		}

		
		htmlTableString += "</td>"
		htmlTableString += "</tr>"
	}
	
	$('.moneyTreeTable').html(htmlTableString);
}

function slideInMoneyTree(){
	$('.moneyTreeDiv').transition({perspective:0, 'right': '-56px'}, 750, 'ease-out');
}

function setLevelOnMoneyTree(level){
	$('.moneyTreeAmountTopPrizeTd').css('color','#FFFFFF');
	$('.moneyTreeAmountWhiteTd').css('color','#FFFFFF');
	$('.moneyTreeAmountBlackTd').css('color','#FFFFFF');
	$('.moneyTreeAmountBlackTd').css('opacity', 0.25);
	$('.moneyTreeAmountReachedTd').css('color','#D23E7B');
	$('.moneyTreeAmountReachedWhiteTd').css('color','#D23E7B');
	$('.moneyTreeAmountTierOneTd').css('color','#FFFFFF');
	$('.moneyTreeAmountTierTwoTd').css('color','#FFFFFF');
	$('.moneyTreeAmountTierThreeTd').css('color','#FFFFFF');
	$('.moneyTreeAmountTd').css('color','#FFFFFF');
	$('.moneyTreeAmountTopPrizeTd').css('background-color','transparent');
	$('.moneyTreeAmountBlackTd').css('background-color','transparent');
	$('.moneyTreeAmountWhiteTd').css('background-color','transparent');
	$('.moneyTreeAmountReachedTd').css('background-color','transparent');
	$('.moneyTreeAmountReachedWhiteTd').css('background-color','transparent');
	$('.moneyTreeAmountTd').css('background-color','transparent');
	$('.moneyTreeAmountTopPrizeTd').css('background-image','url(' + 'Images/moneytree_board/lq.png' +')');
	$('.moneyTreeAmountWhiteTd').css('background-image','url(' + 'Images/moneytree_board/all.png' +')');
	$('.moneyTreeAmountReachedTd').css('background-color','transparent');
	$('.moneyTreeAmountReachedTd').css('z-index','0');
	$('.moneyTreeAmountReachedWhiteTd').css('background-image','url(' + 'Images/moneytree_board/sn.png' +')');
	$('.moneyTreeAmountReachedWhiteTd').css('z-index','0');
	$('.moneyTreeAmountTd').css('background-image','url(' + 'Images/moneytree_board/all.png' +')');
	$('.moneyTreeAmountTd').css('z-index','0');
	$('.moneyTreeAmountTierOneTd').css('background-color','transparent');
	$('.moneyTreeAmountTierOneTd').css('z-index','0');
	$('.moneyTreeAmountTierTwoTd').css('background-color','transparent');
	$('.moneyTreeAmountTierTwoTd').css('z-index','0');
	$('.moneyTreeAmountTierThreeTd').css('background-color','transparent');
	$('.moneyTreeAmountTierThreeTd').css('z-index','0');

	for(var i = 1; i <= level; i++){
		var targetId = '#moneyTreeTr' + i;
		
		if(i == level){
			if(level == 15 - (6 - window.GameVariables.ContestantsLeft)){
				$(targetId + ' td').css('background-image','url(' + 'Images/moneytree_board/lq.png' +')');
				$(targetId + ' td').css('color','#FFFFFF');
				$(targetId + ' td').css('z-index','1');
			}
			else if(level <= 15 - (6 - window.GameVariables.ContestantsLeft) && level > 10){
				$(targetId + ' td').css('background-color','transparent');
				$(targetId + ' td').css('color','#FFFFFF');
				$(targetId + ' td').css('z-index','1');
			}
			else if(level <= 10 && level > 5){
				$(targetId + ' td').css('background-color','transparent');
				$(targetId + ' td').css('color','#FFFFFF');
				$(targetId + ' td').css('z-index','1');
			}
			else{
				$(targetId + ' td').css('background-color','transparent');
				$(targetId + ' td').css('color','#FFFFFF');
				$(targetId + ' td').css('z-index','1');
			}
			$(targetId + ' .moneyTreeLevelTd, ' + targetId + ' .moneyTreeLevelWhiteTd').css('color','#FFFFFF');
			$(targetId + ' .moneyTreeAmountTierOneTd, ' + targetId + ' .moneyTreeAmountTierTwoTd, ' + targetId + ' .moneyTreeAmountTierThreeTd').css('color','FFFFFF');
		}
	}
}

function scaleTreeLevels(level){
	var targetId = '#moneyTreeTr' + level;
	
	var previousTargetId = '#moneyTreeTr' + (level - 1);
	
	$(targetId + ' td').css('background-image','url(' + 'Images/moneytree_board/nq.png' +')');
	$(targetId + ' .moneyTreeAmountTd, ' + targetId + ' .moneyTreeAmountTopPrizeTd').css('color','#FFFFFF');
	
	if(window.GameVariables.ContestantsLeft >= 2){
		if((level - 1) % (10 - (6 - window.GameVariables.ContestantsLeft)) === 5){
			$(previousTargetId + ' td').css('background-color','transparent');
			$(previousTargetId + ' .moneyTreeAmountTopPrizeTd').css('color','#FFFFFF');
			$(previousTargetId + ' .moneyTreeAmountTopPrizeTd').css('z-index','1');
		}
		else{
			$(previousTargetId + ' td').css('background-color','transparent');
			$(previousTargetId + ' .moneyTreeAmountTd').css('color','#F99B1C');
			$(previousTargetId + ' .moneyTreeAmountTd').css('z-index','1');
		}
	}
	else if(window.GameVariables.ContestantsLeft = 1){
		if((level - 1) % 5 === 0){
			$(previousTargetId + ' td').css('background-color','transparent');
			$(previousTargetId + ' .moneyTreeAmountTopPrizeTd').css('color','#FFFFFF');
			$(previousTargetId + ' .moneyTreeAmountTopPrizeTd').css('z-index','1');
		}
		else{
			$(previousTargetId + ' td').css('background-color','transparent');
			$(previousTargetId + ' .moneyTreeAmountTd').css('color','#F99B1C');
			$(previousTargetId + ' .moneyTreeAmountTd').css('z-index','1');
		}
	}
	
	if(level < 15){
		window.GameVariables.ScaleTreeTimeout = setTimeout(function(){
			scaleTreeLevels(level + 1);
		}, 250);
	}
}

function unscaleTreeLevels(level){
	clearTimeout(window.GameVariables.ScaleTreeTimeout);
	$('.moneyTreeAmountTopPrizeTd').css('color','#FFFFFF');
	$('.moneyTreeAmountWhiteTd').css('color','#FFFFFF');
	$('.moneyTreeAmountBlackTd').css('color','#FFFFFF');
	$('.moneyTreeAmountBlackTd').css('opacity', 0.25);
	$('.moneyTreeAmountReachedTd').css('color','#D23E7B');
	$('.moneyTreeAmountReachedWhiteTd').css('color','#D23E7B');
	$('.moneyTreeAmountTierOneTd').css('color','#FFFFFF');
	$('.moneyTreeAmountTierTwoTd').css('color','#FFFFFF');
	$('.moneyTreeAmountTierThreeTd').css('color','#FFFFFF');
	$('.moneyTreeAmountTd').css('color','#FFFFFF');
	$('.moneyTreeAmountTopPrizeTd').css('background-color','transparent');
	$('.moneyTreeAmountBlackTd').css('background-color','transparent');
	$('.moneyTreeAmountWhiteTd').css('background-color','transparent');
	$('.moneyTreeAmountReachedTd').css('background-color','transparent');
	$('.moneyTreeAmountReachedWhiteTd').css('background-color','transparent');
	$('.moneyTreeAmountTd').css('background-color','transparent');
	$('.moneyTreeAmountTopPrizeTd').css('background-image','url(' + 'Images/moneytree_board/lq.png' +')');
	$('.moneyTreeAmountWhiteTd').css('background-image','url(' + 'Images/moneytree_board/all.png' +')');
	$('.moneyTreeAmountBlackTd').css('background-image','url(' + 'Images/moneytree_board/t3.png' +')');
	$('.moneyTreeAmountReachedTd').css('background-color','transparent');
	$('.moneyTreeAmountReachedTd').css('z-index','0');
	$('.moneyTreeAmountReachedWhiteTd').css('background-image','url(' + 'Images/moneytree_board/sn.png' +')');
	$('.moneyTreeAmountReachedWhiteTd').css('z-index','0');
	$('.moneyTreeAmountTd').css('background-image','url(' + 'Images/moneytree_board/all.png' +')');
	$('.moneyTreeAmountTd').css('z-index','0');
	$('.moneyTreeAmountTierOneTd').css('background-color','transparent');
	$('.moneyTreeAmountTierOneTd').css('z-index','0');
	$('.moneyTreeAmountTierTwoTd').css('background-color','transparent');
	$('.moneyTreeAmountTierTwoTd').css('z-index','0');
	$('.moneyTreeAmountTierThreeTd').css('background-color','transparent');
	$('.moneyTreeAmountTierThreeTd').css('z-index','0');
	setLevelOnMoneyTree(window.GameVariables.QuestionLevel);
}

function showMoneyTree(){
	$('.moneyTreeDiv').css('opacity', 1);
}

function hideMoneyTree(){
	$('.moneyTreeDiv').css('opacity', 0);
}

function renderMoneyTreeInfoText(){
	$('.contestantNowNameP').html(window.GameVariables.FastestFingerContestants[window.GameVariables.ContestantNow - 1].FirstName + ' ' + window.GameVariables.FastestFingerContestants[window.GameVariables.ContestantNow - 1].LastName);
	$('.totalPrizeDiv').html(window.GameVariables.FastestFingerContestants[window.GameVariables.ContestantNow - 1].FirstName + ' ' + window.GameVariables.FastestFingerContestants[window.GameVariables.ContestantNow - 1].LastName);
	if(window.GameVariables.QuestionLevel != null || window.GameVariables.ContestantsLeft < 6){
		if(window.GameVariables.QuestionsLeft == 1){
			$('.questionsLeftP').html(window.GameVariables.QuestionLeftPrefixText + new Intl.NumberFormat('en', { numberingSystem: window.GameVariables.TreeNumberingSystem }).format(15 - window.GameVariables.QuestionLevel + 1 - (6 - window.GameVariables.ContestantsLeft)) + window.GameVariables.QuestionLeftSuffixText);
		}
		else{
			$('.questionsLeftP').html(window.GameVariables.QuestionsLeftPrefixText + new Intl.NumberFormat('en', { numberingSystem: window.GameVariables.TreeNumberingSystem }).format(15 - window.GameVariables.QuestionLevel + 1 - (6 - window.GameVariables.ContestantsLeft)) + window.GameVariables.QuestionsLeftSuffixText);
		}
	}
	else{
		if(window.GameVariables.QuestionsLeft == 1){
			$('.questionsLeftP').html(window.GameVariables.QuestionLeftPrefixText + new Intl.NumberFormat('en', { numberingSystem: window.GameVariables.TreeNumberingSystem }).format(15 - window.GameVariables.QuestionLevel - (6 - window.GameVariables.ContestantsLeft)) + window.GameVariables.QuestionLeftSuffixText);
		}
		else{
			$('.questionsLeftP').html(window.GameVariables.QuestionsLeftPrefixText + new Intl.NumberFormat('en', { numberingSystem: window.GameVariables.TreeNumberingSystem }).format(15 - window.GameVariables.QuestionLevel - (6 - window.GameVariables.ContestantsLeft)) + window.GameVariables.QuestionsLeftSuffixText);
		}
	}
	if(window.GameVariables.ContestantsLeft == 1){
		$('.contestantsRemainingP').html(window.GameVariables.ContestantLeftPrefixText + new Intl.NumberFormat('en', { numberingSystem: window.GameVariables.TreeNumberingSystem }).format(window.GameVariables.ContestantsLeft) + window.GameVariables.ContestantLeftSuffixText);
	}
	else{
		$('.contestantsRemainingP').html(window.GameVariables.ContestantsLeftPrefixText + new Intl.NumberFormat('en', { numberingSystem: window.GameVariables.TreeNumberingSystem }).format(window.GameVariables.ContestantsLeft) + window.GameVariables.ContestantsLeftSuffixText);
	}
}

function hideLevelStrap(){
	$('.currentLevelStrapDiv').transition({perspective:0, 'left':'-504px'}, 375, 'ease-in');
}

function showLevelStrap(){
	if(window.GameVariables.UseTopPrizeLevelStrapText == true){
		if(window.GameVariables.QuestionLevel >= window.GameVariables.TopPrizeLevelStrapQuestionNumber){
			$('.currentLevelStrapAmountDiv').html(window.GameVariables.TopPrizeLevelStrapText[window.GameVariables.QuestionLevel - 1]);
		}
		else{
			if(window.GameVariables.UseTopPrizeText == true){
				if(window.GameVariables.QuestionLevel >= window.GameVariables.TopPrizeQuestionNumber){
					$('.currentLevelStrapAmountDiv').html(window.GameVariables.TopPrizeText[window.GameVariables.QuestionLevel - 1]);
				}
				else{
					if(window.GameVariables.SecondaryNumberFormatLevelStrap == true){
						$('.currentLevelStrapAmountDiv').html(window.GameVariables.SecondaryNumberPrefix + new Intl.NumberFormat(window.GameVariables.SecondaryLocaleCode, window.GameVariables.SecondaryFormatOptions).format(window.GameVariables.PrizeAmounts[window.GameVariables.QuestionLevel - 1]).replace(window.GameVariables.SecondaryReplaceCharacterBefore, window.GameVariables.SecondaryReplaceCharacterAfter).trim() + window.GameVariables.SecondaryNumberSuffix);
					}
					else{
						$('.currentLevelStrapAmountDiv').html(window.GameVariables.NumberPrefix + new Intl.NumberFormat(window.GameVariables.LocaleCode, window.GameVariables.FormatOptions).format(window.GameVariables.PrizeAmounts[window.GameVariables.QuestionLevel - 1]).replace(window.GameVariables.ReplaceCharacterBefore, window.GameVariables.ReplaceCharacterAfter).trim() + window.GameVariables.NumberSuffix);
					}
				}
			}
			else{
				if(window.GameVariables.SecondaryNumberFormatLevelStrap == true){
					$('.currentLevelStrapAmountDiv').html(window.GameVariables.SecondaryNumberPrefix + new Intl.NumberFormat(window.GameVariables.SecondaryLocaleCode, window.GameVariables.SecondaryFormatOptions).format(window.GameVariables.PrizeAmounts[window.GameVariables.QuestionLevel - 1]).replace(window.GameVariables.SecondaryReplaceCharacterBefore, window.GameVariables.SecondaryReplaceCharacterAfter).trim() + window.GameVariables.SecondaryNumberSuffix);
				}
				else{
					$('.currentLevelStrapAmountDiv').html(window.GameVariables.NumberPrefix + new Intl.NumberFormat(window.GameVariables.LocaleCode, window.GameVariables.FormatOptions).format(window.GameVariables.PrizeAmounts[window.GameVariables.QuestionLevel - 1]).replace(window.GameVariables.ReplaceCharacterBefore, window.GameVariables.ReplaceCharacterAfter).trim() + window.GameVariables.NumberSuffix);
				}
			}
		}
	}
	else{
		if(window.GameVariables.SecondaryNumberFormatLevelStrap == true){
			$('.currentLevelStrapAmountDiv').html(window.GameVariables.SecondaryNumberPrefix + new Intl.NumberFormat(window.GameVariables.SecondaryLocaleCode, window.GameVariables.SecondaryFormatOptions).format(window.GameVariables.PrizeAmounts[window.GameVariables.QuestionLevel - 1]).replace(window.GameVariables.SecondaryReplaceCharacterBefore, window.GameVariables.SecondaryReplaceCharacterAfter).trim() + window.GameVariables.SecondaryNumberSuffix);
		}
		else{
			$('.currentLevelStrapAmountDiv').html(window.GameVariables.NumberPrefix + new Intl.NumberFormat(window.GameVariables.LocaleCode, window.GameVariables.FormatOptions).format(window.GameVariables.PrizeAmounts[window.GameVariables.QuestionLevel - 1]).replace(window.GameVariables.ReplaceCharacterBefore, window.GameVariables.ReplaceCharacterAfter).trim() + window.GameVariables.NumberSuffix);
		}
	}
	$('.currentLevelStrapDiv').transition({perspective:0, 'left':'0px'}, 375, 'ease-out');
}

function hidePassStrap(){
	$('.currentPassStrapDiv').transition({perspective:0, 'left':'-504px'}, 375, 'ease-in');
}

function showPassStrap(){
	$('.currentPassStrapDiv').transition({perspective:0, 'left':'0px'}, 375, 'ease-out');
}

function updatePassLozengeTree(){
	if(window.GameVariables.HotSeatNewRuleset == true){
		if(window.GameVariables.QuestionsLeft == 1){
			passLifeLineDisable();
			window.GameVariables.IsPassLifeLineUsed = true;
		}
		else if(window.GameVariables.ContestantsLeft == 1){
			passLifeLineDisable();
			window.GameVariables.IsPassLifeLineUsed = true;
		}
		else if(window.GameVariables.PassBlocked == true){
			passLifeLineDisable();
			window.GameVariables.IsPassLifeLineUsed = true;
		}
		else{
			window.GameVariables.IsPassLifeLineUsed = false;
		}
	}
	else{
		if(window.GameVariables.QuestionLevel > 8){
			passLifeLineDisable();
			window.GameVariables.IsPassLifeLineUsed = true;
		}
		else if(window.GameVariables.ContestantsLeft == 1){
			passLifeLineDisable();
			window.GameVariables.IsPassLifeLineUsed = true;
		}
		else if(window.GameVariables.PassBlocked == true){
			passLifeLineDisable();
			window.GameVariables.IsPassLifeLineUsed = true;
		}
		else{
			window.GameVariables.IsPassLifeLineUsed = false;
		}
	}
}

function hideNewTPMStrap(){
	$('.newtpStrapDiv').css('opacity', 0);
}

function showNewTPMStrap(){
	$('.newtpStrapDiv').css('opacity', 1);
}

function updateNewTPMStrapText(){
	if(window.GameVariables.QuestionsLeft > 1){
		$('.newtptextP').html(window.GameVariables.QuestionsToTopPrizePrefixText + new Intl.NumberFormat('en', { numberingSystem: window.GameVariables.TreeNumberingSystem }).format(15 - window.GameVariables.QuestionLevel + 1 - (6 - window.GameVariables.ContestantsLeft)) + window.GameVariables.QuestionsToTopPrizeSuffixText);
	}
	else{
		$('.newtptextP').html(window.GameVariables.FinalQuestionText);
	}
}

function animateLevelStrapGlow(){
	
}

function animateMoneyTree1(){
	$('#moneyTreeTr1 .moneyTreeAmountTierOneTd').transition({perspective:0, scale:[1.05,1.05]}, 250, 'ease', function(){
		$('#moneyTreeTr1 .moneyTreeAmountTierOneTd').transition({perspective:0, scale:[1,1]}, 250, 'ease');
	});
	setTimeout(function(){
		$('#moneyTreeTr2 .moneyTreeAmountTierOneTd').transition({perspective:0, scale:[1.05,1.05]}, 250, 'ease', function(){
			$('#moneyTreeTr2 .moneyTreeAmountTierOneTd').transition({perspective:0, scale:[1,1]}, 250, 'ease');
		});
	}, 143);
	setTimeout(function(){
		$('#moneyTreeTr3 .moneyTreeAmountTierOneTd').transition({perspective:0, scale:[1.05,1.05]}, 250, 'ease', function(){
			$('#moneyTreeTr3 .moneyTreeAmountTierOneTd').transition({perspective:0, scale:[1,1]}, 250, 'ease');
		});
	}, 286);
	setTimeout(function(){
		$('#moneyTreeTr4 .moneyTreeAmountTierOneTd').transition({perspective:0, scale:[1.05,1.05]}, 250, 'ease', function(){
			$('#moneyTreeTr4 .moneyTreeAmountTierOneTd').transition({perspective:0, scale:[1,1]}, 250, 'ease');
		});
	}, 429);
	setTimeout(function(){
		$('#moneyTreeTr5 .moneyTreeAmountTierOneTd').transition({perspective:0, scale:[1.05,1.05]}, 250, 'ease', function(){
			$('#moneyTreeTr5 .moneyTreeAmountTierOneTd').transition({perspective:0, scale:[1,1]}, 250, 'ease');
		});
	}, 571);
	setTimeout(function(){
		$('#moneyTreeTr6 .moneyTreeAmountTierTwoTd').transition({perspective:0, scale:[1.05,1.05]}, 250, 'ease', function(){
			$('#moneyTreeTr6 .moneyTreeAmountTierTwoTd').transition({perspective:0, scale:[1,1]}, 250, 'ease');
		});
	}, 714);
	setTimeout(function(){
		$('#moneyTreeTr7 .moneyTreeAmountTierTwoTd').transition({perspective:0, scale:[1.05,1.05]}, 250, 'ease', function(){
			$('#moneyTreeTr7 .moneyTreeAmountTierTwoTd').transition({perspective:0, scale:[1,1]}, 250, 'ease');
		});
	}, 857);
	setTimeout(function(){
		$('#moneyTreeTr8 .moneyTreeAmountTierTwoTd').transition({perspective:0, scale:[1.05,1.05]}, 250, 'ease', function(){
			$('#moneyTreeTr8 .moneyTreeAmountTierTwoTd').transition({perspective:0, scale:[1,1]}, 250, 'ease');
		});
	}, 1000);
	setTimeout(function(){
		$('#moneyTreeTr9 .moneyTreeAmountTierTwoTd').transition({perspective:0, scale:[1.05,1.05]}, 250, 'ease', function(){
			$('#moneyTreeTr9 .moneyTreeAmountTierTwoTd').transition({perspective:0, scale:[1,1]}, 250, 'ease');
		});
	}, 1143);
	setTimeout(function(){
		$('#moneyTreeTr10 .moneyTreeAmountTierTwoTd').transition({perspective:0, scale:[1.05,1.05]}, 250, 'ease', function(){
			$('#moneyTreeTr10 .moneyTreeAmountTierTwoTd').transition({perspective:0, scale:[1,1]}, 250, 'ease');
		});
	}, 1286);
	setTimeout(function(){
		$('#moneyTreeTr11 .moneyTreeAmountTierThreeTd').transition({perspective:0, scale:[1.05,1.05]}, 250, 'ease', function(){
			$('#moneyTreeTr11 .moneyTreeAmountTierThreeTd').transition({perspective:0, scale:[1,1]}, 250, 'ease');
		});
	}, 1429);
	setTimeout(function(){
		$('#moneyTreeTr12 .moneyTreeAmountTierThreeTd').transition({perspective:0, scale:[1.05,1.05]}, 250, 'ease', function(){
			$('#moneyTreeTr12 .moneyTreeAmountTierThreeTd').transition({perspective:0, scale:[1,1]}, 250, 'ease');
		});
	}, 1571);
	setTimeout(function(){
		$('#moneyTreeTr13 .moneyTreeAmountTierThreeTd').transition({perspective:0, scale:[1.05,1.05]}, 250, 'ease', function(){
			$('#moneyTreeTr13 .moneyTreeAmountTierThreeTd').transition({perspective:0, scale:[1,1]}, 250, 'ease');
		});
	}, 1714);
	setTimeout(function(){
		$('#moneyTreeTr14 .moneyTreeAmountTierThreeTd').transition({perspective:0, scale:[1.05,1.05]}, 250, 'ease', function(){
			$('#moneyTreeTr14 .moneyTreeAmountTierThreeTd').transition({perspective:0, scale:[1,1]}, 250, 'ease');
		});
	}, 1857);
	setTimeout(function(){
		$('#moneyTreeTr15 .moneyTreeAmountTopPrizeTd').transition({perspective:0, scale:[1.05,1.05]}, 250, 'ease', function(){
			$('#moneyTreeTr15 .moneyTreeAmountTopPrizeTd').transition({perspective:0, scale:[1,1]}, 250, 'ease');
		});
	}, 2000);
}

function animateMoneyTree2(){
	$('#moneyTreeTr15 .moneyTreeAmountTopPrizeTd').transition({'background-position-x':'685px', 'opacity':'0.25'}, 600, 'cubic-bezier(.25,0,1,1)');
	$('#moneyTreeTr14 .moneyTreeAmountTierThreeTd').transition({'background-position-x':'685px'}, 600, 'cubic-bezier(.25,0,1,1)', function(){
		$('#moneyTreeTr15 .moneyTreeAmountTopPrizeTd').transition({'background-image':'none', 'background-position-x':'0px'}, 600, 'cubic-bezier(0,0,.75,1)');
		$('#moneyTreeTr14 .moneyTreeAmountTierThreeTd').transition({'background-image':'url(' + 'Images/moneytree_board/lq.png' + ')', 'background-position-x':'0px'}, 600, 'cubic-bezier(0,0,.75,1)');
	});
}

function resetMoneyTree(){
	$('#moneyTreeTr15 .moneyTreeAmountTopPrizeTd').transition({'background-image':'url(' + 'Images/moneytree_board/lq.png' + ')', 'opacity':'1'}, 0);
	$('#moneyTreeTr14 .moneyTreeAmountTierThreeTd').transition({'background-image':'none'}, 0);
}