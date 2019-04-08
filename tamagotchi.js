function DigitalPal(hungry, sleepy, bored, age) {
  this.hungry = false;
  this.sleepy = false;
  this.bored = true;
  this.age = 0;
  this.feed = function() {
    if (this.hungry) {
      console.log('That was yummy');
      this.hungry = false;
      this.sleepy = true;
    } else {
      console.log("No thanks I'm full");
    }
    console.log(this);
  };
  this.sleep = function() {
    if (this.sleepy) {
      console.log('Zzzzzz');
      this.sleepy = false;
      this.bored = true;
      increaseAge();
    } else {
      console.log("I'm freakin tired");
    }
  };
  this.play = function() {
    if (this.bored) {
      console.log("Yay let's play");
      this.bored = false;
      this.hungry = true;
    } else {
      console.log('Now now. But later?');
    }
  };
  this.increaseAge = function() {
    this.age++;
    console.log(`Happy birthday to me. I am ${this.age} years old`);
  };
}

let pok = new DigitalPal();

pok.feed();
pok.sleep();
pok.increaseAge();
