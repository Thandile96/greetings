function greetings(){


    function greetMe() {
        if(radioButton.value === 'english') {
            "Hello, " + namesElement.value;
        }

        else if(radioButton.value === 'IsiXhosa'){
         "Molo, " + namesElement.value;
        }
    
        else if(radioButton.value === 'Sesotho'){
         "Lumela, " + namesElement.value;
        }
    }

    return {
        greetMe,
    }
}