// ex1 text change 
 function textChange(){
    document.getElementById('t_c').innerHTML="welcome to my website";
}

// ex2 show date 
function showDate(){
    document.getElementById('s_date').innerHTML=Date();
}


// ex3 bulb on/off
function bulbOff(){
    document.getElementById('b_img').src="image/pic_bulboff.gif";
}

function bulbOn(){
    document.getElementById('b_img').src="image/pic_bulbon.gif";
}

// ex4 colour chnage of car
function redCar(){
    document.getElementById('car_img').src="image/Red_car.gif";
}

function blueCar(){
    document.getElementById('car_img').src="image/Blue_car.gif";
}

// ex5 color change 
function colorChange(){
    document.getElementById('color_change').style.color="red";
}

// ex6 show/hide image 
function showImg(){
    document.getElementById('food_img').style.display="block";
}

function hideImg(){
    document.getElementById('food_img').style.display="none";
}


// ex7 document write 
function dWrite(){
    document.write("welcome to my website")
}

// ex8 document alert
function dAlert(){
    window.alert("welcome to my website")
}

// ex9 text show 
function textShow(){
    document.getElementById("s_t").innerHTML="I am Bangladesh";
}

// ex10 focus 
function cInput(){
    document.getElementById("c_input").style.backgroundColor="blue";
}

// ex11 font size change
function fontSize(){
    document.getElementById("fz_change").style.fontSize="60px";
}

// ex12 font size change
function iShow(){
    document.getElementById('im_show').style.width="50%";
}


// ex13 window print
function windowPrint(){
 window.print('print');
}

// ex14 window print
function consoleLog(){
    console.log("Hello Bangladesh");
}

// ex15 define name
function carName(){
    document.getElementById('d_name').innerHTML=(
        'volvo,tasla,find,toyta'
    );
}

function phoneName(){
    document.getElementById('d_name').innerHTML=(
        'iphone,vivo,samsung'
    );
}

// ex16 get month
function getMonth(){
    const d = new Date();
    document.getElementById('month').innerHTML=d.getMonth()+1;
}

// ex17 

var number1 = 5;
var number2 = 6;

result = number1 + number2;

function rAddition(){
   document.getElementById('r_a').innerHTML=result;
}
