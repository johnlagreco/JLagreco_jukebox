document.getElementById('playSong').addEventListener("click", function(){
	jukeBox.play();
});

document.getElementById('pauseSong').addEventListener("click", function(){
	jukeBox.pause();
});

document.getElementById('stopSong').addEventListener("click", function(){
	jukeBox.stop();
});

document.getElementById('nextSong').addEventListener("click", function(){
	jukeBox.next();
});

var jukeBox = {
	currentSong: 0,
	songs: ["song1", "song2", "song3", "song4", "song5"],
	play: function(){
		document.getElementById(this.songs[this.currentSong]).play();
	},

	pause: function(){
		document.getElementById(this.songs[this.currentSong]).pause();
	},

	stop: function(){
		document.getElementById(this.songs[this.currentSong]).pause();
		document.getElementById(this.songs[this.currentSong]).currentTime = 0;
	},

	next: function(){
		if(this.currentSong == this.songs.length - 1){
			this.currentSong = 0
			document.getElementById(this.songs[0]).setAttribute("songs", this.songs[0]),
			jukeBox.play();
		} else{
			this.currentSong ++
			document.getElementById(this.songs[0]).setAttribute("songs", this.songs[this.currentSong]),
			jukeBox.play();
		}
	},

};

// JukeBox.loadSong(1);












