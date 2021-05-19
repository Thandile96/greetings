function greetings(){

    function greetMe(language, name) {
        if(language === 'english') {
            return "Hello, " + name;
        }

        else if(language === 'IsiXhosa'){
            return "Molo, " + name;
        }
    
        else if(language === 'Sesotho'){
            return "Lumela, " + name;
        }
    }

    // function errorMessages(language, name){

    //     if(name === ""){
    //         return "Please enter name";
    //     }

    //     if(language === undefined){
    //         return "Please select language";
    //     }

    // }


    return {
        greetMe,
        
        
    }
}