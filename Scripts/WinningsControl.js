function showAmountWon(){
	if(window.GameVariables.UseTopPrizeWinStrapText == true){
		if(window.GameVariables.QuestionLevel >= window.GameVariables.TopPrizeWinStrapQuestionNumber){
			$('.winningsP').html(window.GameVariables.TopPrizeWinStrapText[window.GameVariables.QuestionLevel - 1]);
			$('.totalPrizeMoneyWonDiv').html(window.GameVariables.TopPrizeWinStrapText[window.GameVariables.QuestionLevel - 1]);
		}
		else{
			if(window.GameVariables.SecondaryNumberFormatWin == true){
				$('.winningsP').html(window.GameVariables.SecondaryNumberPrefix + new Intl.NumberFormat(window.GameVariables.SecondaryLocaleCode, window.GameVariables.SecondaryFormatOptions).format(window.GameVariables.PrizeAmounts[window.GameVariables.QuestionLevel - 1]).replace(window.GameVariables.SecondaryReplaceCharacterBefore, window.GameVariables.SecondaryReplaceCharacterAfter).trim() + window.GameVariables.SecondaryNumberSuffix);
			}
			else{
				$('.winningsP').html(window.GameVariables.NumberPrefix + new Intl.NumberFormat(window.GameVariables.LocaleCode, window.GameVariables.FormatOptions).format(window.GameVariables.PrizeAmounts[window.GameVariables.QuestionLevel - 1]).replace(window.GameVariables.ReplaceCharacterBefore, window.GameVariables.ReplaceCharacterAfter).trim() + window.GameVariables.NumberSuffix);
			}
			if(window.GameVariables.SecondaryNumberFormatTPM == true){
				$('.totalPrizeMoneyWonDiv').html(window.GameVariables.SecondaryNumberPrefix + new Intl.NumberFormat(window.GameVariables.SecondaryLocaleCode, window.GameVariables.SecondaryFormatOptions).format(window.GameVariables.PrizeAmounts[window.GameVariables.QuestionLevel - 1]).replace(window.GameVariables.SecondaryReplaceCharacterBefore, window.GameVariables.SecondaryReplaceCharacterAfter).trim() + window.GameVariables.SecondaryNumberSuffix);
			}
			else{
				$('.totalPrizeMoneyWonDiv').html(window.GameVariables.NumberPrefix + new Intl.NumberFormat(window.GameVariables.LocaleCode, window.GameVariables.FormatOptions).format(window.GameVariables.PrizeAmounts[window.GameVariables.QuestionLevel - 1]).replace(window.GameVariables.ReplaceCharacterBefore, window.GameVariables.ReplaceCharacterAfter).trim() + window.GameVariables.NumberSuffix);
			}
		}
	}
	else{
		if(window.GameVariables.SecondaryNumberFormatWin == true){
			$('.winningsP').html(window.GameVariables.SecondaryNumberPrefix + new Intl.NumberFormat(window.GameVariables.SecondaryLocaleCode, window.GameVariables.SecondaryFormatOptions).format(window.GameVariables.PrizeAmounts[window.GameVariables.QuestionLevel - 1]).replace(window.GameVariables.SecondaryReplaceCharacterBefore, window.GameVariables.SecondaryReplaceCharacterAfter).trim() + window.GameVariables.SecondaryNumberSuffix);
		}
		else{
			$('.winningsP').html(window.GameVariables.NumberPrefix + new Intl.NumberFormat(window.GameVariables.LocaleCode, window.GameVariables.FormatOptions).format(window.GameVariables.PrizeAmounts[window.GameVariables.QuestionLevel - 1]).replace(window.GameVariables.ReplaceCharacterBefore, window.GameVariables.ReplaceCharacterAfter).trim() + window.GameVariables.NumberSuffix);
		}
		if(window.GameVariables.SecondaryNumberFormatTPM == true){
			$('.totalPrizeMoneyWonDiv').html(window.GameVariables.SecondaryNumberPrefix + new Intl.NumberFormat(window.GameVariables.SecondaryLocaleCode, window.GameVariables.SecondaryFormatOptions).format(window.GameVariables.PrizeAmounts[window.GameVariables.QuestionLevel - 1]).replace(window.GameVariables.SecondaryReplaceCharacterBefore, window.GameVariables.SecondaryReplaceCharacterAfter).trim() + window.GameVariables.SecondaryNumberSuffix);
		}
		else{
			$('.totalPrizeMoneyWonDiv').html(window.GameVariables.NumberPrefix + new Intl.NumberFormat(window.GameVariables.LocaleCode, window.GameVariables.FormatOptions).format(window.GameVariables.PrizeAmounts[window.GameVariables.QuestionLevel - 1]).replace(window.GameVariables.ReplaceCharacterBefore, window.GameVariables.ReplaceCharacterAfter).trim() + window.GameVariables.NumberSuffix);
		}
	}
	$('.winStrapDiv').css('opacity', 1);
}

function hideAmountWon(){
	$('.winStrapDiv').css('opacity', 0);
}

function reduceAmountWon(){
	if(window.GameVariables.QuestionLevel < 6){
		if(window.GameVariables.UseZeronaireText == true){
			$('.totalPrizeMoneyWonDiv').html(window.GameVariables.ZeronaireText);
		}
		else{
			if(window.GameVariables.SecondaryNumberFormatTPM == true){
				$('.totalPrizeMoneyWonDiv').html(window.GameVariables.SecondaryNumberPrefix + new Intl.NumberFormat(window.GameVariables.SecondaryLocaleCode, window.GameVariables.SecondaryFormatOptions).format(0).replace(window.GameVariables.SecondaryReplaceCharacterBefore, window.GameVariables.SecondaryReplaceCharacterAfter).trim() + window.GameVariables.SecondaryNumberSuffix);
			}
			else{
				$('.totalPrizeMoneyWonDiv').html(window.GameVariables.NumberPrefix + new Intl.NumberFormat(window.GameVariables.LocaleCode, window.GameVariables.FormatOptions).format(0).replace(window.GameVariables.ReplaceCharacterBefore, window.GameVariables.ReplaceCharacterAfter).trim() + window.GameVariables.NumberSuffix);
			}
		}
	}
	else {
		if(window.GameVariables.UseTopPrizeTPMStrapText == true){
			if(window.GameVariables.TopPrizeTPMStrapQuestionNumber > 5){
				if(window.GameVariables.SecondaryNumberFormatTPM == true){
					$('.totalPrizeMoneyWonDiv').html(window.GameVariables.SecondaryNumberPrefix + new Intl.NumberFormat(window.GameVariables.SecondaryLocaleCode, window.GameVariables.SecondaryFormatOptions).format(window.GameVariables.PrizeAmounts[4]).replace(window.GameVariables.SecondaryReplaceCharacterBefore, window.GameVariables.SecondaryReplaceCharacterAfter).trim() + window.GameVariables.SecondaryNumberSuffix);
				}
				else{
					$('.totalPrizeMoneyWonDiv').html(window.GameVariables.NumberPrefix + new Intl.NumberFormat(window.GameVariables.LocaleCode, window.GameVariables.FormatOptions).format(window.GameVariables.PrizeAmounts[4]).replace(window.GameVariables.ReplaceCharacterBefore, window.GameVariables.ReplaceCharacterAfter).trim() + window.GameVariables.NumberSuffix);
				}
			}
			else{
				$('.totalPrizeMoneyWonDiv').html(window.GameVariables.TopPrizeTPMStrapText[4]);
			}
		}
		else{
			if(window.GameVariables.SecondaryNumberFormatTPM == true){
				$('.totalPrizeMoneyWonDiv').html(window.GameVariables.SecondaryNumberPrefix + new Intl.NumberFormat(window.GameVariables.SecondaryLocaleCode, window.GameVariables.SecondaryFormatOptions).format(window.GameVariables.PrizeAmounts[4]).replace(window.GameVariables.SecondaryReplaceCharacterBefore, window.GameVariables.SecondaryReplaceCharacterAfter).trim() + window.GameVariables.SecondaryNumberSuffix);
			}
			else{
				$('.totalPrizeMoneyWonDiv').html(window.GameVariables.NumberPrefix + new Intl.NumberFormat(window.GameVariables.LocaleCode, window.GameVariables.FormatOptions).format(window.GameVariables.PrizeAmounts[4]).replace(window.GameVariables.ReplaceCharacterBefore, window.GameVariables.ReplaceCharacterAfter).trim() + window.GameVariables.NumberSuffix);
			}
		}
	}
}

function showMillionaireTitleStrap(){
	$('.millionaireWinnerTitleDiv').transition({perspective:0, 'bottom':'0px'}, 500, 'ease-out');
}

function hideMillionaireTitleStrap(){
	$('.millionaireWinnerTitleDiv').transition({perspective:0, 'bottom':'-300px'}, 500, 'ease-in');
}

function showTotalPrizeMoneyStrap(){
	$('.totalPrizeMoneyDiv').transition({perspective:0, 'bottom':'0px'}, 500, 'ease-out');
}

function hideTotalPrizeMoneyStrap(){
	$('.totalPrizeMoneyDiv').transition({perspective:0, 'bottom':'-300px'}, 500, 'ease-in');
}

function renderNewTopPrize(){
	const index = 14 - (6 - window.GameVariables.ContestantsLeft);
	
	if(window.GameVariables.UseNewTPStrapText == true){
		if(window.GameVariables.CurrentTopPrizeLevel >= window.GameVariables.NewTPStrapQuestionNumber){
			$('.newtpP').html(window.GameVariables.NewTPStrapText[index]);
		}
		else{
			if(window.GameVariables.SecondaryNumberFormatNewTP == true){
				$('.newtpP').html(window.GameVariables.SecondaryNumberPrefix + new Intl.NumberFormat(window.GameVariables.SecondaryLocaleCode, window.GameVariables.SecondaryFormatOptions).format(window.GameVariables.PrizeAmounts[index]).replace(window.GameVariables.SecondaryReplaceCharacterBefore, window.GameVariables.SecondaryReplaceCharacterAfter).trim() + window.GameVariables.SecondaryNumberSuffix);
			}
			else{
				$('.newtpP').html(window.GameVariables.NumberPrefix + new Intl.NumberFormat(window.GameVariables.LocaleCode, window.GameVariables.FormatOptions).format(window.GameVariables.PrizeAmounts[index]).replace(window.GameVariables.ReplaceCharacterBefore, window.GameVariables.ReplaceCharacterAfter).trim() + window.GameVariables.NumberSuffix);
			}
		}
	}
	else{
		if(window.GameVariables.SecondaryNumberFormatNewTP == true){
			$('.newtpP').html(window.GameVariables.SecondaryNumberPrefix + new Intl.NumberFormat(window.GameVariables.SecondaryLocaleCode, window.GameVariables.SecondaryFormatOptions).format(window.GameVariables.PrizeAmounts[index]).replace(window.GameVariables.SecondaryReplaceCharacterBefore, window.GameVariables.SecondaryReplaceCharacterAfter).trim() + window.GameVariables.SecondaryNumberSuffix);
		}
		else{
			$('.newtpP').html(window.GameVariables.NumberPrefix + new Intl.NumberFormat(window.GameVariables.LocaleCode, window.GameVariables.FormatOptions).format(window.GameVariables.PrizeAmounts[index]).replace(window.GameVariables.ReplaceCharacterBefore, window.GameVariables.ReplaceCharacterAfter).trim() + window.GameVariables.NumberSuffix);
		}
	}
}