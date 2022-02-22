class SoftwareEngineering {
    name;
    id;
    section;
    varsity = `Daffodil International University`;
    campus = 'Ashulia campus';
    purpose = 'An Software Engineering';
    programingLanguage = `c+, c#, java, php etc`;
    constructor(name, id, section) {
        this.name = name;
        this.id = id;
        this.section = section;
    }
    maintainGpa() {
        console.log(`${this.name} You will be get certificate when you will be pass all semester`);
    }
}

const sabbir = new SoftwareEngineering('sabbir hossain', `221-35-845`, 'A');
const farid = new SoftwareEngineering('Nur Hossain Farid', `221-35-843`, `A`);
const tareque = new SoftwareEngineering(`Tareque Ahmed`, `221-35-842`, `A`);
console.log(sabbir, farid, tareque);
sabbir.maintainGpa();
farid.maintainGpa();
tareque.maintainGpa();