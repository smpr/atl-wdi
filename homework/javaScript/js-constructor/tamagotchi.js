console.log('tamagotchi file is loaded');

//your class declaration here
class Pet {
    constructor(){
        this.foodInTummy = 10;
        this.restedness = 10;
        this.health = 10;
    }
    cry(){
        this.foodInTummy--;
        console.log('food level '+this.foodInTummy);
        console.log('Feed me!')
    }
}

//create new Tamagotchis
const newPet1 = new Pet();
const newPet2 = new Pet();
//test out your Tamagotchies below via console.logs
newPet1.cry();
newPet2.cry();
