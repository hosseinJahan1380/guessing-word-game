
const buttons_word = document.querySelectorAll('.section.active button');
const input = document.querySelector("input")
const guess_button = document.querySelector(".Guess")
const false_buttons = document.querySelectorAll(".box_False_letters button")
const remaining_false_letters = document.querySelector(".remaining_false_letters")
const next_level_button = document.querySelector(".next")

// enter a character to guess
input.addEventListener( "input", ()=>{
    if (input.value.length>1){
        input.value = input.value.charAt(0)
    }
})

// revive a character from input
guess_button.addEventListener("click" , ()=>{
    existence_letter = false;
    if ( input.value !="" ){
        guess_value = input.value.trim().toLowerCase()  // the letter we guess

        buttons_word.forEach(btn =>{
            letter = btn.textContent.trim().toLowerCase()

            console.log(guess_value === letter)
            // compare the letter we enter with the letters inside buttons
            if (letter === guess_value){
                btn.style.color = "#333"
                btn.style.backgroundColor = "#fff"
                existence_letter = true
            }  
            
        })
        var number_fill = 0
        for (let i =0  ; i<buttons_word.length ; i++){
            btn = buttons_word[i]
            if (btn.style.color==="#333"){
                number_fill++;
            }
        }
        console.log("the number of fill buttons :" , number_fill)
        // check if all buttons word are fill or not
        if (number_fill == buttons_word.length){
            next_level_button.style.display = "inline-block"
        }
        
        if(existence_letter==false){
            for (let i=0 ; i<false_buttons.length ;i++) {
                btn = false_buttons[i]
                if (btn.textContent===""){
                    console.log("no letter")
                    // Update the number of remaining false letters
                    remaining_false_letters.textContent--;
           
                   
                    btn.textContent = guess_value;
                    btn.style.color = "red";
                    btn.style.borderBottom = "1px solid red";
                    break;
                }
            }
        }
    }
})


