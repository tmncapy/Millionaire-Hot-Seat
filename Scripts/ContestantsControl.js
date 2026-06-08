function getContestantsForGame(){
	for(var i = 0; i < 6; i++){
		if(i == 0)
		{
			var contestant = new Contestant(window.GameVariables.ContestantListFirstName[0], window.GameVariables.ContestantListLastName[0], window.GameVariables.ContestantListLocation[0]);
			window.GameVariables.FastestFingerContestants.push(contestant);
			
			var targetId = '#fastestContestant' + (i + 1);
			$(targetId + ' .fastestContestantNameP').html(window.GameVariables.FastestFingerContestants[i].FirstName + ' ' + window.GameVariables.FastestFingerContestants[i].LastName)
		}
		if(i == 1)
		{
			var contestant = new Contestant(window.GameVariables.ContestantListFirstName[1], window.GameVariables.ContestantListLastName[1], window.GameVariables.ContestantListLocation[1]);
			window.GameVariables.FastestFingerContestants.push(contestant);
			
			var targetId = '#fastestContestant' + (i + 1);
			$(targetId + ' .fastestContestantNameP').html(window.GameVariables.FastestFingerContestants[i].FirstName + ' ' + window.GameVariables.FastestFingerContestants[i].LastName)
		}
		if(i == 2)
		{
			var contestant = new Contestant(window.GameVariables.ContestantListFirstName[2], window.GameVariables.ContestantListLastName[2], window.GameVariables.ContestantListLocation[2]);
			window.GameVariables.FastestFingerContestants.push(contestant);
			
			var targetId = '#fastestContestant' + (i + 1);
			$(targetId + ' .fastestContestantNameP').html(window.GameVariables.FastestFingerContestants[i].FirstName + ' ' + window.GameVariables.FastestFingerContestants[i].LastName)
		}
		if(i == 3)
		{
			var contestant = new Contestant(window.GameVariables.ContestantListFirstName[3], window.GameVariables.ContestantListLastName[3], window.GameVariables.ContestantListLocation[3]);
			window.GameVariables.FastestFingerContestants.push(contestant);
			
			var targetId = '#fastestContestant' + (i + 1);
			$(targetId + ' .fastestContestantNameP').html(window.GameVariables.FastestFingerContestants[i].FirstName + ' ' + window.GameVariables.FastestFingerContestants[i].LastName)
		}
		if(i == 4)
		{
			var contestant = new Contestant(window.GameVariables.ContestantListFirstName[4], window.GameVariables.ContestantListLastName[4], window.GameVariables.ContestantListLocation[4]);
			window.GameVariables.FastestFingerContestants.push(contestant);
			
			var targetId = '#fastestContestant' + (i + 1);
			$(targetId + ' .fastestContestantNameP').html(window.GameVariables.FastestFingerContestants[i].FirstName + ' ' + window.GameVariables.FastestFingerContestants[i].LastName)
		}
		if(i == 5)
		{
			var contestant = new Contestant(window.GameVariables.ContestantListFirstName[5], window.GameVariables.ContestantListLastName[5], window.GameVariables.ContestantListLocation[5]);
			window.GameVariables.FastestFingerContestants.push(contestant);
			
			var targetId = '#fastestContestant' + (i + 1);
			$(targetId + ' .fastestContestantNameP').html(window.GameVariables.FastestFingerContestants[i].FirstName + ' ' + window.GameVariables.FastestFingerContestants[i].LastName)
		}
	}
}

function Contestant(firstName, lastName, location){
	this.FirstName = firstName;
	this.LastName = lastName;
	this.Location = location;
}

function showNameStrap(){
	$('.contestantNameAndLocationDiv').css('opacity', 1);
}

function hideNameStrap(){
	$('.contestantNameAndLocationDiv').css('opacity', 0);
}

function newContestant(){
	if(window.GameVariables.PassBlocked == true){
		if(window.GameVariables.Contestant1IsOut == true){
			if(window.GameVariables.Contestant2IsOut == true){
				if(window.GameVariables.Contestant3IsOut == true){
					if(window.GameVariables.Contestant4IsOut == true){
						if(window.GameVariables.Contestant5IsOut == true){
							window.GameVariables.ContestantNow = 6;
						}
						else{
							window.GameVariables.ContestantNow = 5;
						}
					}
					else{
						window.GameVariables.ContestantNow = 4;
					}
				}
				else{
					window.GameVariables.ContestantNow = 3;
				}
			}
			else{
				window.GameVariables.ContestantNow = 2;
			}
		}
	}
	else{
		window.GameVariables.ContestantNow++;
	}
	
	if(window.GameVariables.ContestantNow > 6){
		if(window.GameVariables.Contestant1IsOut == true){
			if(window.GameVariables.Contestant2IsOut == true){
				if(window.GameVariables.Contestant3IsOut == true){
					if(window.GameVariables.Contestant4IsOut == true){
						if(window.GameVariables.Contestant5IsOut == true){
							window.GameVariables.ContestantNow = 6;
						}
						else{
							window.GameVariables.ContestantNow = 5;
						}
					}
					else{
						window.GameVariables.ContestantNow = 4;
					}
				}
				else{
					window.GameVariables.ContestantNow = 3;
				}
			}
			else{
				window.GameVariables.ContestantNow = 2;
			}
		}
		else{
			window.GameVariables.ContestantNow = 1;
		}
		window.GameVariables.PassBlocked = true;
		window.GameVariables.SecondRotation = true;
	}
	
	if(window.GameVariables.ContestantsLeft == 1){
		window.GameVariables.PassBlocked = true;
	}
	
	var targetId = '#fastestContestant' + (window.GameVariables.ContestantNow);
	$(targetId + ' .fastestContestantNameP').html(window.GameVariables.FastestFingerContestants[window.GameVariables.ContestantNow - 1].FirstName + ' ' + window.GameVariables.FastestFingerContestants[window.GameVariables.ContestantNow - 1].LastName);
	$('.contestantNowNameP').html(window.GameVariables.FastestFingerContestants[window.GameVariables.ContestantNow - 1].FirstName + ' ' + window.GameVariables.FastestFingerContestants[window.GameVariables.ContestantNow - 1].LastName);
	$('.contestantNameP').html(window.GameVariables.FastestFingerContestants[window.GameVariables.ContestantNow - 1].FirstName + ' ' + window.GameVariables.FastestFingerContestants[window.GameVariables.ContestantNow - 1].LastName);
	$('.contestantLocationP').html(window.GameVariables.ContestantListLocation[window.GameVariables.ContestantNow - 1]);
}

function removeContestant(){
	if(window.GameVariables.ContestantNow == 1){
		window.GameVariables.Contestant1IsOut = true;
	}
	else if(window.GameVariables.ContestantNow == 2){
		window.GameVariables.Contestant2IsOut = true;
	}
	else if(window.GameVariables.ContestantNow == 3){
		window.GameVariables.Contestant3IsOut = true;
	}
	else if(window.GameVariables.ContestantNow == 4){
		window.GameVariables.Contestant4IsOut = true;
	}
	else if(window.GameVariables.ContestantNow == 5){
		window.GameVariables.Contestant5IsOut = true;
	}
	else if(window.GameVariables.ContestantNow == 6){
		window.GameVariables.Contestant6IsOut = true;
	}
	
	window.GameVariables.ContestantsLeft--;
}