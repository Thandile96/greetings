
    // get a referance to the greet me button
    var greetButtonElem = document.querySelector(".greetButton");
    var greetingsElement = document.querySelector(".greetings");
    var namesElement = document.querySelector(".names");

    var greetCountElement = document.querySelector(".greetCount");

    var namesGreeted = {};
    var greetingsCounter = 0;

    function greet(){
        var radioButton = document.querySelector("input[name='languages']:checked");
        //alert(radioButton.value)
    
        if(radioButton){

            if(radioButton.value === 'english') {
                greetingsElement.innerHTML = "Hello, " + namesElement.value;
                greetingsCounter++;
                greetCountElement.innerHTML = greetingsCounter;
            }

            else if(radioButton.value === 'IsiXhosa'){
                greetingsElement.innerHTML = "Molo, " + namesElement.value;
                greetingsCounter++
                greetCountElement.innerHTML = greetingsCounter;
            }

            else if(radioButton.value === 'Sesotho'){
                greetingsElement.innerHTML = "Lumela, " + namesElement.value;
                greetingsCounter++;
                greetCountElement.innerHTML = greetingsCounter;
            }
        }

    
    }
    greetButtonElem.addEventListener('click',greet)

       

    

        
          

        

