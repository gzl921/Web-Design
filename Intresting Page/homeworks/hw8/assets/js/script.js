function toggleSongs() {
    let songs = document.getElementById("songs-second-half");
    songs.classList.toggle("hidden");
}

document.getElementById("toggle-button").onclick = toggleSongs;
