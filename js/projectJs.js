var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var firstNum = document.getElementById("main").innerHTML = Math.floor(Math.random() * 100) + '&nbsp; &nbsp; &nbsp;'
var firstNum2 = firstNum.split('&')[0]
var secNum = document.getElementById("main2").innerHTML = Math.floor(Math.random() * 100)

function checkLess() {
    if (firstNum2 < secNum) {
        //document.getElementById("result").innerHTML = "Correct answer " + '&#128079;'
        document.getElementById("space").innerHTML = '<video width="5" height="5" controls autoplay> <source src="Res/clapping.mp4" type="video/mp4">'
        //location.reload()
        setTimeout(function(){
            window.location.reload();
         }, 4000);   
    }
    else {
        document.getElementById("space").innerHTML = '<video width="5" height="5" controls autoplay> <source src="Res/Game Over - Sound Effect [HD].mp4" type="video/mp4">'
    }
}


function checkGreater() {
    if (firstNum2 > secNum) {
        //document.getElementById("result").innerHTML = "Correct answer " + '&#128079;'
        document.getElementById("space").innerHTML = '<video width="5" height="5" controls autoplay> <source src="Res/clapping.mp4" type="video/mp4">'
        setTimeout(function(){
            window.location.reload();
         }, 4000); 
    }
    else {
        document.getElementById("space").innerHTML = '<video width="5" height="5" controls autoplay> <source src="Res/Game Over - Sound Effect [HD].mp4" type="video/mp4">'
    }
}


function checkEqual() {
    if (firstNum2 == secNum) {
        //document.getElementById("result").innerHTML = "Correct answer " + '&#128079;'
        document.getElementById("space").innerHTML = '<video width="5" height="5" controls autoplay> <source src="Res/clapping.mp4" type="video/mp4">'
        setTimeout(function(){
            window.location.reload();
         }, 4000); 
    }
    else {
        document.getElementById("space").innerHTML = '<video width="5" height="5" controls autoplay> <source src="Res/Game Over - Sound Effect [HD].mp4" type="video/mp4">'
    }
}





function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    }
}
