// alert("i'm active")
// $("h1").css("color","red")
let buttonColours =["red", "blue", "green", "yellow"]
let gamePattern =[]
function nextSequence(){
     alert("fun")
    let randomNumber = Math.floor(Math.random()*4)
    let randomChosenColour = buttonColours[randomNumber]
      console.log(randomChosenColour)
    gamePattern.push(randomChosenColour)
    // console.log(gamePattern)
    $("button#red").css('background-color',"black")
    // $("div#randomChosenColour").on("click",function(){
    //     $("div#randomChosenColour").css('background-color',"black")
    // }
    // )
}

nextSequence()