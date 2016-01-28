document.getElementById('playSong').addEventListener("click", function(){
	jukeBox.play();
});

// function playSong(){
// 	document.getElementById('song1').play();	
// };

// function pauseSong(){
// 	document.getElementById('song1').pause();
// }


// function jukeBox(){
// 	this.songs = [];
// 	this.play = function(){


// 	}
// 	this.chooseSong = function(songNum){

// 	}

// };

var jukeBox = {
	songs: ["song1", "song2"],
	play: function(){
		document.getElementById(this.songs[0]).play();
	}
};

// JukeBox.loadSong(1);
// JukeBox.play();
// JukeBox.pause();
// JukeBox.stop();












