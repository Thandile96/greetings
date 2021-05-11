//Add some JavaScript that increments a counter and display the counter in the catsSpottedCounter div.
var catsSpotted = 0;
btn.addEventlistener('click', function(){
    catsSpotted++;
      //store how many times a cat was spotted
      localStorage['spotted'] = catsSpotted;
});

//Upon loading a page the spotted variable should be initialized from localStorage
var catsSpotted = 0;

if (localStorage['spotted']){
    // ensure catSpotted is a number
    catsSpotted = Number(localStorage['spotted']);
}

//Add a button to reset the greetings counter to 0.
// add a global variable
var namesGreeted = {};

//when the greet button is pressed check if this user was already greeted before
//by looking if the userName exists in namesGreeted if not increment this counter and update the screen
if (namesGreeted[userName] === undefined){
    greetingsCounter++;
    //add an entry for the user that was greeted in the Object Map
    namesGreeted[userName] = 0;
    //update the DOM to display the counter
    greetingsElem.innerHTML = greetingsCounter;
}