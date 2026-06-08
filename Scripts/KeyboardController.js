$(document).ready(function(){
	$(document).on('keydown',function(e)
	{
		if(e.keyCode == 37) // key 'left arrow' for fastest-finger / money tree hide and show
		{
			if(window.GameVariables.IsLogoShowing == false && window.GameVariables.IsInCommercial == false)
			{
				if(window.GameVariables.IsPlayingFasestFinger == true)
				{
					if(window.GameVariables.FastestFingerSequenceCounter <= 5)
					{
						if(window.GameVariables.FastestFingerSequenceCounter == 0)
						{
							startShortActiveSound("fastest_finger_contestants.mp3");
						}
						// reveal contestants one at a time
						revealFastestFingerContestants();
					}
					else if(window.GameVariables.FastestFingerSequenceCounter == 6)
					{
						hideContestantNameAndLocation();
						$('.contestantNameP').html(window.GameVariables.FastestFingerContestants[window.GameVariables.FastestFingerConstestantWinner - 1].FirstName + ' ' + window.GameVariables.FastestFingerContestants[window.GameVariables.FastestFingerConstestantWinner - 1].LastName)
						$('.contestantLocationP').html(window.GameVariables.FastestFingerContestants[window.GameVariables.FastestFingerConstestantWinner - 1].Location);
					}
					else if(window.GameVariables.FastestFingerSequenceCounter == 7)
					{
						renderMoneyTreeInfoText();
						startShortActiveSound("hello_short.mp3");
						window.GameVariables.IsPlayingFasestFinger = false;
					}
					
					window.GameVariables.FastestFingerSequenceCounter++;
				}
				else if(window.GameVariables.QuestionInProgress == false && window.GameVariables.IsInCommercial == false && window.GameVariables.IsTotalPrizeMoneyShowing == false && window.GameVariables.IsGameOver == false){
					// money tree animations
					if(window.GameVariables.MoneyTreeSequenceCounter == 0)
					{
						slideInMoneyTree();
						if(window.GameVariables.SkipMoneyTreeAnimation == true){
							window.GameVariables.MoneyTreeSequenceCounter = 5;
						}
						else{
							startGeneralSound("money_tree_1.wav");
							startLongPassiveSound("explain_rules.mp3");
							animateMoneyTree1();
							window.GameVariables.IsMoneyTreeAnimationPlaying = true;
						}
						window.GameVariables.IsMoneyTreeShowing = true;
					}
					else if(window.GameVariables.MoneyTreeSequenceCounter == 1)
					{
						startGeneralSound("money_tree_2.wav");
						animateMoneyTree2();
					}
					else if(window.GameVariables.MoneyTreeSequenceCounter == 2)
					{
						startGeneralSound("money_tree_3.wav");
						animateMoneyTree3();
					}
					else if(window.GameVariables.MoneyTreeSequenceCounter == 3)
					{
						startGeneralSound("money_tree_4.wav");
						animateMoneyTree4();
					}
					else if(window.GameVariables.MoneyTreeSequenceCounter == 4)
					{
						startGeneralSound("money_tree_5.wav");
						animateMoneyTree5();
					}
					else if(window.GameVariables.MoneyTreeSequenceCounter == 5)
					{
						startGeneralSound("money_tree_6.wav");
						animateMoneyTree6();
					}
					else if(window.GameVariables.MoneyTreeSequenceCounter == 6)
					{
						startGeneralSound("pass_appear.mp3");
						slideInPassLifeline();
						animatePassStrapGlint();
					}
					else if(window.GameVariables.MoneyTreeSequenceCounter == 7)
					{
						startGeneralSound("pass_on.mp3");
						startGeneralSound("lifeline_4_on.mp3");
						pulsePassLifeline();
					}
					else if(window.GameVariables.MoneyTreeSequenceCounter >= 8)
					{
						if(window.GameVariables.IsMoneyTreeAnimationPlaying == true){
							resetMoneyTree();
							window.GameVariables.IsMoneyTreeAnimationPlaying = false;
						}
						window.GameVariables.IsMoneyTreeShowing == true ? hideMoneyTree() : showMoneyTree();
						window.GameVariables.IsMoneyTreeShowing == true ? setLevelOnMoneyTree(window.GameVariables.QuestionLevel) : null;
						window.GameVariables.STQUnlockedLevel > window.GameVariables.QuestionLevel ? stqLifeLineSlideOut() : null;
						window.GameVariables.IsMoneyTreeShowing = !window.GameVariables.IsMoneyTreeShowing;
						window.GameVariables.IsExplainingRules = false;
					}
					
					window.GameVariables.MoneyTreeSequenceCounter++;
				}
			}
		}
		else if(e.keyCode == 38) // key 'up arrow' to start the timer
		{
			if(window.GameVariables.QuestionInProgress == true){
				startTimer();
			}
		}
		else if(e.keyCode == 39) // key 'right arrow' for question navigation
		{
			if(window.GameVariables.IsPlayingFasestFinger == false && window.GameVariables.IsMoneyTreeShowing == false && window.GameVariables.IsExplainingRules == false && window.GameVariables.IsInCommercial == false && window.GameVariables.IsNameStrapShowing == false && window.GameVariables.IsNewTPMStrapShowing == false && window.GameVariables.IsTotalPrizeMoneyShowing == false){
				if(window.GameVariables.QuestionSequenceCounter == -1){
					return;
				}			
				else if(window.GameVariables.QuestionSequenceCounter == 0){
					// play lights down sound
					playLightsDownSound();
					
				}
				else if(window.GameVariables.QuestionSequenceCounter == 1){
					if(window.GameVariables.UseMultiTierQuestions == true){
						if(window.GameVariables.QuestionLevel < 6){
							setTierOneQuestion();
						}
						else if(window.GameVariables.QuestionLevel < 11){
							setTierTwoQuestion();
						}
						else if(window.GameVariables.QuestionLevel < 15){
							setTierThreeQuestion();
						}
						else{
							setFinalLevelQuestion();
						}
					}
					else{
						setQuestion(false);
					}
					window.GameVariables.QuestionInProgress = true;
					// setup question and answers
					setTimer();
					showLevelStrap();
					window.GameVariables.IsLevelStrapShowing = true;
					if(window.GameVariables.HotSeatNewRuleset == true){
						if(window.GameVariables.QuestionsLeft > 1){
							showPassStrap();
							window.GameVariables.IsPassStrapShowing = true;
						}
					}
					else{
						if(window.GameVariables.QuestionLevel < 10){
							showPassStrap();
							window.GameVariables.IsPassStrapShowing = true;
						}
					}
					
					if(window.GameVariables.QuestionsLeft == 1){
						$('.sideStrapGoldFillImg').css('opacity', 1);
					}
					window.GameVariables.QuestionsLeft--;
					$('.answerGroupBDiv').transition({perspective:4096, 'bottom':'-420px', scale:[3,3]}, 0);
					$('.answerGroupADiv').transition({perspective:4096, 'bottom':'-420px', scale:[3,3]}, 0);
					$('.questionStrapDiv').transition({perspective:4096, 'bottom':'-384px', 'rotateX':'0deg', scale:[3,3]}, 0);
					revealQuestionAndAnswerStraps();
					playBackgroundSound();
					$('.questionStrapDiv').transition({perspective:4096, 'bottom':'220px', scale:[1,1]}, 350, 'ease-out', function(){
						setTimeout(function(){
							$('.answerGroupADiv').transition({perspective:4096, 'bottom':'0px', scale:[1,1]}, 350, 'ease-out');
						}, 0);
						setTimeout(function(){
							$('.answerGroupBDiv').transition({perspective:4096, 'bottom':'0px', scale:[1,1]}, 350, 'ease-out');
						}, 150);
					});
				}
				else if(window.GameVariables.QuestionSequenceCounter <= 5){
					revealAnswersOneByOne();
					
					if(window.GameVariables.QuestionSequenceCounter == 5){
						window.GameVariables.QuestionSequenceCounter = -1;
						return;
					}
				}
				else if(window.GameVariables.QuestionSequenceCounter == 6){
					if(window.GameVariables.CurrentCorrectAnswer == window.GameVariables.CurrentTargetAnswer){
						window.GameVariables.FirstTierBackgroundSoundPlaying = false;
						showFinalToCorrectAnswerStep1(window.GameVariables.CurrentTargetAnswer.toUpperCase());
						playCorrectAnswerSound();
						renderMoneyTreeTable(6 - window.GameVariables.ContestantsLeft);
					}
					else if(window.GameVariables.CurrentTargetAnswer != window.GameVariables.CurrentCorrectAnswer){
						window.GameVariables.FirstTierBackgroundSoundPlaying = false;
						revealNormalToCorrectAnswerStep1(window.GameVariables.CurrentCorrectAnswer.toUpperCase());
						if(window.GameVariables.ContestantsLeft == 1){
							window.GameVariables.QuestionSequenceCounter = 12;
						}
						else{
							window.GameVariables.QuestionSequenceCounter = 8;
						}
						playWrongAnswerSound();
					}
					
					hideLifeLineCentered();
					
					if(window.GameVariables.IsLevelStrapShowing == true){
						hideLevelStrap();
						window.GameVariables.IsLevelStrapShowing = false;
					}
					
					if(window.GameVariables.IsPassStrapShowing == true){
						hidePassStrap();
						window.GameVariables.IsPassStrapShowing = false;
					}
				}
				else if(window.GameVariables.QuestionSequenceCounter == 7){
					if(window.GameVariables.QuestionsLeft == 0){
						if(window.GameVariables.UseTopPrizeText == true){
							if(window.GameVariables.QuestionLevel >= window.GameVariables.TopPrizeQuestionNumber){
								$('.totalPrizeMoneyWonDiv').html(window.GameVariables.TopPrizeText[window.GameVariables.QuestionLevel - 1]);
							}
							else{
								if(window.GameVariables.SecondaryNumberFormatTPM == true){
									$('.totalPrizeMoneyWonDiv').html(window.GameVariables.SecondaryNumberPrefix + new Intl.NumberFormat(window.GameVariables.SecondaryLocaleCode, window.GameVariables.SecondaryFormatOptions).format(window.GameVariables.PrizeAmounts[window.GameVariables.QuestionLevel - 1]).replace(window.GameVariables.SecondaryReplaceCharacterBefore, window.GameVariables.SecondaryReplaceCharacterAfter).trim() + window.GameVariables.SecondaryNumberSuffix);
								}
								else{
									$('.totalPrizeMoneyWonDiv').html(window.GameVariables.NumberPrefix + new Intl.NumberFormat(window.GameVariables.LocaleCode, window.GameVariables.FormatOptions).format(window.GameVariables.PrizeAmounts[window.GameVariables.QuestionLevel - 1]).replace(window.GameVariables.ReplaceCharacterBefore, window.GameVariables.ReplaceCharacterAfter).trim() + window.GameVariables.NumberSuffix);
								}
							}
						}
						else{
							if(window.GameVariables.SecondaryNumberFormatTPM == true){
								$('.totalPrizeMoneyWonDiv').html(window.GameVariables.SecondaryNumberPrefix + new Intl.NumberFormat(window.GameVariables.SecondaryLocaleCode, window.GameVariables.SecondaryFormatOptions).format(window.GameVariables.PrizeAmounts[window.GameVariables.QuestionLevel - 1]).replace(window.GameVariables.SecondaryReplaceCharacterBefore, window.GameVariables.SecondaryReplaceCharacterAfter).trim() + window.GameVariables.SecondaryNumberSuffix);
							}
							else{
								$('.totalPrizeMoneyWonDiv').html(window.GameVariables.NumberPrefix + new Intl.NumberFormat(window.GameVariables.LocaleCode, window.GameVariables.FormatOptions).format(window.GameVariables.PrizeAmounts[window.GameVariables.QuestionLevel - 1]).replace(window.GameVariables.ReplaceCharacterBefore, window.GameVariables.ReplaceCharacterAfter).trim() + window.GameVariables.NumberSuffix);
							}
						}
						$('.answerGroupBDiv').transition({perspective:4096, 'bottom':'-412px'}, 375, 'linear');
						$('.answerGroupADiv').transition({perspective:4096, 'bottom':'-412px'}, 375, 'linear');
						$('.questionStrapDiv').transition({perspective:4096, 'bottom':'-192px'}, 375, 'linear', function(){
							$('.largeTPMStrapGoldFillImg').css('opacity', 1);
							$('.totalPrizeMoneyWonDiv').css('color','#FFFFFF');
							showTotalPrizeMoneyStrap();
						});
					}
					else{
						$('.winStrapDiv').transition({perspective:4096, 'bottom':'145px', 'rotateX':'90deg'}, 0);
						$('.answerGroupBDiv').transition({perspective:4096, 'bottom':'-256px'}, 500, 'linear');
						$('.answerGroupADiv').transition({perspective:4096, 'bottom':'-256px'}, 500, 'linear');
						$('.questionStrapDiv').transition({perspective:4096, 'bottom':'146px', 'rotateX':'-90deg'}, 200, 'ease-in', function(){
							$('.winStrapDiv').transition({perspective:4096, 'bottom':'71px', 'rotateX':'0deg'}, 300, 'ease-out', function(){
								hideQuestionAndAnswerStraps();
								resetAnswerStraps();
							});
						});
						showAmountWon();
						updatePassLozengeTree();
					}
				}
				else if(window.GameVariables.QuestionSequenceCounter == 8){
					if(window.GameVariables.QuestionsLeft == 0){
						hideTotalPrizeMoneyStrap();
						window.GameVariables.IsWalkingAway = true;
						window.GameVariables.IsGameOver = true;
					}
					else {
						$('.winStrapDiv').transition({perspective:4096, 'bottom':'-200px'}, 500, 'linear', function(){
							hideAmountWon();
						});
					}
					
					window.GameVariables.QuestionLevel++;
					renderMoneyTreeInfoText();
					setLevelOnMoneyTree(window.GameVariables.QuestionLevel);
					
					window.GameVariables.QuestionInProgress = false;
					
					if(window.GameVariables.QuestionLevel < 6){
						window.GameVariables.QuestionSequenceCounter = 0;
					}
					else{
						window.GameVariables.QuestionSequenceCounter = -1;
					}
					/* END OF CORRECT ANSWER GIVEN CONTROL */
				}
				else if(window.GameVariables.QuestionSequenceCounter == 9){
					/* START OF WRONG ANSWER GIVEN CONTROL */
					hideQuestionAndAnswerStraps();
					window.GameVariables.QuestionInProgress = false;
					if(window.GameVariables.QuestionsLeft == 0){
						window.GameVariables.IsWalkingAway = true;
						window.GameVariables.IsGameOver = true;
					}
				}
				else if(window.GameVariables.QuestionSequenceCounter == 10){
					startGeneralSound("next_player.mp3");
					removeContestant();
					newContestant();
					window.GameVariables.CurrentTopPrizeLevel--;
					renderMoneyTreeInfoText();
					resetAnswerStraps();
					unscaleTreeLevels();
					renderNewTopPrize();
					updatePassLozengeTree();
					showNewTPMStrap();
					if(window.GameVariables.QuestionsLeft > 1){
						$('.newtptextP').html(window.GameVariables.NewTopPrizeText);
					}
					else{
						$('.newtptextP').html(window.GameVariables.FinalQuestionText);
					}
					$('.newtpStrapDiv').transition({perspective:0, 'bottom':'-387px'}, 0);
					$('.newtpTextDiv').transition({perspective:0, 'bottom':'153px'}, 0);
					$('.newtpStrapDiv').transition({perspective:0, 'bottom':'0px'}, 500, 'linear');
					setTimeout(function(){
						$('.newtpTextDiv').transition({perspective:0, 'bottom':'273px'}, 250, 'linear');
					}, 1000);
				}
				else if(window.GameVariables.QuestionSequenceCounter == 11){
					hideNewTPMStrap();
					renderMoneyTreeTable(6 - window.GameVariables.ContestantsLeft);
					
					if(window.GameVariables.QuestionsLeft > 1){
						window.GameVariables.QuestionSequenceCounter = 0;
					}
					else{
						window.GameVariables.QuestionSequenceCounter = -1;
					}
					
					if(window.GameVariables.ContestantsLeft > 1){
						window.GameVariables.IsPassLifeLineUsed = false;
					}
					setLevelOnMoneyTree(window.GameVariables.QuestionLevel);
				}
				else if(window.GameVariables.QuestionSequenceCounter == 12){
					/* START OF TIME UP GIVEN CONTROL */
					revealNormalToCorrectAnswerStep1(window.GameVariables.CurrentCorrectAnswer.toUpperCase());
					if(window.GameVariables.ContestantsLeft == 1){
						window.GameVariables.QuestionSequenceCounter = 12;
					}
					else{
						window.GameVariables.QuestionSequenceCounter = 8;
					}
					playWrongAnswerSound();
					hideLifeLineCentered();
					
					if(window.GameVariables.IsLevelStrapShowing == true){
						hideLevelStrap();
						window.GameVariables.IsLevelStrapShowing = false;
					}
					
					if(window.GameVariables.IsPassStrapShowing == true){
						hidePassStrap();
						window.GameVariables.IsPassStrapShowing = false;
					}
					/* END OF TIME UP GIVEN CONTROL */
				}
				else if(window.GameVariables.QuestionSequenceCounter == 13){
					/* START OF FINAL QUESTION WRONG ANSWER GIVEN CONTROL */
					if(window.GameVariables.ContestantsLeft == 1){
						if(window.GameVariables.LastPlayerLeavesWithNothingBeforeFinal == true){
							if(window.GameVariables.UseZeronaireText == true){
								$('.totalPrizeMoneyWonDiv').html(window.GameVariables.ZeronaireText);
							}
							else{
								$('.totalPrizeMoneyWonDiv').html(window.GameVariables.NumberPrefix + new Intl.NumberFormat(window.GameVariables.LocaleCode, window.GameVariables.FormatOptions).format(0).replace(window.GameVariables.ReplaceCharacterBefore, window.GameVariables.ReplaceCharacterAfter).trim() + window.GameVariables.NumberSuffix);
							}
						}
						else{
							reduceAmountWon();
						}
					}
					hideQuestionAndAnswerStraps();
					window.GameVariables.QuestionInProgress = false;
					window.GameVariables.IsWalkingAway = true;
					window.GameVariables.IsGameOver = true;
					/* END OF FINAL QUESTION WRONG ANSWER GIVEN CONTROL */
				}
				
				if(window.GameVariables.IsGameOver == false){
					window.GameVariables.QuestionSequenceCounter++;
				}
			}
		}
		else if(e.keyCode == 40) // key 'down arrow' for total prize money
		{
			if(window.GameVariables.QuestionInProgress == false && window.GameVariables.IsMoneyTreeShowing == false  && window.GameVariables.IsNameStrapShowing == false){
				if(window.GameVariables.QuestionLevel - 1 == 15){
					window.GameVariables.IsTotalPrizeMoneyShowing == true ? hideTotalPrizeMoneyStrap() : showTotalPrizeMoneyStrap();
				}
				else{
					window.GameVariables.IsTotalPrizeMoneyShowing == true ? hideTotalPrizeMoneyStrap() : showTotalPrizeMoneyStrap();
				}
				
				window.GameVariables.IsTotalPrizeMoneyShowing = !window.GameVariables.IsTotalPrizeMoneyShowing;
				
				if(window.GameVariables.IsWalkingAway == true){
					window.GameVariables.IsWalkingAway = false;
				}
				
			}
		}
		else if(e.keyCode == 49) // key '1' to lock in 'A' as final
		{
			if(window.GameVariables.QuestionInProgress == true && window.GameVariables.CannotLockInFinalAnswer == false && window.GameVariables.AnswerAIsOut == false && window.GameVariables.CurrentTargetAnswer == "" && window.GameVariables.QuestionSequenceCounter == -1){
				lockInFinalAnswer('A');
				stopLifelineActiveSound;
				pauseTimer();
				hideTimer();
				window.GameVariables.CurrentTargetAnswer = "a";
				
				if(window.GameVariables.IsWalkingAway == false){
					playFinalAnswerSound();
					if(window.GameVariables.QuestionLevel < 6){
						startGeneralSound("explosion.mp3");
					}
				}
				
				if(window.GameVariables.IsLevelStrapShowing == true){
					hideLevelStrap();
					window.GameVariables.IsLevelStrapShowing = false;
				}
				
				if(window.GameVariables.IsPassStrapShowing == true){
					hidePassStrap();
					window.GameVariables.IsPassStrapShowing = false;
				}
			}
		}
		else if(e.keyCode == 50) // key '2' to lock in 'B' as final
		{
			if(window.GameVariables.QuestionInProgress == true && window.GameVariables.CannotLockInFinalAnswer == false && window.GameVariables.AnswerBIsOut == false && window.GameVariables.CurrentTargetAnswer == "" && window.GameVariables.QuestionSequenceCounter == -1){
				lockInFinalAnswer('B');
				stopLifelineActiveSound;
				pauseTimer();
				hideTimer();
				window.GameVariables.CurrentTargetAnswer = "b";
				
				if(window.GameVariables.IsWalkingAway == false){
					playFinalAnswerSound();
					if(window.GameVariables.QuestionLevel < 6){
						startGeneralSound("explosion.mp3");
					}
				}
				
				if(window.GameVariables.IsLevelStrapShowing == true){
					hideLevelStrap();
					window.GameVariables.IsLevelStrapShowing = false;
				}
				
				if(window.GameVariables.IsPassStrapShowing == true){
					hidePassStrap();
					window.GameVariables.IsPassStrapShowing = false;
				}
			}
		}
		else if(e.keyCode == 51) // key '3' to lock in 'C' as final
		{
			if(window.GameVariables.QuestionInProgress == true && window.GameVariables.CannotLockInFinalAnswer == false && window.GameVariables.AnswerCIsOut == false && window.GameVariables.CurrentTargetAnswer == "" && window.GameVariables.QuestionSequenceCounter == -1){
				lockInFinalAnswer('C');
				stopLifelineActiveSound;
				pauseTimer();
				hideTimer();
				window.GameVariables.CurrentTargetAnswer = "c";
				
				if(window.GameVariables.IsWalkingAway == false){
					playFinalAnswerSound();
					if(window.GameVariables.QuestionLevel < 6){
						startGeneralSound("explosion.mp3");
					}
				}
				
				if(window.GameVariables.IsLevelStrapShowing == true){
					hideLevelStrap();
					window.GameVariables.IsLevelStrapShowing = false;
				}
				
				if(window.GameVariables.IsPassStrapShowing == true){
					hidePassStrap();
					window.GameVariables.IsPassStrapShowing = false;
				}
			}
		}
		else if(e.keyCode == 52) // key '4' to lock in 'D' as final
		{
			if(window.GameVariables.QuestionInProgress == true && window.GameVariables.CannotLockInFinalAnswer == false && window.GameVariables.AnswerDIsOut == false && window.GameVariables.CurrentTargetAnswer == "" && window.GameVariables.QuestionSequenceCounter == -1){
				lockInFinalAnswer('D');
				stopLifelineActiveSound;
				pauseTimer();
				hideTimer();
				window.GameVariables.CurrentTargetAnswer = "d";
				
				if(window.GameVariables.IsWalkingAway == false){
					playFinalAnswerSound();
					if(window.GameVariables.QuestionLevel < 6){
						startGeneralSound("explosion.mp3");
					}
				}
				
				if(window.GameVariables.IsLevelStrapShowing == true){
					hideLevelStrap();
					window.GameVariables.IsLevelStrapShowing = false;
				}
				
				if(window.GameVariables.IsPassStrapShowing == true){
					hidePassStrap();
					window.GameVariables.IsPassStrapShowing = false;
				}
			}
		}
		else if(e.keyCode == 48) // key '0' to stop the timer
		{
			pauseTimer();
			hideTimer();
			stopLifelineActiveSound;
		}
		else if(e.keyCode == 65) // key 'a' for ask the audience animations
		{
			if(window.GameVariables.QuestionInProgress == true){
				if(window.GameVariables.ataLifeLineSequenceCounter == 0){
					// play ata start sound
					window.GameVariables.CannotLockInFinalAnswer = true;
					startLifelineActiveSound("ata_start.mp3");
					setTimeout(stopLongPassiveSound, 200);
					window.GameVariables.FirstTierBackgroundSoundPlaying = false;
				}
				else if(window.GameVariables.ataLifeLineSequenceCounter == 1){
					slideInATAGraph();
				}
				else if(window.GameVariables.ataLifeLineSequenceCounter == 2){
					// play ata vote sound
					generateGraphPercentanges();
					startLifelinePassiveSound("ata_vote.mp3");
					setTimeout(stopLifelineActiveSound, 200);
				}
				else if(window.GameVariables.ataLifeLineSequenceCounter == 3){
					// play ata stop vote sound
					revealGraphPercentages();
					startLifelineActiveSound("ata_end.mp3");
					setTimeout(stopLifelinePassiveSound, 200);
					setTimeout(function(){
						playBackgroundSound();
					}, 400);
				}
				else if(window.GameVariables.ataLifeLineSequenceCounter == 4){
					slideOutATAGraph();
					window.GameVariables.CannotLockInFinalAnswer = false;
					window.GameVariables.ataLifeLineSequenceCounter = -1;
				}
				
				window.GameVariables.ataLifeLineSequenceCounter++;
			}
		}
		else if(e.keyCode == 67) // key 'c' for commerical in/out
		{
			if(window.GameVariables.IsMoneyTreeShowing == false){
				if(window.GameVariables.QuestionInProgress == false){
					if(window.GameVariables.IsInCommercial == true){
						hideMillionaireLogo();
						if(window.GameVariables.IsFirstQuestionOfGame == false){
							startShortActiveSound("commercial_out.mp3");
						}
						else{
							startShortActiveSound("hello_long.mp3");
							}
					}
					else{
						showMillionaireLogo();
						window.GameVariables.FirstTierBackgroundSoundPlaying = false;
						setTimeout(stopLongPassiveSound, 250);
						setTimeout(stopLongActiveSound, 250);
						startShortActiveSound("commercial_in.mp3");
					}
					
					window.GameVariables.IsInCommercial = !window.GameVariables.IsInCommercial;
				}
				else if(window.GameVariables.QuestionInProgress == true){
					if(window.GameVariables.commericalSequenceCounter == 0){
						hideQuestionAndAnswerStraps();
						window.GameVariables.CannotLockInFinalAnswer = true;
					}
					else if(window.GameVariables.commericalSequenceCounter == 1){
						showMillionaireLogo();
						window.GameVariables.FirstTierBackgroundSoundPlaying = false;
						setTimeout(stopLongPassiveSound, 250);
						setTimeout(stopLongActiveSound, 250);
						startShortActiveSound("commercial_in.mp3");
					}
					else if(window.GameVariables.commericalSequenceCounter == 2){
						hideMillionaireLogo();
						startShortActiveSound("commercial_out.mp3");
					}
					else if(window.GameVariables.commericalSequenceCounter == 3){
						revealQuestionAndAnswerStraps();
						window.GameVariables.CannotLockInFinalAnswer = false;
						if(window.GameVariables.QuestionSequenceCounter == -1){
							playBackgroundSound();
						}
						else if(window.GameVariables.QuestionSequenceCounter == 7){
							if(window.GameVariables.QuestionLevel > 5){
								playFinalAnswerSound();
							}
							else{
								playBackgroundSound();
							}
						}
						window.GameVariables.commericalSequenceCounter = -1;
					}
					
					window.GameVariables.commericalSequenceCounter++;
				}
			}
		}
		else if(e.keyCode == 69) // key 'e' for explain rules sound
		{
			if(window.GameVariables.QuestionInProgress == false && window.GameVariables.IsInCommercial == false)
			{
				startLongPassiveSound("explain_rules.mp3");
			}
		}
		else if(e.keyCode == 70) // key 'f' for fifty-fifty animations
		{
			if(window.GameVariables.QuestionInProgress == true){
				if(window.GameVariables.AnswerAIsOut == false && window.GameVariables.AnswerBIsOut == false && window.GameVariables.AnswerCIsOut == false && window.GameVariables.AnswerDIsOut == false){
					ffRemoveTwoWrongAnswers();
					startLifelineActiveSound("fifty_fifty.mp3");
				}
			}
		}
		else if(e.keyCode == 71) // key 'g' for game over
		{
			if(window.GameVariables.QuestionInProgress == false){
				startShortPassiveSound("close_theme.mp3");
				setTimeout(stopLongPassiveSound, 500);
				setTimeout(stopLifelineActiveSound, 500);
				window.GameVariables.QuestionSequenceCounter = 0;
				window.GameVariables.MoneyTreeSequenceCounter = 0;
				window.GameVariables.IsFirstQuestionOfGame = true;
				
				$('.moneyTreeDiv').transition({perspective:0, opacity:1, right:"-792px"}, 1)
				
				/*window.GameVariables.QuestionInProgress = false;
				hideLifeLineCentered();
				setTimeout(function(){
					hideQuestionAndAnswerStraps();
					resetAnswerStraps();
				}, 1500);
				
				if(window.GameVariables.stqLifeLineSequenceCounter != 0){
					window.GameVariables.IsSTQLifeLineActiveAtStart = true;
					window.GameVariables.CannotLockInFinalAnswer = false;
				}*/
			}
		}
		else if(e.keyCode == 76) // key 'l' for life line strap animations
		{
			if(window.GameVariables.QuestionInProgress == true){
				window.GameVariables.IsLifeLineStrapShowing == true ? slideLifeLineStrapOut() : slideLifeLineStrapIn();
				window.GameVariables.IsLifeLineStrapShowing = !window.GameVariables.IsLifeLineStrapShowing
			}
		}
		else if(e.keyCode == 77) // key 'm' for questions left strap
		{
			if(window.GameVariables.QuestionInProgress == false && window.GameVariables.IsInCommercial == false && window.GameVariables.IsMoneyTreeShowing == false && window.GameVariables.IsTotalPrizeMoneyShowing == false){
				window.GameVariables.IsNewTPMStrapShowing == true ? hideNewTPMStrap() : showNewTPMStrap();
				window.GameVariables.IsNewTPMStrapShowing = !window.GameVariables.IsNewTPMStrapShowing;
				updateNewTPMStrapText();
			}
		}
		else if(e.keyCode == 78) // key 'n' for name strap animations
		{
			if(window.GameVariables.QuestionInProgress == false && window.GameVariables.IsInCommercial == false && window.GameVariables.IsMoneyTreeShowing == false && window.GameVariables.IsTotalPrizeMoneyShowing == false){
				window.GameVariables.IsNameStrapShowing == true ? hideNameStrap() : showNameStrap();
				window.GameVariables.IsNameStrapShowing = !window.GameVariables.IsNameStrapShowing;
			}
		}
		else if(e.keyCode == 79) // key 'o' for phone a friend animations
		{
			if(window.GameVariables.QuestionInProgress == true){
				if(window.GameVariables.pafLifeLineSequenceCounter == 0){
					startLifelineActiveSound("paf_start.mp3");
					//setTimeout(stopLongPassiveSound, 200);
					fadeOutLongPassiveSound(1);
					window.GameVariables.CannotLockInFinalAnswer = true;
					window.GameVariables.FirstTierBackgroundSoundPlaying = false;
				}
				else if(window.GameVariables.pafLifeLineSequenceCounter == 1){
					hideQuestionAndAnswerStraps();

					if(window.GameVariables.ShowLifeLineCenteredAnimation == true){
						hideJustLifeLineCenteredContainer();
					}
				}
				else if(window.GameVariables.pafLifeLineSequenceCounter == 2){
					revealQuestionAndAnswerStraps();
					pafRevealClock();
					
					if(window.GameVariables.ShowLifeLineCenteredAnimation == true){
						showJustLifeLineCenteredContainer();
					}
				}
				else if(window.GameVariables.pafLifeLineSequenceCounter == 3){
					pafEndClockEarly();
					setTimeout(stopLifelinePassiveSound, 200);
				}
				
				window.GameVariables.pafLifeLineSequenceCounter++;
			}
		}
		else if(e.keyCode == 80) // key 'p' for pass animations
		{
			if(window.GameVariables.QuestionInProgress == true && window.GameVariables.IsPassLifeLineUsed == false){
				if(window.GameVariables.passLifeLineSequenceCounter == 0){
					pauseTimer();
					hideTimer();
					hideLevelStrap();
					window.GameVariables.IsLevelStrapShowing = false;
					hidePassStrap();
					window.GameVariables.IsPassStrapShowing = false;
					stopLongPassiveSound();
					stopLifelineActiveSound;
					startLifelineActiveSound("pass.mp3");
					window.GameVariables.FirstTierBackgroundSoundPlaying = false;
					window.GameVariables.IsWalkingAway = false;
					window.GameVariables.QuestionSequenceCounter = -1;
				}
				else if(window.GameVariables.passLifeLineSequenceCounter == 1){
					hideQuestionAndAnswerStraps();
				}
				else if(window.GameVariables.passLifeLineSequenceCounter == 2){
					newContestant();
					startLifelineActiveSound("next_player.mp3");
				}
				else if(window.GameVariables.passLifeLineSequenceCounter == 3){
					setTimer();
					revealQuestionAndAnswerStraps();
					/* playBackgroundSound(); */
					startLongPassiveSound("q_bed_afterpass.mp3");
					resetTimer();
					showLevelStrap();
					window.GameVariables.IsLevelStrapShowing = true;
					window.GameVariables.passLifeLineSequenceCounter = -1;
					window.GameVariables.IsPassLifeLineUsed = true;
					showPassStrap();
					window.GameVariables.IsPassStrapShowing = true;
				}
				
				window.GameVariables.passLifeLineSequenceCounter++;
			}
		}
		else if(e.keyCode == 81) // key 'q' for game resume
		{
			if(window.GameVariables.QuestionInProgress == false){
				startLongPassiveSound("game_resume.mp3");
			}
		}
		else if(e.keyCode == 83) // key 's' for switch the question animations
		{
			if(window.GameVariables.QuestionInProgress == true){
				if(window.GameVariables.stqLifeLineSequenceCounter == 0){
					showLifeLineCentered('#stqLifeLineCenterImg');
					startGeneralSound("lifeline_4_on.mp3");
					window.GameVariables.CannotLockInFinalAnswer = true;
				}
				else if(window.GameVariables.stqLifeLineSequenceCounter == 1){
					revealNormalToCorrectAnswerStep1(window.GameVariables.CurrentCorrectAnswer.toUpperCase());
				}
				else if(window.GameVariables.stqLifeLineSequenceCounter == 2){
					hideLifeLineCentered();
					switchAnimation();
					startLifelinePassiveSound("stq_new_question_flip.mp3");
				}
				else if(window.GameVariables.stqLifeLineSequenceCounter == 3){
					switchOutToNewQuestion();
				}
				else if(window.GameVariables.stqLifeLineSequenceCounter <= 7){
					revealAnswersOneByOne();
					
					if(window.GameVariables.stqLifeLineSequenceCounter == 7){
						window.GameVariables.CannotLockInFinalAnswer = false;
						window.GameVariables.stqLifeLineSequenceCounter = -1;
					}
				}
				
				window.GameVariables.stqLifeLineSequenceCounter++;
			}			
		}
		else if(e.keyCode == 85) // key 'u' for undo final answer / restart question
		{
			if(window.GameVariables.QuestionSequenceCounter == 6 || window.GameVariables.IsWalkingAway == true){
				undoFinaledAnswer();
				setTimeout(stopLongActiveSound, 200);
				window.GameVariables.IsWalkingAway = false;
				window.GameVariables.walkAwaySequenceCounter = 0;
				window.GameVariables.QuestionSequenceCounter = -1;
			}
			
			if(window.GameVariables.QuestionInProgress){
				playBackgroundSound();
				if(window.GameVariables.IsLevelStrapShowing == false){
					showLevelStrap();
					window.GameVariables.IsLevelStrapShowing = true;
				}
				
				if(window.GameVariables.IsPassStrapShowing == false){
					showPassStrap();
					window.GameVariables.IsPassStrapShowing = true;
				}
			}
		}
		else if(e.keyCode == 87) // key 'w' NOT ASSIGNED
		{
			
		}
	});
});

