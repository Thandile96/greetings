function greetings(){
    

    function greetMe(language, name) {
        
        var named = name.toLowerCase()
        var index = named.charAt(0).toUpperCase();
        var del = named.slice(1)
        var name = index + del
      
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

    return {
        greetMe,
        
    }
}