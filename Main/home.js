// music player js
let song=document.getElementById("song")
let arr=["Mainaudiofilesaudio1.mp3","Mainaudiofilesaudio2.mp3","Mainaudiofilesaudio3.mp3","Mainaudiofilesaudio4.mp3","Mainaudiofilesaudio5.mp3"]

let length = arr.length
let i=0
function play() {        
if ( document.getElementById("text").innerHTML == "play"){        
document.getElementById("play").setAttribute("class","fa-solid fa-circle-play")        
song.pause()        
document.getElementById("text").innerHTML = "pause"    
   }    
else{  document.getElementById("play").setAttribute("class","fa-solid fa-circle-pause")    
song.play()    
document.getElementById("text").innerHTML = "play"    
    }
}
function next(){
if ( i == arr.length-1 ){
    i = -1
}
else{
    i=i+1
document.getElementById("song").setAttribute("src",arr[i].slice(0,4)+"\\"+arr[i].slice(4,14)+"\\"+arr[i].slice(14))    
song=document.getElementById("song")    
song.play()
}


}
function prev(){    
i=i-1    
document.getElementById("song").setAttribute("src",arr[i])    
song=document.getElementById("song")    
song.play()
}
//pomodoro timer js
