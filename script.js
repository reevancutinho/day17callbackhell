
let displayMessage=(newtext,time,nextCallback)=>{
    setTimeout(()=>{//This is an inbuilt function in javascript used to evaluate a function after given interval of time
    //we will get countdown and message from calling functionand we will set to id text
    document.getElementById('text').innerHTML=newtext;
    nextCallback();
    },time)//here time specifies, the time needed to wait until next function will get executed
}


//Here we are passing function as a parameter to other function until we reach the message Happy independance day
displayMessage("10",1000,()=>{
    displayMessage("9",1000,()=>{
        displayMessage("8",1000,()=>{
            displayMessage("7",1000,()=>{
                displayMessage("6",1000,()=>{
                    displayMessage("5",1000,()=>{
                        displayMessage("4",1000,()=>{
                            displayMessage("3",1000,()=>{
                                displayMessage("2",1000,()=>{
                                    displayMessage("1",1000,()=>{
                                        //Here the final message will be passed to the display function
                                        displayMessage("Happy Independence Day",1000,()=>{

                                        });
                                    });
                                });
                            });
                        });
                    });
                }) ; 
            });

    });

    });
});