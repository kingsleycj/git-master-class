class Vehicle {
    constructor(name){
        this.name = name;
    }

    start(){
        return `Voom!!!`
    }
}

const ford = new Vehicle("ford")
const mercedes = new Vehicle("mercedes")
