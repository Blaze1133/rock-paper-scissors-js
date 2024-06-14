/*const message = document.getElementById("header");
let username = "";

message.textContent += username ===""? 'guest':username;
-------------------------ELEMENT SELECTORS--------------------------*/
/* const h = document.getElementById("header");
h.style.backgroundColor = "green"
h.style.textAlign = "center";

const klass = document.getElementsByClassName("fruits");
klass[0].style.backgroundColor = "yellow";
klass[2].style.backgroundColor = "green";

for(let fruit of klass){
    fruit.style.backgroundColor = "yellow";
}

const h4elements = document.getElementsByTagName("h4");
h4elements[0].style.backgroundColor = "red";
h4elements[1].style.backgroundColor = "red";

const liElements = document.getElementsByTagName("li");
for(let liElement of liElements){
    liElement.style.backgroundColor = "lightbluex";
}

const element = document.querySelector("h4")
element.style.backgroundColor = "lightgreen";

const food = document.querySelectorAll(".fruits")
food[2].style.backgroundColor = "blue";
-------------------------DOM NAVIGATION---------------------------------------------*/
/* const element = document.getElementById("fruits");
const firstchild = element.firstElementChild;
firstchild.style.backgroundColor = "green";

const uiElements = document.querySelectorAll("ul");

uiElements.forEach(uiElements => { const ans = uiElements.firstElementChild
    ans.style.backgroundColor = "yellow";
 })

uiElements.forEach((uiElements) => {const last = uiElements.lastElementChild
last.style.backgroundColor = "lightblue"})

const apple = document.getElementById("1");
const nexxt = apple.nextElementSibling;
nexxt.style.backgroundColor = "Red";

const pastry = document.getElementById("9");
const wafel = pastry.previousElementSibling;
wafel.style.backgroundColor = "pink"

const parentt = pastry.parentElement
parentt.style.backgroundColor = "green";
----------------------ADDING AND CHANGING HTML ELEMENTS---------------------------------*/
//-----------------------EXAMPLE 1 <h1>-------------------------------
/*
//S1: create the element
const newH1 = document.createElement("h1");
newH1.id = "22";
newH1.style.color = "tomato"
newH1.style.textAlign = "center";

//S2: access its arrtibutes and properties
newH1.textContent = "I Like Pizza";

//S3: append the element to the DOM
//document.body.append(newH1);
//document.body.prepend(newH1);
//document.getElementById("box3").append(newH1);
document.body.insertBefore(newH1,box3);
document.body.removeChild(newH1); */
/*
//S1: Creating the list item
const newListItem = document.createElement("li");

//S2: Add attributes/properties
newListItem.id = "grapes";
newListItem.textContent = "Grapes";
newListItem.style.color = "red"
//S3: Append the element
//document.getElementById("fruits").prepend(newListItem);
document.getElementById("fruits").insertBefore(newListItem,banana);
--------------------------------- MOUSE EVENT LISTENERS-------------------------*/
/*
const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");



myButton.addEventListener("click",event => {
    myBox.style.backgroundColor = "tomoato";
    myBox.textContent = "Urm, What the sigma 🗣️";
});

myButton.addEventListener("mouseover",event => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Don't do it 😒";
});

myButton.addEventListener("mouseout",event => {
    myBox.textContent = "Click Me 😀";
    myBox.style.backgroundColor = "lightgreen";
});

----------------------------Key Events-------------------------------------*/
/*
document.addEventListener("keydown",event =>{
    console.log(event);
})

const box = document.getElementById("box");

document.addEventListener("keydown",event => {
    box.style.backgroundColor = "red"
    box.textContent = "😡"
});

document.addEventListener("keyup",event =>{
    box.style.backgroundColor = "lightblue";
    box.textContent = "😀"
});
*/
/*
const box = document.getElementById("box");
let x = 0;
let y = 0;
const moveAmount = 10;

document.addEventListener("keydown",event =>{
    box.style.backgroundColor = "red"
    box.textContent = "😡"

    if(event.key.startsWith("Arrow")){
        switch(event.key){
            
            case "ArrowUp":
                y -= moveAmount;
                break;

            case "ArrowDown":
                y += moveAmount;
                break;

            case "ArrowLeft":
                x -= moveAmount;
                break;
            
            case "ArrowRight":
                x += moveAmount;
        }

        box.style.top = `${y}px`;
        box.style.left = `${x}px`
    }


});

document.addEventListener("keyup",event =>{
    box.style.backgroundColor = "lightblue";
    box.textContent = "😀"
});
--------------------------------------------------------------------------*/
/*const myButton = document.getElementById("myButton");
const img1 = document.getElementById("img1");

myButton.addEventListener("click",event =>{

    if(myButton.textContent === "Show"){
        img1.style.display = "block";
        myButton.textContent = "Hide"
    }
    else{
        img1.style.display = "none";
        myButton.textContent = "Show";
    }
    
});
-----------------------NODE LIST--------------------------------------------*/
/*let nodeList = document.querySelectorAll(".myButtons");
console.log(nodeList);

nodeList.forEach(button =>{
    button.style.backgroundColor = "green";
    button.textContent += "😒"
})

nodeList.forEach(button => {
    button.addEventListener("click",event =>{
        event.target.style.backgroundColor = "red";
    })
})

nodeList.forEach(button =>{
    button.addEventListener("mouseover",event =>{
        event.target.style.backgroundColor = "blue";
    })
})
nodeList.forEach(button =>{
    button.addEventListener("mouseout",event =>{
        event.target.style.backgroundColor = "green";
    })
})

const cr = document.createElement("button");

cr.textContent = "Button 5";
cr.classList = "myButtons";

document.body.appendChild(cr);
-------------------------------classList----------------------------------------*/
/*const myButton = document.getElementById("myButton");


myButton.addEventListener("mouseover",event =>{
    myButton.classList.toggle("hover");
})
myButton.addEventListener("mouseout",event =>{
    myButton.classList.toggle("hover");
}); */
/*
const myButton = document.getElementById("myButton");
myButton.classList.add("enabled");
myButton.addEventListener("click",event =>{
    if(event.target.classList.contains("disabled")){
        event.target.textContent += "😊"
    }
    else{
        myButton.classList.replace("enabled","disabled");
    }
}); */

/*
let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button =>{
    button.classList.add("enabled");
})

buttons.forEach(buttons =>{
    buttons.addEventListener("mouseover",event =>{
        event.target.classList.toggle("hover");
    })
})

buttons.forEach(buttons =>{
    buttons.addEventListener("mouseout",event =>{
        event.target.classList.toggle("hover");
    })
})

buttons.forEach(buttons =>{
    buttons.addEventListener("click",event =>{
        event.target.classList.replace("enabled","disabled");
    })
}) ---------------------------------------------------------*/
let choice = ["rock","paper","scissors"];
const buttons = document.querySelectorAll("button");
const playerScore1 = document.getElementById("playerScore");
const computerScore1 = document.getElementById("computerScore");
let platerScore = 0;
let computerScore = 0;

buttons.forEach(button =>{
    button.addEventListener("mouseover",event =>{
        event.target.classList.toggle("hover");
    });
});

buttons.forEach(button =>{
    button.addEventListener("mouseout",event =>{
        event.target.classList.toggle("hover");
    });
});

let playerMove = document.getElementById("playerMove");
let computerMove = document.getElementById("computerMove");
let result = document.getElementById("result");

function rock(playerChoice){
    playerMove.textContent = "Player: Rock";
    const computerChoice = choice[(Math.floor(Math.random()*3) + 1) -1];
    computerMove.textContent = `Computer: ${computerChoice}`;
    if(playerChoice === computerChoice){
        result.textContent = "It's a TIE!"
    }
    else if(playerChoice == "rock" && computerChoice == "paper"){
        result.textContent = "You LOST!!"
        computerScore += 1;
        console.log(computerScore);
    }
    else if(playerChoice == "rock" && computerChoice == "scissors"){
        result.textContent = "You WON!!"
        platerScore += 1;
    }
    
    playerScore1.textContent = `Player Score: ${platerScore}`;
    computerScore1.textContent = `Computer Score: ${computerScore}`;

}
function scissors(playerChoice){
    playerMove.textContent = "Player: Scissors";
    const computerChoice = choice[(Math.floor(Math.random()*3) + 1) -1];
    computerMove.textContent = `Computer: ${computerChoice}`;
    if(playerChoice === computerChoice){
        result.textContent = "It's a TIE!"
    }
    else if(playerChoice == "scissors" && computerChoice == "rock"){
        result.textContent = "You LOST!!";
        computerScore += 1;

    }
    else if(playerChoice == "scissors" && computerChoice == "paper"){
        result.textContent = "You WON!!"
        platerScore += 1;
    }

    playerScore1.textContent = `Player Score: ${platerScore}`;
    computerScore1.textContent = `Computer Score: ${computerScore}`;


}
function paper(playerChoice){
    playerMove.textContent = "Player: Paper";
    const computerChoice = choice[(Math.floor(Math.random()*3) + 1) -1];
    computerMove.textContent = `Computer: ${computerChoice}`;

    if(playerChoice === computerChoice){
        result.textContent = "It's a TIE!"
    }
    else if(playerChoice == "paper" && computerChoice == "rock"){
        result.textContent = "You WON!!";
        platerScore += 1;

    }
    else if(playerChoice == "paper" && computerChoice == "scissors"){
        result.textContent = "You LOST!!"
        computerScore += 1;
    }
    playerScore1.textContent = `Player Score: ${platerScore}`;
    computerScore1.textContent = `Computer Score: ${computerScore}`;

}





