
const buttons_word = document.querySelectorAll('.section.active button');
const input = document.querySelector("input")
const guess_button = document.querySelector(".Guess")
const false_buttons = document.querySelectorAll(".box_False_letters button")
const remaining_false_letters = document.querySelector(".remaining_false_letters")
const result_button = document.querySelector(".result_button")



// set a word randomly for buttons_word
const words = ["apple", "brush", "crane", "dream", "eagle", "flame", "grape", "house", "index", "jelly",
    "knife", "lemon", "mouse", "night", "ocean", "plant", "queen", "river", "stone", "tiger"];

// Pick a random word
const randomWord = words[Math.floor(Math.random() * words.length)];

buttons_word.forEach((btn , index)=>{
    btn.textContent = randomWord[index]
})

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
                btn.classList.add("filled")
                existence_letter = true
            }  
            
        })
        var number_fill = 0
        for (let i =0  ; i<buttons_word.length ; i++){
            btn = buttons_word[i]
            if (btn.classList.contains("filled")){
                number_fill++;
            }
        }
        console.log("the number of fill buttons :" , number_fill)
        // the level all letters are correct
        if (number_fill == buttons_word.length){
            result_button.style.display = "inline-block"
            result_button.textContent= "Next Level"
        }
        
        
        //collect false letters
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
        // the level the word could not be found
        if (remaining_false_letters.textContent === '0'){
            result_button.style.display = "inline-block"
            result_button.textContent= "Play again"
        }
    }
})


