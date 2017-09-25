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
        console.log(this.name+' has '+this.foodInTummy+' food left');
        console.log(this.name+' wants food!')
    }
    puke(){
        this.foodInTummy--;
        console.log(this.name+ " just threw up!")
        console.log(this.name+" has " +this.foodInTummy+ " food left!")
    }
    yawn(){
        this.restedness--;
        console.log(this.name+" is getting tired!")
        console.log(this.name+" has current restedness of: "+ this.restedness)
    }
}

//create new Tamagotchis
const newPet1 = new Pet("Bob");
const newPet2 = new Pet("Banana");
//test out your Tamagotchies below via console.logs
newPet1.cry();
newPet1.puke();
newPet1.yawn();
newPet2.cry();
