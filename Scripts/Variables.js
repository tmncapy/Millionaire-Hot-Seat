(function(gameVariables) {
	/* Initialization Variables */
	gameVariables.IsPAFLifeLineUsed = false;
	gameVariables.IsFFLifeLineUsed = false;
	gameVariables.IsATALifeLineUsed = false;
	gameVariables.IsSTQLifeLineUsed = false;
	gameVariables.IsSTQLifeLineActiveAtStart = false;
	gameVariables.IsPassLifeLineUsed = false;
	gameVariables.StartingQuestionLevel = 1;		/* WARNING! Do not change this value or you will break the game. Leave the value at 1. */
	
	gameVariables.ContestantListFirstName = ["Contestant","Contestant","Contestant","Contestant","Contestant","Contestant"];
	gameVariables.ContestantListLastName = ["One","Two","Three","Four","Five","Six"];
	gameVariables.ContestantListLocation = ["N/A","N/A","N/A","N/A","N/A","N/A"];
	
	gameVariables.ShowContestantLocation = true;
	gameVariables.SkipMoneyTreeAnimation = false;
	
	gameVariables.CanPassText = "PASS AVAILABLE";
	gameVariables.NoPassText = "PASS BLOCKED";
	gameVariables.PassUsedText = "PASS PLAYED";
	gameVariables.NewTopPrizeText = "NEW TOP PRIZE";
	gameVariables.QuestionsToTopPrizePrefixText = "";
	gameVariables.QuestionsToTopPrizeSuffixText = " QUESTIONS TO TOP PRIZE";
	gameVariables.FinalQuestionText = "FINAL QUESTION";
	gameVariables.QuestionLeftPrefixText = "";
	gameVariables.QuestionsLeftPrefixText = "";
	gameVariables.ContestantLeftPrefixText = "";
	gameVariables.ContestantsLeftPrefixText = "";
	gameVariables.QuestionLeftSuffixText = " Question Remain";
	gameVariables.QuestionsLeftSuffixText = " Questions Remain";
	gameVariables.ContestantLeftSuffixText = " Contestant Remain";
	gameVariables.ContestantsLeftSuffixText = " Contestants Remain";
	gameVariables.TotalPrizeText = "TOTAL PRIZE";
	
	gameVariables.ContestantFirstName = "";
	gameVariables.ContestantLastName = "";
	gameVariables.ContestantLocation = "";
	
	/* Hot Seat Settings */
	gameVariables.HotSeatNewRuleset = true;
	/* true = Use the new ruleset from the 2026 UK & Australian versions of Millionaire Hot Seat. In this ruleset, the pass lifeline can be used in any question except for the final question. */
	/* false = Use the old ruleset from the 2009-2023 Australian & International versions of Millionaire Hot Seat. In this ruleset, once the contestant makes it through to the 10th level of the money tree, the pass lifeline is disabled for the rest of the game. */
	/**************/
	gameVariables.LastPlayerLeavesWithNothingBeforeFinal = false;
	/* true = The last remaining contestant, after passing the safety net, leaves with nothing if they flunk out on any subsequent question. */
	/* false = The last remaining contestant, after passing the safety net, leaves with a guaranteed sum if they flunk out on any subsequent question. */
	/**************/
	gameVariables.ShowContestantsLeftOnTree = true;
	/* true = Shows the number of contestants remaining in the game above the contestant's name in the money tree. */
	/* false = Hides the number of contestants remaining in the game above the contestant's name in the money tree, just like in the real show. */
	/**************/
	gameVariables.UseMultiTierQuestions = true;
	/* true = Uses multiple sets of questions divided into 3 tiers and the final question. */
	/* false = Uses a fixed set of questions from questions.xml. */
	
	/* Number Format Settings */
	gameVariables.LocaleCode = "en";				/* Uses the country's locale code to determine the numbering system that the country uses. See the "List of Locales.txt" file for a list of locale codes. */
	gameVariables.FormatOptions = {
		style: "currency",							/* The formatting style to use. Use code "decimal" for plain number formatting and "currency" for currency formatting. */
		currency: "GBP",							/* The ISO currency code that is used to identify the currency. If a currency is not in the list of ISO 4217 currency codes, it will not display the symbol of said currency. See the "List of Current Currencies (List One).xml" and "List of Past Currencies (List Three).xml" files for a list of currencies (Look for the three-lettered code between <Ccy> & </Ccy>). */
		currencyDisplay: "symbol",					/* Use code "symbol" to use a localized currency symbol (A.K.A. the default option), "narrowSymbol" to use a narrow format symbol ("$100" rather than "US$100"), "code" to use the ISO currency code and "name" to use a localized currency name instead of a symbol. */
		numberingSystem: "latn",					/* The numbering system to be used for the amounts. Possible values include: "adlm", "ahom", "arab", "arabext", "bali", "beng", "bhks", "brah", "cakm", "cham", "deva", "diak", "fullwide", "gong", "gonm", "gujr", "guru", "hanidec", "hmng", "hmnp", "java", "kali", "khmr", "knda", "lana", "lanatham", "laoo", "latn"(Default), "lepc", "limb", "mathbold", "mathdbl", "mathmono", "mathsanb", "mathsans", "mlym", "modi", "mong", "mroo", "mtei", "mymr", "mymrshan", "mymrtlng", "newa", "nkoo", "olck", "orya", "osma", "rohg", "saur", "segment", "shrd", "sind", "sinh", "sora", "sund", "takr", "talu", "tamldec", "telu", "thai", "tibt", "tirh", "vaii", "wara", "wcho". */
		minimumFractionDigits: 0,					/* Displays the number of Fraction Digits at the end of the amount. */
	};
	gameVariables.ReplaceCharacterBefore = "";		/* Targets the exact character that you want to replace. */
	gameVariables.ReplaceCharacterAfter = "";		/* Replaces the targeted character with a different one. */
	gameVariables.NumberPrefix = "";				/* The text that displays before the amount. */
	gameVariables.NumberSuffix = "";				/* The text that displays after the amount. */
	gameVariables.TreeNumberingSystem = "latn";		/* The numbering system to be used for the number of questions and contestants remaining. Uses the same numbering system for the amounts. */
	
	gameVariables.SecondaryNumberFormatTree = false;
	gameVariables.SecondaryNumberFormatLevelStrap = false;
	gameVariables.SecondaryNumberFormatWin = false;
	gameVariables.SecondaryNumberFormatNewTP = false;
	gameVariables.SecondaryNumberFormatTPM = false;
	
	/* Secondary Number Format Settings */
	gameVariables.SecondaryLocaleCode = "en";			/* Uses the country's locale code to determine the numbering system that the country uses. See the "List of Locales.txt" file for a list of locale codes. */
	gameVariables.SecondaryFormatOptions = {
		style: "decimal",									/* The formatting style to use. Use code "decimal" for plain number formatting and "currency" for currency formatting. */
		currency: "USD",									/* The ISO currency code that is used to identify the currency. If a currency is not in the list of ISO 4217 currency codes, it will not display the symbol of said currency. See the "List of Current Currencies (List One).xml" and "List of Past Currencies (List Three).xml" files for a list of currencies (Look for the three-lettered code between <Ccy> & </Ccy>). */
		currencyDisplay: "symbol",							/* Use code "symbol" to use a localized currency symbol (A.K.A. the default option), "narrowSymbol" to use a narrow format symbol ("$100" rather than "US$100"), "code" to use the ISO currency code and "name" to use a localized currency name instead of a symbol. */
		numberingSystem: "latn",							/* The numbering system to be used for the amounts. Possible values include: "adlm", "ahom", "arab", "arabext", "bali", "beng", "bhks", "brah", "cakm", "cham", "deva", "diak", "fullwide", "gong", "gonm", "gujr", "guru", "hanidec", "hmng", "hmnp", "java", "kali", "khmr", "knda", "lana", "lanatham", "laoo", "latn"(Default), "lepc", "limb", "mathbold", "mathdbl", "mathmono", "mathsanb", "mathsans", "mlym", "modi", "mong", "mroo", "mtei", "mymr", "mymrshan", "mymrtlng", "newa", "nkoo", "olck", "orya", "osma", "rohg", "saur", "segment", "shrd", "sind", "sinh", "sora", "sund", "takr", "talu", "tamldec", "telu", "thai", "tibt", "tirh", "vaii", "wara", "wcho". */
		minimumFractionDigits: 0,							/* Displays the number of Fraction Digits at the end of the amount. */
	};
	gameVariables.SecondaryReplaceCharacterBefore = "";		/* Targets the exact character that you want to replace. */
	gameVariables.SecondaryReplaceCharacterAfter = "";		/* Replaces the targeted character with a different one. */
	gameVariables.SecondaryNumberPrefix = "";				/* The text that displays before the amount. */
	gameVariables.SecondaryNumberSuffix = "";				/* The text that displays after the amount. */
	
	gameVariables.UseTopPrizeText = true;			/* If set to true, the top prize amount(s) will be displayed in text instead of a number. */
	gameVariables.TopPrizeQuestionNumber = 15;		/* The value where the top prize text(s) are displayed above the level set by this value. */
	gameVariables.TopPrizeText = ["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","£1 MILLION"];
	gameVariables.UseTopPrizeLevelStrapText = true;	/* If set to true, the top prize amount shown in the Level Strap will be displayed in text instead of a number. */
	gameVariables.TopPrizeLevelStrapQuestionNumber = 15;	/* The value where the top prize text in the Level Strap is displayed above the level set by this value. */
	gameVariables.TopPrizeLevelStrapText = ["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","£1 MILLION"];
	gameVariables.UseTopPrizeWinStrapText = true;	/* If set to true, the top prize amount shown in the Win Strap will be displayed in text instead of a number. */
	gameVariables.TopPrizeWinStrapQuestionNumber = 15;	/* The value where the top prize text in the Win Strap is displayed above the level set by this value. */
	gameVariables.TopPrizeWinStrapText = ["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","£1 MILLION"];
	gameVariables.UseNewTPStrapText = true;	/* If set to true, the top prize amount shown in the New Top Prize Strap will be displayed in text instead of a number. */
	gameVariables.NewTPStrapQuestionNumber = 15;	/* The value where the top prize text in the New Top Prize Strap is displayed above the level set by this value. */
	gameVariables.NewTPStrapText = ["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","£1 MILLION"];
	gameVariables.UseTopPrizeTPMStrapText = true;	/* If set to true, the top prize amount shown in the TPM Strap will be displayed in text instead of a number. */
	gameVariables.TopPrizeTPMStrapQuestionNumber = 15;	/* The value where the top prize text in the TPM Strap is displayed above the level set by this value. */
	gameVariables.TopPrizeTPMStrapText = ["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","£1 MILLION"];
	gameVariables.UseZeronaireText = false;			/* If set to true, when a contestant walks away with nothing, the Zeronaire text is displayed instead of just 0 and a currency. */
	gameVariables.ZeronaireText = "Nothing";		/* The text that displays when a contestant walks away with nothing. */
	
	gameVariables.CurrentContestantTextScale = 100;	/* DEFAULT: 100%; The percentage of scale on the X axis (left and right) for the text that shows the contestant that is currently in play. */
	gameVariables.QuestionsLeftTextScale = 100;		/* DEFAULT: 100%; The percentage of scale on the X axis (left and right) for the "Questions Left" text. */
	gameVariables.ContestantsLeftTextScale = 100;	/* DEFAULT: 100%; The percentage of scale on the X axis (left and right) for the "Contestants Left" text. */
	gameVariables.CurrentLevelTextScale = 100;		/* DEFAULT: 100%; The percentage of scale on the X axis (left and right) for the text that shows the amount the contestant is currently playing for. */
	gameVariables.NewTPTextScale = 100;				/* DEFAULT: 100%; The percentage of scale on the X axis (left and right) for the text that shows the new top prize. */
	gameVariables.PassTreeTextScale = 100;			/* DEFAULT: 100%; The percentage of scale on the X axis (left and right) for the Pass text inside the money tree. */
	gameVariables.PassStrapTextScale = 100;			/* DEFAULT: 100%; The percentage of scale on the X axis (left and right) for the Pass text that is shown below the "Current Level" strap. */
	gameVariables.WinTextScale = 100;				/* DEFAULT: 100%; The percentage of scale on the X axis (left and right) for the text that shows the amount that the contestant has won. */
	gameVariables.TPMTextScale = 100;				/* DEFAULT: 100%; The percentage of scale on the X axis (left and right) for the text that shows the total prize money. */
	
	/* Do not modify the value of this variable, fastest finger is not fully implemented yet... */
	gameVariables.IsPlayingFasestFinger = true;
	/**************/
	
	/* Boolean Variables */
	gameVariables.IsNameStrapShowing = false;
	gameVariables.IsMoneyTreeShowing = false;
	gameVariables.IsMoneyTreeAnimationPlaying = false;
	gameVariables.IsLogoShowing = false;
	gameVariables.IsExplainingRules = true;
	gameVariables.IsFirstQuestionOfGame = true;
	gameVariables.IsInCommercial = true;
	gameVariables.IsLevelStrapShowing = false;
	gameVariables.IsPassStrapShowing = false;
	gameVariables.IsNewTPMStrapShowing = false;
	gameVariables.IsLifeLineStrapShowing = false;
	gameVariables.IsTimerReady = true;
	gameVariables.IsTotalPrizeMoneyShowing = false;
	gameVariables.IsWalkingAway = false;
	gameVariables.CannotLockInFinalAnswer = false;
	gameVariables.QuestionInProgress = false;
	gameVariables.ContinuePulsingLifeLineCenter = false;
	gameVariables.AnswerAIsOut = false;
	gameVariables.AnswerBIsOut = false;
	gameVariables.AnswerCIsOut = false;
	gameVariables.AnswerDIsOut = false;
	gameVariables.ShowLifeLineCenteredAnimation = false;
	gameVariables.FirstTierBackgroundSoundPlaying = false;
	gameVariables.Contestant1IsOut = false;
	gameVariables.Contestant2IsOut = false;
	gameVariables.Contestant3IsOut = false;
	gameVariables.Contestant4IsOut = false;
	gameVariables.Contestant5IsOut = false;
	gameVariables.Contestant6IsOut = false;
	gameVariables.PassBlocked = false;
	gameVariables.SecondRotation = false;
	gameVariables.IsGameOver = false;

	/* Number Variables */
	gameVariables.AnswerAPercent = 0;
	gameVariables.AnswerBPercent = 0;
	gameVariables.AnswerCPercent = 0;
	gameVariables.AnswerDPercent = 0;
	gameVariables.QuestionLevel = null;
	gameVariables.RevealAnswerCounter = 0;
	gameVariables.RevealFastestFingerWinnersCounter = 0;
	gameVariables.RevealFastestFingerContestantCounter = 0;
	gameVariables.FastestFingerConstestantWinner = 1;
	gameVariables.FastestFingerRevealAnswerCounter = 0;
	gameVariables.FastestFingerSequenceCounter = 0;
	gameVariables.MoneyTreeSequenceCounter = 0;
	gameVariables.QuestionSequenceCounter = 0;
	gameVariables.pafLifeLineSequenceCounter = 0;
	gameVariables.ataLifeLineSequenceCounter = 0;
	gameVariables.stqLifeLineSequenceCounter = 0;
	gameVariables.passLifeLineSequenceCounter = 0;
	gameVariables.walkAwaySequenceCounter = 0;
	gameVariables.commericalSequenceCounter = 0;
	gameVariables.ScaleTreeCounter = 0;
	gameVariables.LifeLineAnimationCounter = 0;
	gameVariables.STQUnlockedLevel = 0;
	gameVariables.ContestantsLeft = 6;
	gameVariables.ContestantNow = 1;
	gameVariables.QuestionsLeft = 15;
	gameVariables.CurrentTopPrizeLevel = 15;
		
	/* String and Char Variables */
	gameVariables.CurrentCorrectAnswer = "";
	gameVariables.CurrentTargetAnswer = "";
	
	/* Audio Variables */
	gameVariables.GeneralSound = null;
	gameVariables.LifelineActiveSound = null;
	gameVariables.LifelinePassiveSound = null;
	gameVariables.LongActiveSound = null;
	gameVariables.LongPassiveSound = null;
	gameVariables.ShortActiveSound = null;
	gameVariables.ShortPassiveSound = null;

	/* Array Variables */
	gameVariables.QuestionsAndAnswers = [];
	gameVariables.SwitchQuestionsAndAnswers = [];
	gameVariables.TierOneQuestionsAndAnswers = [];
	gameVariables.TierTwoQuestionsAndAnswers = [];
	gameVariables.TierThreeQuestionsAndAnswers = [];
	gameVariables.FinalLevelQuestionsAndAnswers = [];
	gameVariables.AskTheAudienceVotingPercents = [];
	gameVariables.ContestantsWereOut = [];
	gameVariables.PrizeAmounts = [100,200,300,500,1000,2000,3000,5000,7500,10000,20000,50000,100000,250000,1000000];
	gameVariables.FastestFingerContestantWinners = [false,false,false,false,false,false];
	gameVariables.FastestFingerContestantTimes = [2.54,4.54,5.54,6.54,9.54,13.54];
	gameVariables.FastestFingerContestants = []
	gameVariables.LightsDownSounds = ["q1_to_q5_lights_down.mp3","q1_to_q5_lights_down.mp3","q1_to_q5_lights_down.mp3","q1_to_q5_lights_down.mp3","q1_to_q5_lights_down.mp3","lights_down_1.mp3","lights_down_2.mp3","lights_down_3.mp3","lights_down_4.mp3","lights_down_5.mp3","lights_down_1.mp3","lights_down_2.mp3","lights_down_3.mp3","lights_down_4.mp3","lights_down_5.mp3"];
	gameVariables.RoundBackgroundSounds = ["q_bed.mp3","q_bed.mp3","q_bed.mp3","q_bed.mp3","q_bed.mp3","q_bed.mp3","q_bed.mp3","q_bed.mp3","q_bed.mp3","q_bed.mp3","q_bed.mp3","q_bed.mp3","q_bed.mp3","q_bed.mp3","q_bed.mp3"];
	gameVariables.FinalAnswerSounds = ["","","","","","final_answer_1.mp3","final_answer_2.mp3","final_answer_3.mp3","final_answer_4.mp3","final_answer_5.mp3","final_answer_1.mp3","final_answer_2.mp3","final_answer_3.mp3","final_answer_4.mp3","final_answer_5.mp3"];
	gameVariables.CorrectAnswerSounds = ["correct.mp3","correct.mp3","correct.mp3","correct.mp3","correct.mp3","correct.mp3","correct.mp3","correct.mp3","correct.mp3","correct.mp3","correct.mp3","correct.mp3","correct.mp3","correct.mp3","q15_correct.mp3"];
	gameVariables.WrongAnswerSounds = ["wrong.mp3","wrong.mp3","wrong.mp3","wrong.mp3","wrong.mp3","wrong.mp3","wrong.mp3","wrong.mp3","wrong.mp3","wrong.mp3","wrong.mp3","wrong.mp3","wrong.mp3","wrong.mp3","wrong.mp3"];

	/* Interval/Timeout Variables */
	gameVariables.ShowAnswerTimeout = null;
	gameVariables.ShowWinnerTimeout = null;
	gameVariables.ScaleTreeTimeout = null;
	gameVariables.PAFClockTimeout = null;
	gameVariables.TimerTimeout = null;
	gameVariables.SearchContestantTimeout = null;

})(window.GameVariables = window.GameVariables || {});








