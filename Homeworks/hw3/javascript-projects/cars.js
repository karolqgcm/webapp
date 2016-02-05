/**
 * Created by Karol on 2/5/2016.
 */
function Car(owner,make,model,year){
    this.owner = owner;
    this.make = make;
    this.model = model;
    this.year = year;

}

function Person(name,cars){
    this.name = name;
    this.cars = cars;
}
aline = new Person("Aline", []);
gary = new Person("Gary", []);
bob = new Person("Bob", []);
guilhermo = new Person("Guilhermo",[])
susan = new Person("Susan", []);
people = [gary,susan,bob,aline,guilhermo];

car1 = new Car(gary,"Chevy", "Volt", 2013);
gary.cars.push(car1);
car2 = new Car(susan, "Dodge", "Ram", 2009);
susan.cars.push(car2);
car3 = new Car(bob,"Tesla","X P90D",2016);
bob.cars.push(car3);
car4 = new Car(gary,"Toyota","Tacoma",2004);
gary.cars.push(car4);
car5 = new Car(bob,"Ford","Mustang",2014);
bob.cars.push(car5);
car6 = new Car(aline,"Subaru","Forester",2007);
car7 = new Car(bob,"Audi","TT",2012);
bob.cars.push(car7);
car8 = new Car(susan,"Toyota","Camry",1995);
susan.cars.push(car8);
car9 = new Car(aline,"Ford","Taurus",1998);
aline.cars.push(car9);
car10 = new Car(aline,"BMW","M4",2011);
aline.cars.push(car10);
car11 = new Car(guilhermo,"Acura","TL",2009);
guilhermo.cars.push(car11);



for(var p = 0; p< people.length;p++){
    for(var c = 0; c<people[p].cars.length;c++){
        console.log("%s owns a %s model %s, year  %s",people[p].name,people[p].cars[c].make,people[p].cars[c].model, people[p].cars[c].year + ".")
    }
}