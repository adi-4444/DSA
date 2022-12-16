var teacher = "Adi";
function askQuestion(question) {
    console.log(this.teacher, question);
}

let obj = {
    teacher: 'Ram',
    ask: askQuestion
}

obj.ask("what is closure ?");

let obj1 = {
    ask: askQuestion
}
obj1.ask("what is JS?")