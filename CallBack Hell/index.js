// we have a sequence of action that has to perform and that action shoudl be in the sequence of logic
// 1) We have to select the team
//2) we have to play a game
// 3) we have to take review meeting

function review(){
    console.log("We are taking review meeting here");
}

function selection(){
    console.log("Doing team selection");
}

function playGame(){
    console.log("Plaing a matach");
}

api.worldCup('date',function(){
    selection("team",function(){
        playGame("matchDay",function (){
            review();
        });
    });
})

// above is the callback hell because it is diffcult to understand the code and read it