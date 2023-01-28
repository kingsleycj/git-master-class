class telephoneDialer {
    constructor(){
        this.observers = new Set()
    }

    addPhoneNumber(observer){
        this.observers.add(observer)
    }
    
    removePhoneNumber(observer){
        this.observers.delete(observer)
    }

    dialPhoneNumber(observer){
        this.observers.forEach(observer)
    }
    
    notify(context){
        for (let observer of this.observers){
            observer.update(context)
        }
    }
}

class Observer {

}