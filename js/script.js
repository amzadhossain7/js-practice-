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

// ex8 document write 
function dAlert(){
    window.alert("welcome to my website")
}