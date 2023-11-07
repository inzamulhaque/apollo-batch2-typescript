{
  // interface
  // idea
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  // real implementation
  class Car implements Vehicle1 {
    startEngine(): void {
      console.log("start");
    }

    stopEngine(): void {
      console.log("stop");
    }

    move(): void {
      console.log("moving...");
    }
    test() {
      console.log("testing");
    }
  }

  const car1 = new Car();
  car1.startEngine();
  car1.move();
  car1.stopEngine();
  car1.test();

  // abstract class

  // idea
  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test() {
      console.log(`I am just testing`);
    }
  }

  class ToyotaCar extends Car2 {
    startEngine(): void {
      console.log("I am starting the car  engine");
    }
    stopEngine(): void {
      console.log("I am stopping the car engine");
    }
    move(): void {
      console.log("I am moving  the car");
    }
  }

  const toyotaCar = new ToyotaCar()
  toyotaCar.startEngine()
}
