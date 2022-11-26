/* possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userchoice = e.target.id;
    userChoiceDisplay.innerHTML = userchoice

}));  */
let b;
let a;
let user;
function replyclick(a) {
    document.getElementById('user-choice').innerHTML = a;
    let user = a;
    let reslt = ['rock', 'paper', 'scissor'];
    let b = (reslt[Math.floor(Math.random() * 3)])
    document.getElementById('computer-choice').innerHTML = b;
    let comp=b;
    if (user == comp) {
        document.getElementById("result").innerHTML="Tie Game!";
        /* window.alert("Tie Game!") */
    }
    else if (user=="rock" & comp=="paper" | user=="paper" & comp=="scissor" | user=="scissor" & comp=="rock" ){
        document.getElementById("result").innerHTML="You loose!";
        /* window.alert("You loose!") */
    }
    else{
        document.getElementById("result").innerHTML="You Win!";
        /* window.alert("You Win!") */
    }
    document.getElementById("result-window").setAttribute("class", "result")
}

