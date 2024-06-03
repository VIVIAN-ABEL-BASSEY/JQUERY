$("h1").css("color","yellow")
jQuery("button").css("backgroundColor","green")
$('h1').addClass("big")
$('button').text('hey there!').addClass('small')
$('button').html("<p>click me</p>")
jQuery("a").attr("href","https://www.google.com").addClass("a")

// adding event listener to our button normal es6
// for (let i=0;i<5;i++){
//     document.querySelectorAll("button")[i].addEventListener('click', function(){
//         document.querySelector('h1').style.color ="purple"
//     })
// }

// using jQuery below to perform same task
$("button").click(function(){
    $("h1").css("color","purple")
})

// adding keypress event with jQuery
$("body").keypress(function(event){
    $("h1").text(event.key)
})
// adding keypress event with jQuery
$("body").keypress(function(event){
    $("input").text(event.key)
})

// using the .on() method
$("h1").on('mouseover',function(){
    $("h1").css('color','gray')
})
$("body").on('click',function(){
    $("button").css('color','orange')
})

