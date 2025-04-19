
let section_level =0
const sections = document.querySelectorAll('.section')
let buttons_word = document.querySelectorAll('.section button');
const input = document.querySelector("input")
const guess_button = document.querySelector(".Guess")
const false_buttons = document.querySelectorAll(".box_False_letters button")
let remaining_false_letters = document.querySelector(".remaining_false_letters")
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


clear_box_false_letters = () =>{

    // hide result button at the bottom of page
    result_button.style.display = "none"

    // update the number of false letters 
    remaining_false_letters.textContent = "11"

    false_buttons.forEach(btn=>{
        btn.classList.remove("appeared")
        btn.textContent = ""
    })
}

choosing_word_level = ()=>{
 
    clear_box_false_letters()

    if (section_level == 0){

        // clear all false letters from previous level
        console.log("section level is : " , section_level)
        buttons_word = document.querySelectorAll("#word1 button")

        const randomWord = words_level1[Math.floor(Math.random() * words_level1.length)];   

        buttons_word.forEach((btn , index)=>{
            btn.textContent = randomWord[index]
            btn.classList.remove("filled")
        })
    }
    if(section_level == 1){

        // clear all false letters from previous level
        
        console.log("section level is : " , section_level)
        buttons_word = document.querySelectorAll("#word2 button")

        const randomWord2 = words_level2[Math.floor(Math.random() * words_level2.length)];

        buttons_word.forEach((btn , index)=>{
            btn.textContent = randomWord2[index]
            btn.classList.remove("filled")
        })
    }
    if(section_level == 2){

        // clear all false letters from previous level
        clear_box_false_letters()

        console.log("section level is : " , section_level)
        buttons_word = document.querySelectorAll("#word3 button")

        const randomWord3 = words_level3[Math.floor(Math.random() * words_level3.length)];
        
        buttons_word.forEach((btn , index)=>{
            btn.textContent = randomWord3[index]
            btn.classList.remove("filled")
        })
    }
    if(section_level == 3){

        // clear all false letters from previous level
        clear_box_false_letters()
        console.log("section level is : " , section_level)
        buttons_word = document.querySelectorAll("#word4 button")

        const randomWord4 = words_level4[Math.floor(Math.random() * words_level4.length)];


        buttons_word.forEach((btn , index)=>{
            btn.textContent = randomWord4[index]
            btn.classList.remove("filled")
        })
    }
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
        console.log("the length of buttons_word :" , buttons_word.length)
        guess_value = input.value.trim().toLowerCase()  // the letter we guess

        buttons_word.forEach(btn =>{
            letter = btn.textContent.trim().toLowerCase()

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
        // the level the word is found - win level logic
        if (number_fill == buttons_word.length && section_level<3){
            result_button.style.display = "inline-block"
            result_button.textContent= "Next Level"
        }
        if (number_fill == buttons_word.length && section_level==3) {
            result_button.style.display = "inline-block"
            result_button.textContent= "EndGame"
            result_button.style.color = "green"
        }
        
        
        //collect false letters
        if(existence_letter==false){
            for (let i=0 ; i<false_buttons.length ;i++) {
                btn = false_buttons[i]
                if (btn.textContent===""){
                    // Update the number of remaining false letters
                    remaining_false_letters.textContent--;
                    // show the false letter
                    btn.classList.add("appeared")
                    btn.textContent = guess_value;
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
    
    for (let i =0 ; i<sections.length ; i++) {
        const section = sections[i]

        //find active section
        if (!section.classList.contains('hidden')){

            section_level = i
            if (result_button.textContent === "Play Again"){
                console.log("losing level")
                choosing_word_level()
            }
            else if (result_button.textContent === "Next Level"){
                section.classList.add("hidden")
                section_level++
                if (section_level <=3){
                    const nextSection = sections[section_level]
                    if(nextSection){
                        console.log("nextSection appeared")
                        nextSection.classList.remove("hidden")
                        choosing_word_level()
                    }
                }
            }
            break
        } 
    }
})




