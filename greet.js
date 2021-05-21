    var greetButtonElem = document.querySelector(".greetButton");
    var resetButtonElem = document.querySelector(".resetButton")
    var greetingsElement = document.querySelector(".greetings");
    var namesElement = document.querySelector(".names");
    
    var greetCountElement = document.querySelector(".greetCount");
    var messageElement = document.querySelector(".message")
    var namesGreeted = [];
    var greetingsCounter = 0;
    
    var greetInstance = greetings();

    //set the counter to equal to the value in localStorage

    if(localStorage['counter']){
        greetingsCounter = localStorage['counter']; //equal to the value of localStorage counter
        greetCountElement.innerHTML = greetingsCounter;

    }
    
    function greet(){
        var radioButton = document.querySelector("input[name='languages']:checked");

        if(namesGreeted.includes(namesElement.value)){
            greetingsElement.innerHTML = greetInstance.greetMe(radioButton.value, namesElement.value);
            return;
        }
        
        if(namesElement.value){
            if(radioButton !== null){
                greetingsElement.innerHTML = greetInstance.greetMe(radioButton.value, namesElement.value);
                namesGreeted.push(namesElement.value)
            }
            else{
                messageElement.innerHTML = ("Please select language!");
                return;
            }
        }
        else if(namesElement.value == '' && radioButton !== null){
            messageElement.innerHTML =  ("Please enter name!");
            return;
        }
        else{
            messageElement.innerHTML =  ("Please enter name and select language!");
            return;
        }
    

        if (namesGreeted[namesElement.value] === undefined){
            greetingsCounter++;
            
            //update the DOM to display the counter
            greetCountElement.innerHTML = greetingsCounter;
            localStorage['counter'] = greetingsCounter;
        }
        namesElement.value = "";
        
        
    }

    function unCheck(){
        var radioButton = document.querySelector("input[name='languages']:checked");

        radioButton.checked = false;

    }
    greetButtonElem.addEventListener('click',greet)
    greetButtonElem.addEventListener('click',unCheck)

    function resetCounter(){
        greetingsCounter = 0;
        localStorage['counter'] = greetingsCounter;
        greetCountElement.innerHTML = greetingsCounter;

    }
    resetButtonElem.addEventListener('click',resetCounter)
    

       

    

        
          

        

