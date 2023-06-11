//syntactic sugar
class Instrutor {
    name;
    designation = 'web course Instructor'
    team = 'web team'
    location;

    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    startSupportSession(time) {
        console.log(`start thr support session at ${time}`)
    }
    createQuiz(module) {
        console.log(`please creatte quiz for module ${module}`)
    }
}
const amir = new Instrutor('amir', 'Dhaka');
console.log(amir);
amir.createQuiz(60);
amir.startSupportSession('9.00');
