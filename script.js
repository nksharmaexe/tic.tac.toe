let boxes = document.querySelectorAll(".box");
// console.log(boxes);
let newBtn = document.querySelector(".newGame");
let resetBtn = document.querySelector(".resetGame");
let turnX = true;

let winner = document.querySelector(".winner");


// console.log(resrtBn);

let count=0;
const resetGame = ()=>{
    turnX = true;
    anableBoxes();
    winner.innerText = ``;

}


const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        count++;
        if(turnX){
            box.innerText = "X";
            turnX = false;
            
        }else{
            box.innerText = "O"
            turnX = true;
        }
        box.disabled = true;
        
        if(count==9){
            winner.innerText = "Match Draw";
        }

        checkWinner();
    });
});

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const anableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const vibrate = ()=>{
    if(navigator){
        navigator.vibrate(2000);
    }
}

const checkWinner = ()=>{
    for( let pattern of winPatterns){
        let pos1Val  = boxes[pattern[0]].innerText;
        let pos2Val  = boxes[pattern[1]].innerText;
        let pos3Val  = boxes[pattern[2]].innerText;

        if(pos1Val !="" || pos2Val !="" || pos3Val !=""){
            if(pos1Val == pos2Val && pos2Val ==pos3Val){
                winner.innerText = `Winner is ${pos1Val} 🎉`;
                vibrate();
                disableBoxes();
            }
        }
    }
}

// newBtn.addEventListener("click",()=>{
//     resetGame();
// });

resetBtn.addEventListener("click",()=>{
    resetGame();
});