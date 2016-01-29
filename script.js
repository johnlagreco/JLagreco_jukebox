document.getElementById('playSong').addEventListener("click", function(){
	jukeBox.play();
});

document.getElementById('pauseSong').addEventListener("click", function(){
	jukeBox.pause();
});

document.getElementById('stopSong').addEventListener("click", function(){
	jukeBox.stop();
});

var jukeBox = {
	songs: ["song1", "song2", "song3"],
	play: function(){
		document.getElementById(this.songs[0]).play();
	},

	pause: function(){
		document.getElementById(this.songs[0]).pause();
	},

	stop: function(){
		document.getElementById(this.songs[0]).stop();
	}

};

// JukeBox.loadSong(1);
// JukeBox.stop();












