let allNumbersTemplate = document.querySelector('#numbers-template').innerHTML;
let drumpNumbersTemplate = document.querySelector('#drum-template').innerHTML;
let numbersDiv = document.querySelector('.all-numbers');
let drumpDiv = document.querySelector('.numbers-drum');
let drumNum = document.querySelector('.numbers-drum').children;
let chooseColorGroup = document.querySelectorAll('.color-class');
let startGamebtn = document.querySelector('#start-game');
let treshIcon = document.querySelector('#tresh');

let counter = 0;
numbersTemplate();
drumTeamplte();

let allNumbers = document.querySelectorAll('.numbers');


for (let i = 0; i < allNumbers.length; i++) {
    allNumbers[i].addEventListener('click',chooseNumber);
    
}

startGamebtn.addEventListener('click', function () {
    let loop = setInterval(startGame,100);
}) 

treshIcon.addEventListener('click',function() {
    numbersTemplate();
drumTeamplte();
    clearColors()
    
});

for (let i = 0; i < chooseColorGroup.length; i++) {
    chooseColorGroup[i].addEventListener('click', selectColor);
    
}








function chooseNumber() {
    this.style.opacity = "1";
    this.removeEventListener('click',chooseNumber);
    if (counter == 5){
        for (let i = 0; i < allNumbers.length; i++) {
            allNumbers[i].removeEventListener('click',chooseNumber);
        }
    }
    counter++
    
}


function selectColor() {
    clearColors()
    let color = this.getAttribute('id');
    for (let i = 0; i < numbers.length; i++) {
        if (color == numbers[i].color+"-class"){
            if (numbers[i].number == allNumbers[i].innerHTML){
                allNumbers[i].setAttribute('class', numbers[i].color);
            }

        }
        
    }
    
}




function startGame() {
    let left = Math.floor(Math.random()*157);
    let top = Math.floor(Math.random()*145);   
    drumNum[counter].style.left = left+"px";
    drumNum[counter].style.top = top+"px"; 
    if (counter === drumNum.length-1){
        counter = 0;
    }else {
        counter++
    }
    
}

function clearColors() {
    for (let i = 0; i < allNumbers.length; i++) {
        allNumbers[i].setAttribute('class', 'numbers');
        
    }
}

function numbersTemplate() {
    let text = "";
    numbersDiv.innerHTML = text;
    numbers.forEach(el => {
    text = allNumbersTemplate.replace("{{number}}", el.number)
        .replace("{{color}}", el.color)
        numbersDiv.innerHTML += text;
    });

}

function drumTeamplte() {
    let text = "";
    drumpDiv.innerHTML = text;
    numbers.forEach(el => {
    text = drumpNumbersTemplate.replace("{{number}}", el.number)
        .replace("{{color}}", el.color)
        drumpDiv.innerHTML += text;
    });
}



