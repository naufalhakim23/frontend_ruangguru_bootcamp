const Song = require("./song");
const Playlist = require("./playlist");

module.exports = class MusicPlayer {
  constructor(playlist) {
    this.playlist = playlist;
  }

  addSong(song) {
    // TODO: answer here
    this.playlist.songs.push(song);
  }

  play() {
    // TODO: answer here
    // console.log(this.playlist.songs[3]);
    let playlistSong = this.playlist.songs;
    let nowPlayingSong = playlistSong[0];
    let status = "";

    if (
      playlistSong.length == 0 ||
      playlistSong == null ||
      playlistSong == undefined
    ) {
      return status;
    }
    // else {
    //   //should play the first song and playlist become empty when play song with one song in repeatable condition
    //   if (playlistSong.length === 1 && this.playlist.isRepeatable === false) {
    //     status = `Now Playing ${nowPlayingSong.singer} - ${nowPlayingSong.title}`;
    //     playlistSong.shift();
    //     return status;
    //   }
    //   if (playlistSong.length === 1 && this.playlist.isRepeatable === true) {
    //     status = `Now Playing ${nowPlayingSong.singer} - ${nowPlayingSong.title}`;
    //     playlistSong.shift();
    //     return status;
    //   }
    //   if (playlistSong.length > 1 && this.playlist.isRepeatable === false) {
    //     status = `Now Playing ${nowPlayingSong.singer} - ${nowPlayingSong.title}`;
    //     playlistSong.shift();
    //     return status;
    //   }
    //   if (playlistSong.length > 1 && this.playlist.isRepeatable === true) {
    //     status = `Now Playing ${nowPlayingSong.singer} - ${nowPlayingSong.title}`;
    //     playlistSong.push(nowPlayingSong);
    //     playlistSong.shift();
    //     return status;
    //   }
    // }

    // new approach, just check the repeatable condition, so we don't really need to check the length of the playlist
    // because if the playlist is empty, we will return the status empty
    // but if the playlist is not empty, we will return the status of now playing song
    // and we dont need to check is there one or more song in the playlist

    if (this.playlist.isRepeatable === false) {
      status = `Now Playing ${nowPlayingSong.singer} - ${nowPlayingSong.title}`;
      playlistSong.shift();
      return status;
    }
    if (this.playlist.isRepeatable === true) {
      status = `Now Playing ${nowPlayingSong.singer} - ${nowPlayingSong.title}`;
      playlistSong.push(nowPlayingSong);
      playlistSong.shift();
      return status;
    }

    //✓ should add song to the playlist (2 ms)when add multiple songs
    //✓ should add songs to the playlist when repeat playlist
    //✓ should set isRepeatable to be true when play song in empty playlist
    //✓ should return empty string when play song with one song in non-repeatable condition
    //✓ should play the first song and playlist become empty (1 ms)  when play song with one song in repeatable condition
    //✓ should play the first song and played song exists in playlist when play song with multiple song in non-repeatable condition
    //✕ should play the first song and played song become the last song in the playlist (1 ms)play the second song
    //✕ play the second song and played song become the last song in the playlist (1 ms)
    //
    /**
     * Code kak Eddy
     * if (this,playlist,isEmpty) {
     * return '';
     * }
     * const returnString = `Now Playing ${this.playlist.songs[0]?.singer} - ${this.playlist.songs[0]?.title}`;
     * if(this.playlist.isRepeatable){
     * const shiftedSong  this.playlist.songs.shift();
     * this.playlist.songs.push(shiftedSong);
     * } else {
     * this.playlist.songs.shift();
     * }
     * return returnString;
     * }
     *
     */
  }
};
// for testing purpose just uncomment the following code
// let playlist = new Playlist([], false);
// const player = new MusicPlayer(playlist);
// player.addSong(new Song("Tulus", "Hati-Hati di Jalan"));
// player.playlist.repeat();

// let output = player.play();
// console.log(output);
// console.log(player.playlist.songs[0].singer); //sekarang udah ada isinya
// console.log(player.playlist.songs[0].title); //sekarang udah ada isinya
