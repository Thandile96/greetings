describe("The greet function", function(){

    describe("It should greet a user in different languages", function(){
        it ("should greet a user in english when language selected is English", function(){
            let greetDisplay = greetings();

            assert.equal("Hello, Lee", greetDisplay.greetMe('English', 'Lee'));

        });

        it ("should greet a user in isiXhosa when language selected is isiXhosa", function(){
            let greetDisplay = greetings();
            
            assert.equal("Molo, Mel", greetDisplay.greetMe('IsiXhosa', 'Mel'));

        });


        it ("should greet a user in Sesotho when language selected is Sesotho", function(){
            let greetDisplay = greetings();
            
            assert.equal("Lumela, Mel", greetDisplay.greetMe('Sesotho', 'Mel'));

        });



    });
    describe("It should increment the counter when user is greeted", function(){
        it("the counter should increment when a user is greeted", function(){
            let greetCounter = greetings();
            
            greetCounter.greetMe("Lumela, Mel");
            greetCounter.greetMe("Hello, Akho");
            greetCounter.greetMe("Lumela, Hlumi");

            assert.deepEqual(3, greetCounter.counter(['Mel, Akho, Hlumi']))
        });
        

     });

    // describe("It should not return a greeting for a user that is greeted in lowercase", function(){

    // });



});
