const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido hoje? E oq eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas eu ajudei hoje?"
]

const ask = (index = 0) =>{
    process.stdout.write("\n\n" + questions[index] + " > ")
}

ask()

const answers = []
process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if(answers.length<questions.length){
        ask(answers.length)
    }else{
        console.log(answers)
        process.exit()}
    
})

process.on('exit', () =>{
    console.log(`
    Bacana Sandro!
    
    O que voce aprendeu hoje foi:
    ${answers[0]}

    O que te aborrecido hoje e você para melhorar é:
    ${answers[1]}

    O que te deixou feliz hoje:
    ${answers[2]}

    Voce ajudou ${answers[3]} pessoas hoje!

    Volta amanha para novas reflexoes!

    `)
})