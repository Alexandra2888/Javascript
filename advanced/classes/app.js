//CLASSES


class Workshop {
    constructor(teacher) {
        this.teacher = teacher;
    }
    ask(question) {
        console.log(this.teacher, question);
    }
}

let markup = new Workshop("John");
console.log(typeof Workshop);

console.log(markup);

let js = new Workshop("Jane");
console.log(js);

markup.ask("teaches HTML???");
js.ask("teaches JS???");


// EXTENDS

class AnotherWorkshop extends Workshop {
    speakUp(msj) {
        this.ask(msj);
    }
}

let python = new AnotherWorkshop("Julian");
python.speakUp("teaches Python???");


//SUPER

class anotherWorkshop {
    ask(msj) {
        super.ask(msj);
    }
}

let react = new AnotherWorkshop("Trevor");
react.ask("teaches react???")