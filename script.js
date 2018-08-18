var audio = new Audio("music/0.mp3");

function playpause() {
	var state = document.getElementById("playpause");
	if (state.innerHTML === "play_arrow") {
		state.innerHTML = "pause";
		document.getElementById("playing").setAttribute("style", "display: show;");
		document.getElementById("notplaying").setAttribute("style", "display: none;");
		audio.play()
	} else {
		state.innerHTML = "play_arrow";
		document.getElementById("playing").setAttribute("style", "display: none;");
		document.getElementById("notplaying").setAttribute("style", "display: show;");
		audio.pause()
	}
		
}