let allQuestions = []
let newQuestion
if(localStorage.saved_questions){
    allQuestions = JSON.parse(localStorage.getItem("saved_questions"))
}
let setQuestion = () =>{
    alert()
    if(mcQuestion.value != "" && mcAnswer.value != "" && mcoption_a.value != "" && mcoption_b.value != "" && mcoption_c.value != "" && mcoption_d.value != ""){
        console.log("not empty")
        newQuestion = {
            n_question: mcQuestion.value,
            n_answer: mcAnswer.value,
            first_option: mcoption_a.value,
            second_option: mcoption_b.value,
            third_option: mcoption_c.value,
            fourth_option: mcoption_d.value
        }
        allQuestions.push(newQuestion)
        // question.value = ""
        // answer.value = ""
        // option_a.value = ""
        // option_b.value = ""
        // option_c.value = ""
        // option_d.value = ""
        console.log(allQuestions)
        localStorage.setItem("saved_questions", JSON.stringify(allQuestions))
    }
    else{
        console.log("Empty");
    }
}
// let test = () =>{
//     allQuestions.filter((value,index,array) =>{
//         let random_value = array[Math.floor(Math.random() * array.length)]
//         console.log(value, random_value)
//         if (random_value == value) {
//             alert()
//             // console.log(value, random_value)
//             random_value = array[Math.floor(Math.random() * array.length)]
//             // console.log(value, random_value);
//         }       
//     })
// }