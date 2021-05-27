var greetButtonElem = document.querySelector(".greetButton");
var resetButtonElem = document.querySelector(".resetButton")
var greetingsElement = document.querySelector(".greetings");
var namesElement = document.querySelector(".names");

var greetCountElement = document.querySelector(".greetCount");
var messageElement = document.querySelector(".message")
var existingNames;


//set the counter to equal to the value in localStorage

if(localStorage['name']){
    existingNames = JSON.parse(localStorage['name']); //equal to the value of localStorage counter

}

var greetInstance = greetings(existingNames);

greetCountElement.innerHTML = greetInstance.counter();

function errors(){

    var checkedRadioButton = document.querySelector("input[name='languages']:checked");

    // if (namesElement.value !== "" && checkedRadioButton !== false){
    //     namesElement.value = "";           
    // }
    if(namesElement.value === "" &&  !checkedRadioButton){
        messageElement.innerHTML = greetInstance.errorMsgs(checkedRadioButton, namesElement.value);
        setTimeout(function(){
            messageElement.innerHTML = "";
            namesElement.value = "";
        }, 1700)
    }
    else if(namesElement.value !== "" && !checkedRadioButton){
        messageElement.innerHTML = greetInstance.errorMsgs(checkedRadioButton, namesElement.value);
        setTimeout(function(){
            messageElement.innerHTML = "";
            namesElement.value = "";
        }, 1700)

    }
    else if(namesElement.value === "" && checkedRadioButton !== ""){
        messageElement.innerHTML = greetInstance.errorMsgs(checkedRadioButton.value, namesElement.value);
        setTimeout(function(){
            messageElement.innerHTML = "";
            namesElement.value = "";
        }, 1700)
        checkedRadioButton.checked = false;
    }

}
greetButtonElem.addEventListener('click', errors)

function greet(){
    var checkedRadioButton = document.querySelector("input[name='languages']:checked");
    
    if(namesElement.value){
        if(checkedRadioButton){
            greetingsElement.innerHTML = greetInstance.greetMe(checkedRadioButton.value, namesElement.value);
            greetInstance.setName(namesElement.value)
        }
        checkedRadioButton.checked = false;
        namesElement.value = "";
    }
    //update the DOM to display the counter
    greetCountElement.innerHTML = greetInstance.counter();
    localStorage['name'] = JSON.stringify(greetInstance.getNames()); 
    
}

greetButtonElem.addEventListener('click', greet)


function resetCounter(){
    
    localStorage.clear()
    location.reload()

}
resetButtonElem.addEventListener('click',resetCounter)