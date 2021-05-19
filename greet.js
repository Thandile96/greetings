    var greetButtonElem = document.querySelector(".greetButton");
    var resetButtonElem = document.querySelector(".resetButton")
    var greetingsElement = document.querySelector(".greetings");
    var namesElement = document.querySelector(".names");

    var greetCountElement = document.querySelector(".greetCount");
    var messageElement = document.querySelector(".message")
    var namesGreeted = [];
    var greetingsCounter = 0;
    
    var greetInstance = greetings();
    
    function greet(){
        var radioButton = document.querySelector("input[name='languages']:checked");
        
        
        if(radioButton){
            greetingsElement.innerHTML = greetInstance.greetMe(radioButton.value, namesElement.value);
        }
        
        if (namesGreeted[namesElement.value] === undefined){
            greetingsCounter++;
            //add an entry for the user that was greeted in the Object Map
            namesGreeted[namesElement.value] = 0;
            //update the DOM to display the counter
            greetCountElement.innerHTML = greetingsCounter;
        }
        namesElement.value = "";
        
     
    }
   

    // function error(){
    //     messageElement.innerHTML  = greetInstance.errorMessages(namesElement.value);

    // }
   
    function unCheck(){
        var radioButton = document.querySelector("input[name='languages']:checked");

        radioButton.checked = false;

    }
    greetButtonElem.addEventListener('click',greet)
    greetButtonElem.addEventListener('click',unCheck)

    

       

    

        
          

        

