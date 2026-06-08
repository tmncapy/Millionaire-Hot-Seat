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
	$('.moneyTreeAmountWhiteTd').css('color','#000000');
	$('.moneyTreeAmountBlackTd').css('color','#FFFFFF');
	$('.moneyTreeAmountBlackTd').css('text-shadow','2px 2px 0px black');
	$('.moneyTreeAmountBlackTd').css('opacity', 0.25);
	$('.moneyTreeAmountReachedTd').css('color','#000000');
	$('.moneyTreeAmountReachedWhiteTd').css('color','#FFFFFF');
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
	$('.moneyTreeAmountReachedTd').css('background-image','url(' + 'Images/moneytree_board/cq.png' +')');
	$('.moneyTreeAmountReachedTd').css('z-index','0');
	$('.moneyTreeAmountReachedWhiteTd').css('background-image','url(' + 'Images/moneytree_board/cq_sn.png' +')');
	$('.moneyTreeAmountReachedWhiteTd').css('z-index','0');
	$('.moneyTreeAmountTd').css('background-image','url(' + 'Images/moneytree_board/all.png' +')');
	$('.moneyTreeAmountTd').css('z-index','0');
	$('.moneyTreeAmountTierOneTd').css('background-image','url(' + 'Images/moneytree_board/t1.png' +')');
	$('.moneyTreeAmountTierOneTd').css('z-index','0');
	$('.moneyTreeAmountTierTwoTd').css('background-image','url(' + 'Images/moneytree_board/t2.png' +')');
	$('.moneyTreeAmountTierTwoTd').css('z-index','0');
	$('.moneyTreeAmountTierThreeTd').css('background-image','url(' + 'Images/moneytree_board/t3.png' +')');
	$('.moneyTreeAmountTierThreeTd').css('z-index','0');

	for(var i = 1; i <= level; i++){
		var targetId = '#moneyTreeTr' + i;
		
		if(i == level){
			if(level == 15 - (6 - window.GameVariables.ContestantsLeft)){
				$(targetId + ' td').css('background-image','url(' + 'Images/moneytree_board/lq.png' +')');
				$(targetId + ' td').css('transform','scale(1.3, 1.3) translateX(38px)');
				$(targetId + ' td').css('color','#FFFFFF');
			$(targetId + ' td').css('text-shadow','2px 2px 0px black');
				$(targetId + ' td').css('z-index','1');
			}
			else if(level == 5){
				$(targetId + ' td').css('background-image','url(' + 'Images/moneytree_board/nq_t1.png' +')');
				$(targetId + ' td').css('transform','scale(1.3, 1.3) translateX(38px)');
				$(targetId + ' td').css('color','#FFFFFF');
			$(targetId + ' td').css('text-shadow','2px 2px 0px black');
				$(targetId + ' td').css('z-index','1');
			}
			else if(level <= 15 - (6 - window.GameVariables.ContestantsLeft) && level > 10){
				$(targetId + ' td').css('background-image','url(' + 'Images/moneytree_board/nq_t3.png' +')');
				$(targetId + ' td').css('transform','scale(1.3, 1.3) translateX(38px)');
				$(targetId + ' td').css('color','#000000');
			$(targetId + ' td').css('text-shadow','0px 0px 0px transparent');
				$(targetId + ' td').css('z-index','1');
			}
			else if(level <= 10 && level > 5){
				$(targetId + ' td').css('background-image','url(' + 'Images/moneytree_board/nq_t2.png' +')');
				$(targetId + ' td').css('transform','scale(1.3, 1.3) translateX(38px)');
				$(targetId + ' td').css('color','#000000');
			$(targetId + ' td').css('text-shadow','0px 0px 0px transparent');
				$(targetId + ' td').css('z-index','1');
			}
			else{
				$(targetId + ' td').css('background-image','url(' + 'Images/moneytree_board/nq_t1.png' +')');
				$(targetId + ' td').css('transform','scale(1.3, 1.3) translateX(38px)');
				$(targetId + ' td').css('color','#000000');
			$(targetId + ' td').css('text-shadow','0px 0px 0px transparent');
				$(targetId + ' td').css('z-index','1');
			}
		}
	}
}

function scaleTreeLevels(level){
	var targetId = '#moneyTreeTr' + level;
	
	var previousTargetId = '#moneyTreeTr' + (level - 1);
	
	$(targetId + ' td').css('background-image','url(' + 'Images/moneytree_board/nq.png' +')');
	$(targetId + ' td').css('transform','scale(1.3, 1.3) translateX(38px)');
	$(targetId + ' .moneyTreeAmountTd, ' + targetId + ' .moneyTreeAmountTopPrizeTd').css('color','#FFFFFF');
	$(targetId + ' .moneyTreeAmountTd, ' + targetId + ' .moneyTreeAmountTopPrizeTd').css('text-shadow','2px 2px 0px black');
	
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
	$('.moneyTreeAmountWhiteTd').css('color','#000000');
	$('.moneyTreeAmountBlackTd').css('color','#FFFFFF');
	$('.moneyTreeAmountBlackTd').css('opacity', 0.25);
	$('.moneyTreeAmountReachedTd').css('color','#000000');
	$('.moneyTreeAmountReachedWhiteTd').css('color','#FFFFFF');
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
	$('.moneyTreeAmountReachedTd').css('background-image','url(' + 'Images/moneytree_board/cq.png' +')');
	$('.moneyTreeAmountReachedTd').css('z-index','0');
	$('.moneyTreeAmountReachedWhiteTd').css('background-image','url(' + 'Images/moneytree_board/cq_sn.png' +')');
	$('.moneyTreeAmountReachedWhiteTd').css('z-index','0');
	$('.moneyTreeAmountTd').css('background-image','url(' + 'Images/moneytree_board/all.png' +')');
	$('.moneyTreeAmountTd').css('z-index','0');
	$('.moneyTreeAmountTierOneTd').css('background-image','url(' + 'Images/moneytree_board/t1.png' +')');
	$('.moneyTreeAmountTierOneTd').css('z-index','0');
	$('.moneyTreeAmountTierTwoTd').css('background-image','url(' + 'Images/moneytree_board/t2.png' +')');
	$('.moneyTreeAmountTierTwoTd').css('z-index','0');
	$('.moneyTreeAmountTierThreeTd').css('background-image','url(' + 'Images/moneytree_board/t3.png' +')');
	$('.moneyTreeAmountTierThreeTd').css('z-index','0');
	setLevelOnMoneyTree(window.GameVariables.QuestionLevel);
}

function showMoneyTree(){
	$('.moneyTreeDiv').css('opacity', 1);
	animatePassStrapGlint();
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
	if(window.GameVariables.SecondRotation == true){
		$('.currentPassStrapTextDiv').html(window.GameVariables.PassUsedText);
	}
	else{
		if(window.GameVariables.IsPassLifeLineUsed == true){
			$('.currentPassStrapTextDiv').html(window.GameVariables.NoPassText);
		}
		else{
			$('.currentPassStrapTextDiv').html(window.GameVariables.CanPassText);
		}
	}
	$('.currentPassStrapDiv').transition({perspective:0, 'left':'0px'}, 375, 'ease-out');
}

function updatePassLozengeTree(){
	if(window.GameVariables.HotSeatNewRuleset == true){
		if(window.GameVariables.QuestionsLeft == 1){
			window.GameVariables.IsPassLifeLineUsed = true;
			if(window.GameVariables.PassBlocked == true){
				$('.passP').html(window.GameVariables.PassUsedText);
			}
			else{
				$('.passP').html(window.GameVariables.NoPassText);
			}
		}
		else if(window.GameVariables.ContestantsLeft == 1){
			window.GameVariables.IsPassLifeLineUsed = true;
			if(window.GameVariables.SecondRotation == true){
				$('.passP').html(window.GameVariables.PassUsedText);
			}
			else{
				$('.passP').html(window.GameVariables.NoPassText);
			}
		}
		else if(window.GameVariables.PassBlocked == true){
			window.GameVariables.IsPassLifeLineUsed = true;
			$('.passP').html(window.GameVariables.PassUsedText);
		}
		else{
			window.GameVariables.IsPassLifeLineUsed = false;
			$('.passP').html(window.GameVariables.CanPassText);
		}
	}
	else{
		if(window.GameVariables.QuestionLevel > 8){
			window.GameVariables.IsPassLifeLineUsed = true;
			if(window.GameVariables.PassBlocked == true){
				$('.passP').html(window.GameVariables.PassUsedText);
			}
			else{
				$('.passP').html(window.GameVariables.NoPassText);
			}
		}
		else if(window.GameVariables.ContestantsLeft == 1){
			window.GameVariables.IsPassLifeLineUsed = true;
			if(window.GameVariables.SecondRotation == true){
				$('.passP').html(window.GameVariables.PassUsedText);
			}
			else{
				$('.passP').html(window.GameVariables.NoPassText);
			}
		}
		else if(window.GameVariables.PassBlocked == true){
			window.GameVariables.IsPassLifeLineUsed = true;
			$('.passP').html(window.GameVariables.PassUsedText);
		}
		else{
			window.GameVariables.IsPassLifeLineUsed = false;
			$('.passP').html(window.GameVariables.CanPassText);
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
	$('#moneyTreeTr1 .moneyTreeAmountTierOneTd').css('background-image','url(' + 'Images/moneytree_board/t1.png' +')');
	$('#moneyTreeTr1 .moneyTreeAmountTierOneTd').css('transform','scale(1, 1) translateX(0px)');
	$('#moneyTreeTr1 .moneyTreeAmountTierOneTd').css('color','#FFFFFF');
	$('#moneyTreeTr1 .moneyTreeAmountTierOneTd').css('text-shadow','2px 1px 0px black');
	$('.moneyTreeAmountTopPrizeTd').css('z-index','15');
}

function animateMoneyTree2(){
	$('#moneyTreeTr1 .moneyTreeAmountTierOneTd').css('transform','scale(1.3, 1.3) translateX(38px)');
	$('#moneyTreeTr1 .moneyTreeAmountTierOneTd').css('z-index','1');
	$('#moneyTreeTr1 .moneyTreeAmountTierOneTd').css('background-image','url(' + 'Images/moneytree_board/nq_t1.png' +')');
	setTimeout(function(){
		$('#moneyTreeTr2 .moneyTreeAmountTierOneTd').css('transform','scale(1.3, 1.3) translateX(38px)');
		$('#moneyTreeTr2 .moneyTreeAmountTierOneTd').css('background-image','url(' + 'Images/moneytree_board/nq_t1.png' +')');
		$('#moneyTreeTr2 .moneyTreeAmountTierOneTd').css('z-index','2');
	}, 143);
	setTimeout(function(){
		$('#moneyTreeTr3 .moneyTreeAmountTierOneTd').css('transform','scale(1.3, 1.3) translateX(38px)');
		$('#moneyTreeTr3 .moneyTreeAmountTierOneTd').css('background-image','url(' + 'Images/moneytree_board/nq_t1.png' +')');
		$('#moneyTreeTr3 .moneyTreeAmountTierOneTd').css('z-index','3');
	}, 286);
	setTimeout(function(){
		$('#moneyTreeTr4 .moneyTreeAmountTierOneTd').css('transform','scale(1.3, 1.3) translateX(38px)');
		$('#moneyTreeTr4 .moneyTreeAmountTierOneTd').css('background-image','url(' + 'Images/moneytree_board/nq_t1.png' +')');
		$('#moneyTreeTr4 .moneyTreeAmountTierOneTd').css('z-index','4');
		$('#moneyTreeTr1 .moneyTreeAmountTierOneTd').transition({'transform':'scale(1, 1) translateX(0px)','background-image':'url(' + 'Images/moneytree_board/cq.png' +')','color':'#000000','text-shadow':'0px 0px 0px transparent'}, 857, 'linear');
	}, 429);
	setTimeout(function(){
		$('#moneyTreeTr5 .moneyTreeAmountTierOneTd').css('transform','scale(1.3, 1.3) translateX(38px)');
		$('#moneyTreeTr5 .moneyTreeAmountTierOneTd').css('background-image','url(' + 'Images/moneytree_board/nq_t1.png' +')');
		$('#moneyTreeTr5 .moneyTreeAmountTierOneTd').css('z-index','5');
		$('#moneyTreeTr2 .moneyTreeAmountTierOneTd').transition({'transform':'scale(1, 1) translateX(0px)','background-image':'url(' + 'Images/moneytree_board/cq.png' +')','color':'#000000','text-shadow':'0px 0px 0px transparent'}, 857, 'linear');
	}, 571);
	setTimeout(function(){
		$('#moneyTreeTr6 .moneyTreeAmountTierTwoTd').css('transform','scale(1.3, 1.3) translateX(38px)');
		$('#moneyTreeTr6 .moneyTreeAmountTierTwoTd').css('background-image','url(' + 'Images/moneytree_board/nq_t1.png' +')');
		$('#moneyTreeTr6 .moneyTreeAmountTierTwoTd').css('z-index','6');
		$('#moneyTreeTr3 .moneyTreeAmountTierOneTd').transition({'transform':'scale(1, 1) translateX(0px)','background-image':'url(' + 'Images/moneytree_board/cq.png' +')','color':'#000000','text-shadow':'0px 0px 0px transparent'}, 857, 'linear');
	}, 714);
	setTimeout(function(){
		$('#moneyTreeTr7 .moneyTreeAmountTierTwoTd').css('transform','scale(1.3, 1.3) translateX(38px)');
		$('#moneyTreeTr7 .moneyTreeAmountTierTwoTd').css('background-image','url(' + 'Images/moneytree_board/nq_t1.png' +')');
		$('#moneyTreeTr7 .moneyTreeAmountTierTwoTd').css('z-index','7');
		$('#moneyTreeTr4 .moneyTreeAmountTierOneTd').transition({'transform':'scale(1, 1) translateX(0px)','background-image':'url(' + 'Images/moneytree_board/cq.png' +')','color':'#000000','text-shadow':'0px 0px 0px transparent'}, 857, 'linear');
	}, 857);
	setTimeout(function(){
		$('#moneyTreeTr8 .moneyTreeAmountTierTwoTd').css('transform','scale(1.3, 1.3) translateX(38px)');
		$('#moneyTreeTr8 .moneyTreeAmountTierTwoTd').css('background-image','url(' + 'Images/moneytree_board/nq_t1.png' +')');
		$('#moneyTreeTr8 .moneyTreeAmountTierTwoTd').css('z-index','8');
		$('#moneyTreeTr5 .moneyTreeAmountTierOneTd').transition({'transform':'scale(1, 1) translateX(0px)','background-image':'url(' + 'Images/moneytree_board/cq.png' +')','color':'#000000','text-shadow':'0px 0px 0px transparent'}, 857, 'linear');
	}, 1000);
	setTimeout(function(){
		$('#moneyTreeTr9 .moneyTreeAmountTierTwoTd').css('transform','scale(1.3, 1.3) translateX(38px)');
		$('#moneyTreeTr9 .moneyTreeAmountTierTwoTd').css('background-image','url(' + 'Images/moneytree_board/nq_t1.png' +')');
		$('#moneyTreeTr9 .moneyTreeAmountTierTwoTd').css('z-index','9');
		$('#moneyTreeTr6 .moneyTreeAmountTierTwoTd').transition({'transform':'scale(1, 1) translateX(0px)','background-image':'url(' + 'Images/moneytree_board/cq.png' +')','color':'#000000','text-shadow':'0px 0px 0px transparent'}, 857, 'linear');
	}, 1143);
	setTimeout(function(){
		$('#moneyTreeTr10 .moneyTreeAmountTierTwoTd').css('transform','scale(1.3, 1.3) translateX(38px)');
		$('#moneyTreeTr10 .moneyTreeAmountTierTwoTd').css('background-image','url(' + 'Images/moneytree_board/nq_t1.png' +')');
		$('#moneyTreeTr10 .moneyTreeAmountTierTwoTd').css('z-index','10');
		$('#moneyTreeTr7 .moneyTreeAmountTierTwoTd').transition({'transform':'scale(1, 1) translateX(0px)','background-image':'url(' + 'Images/moneytree_board/cq.png' +')','color':'#000000','text-shadow':'0px 0px 0px transparent'}, 857, 'linear');
	}, 1286);
	setTimeout(function(){
		$('#moneyTreeTr11 .moneyTreeAmountTierThreeTd').css('transform','scale(1.3, 1.3) translateX(38px)');
		$('#moneyTreeTr11 .moneyTreeAmountTierThreeTd').css('background-image','url(' + 'Images/moneytree_board/nq_t1.png' +')');
		$('#moneyTreeTr11 .moneyTreeAmountTierThreeTd').css('z-index','11');
		$('#moneyTreeTr8 .moneyTreeAmountTierTwoTd').transition({'transform':'scale(1, 1) translateX(0px)','background-image':'url(' + 'Images/moneytree_board/cq.png' +')','color':'#000000','text-shadow':'0px 0px 0px transparent'}, 857, 'linear');
	}, 1429);
	setTimeout(function(){
		$('#moneyTreeTr12 .moneyTreeAmountTierThreeTd').css('transform','scale(1.3, 1.3) translateX(38px)');
		$('#moneyTreeTr12 .moneyTreeAmountTierThreeTd').css('background-image','url(' + 'Images/moneytree_board/nq_t1.png' +')');
		$('#moneyTreeTr12 .moneyTreeAmountTierThreeTd').css('z-index','12');
		$('#moneyTreeTr9 .moneyTreeAmountTierTwoTd').transition({'transform':'scale(1, 1) translateX(0px)','background-image':'url(' + 'Images/moneytree_board/cq.png' +')','color':'#000000','text-shadow':'0px 0px 0px transparent'}, 857, 'linear');
	}, 1571);
	setTimeout(function(){
		$('#moneyTreeTr13 .moneyTreeAmountTierThreeTd').css('transform','scale(1.3, 1.3) translateX(38px)');
		$('#moneyTreeTr13 .moneyTreeAmountTierThreeTd').css('z-index','13');
		$('#moneyTreeTr13 .moneyTreeAmountTierThreeTd').css('background-image','url(' + 'Images/moneytree_board/nq_t1.png' +')');
		$('#moneyTreeTr10 .moneyTreeAmountTierTwoTd').transition({'transform':'scale(1, 1) translateX(0px)','background-image':'url(' + 'Images/moneytree_board/cq.png' +')','color':'#000000','text-shadow':'0px 0px 0px transparent'}, 857, 'linear');
	}, 1714);
	setTimeout(function(){
		$('#moneyTreeTr14 .moneyTreeAmountTierThreeTd').css('transform','scale(1.3, 1.3) translateX(38px)');
		$('#moneyTreeTr14 .moneyTreeAmountTierThreeTd').css('background-image','url(' + 'Images/moneytree_board/nq_t1.png' +')');
		$('#moneyTreeTr14 .moneyTreeAmountTierThreeTd').css('z-index','14');
		$('#moneyTreeTr11 .moneyTreeAmountTierThreeTd').transition({'transform':'scale(1, 1) translateX(0px)','background-image':'url(' + 'Images/moneytree_board/cq.png' +')','color':'#000000','text-shadow':'0px 0px 0px transparent'}, 857, 'linear');
	}, 1857);
	setTimeout(function(){
		$('#moneyTreeTr12 .moneyTreeAmountTierThreeTd').transition({'transform':'scale(1, 1) translateX(0px)','background-image':'url(' + 'Images/moneytree_board/cq.png' +')','color':'#000000','text-shadow':'0px 0px 0px transparent'}, 857, 'linear');
	}, 2000);
	setTimeout(function(){
		$('#moneyTreeTr13 .moneyTreeAmountTierThreeTd').transition({'transform':'scale(1, 1) translateX(0px)','background-image':'url(' + 'Images/moneytree_board/cq.png' +')','color':'#000000','text-shadow':'0px 0px 0px transparent'}, 857, 'linear');
	}, 2143);
	setTimeout(function(){
		$('#moneyTreeTr14 .moneyTreeAmountTierThreeTd').transition({'transform':'scale(1, 1) translateX(0px)','background-image':'url(' + 'Images/moneytree_board/cq.png' +')','color':'#000000','text-shadow':'0px 0px 0px transparent'}, 857, 'linear');
	}, 2286);
}

function animateMoneyTree3(){
	$('#moneyTreeTr1 .moneyTreeAmountTierOneTd').transition({'background-image':'url(' + 'Images/moneytree_board/t1.png' +')','color':'#FFFFFF','text-shadow':'2px 1px 0px black'}, 500, 'linear');
	$('#moneyTreeTr2 .moneyTreeAmountTierOneTd').transition({'background-image':'url(' + 'Images/moneytree_board/t1.png' +')','color':'#FFFFFF','text-shadow':'2px 1px 0px black'}, 500, 'linear');
	$('#moneyTreeTr3 .moneyTreeAmountTierOneTd').transition({'background-image':'url(' + 'Images/moneytree_board/t1.png' +')','color':'#FFFFFF','text-shadow':'2px 1px 0px black'}, 500, 'linear');
	$('#moneyTreeTr4 .moneyTreeAmountTierOneTd').transition({'background-image':'url(' + 'Images/moneytree_board/t1.png' +')','color':'#FFFFFF','text-shadow':'2px 1px 0px black'}, 500, 'linear');
	$('#moneyTreeTr5 .moneyTreeAmountTierOneTd').transition({'background-image':'url(' + 'Images/moneytree_board/t1.png' +')','color':'#FFFFFF','text-shadow':'2px 1px 0px black'}, 500, 'linear');
	$('#moneyTreeTr6 .moneyTreeAmountTierTwoTd').transition({'background-image':'url(' + 'Images/moneytree_board/t2.png' +')','color':'#FFFFFF','text-shadow':'2px 1px 0px black'}, 500, 'linear');
	$('#moneyTreeTr7 .moneyTreeAmountTierTwoTd').transition({'background-image':'url(' + 'Images/moneytree_board/t2.png' +')','color':'#FFFFFF','text-shadow':'2px 1px 0px black'}, 500, 'linear');
	$('#moneyTreeTr8 .moneyTreeAmountTierTwoTd').transition({'background-image':'url(' + 'Images/moneytree_board/t2.png' +')','color':'#FFFFFF','text-shadow':'2px 1px 0px black'}, 500, 'linear');
	$('#moneyTreeTr9 .moneyTreeAmountTierTwoTd').transition({'background-image':'url(' + 'Images/moneytree_board/t2.png' +')','color':'#FFFFFF','text-shadow':'2px 1px 0px black'}, 500, 'linear');
	$('#moneyTreeTr10 .moneyTreeAmountTierTwoTd').transition({'background-image':'url(' + 'Images/moneytree_board/t2.png' +')','color':'#FFFFFF','text-shadow':'2px 1px 0px black'}, 500, 'linear');
	$('#moneyTreeTr11 .moneyTreeAmountTierThreeTd').transition({'background-image':'url(' + 'Images/moneytree_board/t3.png' +')','color':'#FFFFFF','text-shadow':'2px 1px 0px black'}, 500, 'linear');
	$('#moneyTreeTr12 .moneyTreeAmountTierThreeTd').transition({'background-image':'url(' + 'Images/moneytree_board/t3.png' +')','color':'#FFFFFF','text-shadow':'2px 1px 0px black'}, 500, 'linear');
	$('#moneyTreeTr13 .moneyTreeAmountTierThreeTd').transition({'background-image':'url(' + 'Images/moneytree_board/t3.png' +')','color':'#FFFFFF','text-shadow':'2px 1px 0px black'}, 500, 'linear');
	$('#moneyTreeTr14 .moneyTreeAmountTierThreeTd').transition({'background-image':'url(' + 'Images/moneytree_board/t3.png' +')','color':'#FFFFFF','text-shadow':'2px 1px 0px black'}, 500, 'linear');
}

function animateMoneyTree4(){
	$('#moneyTreeTr15 .moneyTreeAmountTopPrizeTd').transition({'transform':'scale(1, 1) translateX(0px)','background-image':'url(' + 'Images/moneytree_board/t3.png' +')','opacity':'0.25','z-index':'14'}, 750, 'linear');
	setTimeout(function(){
		$('#moneyTreeTr14 .moneyTreeAmountTierThreeTd').transition({'transform':'scale(1.3, 1.3) translateX(38px)','background-image':'url(' + 'Images/moneytree_board/lq.png' +')','opacity':'1','z-index':'15'}, 750, 'linear');
	}, 375);
}

function animateMoneyTree5(){
	$('#moneyTreeTr14 .moneyTreeAmountTierThreeTd').transition({'transform':'scale(1, 1) translateX(0px)','background-image':'url(' + 'Images/moneytree_board/t3.png' +')','opacity':'1','z-index':'14'}, 750, 'linear');
	setTimeout(function(){
		$('#moneyTreeTr15 .moneyTreeAmountTopPrizeTd').transition({'transform':'scale(1.3, 1.3) translateX(38px)','background-image':'url(' + 'Images/moneytree_board/lq.png' +')','opacity':'1','z-index':'15'}, 750, 'linear');
	}, 375);
}

function animateMoneyTree6(){
	$('#moneyTreeTr5 .moneyTreeAmountTierOneTd').transition({'transform':'scale(1.3, 1.3) translateX(38px)','background-image':'url(' + 'Images/moneytree_board/cq_sn.png' +')'}, 500, 'cubic-bezier(0.375,0,0.625,1)');
	$('#moneyTreeTr5 .moneyTreeAmountTierOneTd').css('z-index','6');
}

function slideInPassLifeline(){
	$('.passStrapDiv').transition({perspective:0, 'right': '203px'}, 250, 'ease-out');
}

function pulsePassLifeline(){
	$('.passStrapDiv').transition({perspective:0, scale:[1.25,1.25]}, 300, 'ease-out', function(){
	$('.passStrapDiv').transition({perspective:0, scale:[1,1]}, 300, 'ease-in', function(){
			
		});
	});
}

function animatePassStrapGlint(){
	$('.passStrapGlintDiv').transition({'backgroundPositionX':'476px'}, 4000, 'linear', function(){
		$('.passStrapGlintDiv').transition({'backgroundPositionX':'-476px'}, 0, 'linear');
		if(window.GameVariables.IsMoneyTreeShowing == true){
			animatePassStrapGlint();
		}
	});
}

function resetMoneyTree(){
	$('#moneyTreeTr1 .moneyTreeAmountTierOneTd').transition({'transform':'scale(1, 1) translateX(0px)','background-image':'url(' + 'Images/moneytree_board/t1.png' +')','z-index':'1'}, 0, 'linear');
	$('#moneyTreeTr2 .moneyTreeAmountTierOneTd').transition({'transform':'scale(1, 1) translateX(0px)','background-image':'url(' + 'Images/moneytree_board/t1.png' +')','text-shadow':'2px 1px 0px black','z-index':'0'}, 0, 'linear');
	$('#moneyTreeTr3 .moneyTreeAmountTierOneTd').transition({'transform':'scale(1, 1) translateX(0px)','background-image':'url(' + 'Images/moneytree_board/t1.png' +')','text-shadow':'2px 1px 0px black','z-index':'0'}, 0, 'linear');
	$('#moneyTreeTr4 .moneyTreeAmountTierOneTd').transition({'transform':'scale(1, 1) translateX(0px)','background-image':'url(' + 'Images/moneytree_board/t1.png' +')','text-shadow':'2px 1px 0px black','z-index':'0'}, 0, 'linear');
	$('#moneyTreeTr5 .moneyTreeAmountTierOneTd').transition({'transform':'scale(1, 1) translateX(0px)','background-image':'url(' + 'Images/moneytree_board/t1.png' +')','text-shadow':'2px 1px 0px black','z-index':'0'}, 0, 'linear');
	$('#moneyTreeTr6 .moneyTreeAmountTierTwoTd').transition({'transform':'scale(1, 1) translateX(0px)','background-image':'url(' + 'Images/moneytree_board/t2.png' +')','text-shadow':'2px 1px 0px black','z-index':'0'}, 0, 'linear');
	$('#moneyTreeTr7 .moneyTreeAmountTierTwoTd').transition({'transform':'scale(1, 1) translateX(0px)','background-image':'url(' + 'Images/moneytree_board/t2.png' +')','text-shadow':'2px 1px 0px black','z-index':'0'}, 0, 'linear');
	$('#moneyTreeTr8 .moneyTreeAmountTierTwoTd').transition({'transform':'scale(1, 1) translateX(0px)','background-image':'url(' + 'Images/moneytree_board/t2.png' +')','text-shadow':'2px 1px 0px black','z-index':'0'}, 0, 'linear');
	$('#moneyTreeTr9 .moneyTreeAmountTierTwoTd').transition({'transform':'scale(1, 1) translateX(0px)','background-image':'url(' + 'Images/moneytree_board/t2.png' +')','text-shadow':'2px 1px 0px black','z-index':'0'}, 0, 'linear');
	$('#moneyTreeTr10 .moneyTreeAmountTierTwoTd').transition({'transform':'scale(1, 1) translateX(0px)','background-image':'url(' + 'Images/moneytree_board/t2.png' +')','text-shadow':'2px 1px 0px black','z-index':'0'}, 0, 'linear');
	$('#moneyTreeTr11 .moneyTreeAmountTierThreeTd').transition({'transform':'scale(1, 1) translateX(0px)','background-image':'url(' + 'Images/moneytree_board/t3.png' +')','text-shadow':'2px 1px 0px black','z-index':'0'}, 0, 'linear');
	$('#moneyTreeTr12 .moneyTreeAmountTierThreeTd').transition({'transform':'scale(1, 1) translateX(0px)','background-image':'url(' + 'Images/moneytree_board/t3.png' +')','text-shadow':'2px 1px 0px black','z-index':'0'}, 0, 'linear');
	$('#moneyTreeTr13 .moneyTreeAmountTierThreeTd').transition({'transform':'scale(1, 1) translateX(0px)','background-image':'url(' + 'Images/moneytree_board/t3.png' +')','text-shadow':'2px 1px 0px black','z-index':'0'}, 0, 'linear');
	$('#moneyTreeTr14 .moneyTreeAmountTierThreeTd').transition({'transform':'scale(1, 1) translateX(0px)','background-image':'url(' + 'Images/moneytree_board/t3.png' +')','text-shadow':'2px 1px 0px black','z-index':'0'}, 0, 'linear');
	$('#moneyTreeTr15 .moneyTreeAmountTierThreeTd').transition({'transform':'scale(1.3, 1.3) translateX(0px)','background-image':'url(' + 'Images/moneytree_board/lq.png' +')','text-shadow':'2px 1px 0px black','z-index':'1'}, 0, 'linear');
}