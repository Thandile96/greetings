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

    describe("The first letter of the greeted name should be in uppercase", function(){
       it("should return a greeting with the first letter of the greeted name in uppercase", function(){
            let greetDisplay = greetings();

          assert.equal("Hello, Athi", greetDisplay.greetMe('English', 'athi'));

        }); 
        it("should return a greeting with the first letter of the greeted name in uppercase", function(){
            let greetDisplay = greetings();

          assert.equal("Hello, Lunathi", greetDisplay.greetMe('English', 'lUNATHI'));

        }); 
   
   
    });



    describe("It should increment the counter when user is greeted", function(){
        it("should increment the counter when a user is greeted", function(){
            let theCounter = greetings();

                theCounter.setName("Bulie");
                theCounter.setName("Lani");
                theCounter.setName("Athi");

            assert.equal(3, theCounter.counter());
        });
        
        it("should increment the counter when a user is greeted and should not count the same name morethan once", function(){
            let theCounter = greetings();

                theCounter.setName("Bulie");
                theCounter.setName("Lani");
                theCounter.setName("Athi");
                theCounter.setName("Athi")
                theCounter.setName("Athi");
                theCounter.setName("Lizzy");
                theCounter.setName("Athi");
                theCounter.setName("Luu");

            assert.equal(5, theCounter.counter());
        });

        describe("It should display error messages", function(){
           it("should display 'Please enter name' when a user has not entered name on text input box", function(){
               let errorDisplay = greetings();


               assert.equal("Please enter name!", errorDisplay.errorMsgs('English', ''));
          
            });

            it("should display 'Please select language' when a user has not selected a language", function(){
                let errorDisplay = greetings();
 
 
                assert.equal("Please select language!", errorDisplay.errorMsgs(null, 'Thandi'));
           
             });

            it("should display 'Please enter name and select language' when a user has not entered name and selected a language", function(){
                let errorDisplay = greetings();
 
 
                assert.equal("Please enter name and select language!", errorDisplay.errorMsgs(null, ''));
           
             });


        });


     });


});
