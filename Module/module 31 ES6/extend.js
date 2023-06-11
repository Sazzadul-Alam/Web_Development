class TeamMember {
    name;
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    provideFeedback() {
        console.log(`${this.name} thank you for your feedback.`)
    }
}

class Instrutor extends TeamMember {
    designation = 'web course Instructor'
    team = 'web team'


    constructor(name, location) {
        super(name, location);
    }
    startSupportSession(time) {
        console.log(`start thr support session at ${time}`)
    }
    createQuiz(module) {
        console.log(`please creatte quiz for module ${module}`)
    }


}

class Developer extends TeamMember {

    designation = 'web course Instructor'
    team = 'web team'
    tech;


    constructor(name, location, tech) {
        super(name, location);
        this.tech = tech;
    }
    developerFeature(feature) {
        console.log(`please develop the ${feature}`)
    }
    createQuiz(version) {
        console.log(`please relese the version ${version}`)
    }


}

class JobPlacement extends TeamMember {

    designation = 'Job placement'
    team = 'web team'
    region;

    constructor(name, location, region) {
        super(name, location);
        this.region = region;
    }
    startSupportSession(time) {
        console.log(`start thr support session at ${time}`)
    }
    createQuiz(module) {
        console.log(`please creatte quiz for module ${module}`)
    }
}

const alia = new Developer('Alia', 'Dhaka', 'React');
console.log(alia)
