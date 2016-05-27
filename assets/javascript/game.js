$("document").ready(function(){
	var game = {
		target: 0,
		score: 0,
		crystal1Score: 0,
		crystal2Score: 0,
		crystal3Score: 0,
		crystal4Score: 0,
		wins: 0,
		losses: 0
	};

	var getRandomInt = function (min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	var updateGameView = function(){
		$("span.tgt").html(game.target);
		$("span.score").html(game.score);
		$("span.wins").html(game.wins);
		$("span.losses").html(game.losses);
	};

	var initializeGame = function(){
		game.target = getRandomInt(19,120);
		game.crystal1Score = getRandomInt(1, 12);
		game.crystal2Score = getRandomInt(1, 12);
		game.crystal3Score = getRandomInt(1, 12);
		game.crystal4Score = getRandomInt(1, 12);
		updateGameView();
	};

	var updateScores = function(num){
		console.log('Updating with ' + num);
		game.score = game.score + num;
		if(game.score === game.target) {
			game.wins = game.wins + 1;
			game.score = 0;
			initializeGame();
			return;
		}

		if(game.score > game.target) {
			game.losses = game.losses + 1;
			game.score = 0;
			initializeGame();
			return;
		}

		updateGameView();
	};

	var initializeListeners = function(){
		$("div#crystal1").on("click", function(){
			updateScores(game.crystal1Score);
		});

		$("div#crystal2").on("click", function(){
			updateScores(game.crystal2Score);
		});

		$("div#crystal3").on("click", function(){
			updateScores(game.crystal3Score);
		});

		$("div#crystal4").on("click", function(){
			updateScores(game.crystal4Score);
		});
	};

	initializeGame();
	initializeListeners();

});