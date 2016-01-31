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
	songs: ["song1", "song2", "song3"],
	play: function(){
		document.getElementById(this.songs[0]).play();
	},

	pause: function(){
		document.getElementById(this.songs[0]).pause();
	},

	stop: function(){
		document.getElementById(this.songs[0]).pause();
		document.getElementById(this.songs[0]).currentTime = 0;
	},

	next: function(){
		if(this.currentSong == this.songs.length - 1){
			this.currentSong = 0
			document.getElementById(this.songs[0]).setAttribute('src', this.songs[0]),
			jukeBox.play();
		} else{
			this.currentSong ++
			document.getElementById(this.songs[0]).setAttribute('src', this.songs[this.currentSong]),
			jukeBox.play();
		}
	},

};

// JukeBox.loadSong(1);












