var Images = new Array()
Images[0] = new Image(); Images[0].src = "Res/F1.png";
//console.log(Images[0].src)
Images[1] = new Image(); Images[1].src = "Res/F2.png";
Images[2] = new Image(); Images[2].src = "Res/F3.jpg";
Images[3] = new Image(); Images[3].src = "Res/F4.jpg";
Images[4] = new Image(); Images[4].src = "Res/F5.jpg";
Images[5] = new Image(); Images[5].src = "Res/F6.jpg";
Images[6] = new Image(); Images[6].src = "Res/F7.jpg";
Images[7] = new Image(); Images[7].src = "Res/F8.png";
Images[8] = new Image(); Images[8].src = "Res/F9.png";
Images[9] = new Image(); Images[9].src = "Res/F10.jpg";
Images[10] = new Image(); Images[10].src = "Res/F11.jpg";
Images[11] = new Image(); Images[11].src = "Res/F12.jpg";
Images[12] = new Image(); Images[12].src = "Res/F13.jpg";
Images[13] = new Image(); Images[13].src = "Res/F14.jpg";
Images[14] = new Image(); Images[14].src = "Res/F15.jpg";
Images[15] = new Image(); Images[15].src = "Res/F16.jpg";
Images[16] = new Image(); Images[16].src = "Res/F17.jpg";
Images[17] = new Image(); Images[17].src = "Res/V1.jpg";
Images[18] = new Image(); Images[18].src = "Res/V2.jpg";
Images[19] = new Image(); Images[19].src = "Res/V3.jpg";
Images[20] = new Image(); Images[20].src = "Res/V4.jpg";
Images[21] = new Image(); Images[21].src = "Res/V5.jpg";
Images[22] = new Image(); Images[22].src = "Res/V6.jpg";
Images[23] = new Image(); Images[23].src = "Res/V7.jpg";
Images[24] = new Image(); Images[24].src = "Res/V8.jpg";
Images[25] = new Image(); Images[25].src = "Res/V9.png";
Images[26] = new Image(); Images[26].src = "Res/V10.png";
Images[27] = new Image(); Images[27].src = "Res/V11.jpg";


var imgCounter = 0;
var res = randomUniqueNum(10,3)

var randomNum = res[0];//Math.floor(Math.random() * 10)+1;
for (var i = 0; i < randomNum; i++) {
    var randomPhoto = Math.floor(Math.random() * Images.length);
    document.getElementById("result").innerHTML += '<img src="'+ Images[randomPhoto].src +' '+'" style="width:150px" />'
    imgCounter++;
}

function randomUniqueNum(range, outputCount) {

    let arr = []
    for (let i = 1; i <= range; i++) {
      arr.push(i)
    }
  
    let result = [];
  
    for (let i = 1; i <= outputCount; i++) {
      const random = Math.floor(Math.random() * (range - i));
      result.push(arr[random]);
      arr[random] = arr[range - i];
    }
  
    return result;
  }

var btn1 = res[1];//Math.floor(Math.random() * 15);
var btn2 = res[2];//Math.floor(Math.random() * 12);

var options = [imgCounter,btn1,btn2];
var shuffledOptions = []

for(i = options.length; i--;){
    shuffledOptions.push(options.splice(Math.floor(Math.random() * (i + 1)),1)[0])
}
document.getElementById("btn1").innerHTML = shuffledOptions[0]
document.getElementById("btn1").value = shuffledOptions[0]
document.getElementById("btn2").innerHTML = shuffledOptions[1]
document.getElementById("btn2").value = shuffledOptions[1]
document.getElementById("btn3").innerHTML = shuffledOptions[2]
document.getElementById("btn3").value = shuffledOptions[2]

console.log(imgCounter);

function check_imgNumber(passedNum) {
  var num = passedNum
   console.log(passedNum);
    if (num == imgCounter) {
        document.getElementById("space").innerHTML = '<video width="5" height="5" controls autoplay> <source src="Res/clapping.mp4" type="video/mp4">'
        setTimeout(function () {
            window.location.reload();
        }, 4000);
    }
    else {
        document.getElementById("space").innerHTML = '<video width="5" height="5" controls autoplay> <source src="Res/Game Over - Sound Effect [HD].mp4" type="video/mp4">'
    }
}

