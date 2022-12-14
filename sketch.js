
    let vid = document.querySelector("#background-video");
    let col = false;
    vid.addEventListener('ended',playNextVideo,false);
    var yahizo = false;
    function playNextVideo(e){
      if(yahizo == false)
      {
        vid.src="intervalo.mp4";
        vid.loop = true;
        vid.play();
        document.getElementById("divtitulo").style.opacity = "1";
        document.getElementById("divBoton").style.opacity = "1";
      }
      else{
        if(col == true){
            vid.style.opacity = "0"
        }
      }
      yahizo = true;

}

function click(){
    vid.src="fin.mp4";
      vid.loop = false;
      col = true;
      vid.play();
      document.getElementById("divtitulo").style.transitionDuration = "2s";
      document.getElementById("divBoton").style.transitionDuration = "2s";
      document.getElementById("divtitulo").style.opacity = "0";
      document.getElementById("divBoton").style.opacity = "0";
}

function cargar(){
    setTimeout(function() {
        document.getElementById("divtitulo").style.opacity = "1";
        document.getElementById("divBoton").style.opacity = "1";
    }, 5000);

}