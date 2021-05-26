function greetings(existNames){
    
    var greetedNames = existNames || [];

    function setName(name){

        if(!greetedNames.includes(name)){
            greetedNames.push(name)
        }
    }

    function getNames(){
        return greetedNames
    }

    function greetMe(language, name) {
        
        var named = name.toLowerCase()
        var index = named.charAt(0).toUpperCase();
        var del = named.slice(1)
        var name = index + del

        if(language === 'English') {
            return "Hello, " + name;
        }

        else if(language === 'IsiXhosa'){
            return "Molo, " + name;
        }
    
        else if(language === 'Sesotho'){
            return "Lumela, " + name;
        }


    }
 
    function counter(){
      return   greetedNames.length;
    }

    function errorMsgs(radioButton, namesElement){
        if(namesElement === "" &&  radioButton === null){
            return "Please enter name and select language!";
        }
        else if(namesElement !== "" && !radioButton){
            return "Please select language!";
        }
               
        else if(namesElement === "" && radioButton !== null){
            return "Please enter name!";
        }        
       
    }
    
    
    return {
        greetMe,
        setName,
        getNames,
        counter,
        errorMsgs
        
    }
}
