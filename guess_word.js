
const buttons = document.querySelectorAll('.section.active button');
const input = document.querySelector("input")
const guess_button = document.querySelector(".Guess")
const false_buttons = document.querySelectorAll(".box_False_letters button")

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
        console.log("guess : " , input.value)
        guess_value = input.value.trim().toLowerCase()  // the letter we guess
        buttons.forEach(btn =>{
            letter = btn.textContent.trim().toLowerCase()
            console.log("the letter is " , letter)
            console.log(guess_value === letter)
            // compare the letter we enter with the letters inside buttons
            if (letter === guess_value){
                btn.style.color = "black"
                existence_letter = true
            }  
        })
        false_buttons.forEach(btn=>{
            if (btn.textContent ==""){
                btn.textContent = guess_value
                btn.style.color = "red"
                btn.style.borderBottom = "1px solid red"
            }
        })
    }
})


