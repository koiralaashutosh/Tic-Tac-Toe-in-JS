let boxes = document.querySelectorAll(".box"); //done to access the class of all the 9 boxes 
let reset = document.querySelector("#reset");
let newGameBtn= document.querySelector("#newgame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#message")
let turnO = true;
//playerX, playerO
// if it is the turn of player X, then X is printed on the button and vice-versa

//2D arrays for storing the winning game conditions or pattern
//I calculated the patterns before (logical part)
const winPatterns= [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box)=> {
    box.addEventListener("click", ()=> {
        if(turnO === true){
            box.innerText = "O";
            turnO = "false";
        //new value set for turn O
        } else{
            box.innerText= "X";
            turnO= true;
        }
        box.disabled = true;
    //to disable the button once it is clicked

    checkWinner();
    })
})


const disableBoxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes){
        box.disabled = false;
    }
}

const showWinner = (winner) => {
    msg.innerText= `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
     for (let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val !="" && pos3Val!= ""){
            if (pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner", pos1Val);

                showWinner(pos1Val);
            }
        }
     }
};

const resetGame = () => {
    turnO= true;
    enableBoxes();
    boxes.forEach(box => {
        box.innerText = ""; // Reset text of each box
    }); //resets all the box value;
    msgContainer.classList.add("hide");
}

newGameBtn.addEventListener("click",resetGame);
reset.addEventListener("click", resetGame);
// adds an event listener to the "Reset" button (reset) so that when it is clicked, the resetGame function is called.