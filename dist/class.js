class cPerson {
    constructor(name, country, sex) {
        this.name = name;
        this.country = country;
        this.sex = sex;
    }
    run() {
        console.log(this.name + ' is running!');
    }
}
export default cPerson;
