
    // get a referance to the greet me button
    var greetButtonElem = document.querySelector(".greetButton");
    var resetButtonElem = document.querySelector(".resetButton")
    var greetingsElement = document.querySelector(".greetings");
    var namesElement = document.querySelector(".names");

    var greetCountElement = document.querySelector(".greetCount");

    var namesGreeted = [];
    var greetingsCounter = 0;

    function greet(){
        var radioButton = document.querySelector("input[name='languages']:checked");
        // var unCheck = document.querySelector("input[name='languages']:checked") = false;
        //alert(radioButton.value)
        
        if(radioButton){

            if (namesGreeted[namesElement.value] === undefined){
              
                if(radioButton.value === 'english') {
                    
                    greetingsElement.innerHTML = "Hello, " + namesElement.value;
            
                    greetingsCounter++;
                    //add an entry for the user that was greeted in the Object Map
                    namesGreeted[namesElement.value] = 0;
                    //update the DOM to display the counter
                    greetCountElement.innerHTML = greetingsCounter;
                
                } 

                else if(radioButton.value === 'IsiXhosa') {
                        
                    greetingsElement.innerHTML = "Molo, " + namesElement.value;
            
                    greetingsCounter++;
                    namesGreeted[namesElement.value] = 0;
                    greetCountElement.innerHTML = greetingsCounter;
                }

                if(radioButton.value === 'Sesotho') {
                        
                    greetingsElement.innerHTML = "Lumela, " + namesElement.value;
            
                    greetingsCounter++;
                    namesGreeted[namesElement.value] = 0;
                    greetCountElement.innerHTML = greetingsCounter;
                }

            }

        }
        namesElement.value = "";
    
    }
    function unCheck(){
        var radioButton = document.querySelector("input[name='languages']:checked");

        radioButton.checked = false;

    }
    greetButtonElem.addEventListener('click',greet)
    greetButtonElem.addEventListener('click',unCheck)

    

       

    

        
          

        

