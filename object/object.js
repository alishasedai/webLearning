// let obj ={
//     a: 1,
//     b: "Harry"
// }
// console.log(obj);

// let animal ={
//     eats: true
// };
// let rabbit = {
//     jumps : true
// }

// rabbit.__proto__ =animal;

class Animal{
    constructor (name){
        this.name = name;
        console.log("Object is created")
    }

    eats(){
        console.log("kha ra hoon")
    }
      jump(){
        console.log("kudd ra hoon")
    }

}


 class Lion extends Animal{
    constructor(name) {
        super(name);
        console.log(" object is created and he is a lion")

    }

    roar(){
        console.log("Lions roars");
    }
}
    let  c = new Animal("arzu");
    console.log(c)
    console.log(c.eats());
    console.log(c.jump())
    let lion = new Lion("Sinha");
    console.log(lion.name)
    console.log(lion.roar())
    lion.eats();
    lion.jump()