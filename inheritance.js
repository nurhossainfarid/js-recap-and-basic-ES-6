// common task
class CommonTask {
    name;
    id;
    section;
    varsity = `Daffodil International University`;
    campus = 'Ashulia campus';
    programingLanguage = `c+, c#, java, php etc`;
    purpose;
    constructor(name, id, section, purpose) {
        this.name = name;
        this.id = id;
        this.section = section;
        this.purpose = purpose;
    }
}

class GeneralStudent extends CommonTask {
    maintainGpa() {
        console.log(`${this.name} You will be get certificate when you will be pass all semester`);
    }
}

class ClassRepresentative extends CommonTask {
    specification = `Control the class and representative the class`;
    crPosition;
    constructor(name, id, section, purpose, crPosition) {
        super(name, id, section, purpose);
        this.crPosition = crPosition;
    }
    maintainGpa() {
        console.log(`${this.name} You will be get certificate when you will be pass all semester`);
    }
}

class teacher extends CommonTask {
    subject;
    constructor(name, id, section, purpose, subject) {
        super(name, id, section, purpose);
        this.subject = subject;
    }
}
const farid = new GeneralStudent(`Nur Hossain Farid`, `221-35-843`, `A`, `An software Engineering`)
const siam = new ClassRepresentative(`siam hasan`, `221-35-1032`, `A`, `An software Engineering`, `Main-CR`);
const kbb = new teacher(`KBB`, `15`, `A`, `Lecturer`, `Computer Fundamental`)
console.log(kbb);
// farid.maintainGpa();