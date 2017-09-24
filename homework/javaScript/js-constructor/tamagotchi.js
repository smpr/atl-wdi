console.log('tamagotchi file is loaded');

//your class declaration here
class Pet {
    constructor(name){
        this.name= name;
        this.foodInTummy = 10;
        this.restedness = 10;
        this.health = 10;
    }
    cry(){
        this.foodInTummy--;
        console.log(this.name+' has this('+this.foodInTummy+') much food left');
        console.log(this.name+' wants food!')
    }
}

//create new Tamagotchis
const newPet1 = new Pet("Bob");
const newPet2 = new Pet("Banana");
//test out your Tamagotchies below via console.logs
newPet1.cry();
newPet2.cry();
