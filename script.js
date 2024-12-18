let boxes = document.querySelectorAll(".box");
let btn = document.querySelectorAll("#reset");
let newBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-cont");
let msg = document.querySelector("#msg");
let turnO = true;

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

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("Box was Clicked");
        if(turnO == true)
        {
            box.innerText = "O"
            turnO = false;
        }
        else
        {
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;
        checkwinner();
    })
});

const disableboxes = () =>{
    for(let box of boxes){
        box.disabled = true;
        box.innerText = ""; 
    }
}

const enableBoxes = () =>{
    for(box of boxes){
        box.disabled = false;

    }
}
const showwinner = (winner)=>{
    msg.innerText = `Congratulations , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
};
const checkwinner = () =>{
    for(let pattern of winPatterns)
    {
       
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;

        if(posval1!="" && posval2!="" & posval3!="")
        {
            if(posval1 == posval2 && posval2 == posval3)
            {
                console.log("winner",posval1);
                showwinner(posval1);
            }
        }
    }
};

newBtn.addEventListener("click",resetGame);
btn.addEventListener("click",resetGame );