const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const winningScoreSelect = document.querySelector('#playto');
const sets = document.querySelector('#sets');
const p1Won = document.querySelector("#p1Won");
const p2Won = document.querySelector("#p2Won");

let p1Score = 0;
let p2Score = 0;
let p1Sets = 0;
let p2Sets = 0;
let winningScore =11;
let noOfSets =3;
let isGameOver = false;
let isMatchOver = false;
let winningScore_copy = winningScore;

p1Button.addEventListener('click',function(){
    if(!isMatchOver){
        if(!isGameOver){
        
            p1Score+=1;
            if(p1Score === (winningScore - 1) && p2Score === (winningScore - 1)){
                winningScore += 1;    
            }else{
                if(p1Score === winningScore){
                    isGameOver = true;
                    p1Display.classList.add('winner');
                    p2Display.classList.add('loser');
                    // p1Button.disabled = true;
                    // p2Button.disabled = true;
                    p1Sets += 1;
                    p1Won.innerHTML = p1Sets;
                    if(checkSets()){
                        p1Button.disabled = true;
                        p2Button.disabled = true;
                    }else{
                        p1Score = 0;
                        p2Score = 0;
                        winningScore = winningScore_copy;
                        p1Display.textContent = 0;
                        p2Display.textContent = 0;
                    }
                }
            }
            
            p1Display.textContent = p1Score; 
        }       
    }
    
})

p2Button.addEventListener('click',function(){
    if(!isMatchOver){
        if(!isGameOver){
            p2Score+=1;
            if(p1Score === (winningScore - 1) && p2Score === (winningScore - 1)){
                winningScore += 1;
            }else{
                if(p2Score === winningScore){
                    isGameOver = true;
                    p2Display.classList.add('winner');
                    p1Display.classList.add('loser');
                    // p1Button.disabled = true;
                    // p2Button.disabled = true;
                    p2Sets += 1;
                    p2Won.innerHTML = p2Sets;
                    if(checkSets()){
                        p1Button.disabled = true;
                        p2Button.disabled = true;
                    }else{
                        p1Score = 0;
                        p2Score = 0;
                        winningScore = winningScore_copy;
                        p1Display.textContent = 0;
                        p2Display.textContent = 0;
                    }
                }
            }
            p2Display.textContent = p2Score; 
        } 
    }      
})


function checkSets(){
    let max_set = Math.max(p1Sets, p2Sets)
    if((p1Sets + p2Sets) === noOfSets || (noOfSets - max_set) < max_set){
        isMatchOver = true;
        if(p1Sets > p2Sets){
            alert("Player 1 is the winner");
        }else{
            alert("Player 2 is the winner");
        }
        return true;
    }else{
        isGameOver = false;
        p1Display.classList.remove('winner','loser');
        p2Display.classList.remove('winner','loser');
        return false;
    }
}

winningScoreSelect.addEventListener('change',function(){
    winningScore = parseInt(this.value);
    winningScore_copy = winningScore;
    // reset();
})

sets.addEventListener('change',function(){
    noOfSets = parseInt(this.value);
    // reset();
})

resetButton.addEventListener('click',reset)


function reset(){
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Sets = 0;
    p2Sets = 0;
    p1Won.textContent = 0;
    p2Won.textContent = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('winner','loser');
    p2Display.classList.remove('winner','loser');
    p1Button.disabled = false;
    p2Button.disabled = false;
    window.location.reload();
}