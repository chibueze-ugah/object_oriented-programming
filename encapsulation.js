//implementing the encapsulation principle in OOP//

class Animalkingdom {
  constructor(name, gender) {
    this._name = name;
    this.gender = gender;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  getgender() {
    return `User age is ${this.gender}`;
  }
}

const withbackbone = new Animalkingdom ('fish, Amphibia, Reptiles, Aves, Mamals', 24);

const withoutBackbone = new Animalkingdom ('Anthropoda');

console.log(withbackbone.name);

Animalkingdom.name = 'fish, Amphibia, Reptiles, Aves, Mammals';

console.log(withoutBackbone.name);

class cold_blooded extends Animalkingdom {
    constructor(name,gender){
        super(name, gender)
        this.cold_blooded = cold_blooded;
    }
} 
//differntiating//

const cold_blooded = new cold_blooded ('cold_blooded'[
    'Anthropoda', 'fish', 'Amphibia', 'Reptiles'
]);

console.log(Animalkingdom.name);

class warm_blooded extends Animalkingdom {
    constructor(name,gender){
        super(name, gender)
        this.warm_blooded = warm_blooded;
    }
} 

const warm_blooded = new warm_blooded ('warm_blooded'[
    'Aves', 'mamals'
]);

console.log(Animalkingdom.name);

