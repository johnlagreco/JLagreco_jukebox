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

document.getElementById('prevSong').addEventListener("click", function(){
	jukeBox.previous();
});

document.getElementById('volumeUp').addEventListener("click", function(){
	jukeBox.volUp();
});

document.getElementById('volumeDown').addEventListener("click", function(){
	jukeBox.volDown();
});

var jukeBox = {	
	songs: ["song1", "song2", "song3", "song4", "song5", "song6", "song7", "song8", "song9", "song10"],
	currentSong: 0,

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
		this.stop();
		this.currentSong++;
		if(this.currentSong > this.songs.length -1){
			this.currentSong = 0;
		} 
		document.getElementById('nextSong').setAttribute("src", this.songs[0]);
		this.play();	
	},

	previous: function(){
		this.stop();
		this.currentSong--;
		if(this.currentSong < 0){
			this.currentSong = this.songs.length -1;
		}
		document.getElementById('prevSong').setAttribute("src", this.songs[this.currentSong]);
		this.play();
	},

	volUp: function(){
		document.getElementById(this.songs[this.currentSong]).volume+=0.1;
	},

	volDown: function(){
		document.getElementById(this.songs[this.currentSong]).volume-=0.1;
	},

};

// JukeBox.loadSong(1);












