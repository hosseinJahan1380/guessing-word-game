
let section_level =0
const sections = document.querySelectorAll('.section')
const buttons_word = document.querySelectorAll('.section button');
const input = document.querySelector("input")
const guess_button = document.querySelector(".Guess")
const false_buttons = document.querySelectorAll(".box_False_letters button")
const remaining_false_letters = document.querySelector(".remaining_false_letters")
const result_button = document.querySelector(".result_button")



// set a word randomly for buttons_word
const words_level1 = ["apple", "brush", "crane", "dream", "eagle", "flame", "grape", "house", "index", "jelly",
    "knife", "lemon", "mouse", "night", "ocean", "plant", "queen", "river", "stone", "tiger"];

const words_level2 = [
    "picture", "journey", "promise", "battery", "kingdom", "cabinet", "freedom",
    "monster", "library", "weather", "plastic", "digital", "natural", "glasses",
    "teacher", "forever", "company", "history", "gravity", "husband", "respect",
    "station", "diamond"
    ];
    
const words_level3 = [
    "game", "book", "love", "tree", "moon", "fish", "fire", "door",
    "wolf", "rain", "milk", "rock", "wind", "snow", "frog", "hand",
    "coin", "bell", "gold", "ship", "note", "road", "flag"
    ];
    
const words_level4= [
    "cat", "dog", "sun", "car", "hat", "box", "pen", "cup",
    "man", "map", "toy", "bag", "fan", "net", "key", "bus",
    "egg", "bed", "lip", "bat", "cow", "owl", "pot"
    ];
// Pick a random word
const randomWord = words_level1[Math.floor(Math.random() * words_level1.length)];
const randomWord2 = words_level2[Math.floor(Math.random() * words_level2.length)];
const randomWord3 = words_level3[Math.floor(Math.random() * words_level3.length)];
const randomWord4 = words_level4[Math.floor(Math.random() * words_level4.length)];

choosing_word_level = ()=>{
    buttons_word.forEach((btn , index )=>{
        if (section_level == 0){
            console.log("section level is : " , section_level)
            btn.textContent = randomWord[index]
        }
        if(section_level == 1){
            console.log("section level is : " , section_level)
            btn.textContent = randomWord2[index]
        }
        if(section_level == 2){
            console.log("section level is : " , section_level)
            btn.textContent = randomWord3[index]
        }
        if(section_level == 3){
            console.log("section level is : " , section_level)
            btn.textContent = randomWord4[index]
        }
    })
}
choosing_word_level()


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
        console.log("buttons_word length :" , buttons_word.length)
        // the level the word is found - win level logic
        if (number_fill == buttons_word.length){
            result_button.style.display = "inline-block"
            result_button.textContent= "Next Level"
        }
        
        
        //collect false letters
        if(existence_letter==false){
            for (let i=0 ; i<false_buttons.length ;i++) {
                btn = false_buttons[i]
                if (btn.textContent===""){
                    // Update the number of remaining false letters
                    remaining_false_letters.textContent--;
           
                   
                    btn.textContent = guess_value;
                    btn.style.color = "red";
                    btn.style.borderBottom = "1px solid red";
                    break;
                }
            }
        }
        // the level the word is not found - lose level logic
        if (remaining_false_letters.textContent === '0'){
            result_button.style.display = "inline-block"
            result_button.textContent= "Play Again"
        }
    }
})
// press button next to guess another word -win level
result_button.addEventListener("click" , ()=>{
    
    sections.forEach((section ,index )=>{
       
        //find active section
        if (!section.classList.contains('hidden')){
        
            if (result_button.textContent === "Play Again"){
                section_level = index
                console.log("losing level")
            }
            else if (result_button.textContent === "Next Level"){
                section_level = index
                section.classList.add("hidden")

                const nextSection = sections[section_level+1]
                if(nextSection){
                    console.log("nextSection appeared")
                    nextSection.classList.remove("hidden")
                }
            }
        } 
    })
})




